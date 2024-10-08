import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as='h1'>Agendamento Descomplicado</Heading>
        <Text size={'xl'}>
        Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </Text>
      </Hero>
      <Preview>
        <Image 
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt='Calendário simbolizando aplicação em funcionamento'
        />
      </Preview>
    </Container>
  )
}
