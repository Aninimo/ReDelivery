import { Badge, Button, Box, Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Flex, Icon, Text } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { ShoppingCart } from 'phosphor-react'
import { useCart } from '../hooks/useCart'
import { SelectedFoods } from './SelectedFoods'
import { formatMoney } from '../utils/formatMoney'

export function Header(){
  const { cartQuantity, cartItemsTotal } = useCart();  
  
  const  formattedTotal = formatMoney(cartItemsTotal)
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return(
    <Flex
      justify='space-between'
      p='5'>
      <Text
        fontSize={['16px','3rem']}>
        ReDelivery
      </Text>

      <Box>
        {cartQuantity >= 1 && 
          <Badge
            w='8'
            h='8'
            p={['2','4']}
            rounded='full'
            bg='pink.400'
            color='#fff'
            mt={['-6','-8']}
            textAlign='center'>
              {cartQuantity}
          </Badge>}
        <Button
          w={['2rem','4rem']}
          h={['2.5rem','4rem']}
          color='#fff'
          bg='pink.400'
          onClick={onOpen}>
          <Icon
            as={ShoppingCart}
            fontSize={['16px','32px']}/>
        </Button>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}>
          <DrawerContent>
            <DrawerHeader>
              <Button
                onClick={onClose}
                ml='90%'
                bg='pink.400'
                color='#fff'>
                x
              </Button>
            </DrawerHeader>
            <DrawerBody>
             <SelectedFoods/>
           </DrawerBody>
           <DrawerFooter>
              <Badge
                p='.5rem 1rem'
                bg='pink.400'
                color='#fff'>
                Total:  R$ {formattedTotal}
              </Badge>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
