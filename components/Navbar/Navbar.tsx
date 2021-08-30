import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  Container
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

const HEADER_LINKS = [
  {
    href: '/',
    literal: 'MyShop'
  },
  {
    href: '/cart',
    literal: 'Canasta'
  }
]

const NavLink = ({ href, literal }: any) => {
  const { pathname } = useRouter()
  const isActive = pathname === href

  const activeBackgroundColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box>
      <NextLink href={href} passHref>
        <Link
          background={isActive ? activeBackgroundColor : ''}
          color='#555'
          px={2}
          py={1}
          rounded='md'
          fontWeight='bold'
          _hover={{
            textDecoration: 'none',
            background: useColorModeValue('gray.200', 'gray.700')
          }}
          href={href}
        >
          {literal}
        </Link>
      </NextLink>
    </Box>
  )
}

const Navbar = () => {
  return (
    <Box boxShadow="lg" mb={5}>
      <Container maxW="container.md">
        <Flex justifyContent='space-between' h={16} alignItems='center'>
          {HEADER_LINKS.map(link => <NavLink key={link.href} {...link} />)}
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
