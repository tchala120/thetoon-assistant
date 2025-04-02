import * as Icons from 'lucide-react'
import { icons } from 'lucide-react'

interface FontIconProps {
	icon: keyof typeof icons
	size?: IconSize
}

export const FontIcon = ({ icon, size = 'medium' }: FontIconProps) => {
	const Icon = Icons[icon]

	return <Icon size={iconSizeToken[size]} />
}

type IconSize = 'small' | 'medium' | 'large'

const iconSizeToken: Record<IconSize, number> = {
	small: 16,
	medium: 24,
	large: 32,
}
