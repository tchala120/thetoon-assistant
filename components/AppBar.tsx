import type { NavBarProps } from 'antd-mobile/es/components/nav-bar'

import styled from '@emotion/styled'
import { NavBar } from 'antd-mobile'

const AppBar = ({ children, ...props }: NavBarProps) => {
  return (
    <AppBarContainer>
      <NavBar {...props}>{children}</NavBar>
    </AppBarContainer>
  )
}

export default AppBar

const AppBarContainer = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid var(--adm-color-border);
  box-shadow: 0 5px 40px var(--adm-color-border);
`
