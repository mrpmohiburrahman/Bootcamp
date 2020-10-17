import React, {useState,useEffect} from "react";
import { View, Image, FlatList,TouchableOpacity } from "react-native";
import Text from "../../../components/common/Text";
import {Colors, Images, Metrics} from '../../../theme'
import API from '../../../api'
import commonStyles from '../../../theme/common-styles'
import Loading from '../../../components/common/Loading'
export default function Profile() {
  const [loading, setLoading]=useState(true)
  const [bootcampsLoading, setBootcampsLoading] = useState(true)
  const [userData, setUserData]=useState(null)
  const [bootcampsData,setBootcampsData]=useState([])

  useEffect(()=>{
    getUserData()
  },[])
  
  useEffect(()=>{
    getUserBootcamps()
  },[])

  const getUserData = async ()=>{
    const response=await API.get("auth/profile")
    setUserData(response.data.data)
    setLoading(false)
  }

  const getUserBootcamps = async()=>{
    const response = await API.get("bootcamps/getuserbootcamps")
    setBootcampsData(response.data.data)
    setBootcampsLoading(false)
    
  }

  if(loading){
    return <Loading/>
  }

  const renderItem = ({item, index})=>{
    console.log('item',item)
    return(
      <View style={{borderRadius:8, padding:18,backgroundColor:item.coverColor.code,width:Metrics.screenWidth*0.5,margin:5,}}>
        <Text numberOfLines={1} white title centered>
          {item.title}
        </Text>
        <TouchableOpacity onPress={()=>{
          console.log('item id', item._id  )
          //setBootcampsLoading
          API.delete(`bootcamps/${item._id}`).then((res)=>{
            console.log("res delete", res)
            if(res.status===200){
              const newList=bootcampsData.filter(
                (value)=>value._id!==item._id
              )
              setBootcampsData(newList)
            }
          })
        }} style={{alignSelf:'flex-end', marginTop:15}}>
          <Image source={Images.delete}/>

        </TouchableOpacity>
      </View>

    )
  }

  const renderBootcamps=()=>{
    if(bootcampsData.length===0){
      return(
        <View style={{margin:Metrics.base}}>
          <Text bold title>My Bootcamps</Text>
          <Image source={Images.emptyBootcamps}/>
          <Text centered bold>You have not created any bootcamps yet.</Text>
        </View>
      )
    }
    return(
      <View>
        <Text bold title>My Bootcamps</Text>
        <FlatList
          data={bootcampsData}
          keyExtractor={(item,index)=>index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal:Metrics.base}}
          renderItem={renderItem}
        />
      </View>

    )

  }
  return (
    <View style={commonStyles.container}>
      <View style={{backgroundColor:Colors.green,borderBottomRightRadius:80,paddingVertical:Metrics.doubleBase,paddingHorizontal:Metrics.base}}>


        <Text>Profile</Text>
        <View style={{marginTop:Metrics.base}}>
          <Text white>{userData.name}</Text>
          <Text white>{userData.email}</Text>

          <View style={{marginTop:Metrics.halfBase}}>
            <Text white>
            {userData.bio}
            </Text>

          </View>
        </View>
      </View>
      <View>
        {bootcampsLoading?<Loading/>:renderBootcamps()}
      </View>
    </View>
  );
}
