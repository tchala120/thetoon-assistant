import { NavigationButton } from './NavigationButton'
import { navigationMenus } from './menu'

export const BottomNavigationBar = () => {
	return (
		<div className="flex items-center justify-evenly gap-4 border-t border-gray-900 p-3">
			{navigationMenus.map((item) => (
				<NavigationButton key={item.key} item={item} />
			))}
		</div>
	)
}
