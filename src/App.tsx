import 'configuration'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'

import PageRouter from 'setup/PageRouter'

const queryClient = new QueryClient()

const App = () => {
  return (
    <ConfigProvider locale={enUS}>
      <QueryClientProvider client={queryClient}>
        <PageRouter />
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
