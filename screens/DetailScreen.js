import React, { useEffect } from "react"
import {Heading, Image, Flex,Box, Link,NativeBaseProvider,Button,Text} from "native-base"
import { View, ScrollView, StyleSheet, } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { getOfferbyId } from "./../store/actions/offerAction";
import { useDispatch, useSelector } from 'react-redux'

export const DetailScreen = () => {

  const route = useRoute();
  const { offerid } = route.params
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const offer = useSelector((state) => state.offer);
  const offerbyid = offer.getofferbyId
  console.log(offerbyid)

  useEffect(() => {
    dispatch(getOfferbyId(offerid))
  }, [dispatch, offerid])





  return (
    <View style={{ flex: 1 }}>
      <Box rounded="lg" >
        <Image source={{ uri: offerbyid.thumbnail ? offerbyid.thumbnail : null }} alt="image base" height={150} roundedTop="md" />
        <Text position="absolute" bottom={2} left={2} bold color="white" fontSize={30}>
          {offerbyid.offername}
        </Text>
      </Box>

      <ScrollView>
        <View style={{flex:1 ,margin:6 ,padding:2}}>
        <Heading >
          Description
        </Heading>

        <Text >
            {offerbyid.description}
          </Text>

       
        <Flex direction="row" justify="center" >

          <Button bg="#d4d4d4">
            <Link href={offerbyid.LinktoOffer}>
              Visit Offer Online
            </Link>
          </Button>
        </Flex>

        <Flex direction="row" justify="space-around" mt={3}>
          <Text bold>
            Price
          </Text>
          <Text color="red.500" bold>
            {offerbyid.price}
          </Text>
        </Flex>

        <Flex direction="row" justify="space-around" mt={3}>


          <Button
            onPress={() => navigation.navigate("QRCodeScreen", { offerid: offerbyid._id, companyid: offerbyid.companyid })} bg="#27272a"
          >
            Scan QR
          </Button>

        </Flex>
        </View>
      </ScrollView>


    </View>



  )
}


const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: ,
  },
  body: {
    //backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    //color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    //color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    //color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});


export default () => {
  return (
    <NativeBaseProvider>

      <DetailScreen />

    </NativeBaseProvider>
  )
}
