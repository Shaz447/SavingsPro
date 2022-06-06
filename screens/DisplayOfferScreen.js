import React, { useEffect } from "react"
import { Center, NativeBaseProvider, Box,Link, Image, Flex, AspectRatio, Tabs, Heading, Stack, Icon, Text } from "native-base"
import { View,FlatList} from 'react-native'
import { getOffer, getofferbycategory } from "./../store/actions/offerAction";
import { useDispatch ,useSelector} from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useRoute, useNavigation } from '@react-navigation/native';

export const DisplayOfferScreen = () => {

  const route = useRoute();
  const companyId = route.params.companyId
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const offer = useSelector((state) => state.offer);

  console.log(offer.getoffer)
  console.log(offer.getofferbycat)
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    dispatch(getOffer(companyId))
  }, [dispatch, companyId])

  const handleChange = (newValue) => {

    console.log("newValue", newValue)

    if (newValue === 0) {
      console.log("newValue 0")
      dispatch(getofferbycategory("All",companyId))
    }
    else if (newValue === 1) {
      console.log("newValue 1")
      dispatch(getofferbycategory("Ride Hailing",companyId))
    }
    else if (newValue === 2) {
      console.log("newValue 2")
      dispatch(getofferbycategory("Trucks",companyId))
    }
    else if (newValue === 3) {
      console.log("newValue 3")
      dispatch(getofferbycategory("Bus",companyId))
    }
    else if (newValue === 4) {
      console.log("newValue 4")
      dispatch(getofferbycategory("Airlines",companyId))
    }


    setValue(newValue);
  };



  const renderItem = ({ item,index }) => (
    <Link onPress={()=>{navigation.navigate("DetailScreen",{
      offerid: item._id
     })}}>
    <Stack borderRadius='md' border={1}  >
    <Image source={{ uri: item.thumbnail ? item.thumbnail : null }} alt="image base" style={{width:"100%",resizeMode:'cover',height:140}} roundedTop="md" />
   
    <Flex justify="center" margin={2} >
        <Flex direction="row" justify="space-between" >

          <Flex>
          <Heading fontSize={20} >
            {item.offername}
          </Heading>

          <Text width="300px" fontSize={15} >
            {item.description}
          </Text>
          </Flex>
          <Icon as={<FontAwesome name="bookmark"  />} color="blue"/>
          </Flex>
     

      
         <Flex mt={3}>
           <Flex>
          <Text bold fontSize={25}>
            Yearly
          </Text>
          </Flex>

          <Text fontSize={30} bold color="red.500">
            ${item.price}
          </Text>
        </Flex>
       
        <Flex direction="row">
          <Icon as={<FontAwesome name="star"  />}  color="blue"/>
          <Icon as={<FontAwesome name="star"   />} color="blue"/>
          <Icon as={<FontAwesome name="star"  />} color="blue"/>
          <Icon as={<FontAwesome name="star" />} color="blue" />
          <Icon as={<FontAwesome name="star"  />} color="blue" />
       
        <Text >
          0 reviews
        </Text>
        </Flex>
     </Flex>
        </Stack>
</Link>
    );


  return (

    <View style={{ flex: 1}}>


      <Box width="100%" >
        <AspectRatio ratio={16 / 9}>
          <Image roundedTop="lg" source={{ uri: route.params.thumbnail ? route.params.thumbnail : null, }}
            alt="image"
          />
        </AspectRatio>

        <Center _text={{ color: "white", fontWeight: "700", fontSize: "30", }} position="absolute" bottom={0} px={2} py={1}>
          GEICO INSURANCE
        </Center>

        <Center _text={{ color: "white", fontWeight: "700", }} position="absolute" top={0} px={2} py={1}>
          <Icon as={<FontAwesome name="chevron-circle-left" />} size="md" m={2} />
        </Center>
      </Box>


     
      <Tabs value={value}  indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
        <Tabs.Bar>
          <Tabs.Tab >All</Tabs.Tab>
          <Tabs.Tab >Ride Hailing</Tabs.Tab>
          <Tabs.Tab >Trucks</Tabs.Tab>
          <Tabs.Tab >Bus</Tabs.Tab>
          <Tabs.Tab >Train</Tabs.Tab>
          <Tabs.Tab >Airlines</Tabs.Tab>
          <Tabs.Tab >Fast Food</Tabs.Tab>
          <Tabs.Tab >Chinese</Tabs.Tab>
          <Tabs.Tab >Italian</Tabs.Tab>
          <Tabs.Tab >Bakeries & Bistros</Tabs.Tab>
          <Tabs.Tab >TV</Tabs.Tab>
          <Tabs.Tab >Internet</Tabs.Tab>
          <Tabs.Tab >Mobile Phone</Tabs.Tab>
          <Tabs.Tab >Property</Tabs.Tab>
          <Tabs.Tab >Auto</Tabs.Tab>
          <Tabs.Tab >Health</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>

      
          <Tabs.View >


          {offer.getoffer ?
            
            <Flex  align="center">
               < FlatList
                 data={offer.getoffer}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
              
                :
             <View>There is no Offer </View>}
              
         </Tabs.View>
              

            
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                 </Flex>
                
                :
             <View>There is no offer related to Ride Hailing</View>}
          </Tabs.View>
          

         
          <Tabs.View>
          {offer.getofferbycat ?
            
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                 </Flex>
             
                :
             <View>There is no offer related to Trucks</View>}
          </Tabs.View>
         


         
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
               
                :
             <View>There is no offer related to Bus</View>}
          </Tabs.View>
         

         
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
               
                :
             <View>
               There is no offer related to Train
               </View>}
          </Tabs.View>
         


         
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                 </Flex>
              
                :
             <View>
               There is no offer related to Airlines
               </View>}
          </Tabs.View>
          


         
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
              
                :
             <View>
               There is no offer related to Fast Food
               </View>}
          </Tabs.View>
          


         
          <Tabs.View>
          {offer.getofferbycat ?
            
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
               
                :
             <View>
               There is no offer related to Chinese
               </View>}
          </Tabs.View>
        


         
          <Tabs.View>
          {offer.getofferbycat ?
            
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
                
                :
             <View>
               There is no offer related to Italian
               </View>}
          </Tabs.View>
         
          



          
          <Tabs.View>
          {offer.getofferbycat ?
          
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
               
                :
             <View>
               There is no offer related to Bakeries & Bistros
               </View>}
          </Tabs.View>
        



         
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                  </Flex>
               
                :
             <View>
               There is no offer related to TV
               </View>}
          </Tabs.View>
          


         
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
               
                :
             <View>
               There is no offer related to Internet
               </View>}
          </Tabs.View>
          


          
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
               
                :
             <View>
               There is no offer related to Mobile Phone
               </View>}
          </Tabs.View>
          


         
          <Tabs.View>
          {offer.getofferbycat ?
          
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                 </Flex>
                
                :
             <View>
               There is no offer related to Property
               </View>}
          </Tabs.View>
        


        
          <Tabs.View>
          {offer.getofferbycat ?
           
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                </Flex>
               
                :
             <View>
               There is no offer related to Auto
               </View>}
          </Tabs.View>
          



          
          <Tabs.View>
          {offer.getofferbycat ?
            
            <Flex  align="center">
               < FlatList
                 data={offer.getofferbycat}
                 renderItem={renderItem}
                 keyExtractor={(item, index) => index}
                
                
                />
                 </Flex>
                
                :
             <View>
               There is no offer related to Health
               </View>}
          </Tabs.View>
         

          
        </Tabs.Views>
      </Tabs>
      

    </View>

  )
}

export default () => {
  return (
    <NativeBaseProvider>

      <DisplayOfferScreen />

    </NativeBaseProvider>
  )
}
