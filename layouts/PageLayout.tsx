import styled from '@emotion/styled'

import Header from './Header'

import type { LayoutProps } from './types'

const PageLayout = ({ title, description, children }: LayoutProps) => {
  return (
    <PageLayoutContainer>
      <Container>
        <Header title={title} description={description} />

        {children}
      </Container>
    </PageLayoutContainer>
  )
}

export default PageLayout

const PageLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #121212;
  padding: 0 24px;
`

const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: -webkit-fill-available;
  max-width: 768px;
`
