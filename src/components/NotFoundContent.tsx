import type { ReactNode } from 'react'

import styled from '@emotion/styled'

interface NotFoundContentProps {
  icon?: ReactNode
  extra?: ReactNode
  children: ReactNode
}

const NotFoundContent = ({ icon, extra, children }: NotFoundContentProps) => {
  return (
    <NotFoundContentContainer>
      {icon}

      <NotFoundTitle>{children}</NotFoundTitle>

      {extra}
    </NotFoundContentContainer>
  )
}

export default NotFoundContent

const NotFoundContentContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    font-size: 96px;
    color: #ccc;
  }
`

const NotFoundTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #ccc;
`
