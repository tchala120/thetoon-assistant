import { useQuery } from '@tanstack/react-query'
import { Info } from 'lucide-react'
import { toast } from 'sonner'
import { useRegisterSW } from 'virtual:pwa-register/react'

interface NeedUpdatePWAOptions {
	period?: number
}

export const useWatchUpdatePWA = (options?: NeedUpdatePWAOptions) => {
	const period = options?.period ?? 60 * 60 * 1000

	const {
		offlineReady: [offlineReady, setOfflineReady],
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegisteredSW(swURL, registration) {
			if (period <= 0) {
				return
			}

			const isActivated = registration?.active?.state === 'activated'

			if (isActivated) {
				registerPeriodicSync({
					period,
					swURL,
					registration,
				})

				return
			}

			if (registration?.installing) {
				registration.installing.addEventListener('statechange', (event) => {
					const isServiceWorkerOnActivatedState =
						'state' in event && event.state === 'activated'

					if (isServiceWorkerOnActivatedState) {
						registerPeriodicSync({
							period,
							swURL,
							registration,
						})
					}
				})
			}
		},
	})

	const onDismissUpdate = () => {
		setOfflineReady(false)
		setNeedRefresh(false)
	}

	const onUpdateServiceWorker = () => {
		updateServiceWorker(true)
	}

	useQuery({
		queryKey: ['pwa-update', offlineReady, needRefresh],
		queryFn: () => {
			const isUpdateAvailable = offlineReady || needRefresh

			if (isUpdateAvailable) {
				toast('A new version of the app is available', {
					position: 'bottom-center',
					duration: Infinity,
					icon: <Info fontSize={12} />,
					action: {
						label: 'REFRESH',
						onClick: () => onUpdateServiceWorker(),
					},
					onDismiss: () => {
						onDismissUpdate()
					},
				})
			}

			return isUpdateAvailable
		},
	})
}

interface RegisterPeriodSyncOptions {
	period: number
	swURL: string
	registration: ServiceWorkerRegistration
}

const registerPeriodicSync = (options: RegisterPeriodSyncOptions) => {
	const { period, swURL, registration } = options

	if (period <= 0) {
		return
	}

	setInterval(async () => {
		if ('onLine' in navigator && !navigator.onLine) return

		const resp = await fetch(swURL, {
			cache: 'no-store',
			headers: {
				cache: 'no-store',
				'cache-control': 'no-cache',
			},
		})

		if (resp?.status === 200) {
			await registration.update()
		}
	}, period)
}
