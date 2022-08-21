import styled from '@emotion/styled'
import Link from 'next/link'

import type { ServiceMenu } from './types'

interface ServiceProps {
  service: ServiceMenu
}

const Service = ({ service }: ServiceProps) => {
  return (
    <Link href={service.destination}>
      <a>
        <ServiceCard>
          {service.icon}
          <Title>{service.title}</Title>
        </ServiceCard>
      </a>
    </Link>
  )
}

export default Service

const ServiceCard = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: #fff;
  color: #121212;
  text-decoration: none;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`
