import type { ReactNode } from 'react'

import styled from '@emotion/styled'
import { NavBar } from 'antd-mobile'

interface AppLayoutProps {
  children: ReactNode
  bottom?: ReactNode
}

const AppLayout = ({ children, bottom }: AppLayoutProps) => {
  return (
    <AppLayoutContainer>
      <AppBarContainer>
        <NavBar />
      </AppBarContainer>

      <AppBodyContainer>{children}</AppBodyContainer>

      {bottom && <AppBottomContainer>{bottom}</AppBottomContainer>}
    </AppLayoutContainer>
  )
}

export default AppLayout

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
  padding: 12px;
`
