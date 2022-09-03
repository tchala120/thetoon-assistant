import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from 'pages/HomePage'
import TodoPage from 'pages/todo/IndexPage'
import LedgerPage from 'pages/ledger/IndexPage'
import SettingPage from 'pages/SettingPage'
import TodoDetailPage from 'pages/todo/DetailPage'

import { paths } from './routes'

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={paths.ledger} element={<LedgerPage />} />
        <Route path={paths.todo} element={<TodoPage />} />
        <Route path={paths.todoDetail} element={<TodoDetailPage />} />
        <Route path={paths.setting} element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
