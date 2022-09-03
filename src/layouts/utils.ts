import styled from '@emotion/styled'

export const AppLayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const AppBarContainer = styled.div`
  position: sticky;
  top: 0;
  flex: 0;
  background-color: #ffffff;
  border-bottom: solid 1px var(--adm-color-border);
`

export const AppBodyContainer = styled.div`
  flex: 1;
`

export const AppBottomContainer = styled.div`
  position: sticky;
  bottom: 0;
  flex: 0;
  background-color: #ffffff;
  border-top: solid 1px var(--adm-color-border);
`
