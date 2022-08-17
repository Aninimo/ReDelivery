import { useState } from 'react'
import { Badge, Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../../utils/formatMoney'

export interface Food {
  id: number;
  name: string;
  photo: string;
  price: number;
}

interface FoodProps {
  food: Food;
}

export function CardFoods({food}: FoodProps){
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
    }

  const formattedPrice = formatMoney(food.price);

  const { addFoodToCart } = useCart();

  function handleAddToCart() {
    const foodToAdd = {
      ...food,
      quantity,
    };
    addFoodToCart(foodToAdd);
  }

  return(
    <Box
      w={['10rem','12rem']}
      h={['13rem','14rem']}
      bg='gray.200'
      mt='1rem'
      borderRadius='.5rem'>
      <Flex
        justify='center'
        align='center'
        direction='column'
        p='4'>
        <Image 
          src={food.photo}
          w={['70px','90px']}/>
        <Text
          mt='2'>
          {food.name}
        </Text>
        <Badge
          p='.5rem 1rem'
          bg='pink.400'
          color='#fff'
          mt='2'>
          R$ {formattedPrice}
        </Badge>
        <Flex
          justify='center'
          align='center'
          mt='4'>
          <IconButton
            icon={<Minus/>}
            onClick={handleDecrease}
            disabled={quantity <= 1}/>
          <Badge 
            h='2.5rem'
            p='2'>
            <Text>{quantity}</Text>
          </Badge>
          <IconButton
            icon={<Plus/>}
            onClick={handleIncrease}/>
          <IconButton
            onClick={handleAddToCart}
            icon={<ShoppingCart/>}
            bg='pink.400'
            color='#fff'/>
        </Flex>
      </Flex>
    </Box>
  )
}
