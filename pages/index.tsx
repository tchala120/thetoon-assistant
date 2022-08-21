import PageLayout from 'layouts/PageLayout'

import Home from 'components/Home'

const HomePage = () => {
  return (
    <PageLayout
      title="TheToon Assistant - The personal assistant for myself"
      description="Crypto news aggregator"
    >
      <Home />
    </PageLayout>
  )
}

export default HomePage
