import { useWatchUpdatePWA } from '@/hooks/useWatchUpdatePWA'
import { Providers } from '@/providers'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Toaster } from 'sonner'

export const Route = createRootRoute({
	component: Root,
})

function Root() {
	useWatchUpdatePWA()

	return (
		<Providers>
			<div>Hello "__root"!</div>

			<Outlet />

			<Toaster />
		</Providers>
	)
}
