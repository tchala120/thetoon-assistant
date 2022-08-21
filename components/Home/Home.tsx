import { SimpleGrid } from '@mantine/core'
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
    destination: '/todos',
  },
]

const Home = () => {
  return (
    <Center>
      <PageTitle>Services</PageTitle>

      <SimpleGrid style={{ width: '100%' }} cols={2} spacing="md">
        {listServices.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </SimpleGrid>
    </Center>
  )
}

export default Home
