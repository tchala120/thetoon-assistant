import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: Root,
})

function Root() {
	return (
		<>
			<div>Hello "__root"!</div>

			<Outlet />
		</>
	)
}
