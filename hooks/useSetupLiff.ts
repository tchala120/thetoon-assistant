import type { Liff } from '@line/liff'

import { useState } from 'react'
import { useEffectOnce } from 'react-use'

const liffId = process.env.NEXT_PUBLIC_LINE_LIFF_ID

const useSetupLiff = () => {
  const [loading, setLoading] = useState(true)
  const [liff, setLiff] = useState<Liff>()
  const [error, setError] = useState<Error>()

  useEffectOnce(() => {
    import('@line/liff')
      .then((liff) => liff.default)
      .then((liff) => {
        liff
          .init({ liffId })
          .then(() => {
            if (!liff.isLoggedIn()) {
              liff.login()

              return
            }

            setLiff(liff)
            setLoading(false)
          })
          .catch(setError)
      })
  })

  return {
    loading,
    liff,
    error,
  }
}

export default useSetupLiff
