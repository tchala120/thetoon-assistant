import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Toaster } from 'sonner'

import { useWatchUpdatePWA } from '@/hooks/useWatchUpdatePWA'

export const Route = createRootRoute({
	component: Root,
})

function Root() {
	useWatchUpdatePWA()

	return (
		<>
			<Outlet />

			<Toaster />
		</>
	)
}
