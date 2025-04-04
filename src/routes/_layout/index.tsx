import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: IndexPage,
})

function IndexPage() {
	return (
		<>
			<div>Calendar shortcut</div>

			<div>Expense budget today shortcut</div>
		</>
	)
}
