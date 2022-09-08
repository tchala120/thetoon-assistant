import { useLocation, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
  AppstoreOutline,
  FileOutline,
  SetOutline,
  UnorderedListOutline,
} from 'antd-mobile-icons'

const BottomTabBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const tabs = [
    {
      key: '/',
      title: 'Home',
      icon: <AppstoreOutline />,
    },
    {
      key: '/todo',
      title: 'Todo',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/ledger',
      title: 'Ledger',
      icon: <FileOutline />,
    },
    {
      key: '/setting',
      title: 'Setting',
      icon: <SetOutline />,
    },
  ]

  return (
    <TabBar
      activeKey={pathname}
      onChange={(value) =>
        navigate(value, {
          replace: true,
        })
      }
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default BottomTabBar
