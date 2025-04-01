import { useRegisterSW } from 'virtual:pwa-register/react'

interface NeedUpdatePWAOptions {
	period?: number
}

export const useNeedUpdatePWA = (options?: NeedUpdatePWAOptions) => {
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

	return {
		isUpdateAvailable: offlineReady || needRefresh,
		onUpdateServiceWorker,
		onDismissUpdate,
	}
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
