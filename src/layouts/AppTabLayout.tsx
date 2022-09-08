import { useLocation } from 'react-router-dom'
import { NavBar, SafeArea } from 'antd-mobile'

import BottomTabBar from 'components/BottomTabBar'

import { getAppTitleFromPathname } from 'helpers/utils'

import {
  AppBarContainer,
  AppBodyContainer,
  AppBottomContainer,
  AppLayoutContainer,
} from './utils'

import type { LayoutProps } from './types'

const contentHeight =
  'calc(100vh - (94px + 44pt + env(safe-area-inset-bottom)))'

const AppTabLayout = ({ appBarActionMenus, children }: LayoutProps) => {
  const { pathname } = useLocation()

  return (
    <AppLayoutContainer>
      <AppBarContainer>
        <NavBar backArrow={false} right={appBarActionMenus}>
          {getAppTitleFromPathname(pathname)}
        </NavBar>
      </AppBarContainer>

      <AppBodyContainer
        style={{
          height: contentHeight,
        }}
      >
        {children}
      </AppBodyContainer>

      <AppBottomContainer>
        <BottomTabBar />

        <SafeArea position="bottom" />
      </AppBottomContainer>
    </AppLayoutContainer>
  )
}

export default AppTabLayout
