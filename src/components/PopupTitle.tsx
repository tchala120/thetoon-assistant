import type { ReactNode } from 'react'

import { NavBar } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'

import { AppBarContainer } from 'layouts/utils'

interface PopupTitleProps {
  onClose: VoidFunction
  children: ReactNode
}

const PopupTitle = ({ onClose, children }: PopupTitleProps) => {
  return (
    <AppBarContainer>
      <NavBar
        backArrow={false}
        right={
          <CloseOutline
            onClick={onClose}
            color="var(--adm-color-primary)"
            fontSize={18}
          />
        }
      >
        {children}
      </NavBar>
    </AppBarContainer>
  )
}

export default PopupTitle
