import { Grid } from 'antd-mobile'
import { IconChecklist, IconReceipt2 } from '@tabler/icons'

import Center from 'components/Center'
import PageTitle from 'components/PageTitle'
import Service from 'components/Service'

import type { ServiceMenu } from 'components/Service'

const listServices: ServiceMenu[] = [
  {
    id: 1,
    title: 'Ledger',
    icon: <IconReceipt2 size={36} />,
    destination: '/ledger',
  },
  {
    id: 2,
    title: 'Todo',
    icon: <IconChecklist size={36} />,
    destination: '/todo',
  },
]

const Home = () => {
  return (
    <Center>
      <PageTitle>Services</PageTitle>

      <Grid columns={2} gap={16}>
        {listServices.map((service) => (
          <Grid.Item key={service.id}>
            <Service service={service} />
          </Grid.Item>
        ))}
      </Grid>
    </Center>
  )
}

export default Home
