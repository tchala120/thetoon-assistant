import styled from '@emotion/styled'
import { DotLoading } from 'antd-mobile'

const Loading = () => {
  return (
    <LoadingContainer>
      <DotLoading style={{ fontSize: 72, color: '#ccc' }} />
    </LoadingContainer>
  )
}

export default Loading

const LoadingContainer = styled.div`
  width: 100%;
  height: calc(100vh - 94px);
  display: flex;
  justify-content: center;
  align-items: center;
`
