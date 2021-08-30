import Layout from '@components/Layout/Layout'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage: React.FC = () => {
  const [data, setData] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then((res) => setData(res.data))
  }, [])
  return (
    <Layout>
      <div>Platzi and Next.js!</div>
      <div>
        {data.map((d) => (
          <div>{d.name}</div>
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
