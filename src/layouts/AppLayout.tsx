import type { ReactNode } from 'react'

import styled from '@emotion/styled'
import { NavBar, SafeArea } from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom'

import { getAppTitleFromPathname } from 'helpers/utils'

import { AppBarContainer, AppBodyContainer, AppLayoutContainer } from './utils'

import type { LayoutProps } from './types'

interface AppLayoutProps extends LayoutProps {
  bottom?: ReactNode
}

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

      <AppBodyContainer>{children}</AppBodyContainer>

      {bottom && (
        <AppBottomContainer>
          {bottom}

          <SafeArea position="bottom" />
        </AppBottomContainer>
      )}
    </AppLayoutContainer>
  )
}

export default AppLayout

const AppBottomContainer = styled.div`
  position: sticky;
  bottom: 0;
  flex: 0;
  background-color: #fff;
  border-top: solid 1px var(--adm-color-border);
`
