import type { ReactNode } from 'react'

import { useLocation } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import styled from '@emotion/styled'

import BottomTabBar from 'components/BottomTabBar'

import { getAppTitleFromPathname } from 'helpers/utils'

interface AppTabLayoutProps {
  children: ReactNode
}

const AppTabLayout = ({ children }: AppTabLayoutProps) => {
  const { pathname } = useLocation()

  return (
    <AppLayoutContainer>
      <AppBarContainer>
        <NavBar backArrow={false}>{getAppTitleFromPathname(pathname)}</NavBar>
      </AppBarContainer>

      <AppBodyContainer>{children}</AppBodyContainer>

      <AppBottomContainer>
        <BottomTabBar />
      </AppBottomContainer>
    </AppLayoutContainer>
  )
}

export default AppTabLayout

const AppLayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const AppBarContainer = styled.div`
  flex: 0;
  border-bottom: solid 1px var(--adm-color-border);
`

const AppBodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AppBottomContainer = styled.div`
  flex: 0;
  border-top: solid 1px var(--adm-color-border);
`
