import { Link, LinkProps } from '@tanstack/react-router'

import { FontIcon, type IconName } from '@/components/font-icon'

export interface NavigationButtonItem {
	key: string
	label: string
	pathname: LinkProps['to']
	iconName?: IconName
}

interface NavigationButtonProps {
	item: NavigationButtonItem
}

export const NavigationButton = ({ item }: NavigationButtonProps) => {
	return (
		<Link
			to={item.pathname}
			className="flex flex-col items-center gap-1"
			activeProps={{
				className: 'text-blue-500',
			}}
			inactiveProps={{
				className: 'text-foreground',
			}}
		>
			{item.iconName == null ? null : <FontIcon icon={item.iconName} />}

			<span className="text-xs">{item.label}</span>
		</Link>
	)
}
