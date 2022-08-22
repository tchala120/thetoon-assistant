import type { ReactNode } from 'react'

import styled from '@emotion/styled'
import { SafeArea } from 'antd-mobile'

interface BottomActionBarProps {
  needSafeArea?: boolean
  children: ReactNode
}

const BottomActionBar = ({
  needSafeArea = true,
  children,
}: BottomActionBarProps) => {
  return (
    <>
      <BottomActionBarContainer>{children}</BottomActionBarContainer>

      {needSafeArea && <SafeArea position="bottom" />}
    </>
  )
}

export default BottomActionBar

const BottomActionBarContainer = styled.div`
  flex: 0;
  padding: 12px;
  border-top: 1px solid var(--adm-color-border);
`
