import type { ReactNode } from 'react'

import styled from '@emotion/styled'
import { SpinLoading } from 'antd-mobile'

interface SpinProps {
  spinning?: boolean
  children: ReactNode
}

const Spin = ({ spinning, children }: SpinProps) => {
  return (
    <SpinContainer spinning={spinning}>
      {spinning && <SpinLoading className="spinner" color="#000000" />}

      {children}
    </SpinContainer>
  )
}

export default Spin

const SpinContainer = styled.div<Pick<SpinProps, 'spinning'>>`
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: ${(p) => (p.spinning ? 'none' : 'auto')};
  opacity: ${(p) => (p.spinning ? 0.5 : 1)};

  > .spinner {
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
