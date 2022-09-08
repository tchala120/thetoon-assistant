import type { ReactNode } from 'react'

import styled from '@emotion/styled'
import { NavBar } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'

interface PopupContentProps {
  children: ReactNode
}

const PopupContent = ({ children }: PopupContentProps) => {
  return <PopupContentContainer>{children}</PopupContentContainer>
}

const PopupContentContainer = styled.div`
  flex: 1;
`

export default PopupContent

interface PopupTitleProps {
  onClose: VoidFunction
  children: ReactNode
}

const PopupTitle = ({ onClose, children }: PopupTitleProps) => {
  return (
    <PopupTopContainer>
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
    </PopupTopContainer>
  )
}

PopupContent.Title = PopupTitle

PopupContent.Bottom = styled.div`
  position: sticky;
  bottom: 0;
  background-color: #ffffff;
  border-top: solid 1px var(--adm-color-border);
  padding: 12px 12px env(safe-area-inset-bottom) 12px;
`

const PopupTopContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  border-bottom: solid 1px var(--adm-color-border);
`
