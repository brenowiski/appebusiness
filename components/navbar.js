import Logo from './logo'
import NextLink from 'next/link'
import { 
         Container,
         Box,
         Link,
         Stack,
         Heading,
         Flex,
         Menu,
         MenuItem,
         MenuList,
         MenuButton,
         IconButton,
         useColorModeValue,
         Button,
         Icon        
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
           <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
            {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blue(10px'}}
        zIndex={1}
        {...props}
        >
        <Container display="flex" p={2} 
        maxW="container.md" 
        wrap="wrap" 
        align="center" 
        justify="space-between"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo />
                </Heading>
            </Flex>   

            <Stack 
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }} 
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, nmd: 0 }}
                >
                    <Button
                    colorScheme="teal"
                    variant="ghost"                     
                    fontWeight="normal"
                    color={useColorModeValue("blackAlpha.800", "whiteAlpha.900")}>
                    <LinkItem href="/works" path={path}>
                        Trabalho
                    </LinkItem>
                    </Button>
                    
                    <LinkItem 
                    href="https://github.com/brenowiski/appebusiness" 
                    path={path}>
                        <Link 
                        href="https://github.com/brenowiski/appebusiness" >                           
                           <Button
                           colorScheme="teal" 
                           variant="ghost" 
                           leftIcon={<Icon as={IoLogoGithub} />}
                           fontWeight="normal"
                           color={useColorModeValue("blackAlpha.800", "whiteAlpha.900")}
                           >
                               View Source
                               </Button>                          
                         </Link>
                    </LinkItem>
            </Stack>     
            <Box flex={1} align="right">
           <ThemeToggleButton />
                <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                    <Menu>
                        <MenuButton 
                        as={IconButton} 
                        icon={<HamburgerIcon/>} 
                        variant="outline" 
                        aria-label="Options"
                        />
                      <MenuList>
                        <NextLink href="/" passHref>
                            <MenuItem as={Link}>Sobre</MenuItem>
                        </NextLink>
                        <NextLink href="/works" passHref>
                            <MenuItem as={Link}>Trabalhos</MenuItem>
                        </NextLink>                        
                        <MenuItem as={Link} href="https://github.com/brenowiski/appebusiness">
                            <Link >View Source</Link>
                        </MenuItem>                                
                     </MenuList>  
                    </Menu>
                </Box>
            </Box>
        </Container>
        </Box>
    )
}

export default Navbar