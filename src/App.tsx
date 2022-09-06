import { ConfigProvider } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'

import PageRouter from 'setup/PageRouter'

const App = () => {
  return (
    <ConfigProvider locale={enUS}>
      <PageRouter />
    </ConfigProvider>
  )
}

export default App
