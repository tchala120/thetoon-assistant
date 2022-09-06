import AppTabLayout from 'layouts/AppTabLayout'

import useTodos from 'react-query/useTodos'

const HomePage = () => {
  const query = useTodos()

  console.log('Query from home page', query.data)

  return (
    <AppTabLayout>
      <h1>Home Page</h1>
    </AppTabLayout>
  )
}

export default HomePage
