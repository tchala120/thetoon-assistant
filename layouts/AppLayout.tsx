import type { ReactNode } from 'react'

import { useRouter } from 'next/router'
import { NavBar } from 'antd-mobile'
import styled from '@emotion/styled'
import { SetOutline } from 'antd-mobile-icons'
import { sentenceCase } from 'change-case'

import Header from './Header'

import type { LayoutProps } from './types'

interface AppLayoutProps extends LayoutProps {
  bottom?: ReactNode
}

const AppLayout = ({
  title,
  description,
  noPadding = false,
  bottom,
  children,
}: AppLayoutProps) => {
  const router = useRouter()

  return (
    <AppLayoutContainer>
      <Header title={title} description={description} />

      <AppBar>
        <NavBar
          onBack={() => {
            router.back()
          }}
          right={<SetOutline fontSize={24} color="var(--adm-color-primary)" />}
        >
          {sentenceCase(router.pathname)}
        </NavBar>
      </AppBar>

      <Content noPadding={noPadding}>{children}</Content>

      {bottom && <Bottom>{bottom}</Bottom>}
    </AppLayoutContainer>
  )
}

export default AppLayout

const AppLayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const AppBar = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid var(--adm-color-border);
  box-shadow: 0 5px 40px var(--adm-color-border);
`

const Content = styled.div<Pick<AppLayoutProps, 'noPadding'>>`
  flex: 1;
  padding: ${(p) => (p.noPadding ? 0 : '12px')};
  overflow-x: hidden;
  overflow-y: auto;
`

const Bottom = styled.div`
  flex: 0;
  padding: 12px;
  border-top: 1px solid var(--adm-color-border);
`
