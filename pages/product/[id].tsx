import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage: React.FC = () => {
  const {
    query: { id },
  } = useRouter()
  const [product, setProduct] = useState<TProduct>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    window
      .fetch(`/api/avo/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res)
        setIsLoading(false)
      })
      .catch((err) => console.log(err, 'error'))
  }, [id])

  return (
    <section>
      {isLoading ? (
        <span>Cargando...</span>
      ) : (
        <div>
          <h1>Nombre del producto: {product?.name}</h1>
          <p>{product?.attributes.description}</p>
        </div>
      )}
    </section>
  )
}

export default ProductPage
