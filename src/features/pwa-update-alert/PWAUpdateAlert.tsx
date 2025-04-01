import { useNeedUpdatePWA } from './use'

export const PWAUpdateAlert = () => {
	const { isUpdateAvailable } = useNeedUpdatePWA()

	if (isUpdateAvailable) {
		return <>PWA Update Alert</>
	}

	return null
}
