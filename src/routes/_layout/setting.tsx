import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/setting')({
	component: SettingPage,
})

function SettingPage() {
	return <div>Hello SettingPage</div>
}
