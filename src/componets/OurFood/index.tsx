import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/react'
import { foods } from '../../data/foods'
import { CardFoods } from './CardFoods'

export function OurFood(){
  return(
    <Box
      mt='8'>
      <Text
        fontWeight='bold'>
        Our Foods
      </Text>
      <Grid
        
       templateColumns={['repeat(2, 1fr)','repeat(4,1fr)']}
        gap='3'>
      {foods.map((food) => (
        <GridItem>
        <CardFoods key={food.id} food={food}/>
        </GridItem>
      ))}
      </Grid>
    </Box>
  )
}
