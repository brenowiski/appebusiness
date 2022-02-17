import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,  
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import styled from '@emotion/styled'


const Paragraf = styled.span`
  font-size: 13px;
`

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Olá, eu sou um desenvolvedor front-end situado no Brasil!
          <Paragraf>
            <p>Hello, I&apos;m a front-end developer based in Brazil!</p>
          </Paragraf>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Breno Oliveira
            </Heading>
            <p>Digital Craftzman ( Artist / Developer / Beatbox Master)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/breno.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" fontSize={22} variant="section-title">
            Trabalho
          </Heading>
          <Paragraph>
              Breno é um freelance front-end developer situado em Boituva com uma
            paixão por desenvolver serviços digitais/projetos pessoais.
            Projetando meios de resolver problemas da vida real com código.
            Quando não está online, ama passar tempo desenhando ou com os
            amigos.
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" fontSize={22} variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Nascido em Pontal - São Paulo.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Inicio de estudos autodidata em programação como back-end.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Transferiu os estudos para front-end e criou Appe Business para
            apresentar o trabalho e conhecimento.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            No presente trabalha como freelance.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" fontSize={22} variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Design Gráfico, Música, O Guia do Mochileiro das Galáxias, Desenho, Ilustração.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" fontSize={20} variant="section-title">
            Nas redes sociais
          </Heading>
          <List>
            <ListItem>
            <Link href="https://github.com/brenowiski" targe="_blank">
              <Button 
              variant="ghost" 
              colorScheme="teal" 
              leftIcon={<Icon as={IoLogoGithub}/>}
              >
                @brenowiski
                </Button>
            </Link>
            </ListItem>
            <ListItem>
            <Link href="https://www.instagram.com/brnins/" targe="_blank">
              <Button 
              variant="ghost" 
              colorScheme="teal" 
              leftIcon={<Icon as={IoLogoInstagram}/>}
              >
                @brnins
                </Button>
            </Link>
            </ListItem>
            <ListItem>
            <Link href="https://www.linkedin.com/in/breno-oliveira-798281229/" targe="_blank">
              <Button 
              variant="ghost" 
              colorScheme="teal" 
              leftIcon={<Icon as={IoLogoLinkedin}/>}
              >
                @Breno Oliveira
                </Button>
            </Link>
            </ListItem>
          </List>
        </Section>
       
        <Section delay={0.5}>          
          <Paragraph>
          &ldquo;Algumas pessoas lêem &ldquo;Guerra e Paz&rdquo; e acham que é um simples romance. 
          Outras pessoas lêem uma embalagem de chiclete e desvendam os segredos 
          do universo...&rdquo; - Lex Luthor          
          </Paragraph>
        </Section>

        <Box  align="center" fontSize="12" color="whiteAlpha.500">
        {' © '} 2022    
      Breno Oliveira. All Rights Reserved.
        </Box>
      </Container>
    </Layout>
  )
}

export default Page
