import type { ReactNode } from 'react'

import { NavBar, SafeArea } from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom'

import { getAppTitleFromPathname } from 'helpers/utils'

import {
  AppBarContainer,
  AppBodyContainer,
  AppBottomContainer,
  AppLayoutContainer,
} from './utils'

import type { LayoutProps } from './types'

interface AppLayoutProps extends LayoutProps {
  bottom?: ReactNode
}

const contentHeight =
  'calc(100vh - (45px + 44pt + env(safe-area-inset-bottom)))'

const AppLayout = ({ appBarActionMenus, children, bottom }: AppLayoutProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <AppLayoutContainer>
      <AppBarContainer>
        <NavBar onBack={() => navigate(-1)} right={appBarActionMenus}>
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

      {bottom && (
        <AppBottomContainer style={{ padding: 12 }}>
          {bottom}

          <SafeArea position="bottom" />
        </AppBottomContainer>
      )}
    </AppLayoutContainer>
  )
}

export default AppLayout
