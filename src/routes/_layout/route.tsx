import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
	component: Layout,
})

function Layout() {
	return (
		<div className="flex h-screen flex-col">
			<main className="flex flex-1 flex-col overflow-y-scroll">
				<Outlet />
			</main>

			<div>Bottom navigation bar</div>
		</div>
	)
}
