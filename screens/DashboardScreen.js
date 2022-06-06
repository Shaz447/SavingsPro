import React, { useEffect, useState } from "react"
import { Center, Image,NativeBaseProvider, Button,Text} from "native-base"
import { ScrollView, View, TouchableOpacity,FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { getCompany } from "./../store/actions/companyAction";
import { getSubSpecCatAllComp } from "./../store/actions/offerAction";
import { useSelector,useDispatch  } from 'react-redux'
import Transport from './../assets/Transport.png'
import Food from './../assets/Food.png'
import Insurance from './../assets/Insurance.png'
import Digital from './../assets/Digital.png'
import { widthToDP } from "../utils/responsive";

export const DashboardScreen = () => {
  const [category,setCategory] = useState(false)
  const [subCategory, setSubCategory] = useState([])
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const company = useSelector((state) => state.company);
  const offer = useSelector((state) => state.offer);

  const companieslist = company.getcompanies
  const specificoffer = offer.getsubcatcomp
  console.log(specificoffer)
  console.log("companieslist",companieslist)
  useEffect(() => {
    console.log("getcompanies")
    dispatch(getCompany())
  }, [dispatch])



  const handleChange = (newValue) => {

    console.log("newValue", newValue)

    if (newValue === "Insurance") {
      console.log("newValue 0")
      const Insurance = ['Property', 'Auto', 'Health']
      setSubCategory(Insurance)
    }
    else if (newValue === "Digital") {
      console.log("newValue 1")
      const Digital = ['Tv', 'Internet', 'Mobile Phone']
      setSubCategory(Digital)
    }
    else if (newValue === "Transport") {
      console.log("newValue 2")
      const Transport = ['Ride Hailing', 'Trucks', 'Bus', 'Train', 'Airlines']
      setSubCategory(Transport)
    }
    else if (newValue === "Food") {
      console.log("newValue 3")
      const Food = ['Chinese', 'Italian', 'Bakeries & Bistros']
      setSubCategory(Food)

    }
  };



  const handleClick = (subcat) => {
    setCategory(true)
    dispatch(getSubSpecCatAllComp(subcat))
  }

  const renderItem1 = ({ item }) => ( <Center >
    <View style={{ marginTop: 20 }} key={item._id}>
      <TouchableOpacity onPress={() => navigation.navigate('DisplayOfferScreen', { companyId: item._id, thumbnail: item.thumbnail })}>
        <Image source={{ uri: item.thumbnail ? item.thumbnail : null }} alt="image base" width={310} height={150} roundedTop="md" />
      </TouchableOpacity>
    </View>
  </Center>);

const renderItem2 = ({ item,index }) => ( 
<View  key={index}>
  <Button   size="lg" mx={2} borderRadius={50} variant={"solid"}    bg="gray.300"  onPress={() => handleClick(item)} >
    {item}
  </Button>
</View>
  );

  return (
    <View style={{flex:1,marginRight:widthToDP(2),marginLeft:widthToDP(2)}}>
     

     <View style={{height:120}}>
       <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} marginTop={8}>
        
         <Button mx={2} backgroundColor="blue"  borderRadius={15} width={140}  onPress={() => handleChange('Insurance')}>
            <Image source={Insurance} m="auto" alt="insurance" />
            <Text textAlign="center" color="white">Insurance</Text>
          </Button>

          <Button mx={2} backgroundColor="blue"  borderRadius={15}  width={140}  onPress={() => handleChange('Digital')}>
            <Image source={Digital} m="auto" alt="digital" />
            <Text textAlign="center" color="white">Digital</Text>
          </Button>

          <Button mx={2} backgroundColor="blue"  borderRadius={15}  width={140}  onPress={() => handleChange('Transport')}>
            <Image source={Transport} m="auto" alt="transport" />
            <Text textAlign="center" color="white">Transport</Text>
          </Button>

          <Button mx={2} backgroundColor="blue"  borderRadius={15}   width={140} onPress={() => handleChange('Food')}>
            <Image source={Food} m="auto" alt="food" />
            <Text textAlign="center" color="white">Food</Text>
          </Button>

         </ScrollView>
      </View>

      
             {subCategory?
             <View style={{flex:0.3 ,justifyContent:'center',marginTop:widthToDP(2),height:40}}>
               < FlatList
                 data={subCategory}
                 renderItem={renderItem2}
                 keyExtractor={(item, index) => index}
                 horizontal={true}
                />
                 </View>
                :
              ""}
          

     
             <Text style={{textAlign:'center',fontWeight:'bold'}}>Company List</Text>
            {companieslist ?
             <View style={{flex:1,alignItems:'center'}}>
               < FlatList
                 data={companieslist}
                 renderItem={renderItem1}
                 keyExtractor={(item, index) => index}
                
                
                />
                </View>:
             ""}
          

          <Text style={{textAlign:'center' ,fontWeight:'bold'}}>Category List</Text>
          {specificoffer ?
             <View style={{flex:1,alignItems:'center'}}>
               <FlatList
                 data={specificoffer}
                 renderItem={renderItem1}
                 keyExtractor={(item, index) => index}
                
                
                />
                </View>:
             ""}
          

    

    </View>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <DashboardScreen />
     
    </NativeBaseProvider>
  )
}