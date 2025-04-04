import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
	component: Layout,
})

function Layout() {
	return (
		<>
			<main>
				<Outlet />
			</main>

			<div>Bottom navigation bar</div>
		</>
	)
}
