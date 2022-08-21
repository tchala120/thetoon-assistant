import type { ReactNode } from 'react'
import type { Liff } from '@line/liff'

import { createContext, useContext, useState } from 'react'

interface LiffContextData {
  liff: Liff
  setLiff: (value: Liff) => void
}

interface LiffProviderProps {
  lineLiff: Liff
  children: ReactNode
}

export const LiffProvider = ({ lineLiff, children }: LiffProviderProps) => {
  const [liff, setLiff] = useState<Liff>(lineLiff)

  const value: LiffContextData = {
    liff,
    setLiff,
  }

  return <LiffContext.Provider value={value}>{children}</LiffContext.Provider>
}

const LiffContext = createContext<any>(null)

const useLiffContext = () => useContext<LiffContextData>(LiffContext)

export default useLiffContext
