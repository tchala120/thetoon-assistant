import type { ReactNode } from 'react'

import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { SetOutline } from 'antd-mobile-icons'
import { sentenceCase } from 'change-case'

import AppBar from 'components/AppBar'
import BottomActionBar from 'components/BottomActionBar'
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

      <AppBar
        onBack={() => {
          router.back()
        }}
        right={<SetOutline fontSize={24} color="var(--adm-color-primary)" />}
      >
        {sentenceCase(router.pathname)}
      </AppBar>

      <Content noPadding={noPadding}>{children}</Content>

      {bottom && <BottomActionBar>{bottom}</BottomActionBar>}
    </AppLayoutContainer>
  )
}

export default AppLayout

const AppLayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div<Pick<AppLayoutProps, 'noPadding'>>`
  flex: 1;
  padding: ${(p) => (p.noPadding ? 0 : '12px')};
  overflow-x: hidden;
  overflow-y: auto;
`
