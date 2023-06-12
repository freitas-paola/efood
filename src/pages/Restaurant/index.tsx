import RestaurantHeader from '../../components/RestaurantHeader'

import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Food, RestaurantObj } from '../Home'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantObj>()
  const [product, setProduct] = useState<Food>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))

    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res.cardapio))
  }, [id])

  if (!restaurant || !product) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <RestaurantHeader />
      <Banner
        name={restaurant.titulo}
        tipo={restaurant.tipo}
        image={restaurant.capa}
      />
      <FoodsList
        products={restaurant.cardapio}
        foto={product.foto}
        nome={product.nome}
        descricao={product.descricao}
        porcao={product.porcao}
        preco={product.preco}
        setProduct={setProduct}
      />
    </>
  )
}

export default Restaurant
