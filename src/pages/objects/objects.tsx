import Restaurant from '../../models/Restaurant'

import restaurante1 from '../../assets/images/restaurante1.png'
import restaurante2 from '../../assets/images/restaurante2.png'
import pizza from '../../assets/images/pizza.png'
import sushi from '../../assets/images/sushi.png'

import Product from '../../models/Product'

export const LaDolceVitaTrattoria: Product[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

export const HiokiSushi: Product[] = [
  {
    id: 1,
    name: 'Sushi',
    image: sushi,
    description:
      'O sushi é um prato tradicional da culinária japonesa que consiste em pequenos bolinhos ou rolos de arroz temperado, cobertos com peixe cru.'
  },
  {
    id: 2,
    name: 'Sushi',
    image: sushi,
    description:
      'O sushi é um prato tradicional da culinária japonesa que consiste em pequenos bolinhos ou rolos de arroz temperado, cobertos com peixe cru.'
  },
  {
    id: 3,
    name: 'Sushi',
    image: sushi,
    description:
      'O sushi é um prato tradicional da culinária japonesa que consiste em pequenos bolinhos ou rolos de arroz temperado, cobertos com peixe cru.'
  },
  {
    id: 4,
    name: 'Sushi',
    image: sushi,
    description:
      'O sushi é um prato tradicional da culinária japonesa que consiste em pequenos bolinhos ou rolos de arroz temperado, cobertos com peixe cru.'
  },
  {
    id: 5,
    name: 'Sushi',
    image: sushi,
    description:
      'O sushi é um prato tradicional da culinária japonesa que consiste em pequenos bolinhos ou rolos de arroz temperado, cobertos com peixe cru.'
  },
  {
    id: 6,
    name: 'Sushi',
    image: sushi,
    description:
      'O sushi é um prato tradicional da culinária japonesa que consiste em pequenos bolinhos ou rolos de arroz temperado, cobertos com peixe cru.'
  }
]

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    stars: 4.9,
    image: restaurante1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    products: HiokiSushi
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: restaurante2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    products: LaDolceVitaTrattoria
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: restaurante2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    products: LaDolceVitaTrattoria
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: restaurante2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    products: LaDolceVitaTrattoria
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: restaurante2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    products: LaDolceVitaTrattoria
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    stars: 4.6,
    image: restaurante2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    products: LaDolceVitaTrattoria
  }
]
