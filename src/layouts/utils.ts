import styled from '@emotion/styled'

export const AppLayoutContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const AppBarContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  border-bottom: solid 1px var(--adm-color-border);
`

export const AppBodyContainer = styled.div`
  overflow-y: scroll;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`

export const AppBottomContainer = styled.div`
  position: sticky;
  bottom: 0;
  background-color: #ffffff;
  border-top: solid 1px var(--adm-color-border);
`
