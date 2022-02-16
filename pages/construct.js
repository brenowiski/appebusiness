import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const Construct = () => {
   return (
       <Container>
           <Heading as="h1">Em construção</Heading>
           <Text>A página que você procurou está em construção.</Text>
           <Divider my={6} />

           <Box my={6} align="center">
               <NextLink href="/">
                   <Button colorScheme="teal">Volte para a home</Button>
               </NextLink>
           </Box>
       </Container>
   )
} 

export default Construct
