import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import TodoPage from 'pages/todo/IndexPage'
import LedgerPage from 'pages/ledger/IndexPage'

import { paths } from './routes'

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.ledger} element={<LedgerPage />} />
        <Route path={paths.todo} element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
