import { Badge, Box, Divider ,Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { Minus, Plus, Trash} from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { CartItem } from '../../contexts/CartContext'
import { formatMoney } from '../../utils/formatMoney'

interface FoodCartCardProps {
  food: CartItem;
}

export function CardFoodSelect({food}: FoodCartCardProps){
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(food.id, "increase");
  }
  
  function handleDecrease() {
    changeCartItemQuantity(food.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(food.id);
  }

  const formattedPrice = formatMoney(food.price);

  return(
     <Box
       w='10rem'
       h='13rem'
       bg='gray.200'
       borderRadius='.5rem'
       mt='6'>
       <Flex
         justify='center'
         align='center'
         direction='column'
         p='2'>
         <Image 
           src={food.photo}
           w='100px'/>
         <Text mt='2'>{food.name}</Text>
         <Badge
           p='.5rem 1rem'
           bg='pink.400'
           color='#fff'
           mt='2'>
           {formattedPrice}
         </Badge>
         <Flex mt='4'>
           <IconButton
             onClick={handleDecrease}
             disabled={food.quantity <= 1}
             icon={<Minus/>}/>
           <Badge
             h='2.5rem'
             p='2'>
             {food.quantity} 
           </Badge>
           <IconButton
             onClick={handleIncrease}
             icon={<Plus/>}/>
           <IconButton
              onClick={handleRemove}
              icon={<Trash/>}
              bg='pink.400'
              color='#fff'/>
         </Flex>
       </Flex>
     </Box>
  )
}
