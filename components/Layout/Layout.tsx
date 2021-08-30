import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import { Container } from "@chakra-ui/react"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.md">
        {children}
      </Container>
    </>
  )
}

export default Layout
