import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: IndexPage,
})

function IndexPage() {
	return (
		<div>
			<h1 className="text-red-500">This is index page</h1>
		</div>
	)
}
