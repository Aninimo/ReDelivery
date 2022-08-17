import { Divider, Flex, Text } from '@chakra-ui/react'
import { useCart } from '../../hooks/useCart'
import { CardFoodSelect } from './CardFoodSelect'


export function SelectedFoods(){
  const { cartItems } = useCart();
  return(
    <>
      <Text
        fontWeight='bold'
        fontSize={['16px','24px']}>
        Foods Selected
      </Text>
    <Flex
      justify='center'
      direction='column'
      align='center'
      gap='3'>
      {cartItems.map((item) => (
        <>
        <CardFoodSelect key={item.id} food={item}/>
       <Divider 
         orientation='horizontal'
         mt='6'
         mb='6'/>
        </>
      ))}    
    </Flex>
    </>
  )
}
