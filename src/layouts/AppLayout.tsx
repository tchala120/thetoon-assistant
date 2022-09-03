import type { ReactNode } from 'react'

import styled from '@emotion/styled'
import { NavBar } from 'antd-mobile'
import { useLocation } from 'react-router-dom'

import { getAppTitleFromPathname } from 'helpers/utils'

import { AppBarContainer, AppBodyContainer, AppLayoutContainer } from './utils'

interface AppLayoutProps {
  children: ReactNode
  bottom?: ReactNode
}

const AppLayout = ({ children, bottom }: AppLayoutProps) => {
  const { pathname } = useLocation()

  return (
    <AppLayoutContainer>
      <AppBarContainer>
        <NavBar>{getAppTitleFromPathname(pathname)}</NavBar>
      </AppBarContainer>

      <AppBodyContainer>{children}</AppBodyContainer>

      {bottom && <AppBottomContainer>{bottom}</AppBottomContainer>}
    </AppLayoutContainer>
  )
}

export default AppLayout

const AppBottomContainer = styled.div`
  position: sticky;
  bottom: 0;
  flex: 0;
  background: #fff;
  border-top: solid 1px var(--adm-color-border);
  padding: 12px;
`
