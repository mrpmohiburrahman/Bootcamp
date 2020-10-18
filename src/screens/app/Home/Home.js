import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import AppIntro from "../../../components/AppIntro";
import Button from "../../../components/common/Button";
import Text from "../../../components/common/Text";
import Loading from "../../../components/common/Loading";
import { AuthContext } from "../../../context/AuthContext";
import commonStyles from "../../../theme/common-styles";
import API from '../../../api'
import { Images, Metrics } from "../../../theme";
import Swiper from "react-native-deck-swiper";
import colors from "../../../theme/colors";

const styles=StyleSheet.create({
  card:{
    height:"60%",
    borderRadius:4,
    borderWidth:2,
    borderColor:'#E8E8E8',
    backgroundColor:'white'
  }
})

export default function Home() {
  const {authContext} = useContext(AuthContext)
  const {signOut} = authContext
  const [showOnboarding,setShowOnboarding]=useState(false)
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    fetchBootcamps()
  },[])

  useEffect(()=>{
    checkOnboarding()
  },[])

  

  const checkOnboarding= async ()=>{
    const isVisited= await AsyncStorage.getItem("visited")
    if(!isVisited){
      setShowOnboarding(true)
    }
    
  }

  const fetchBootcamps =()=>{
    API.get("bootcamps/explore")
    .then((res)=>{
      console.log("res === ",res.data)
      setList(res.data.data)
      setLoading(false)
    })
    .catch((err)=>{
      setLoading(false)
      console.log("err",err)
    })
  }


  const toggleModal=()=>{
    setShowOnboarding(!showOnboarding)
  }
  
  const renderCard=(card, index)=>{
    return(
      <View style={styles.card}>
        <View 
          style={{
            flexDirection:'row',
            alignItems:'center',
            margin:Metrics.base}}
          >
            <Image source={Images.location}/>
            <Text caption bold style={{marginLeft:Metrics.halfBase}}>
            {card.address}
            </Text>
        </View>
        
        <View 
          style={{
            paddingTop:10, //60
            backgroundColor:card.coverColor.code,
            paddingBottom:Metrics.base}}>
          <View>
            <Text centered display bold white>
              {card.title}
            </Text>

            <View style={{flexDirection:'row', marginTop:Metrics.base, alignSelf:'center'}}>
              <View style={{flexDirection:"row", alignItems:'center'}}>
                <Image source={Images.calender}/>
                <Text style={{marginLeft:6}} white>
                {card.duration} months
                </Text>
              </View>

              <View style={{
                  flexDirection:'row',
                  alignItems:'center',
                  marginLeft:Metrics.base}}
                  >
                <Image source={Images.teacher}/>
                <Text style={{marginLeft:6}} white>
                  {card.user.name}
                </Text>
              </View>
            </View>
          </View>
          
          <View style={{
            alignSelf:'flex-end',
            flexDirection:'row',
            marginRight:Metrics.base}}>
              {card.isScholarship && (
                <View 
                    style={{
                      // alignSelf:'flex-end',
                      // margin:Metrics.base,
                      marginTop:Metrics.doubleBase,
                      borderColor:'white',
                      borderWidth:1,
                      borderRadius:30,
                      padding: 6,
                      paddingHorizontal:10,}}>
                      <Text caption white>
                        Scholarship
                      </Text>
                  </View>
              )}
             
              {card.jobGuarantee && (
                <View 
                style={{
                  // alignSelf:'flex-end',
                  marginLeft:Metrics.halfBase,
                  marginTop:Metrics.doubleBase,
                  borderColor:'white',
                  borderWidth:1,
                  borderRadius:30,
                  padding: 6,
                  paddingHorizontal:10,}}>
                  <Text caption white>
                    Job Ready
                  </Text>
                </View>
              )}              
          </View>
        </View>

        <View style={{margin:Metrics.base}}>
            <Text title bold>
              {card.title}
            </Text>
            <View style={{marginTop:6}}>
              <Text midGrey>{card.description}</Text>
            </View>
          </View>
      </View>
    )
  }
  const onSwiped=(direction,index,item)=>{
    console.log(direction,index,item)

    API.post("bootcampLogs",{
      bootcamp:item._id,
      status:direction==='left'?'reject':'saved',
    }).then((res)=>{
      console.log('res',res)
    })
  }
  if(loading){
    return <Loading/>
  }

  return (
    <View style={commonStyles.container}>
      <View style={{marginTop: Metrics.doubleBase}}>
        <Text centered display bold primaryColor>
          BOOTCAMPS
        </Text>
      </View>
      <Swiper
        onSwipedLeft={(index,item)=> onSwiped("left", index, item)}
        onSwipedRight={(index, item)=> onSwiped("right", index, item)}
        cards={list}
        cardIndex={0}
        renderCard={renderCard}
        stackSize={3}
        stackSeparation={10}
        backgroundColor={colors.white}
        verticalSwipe={false}
        containerStyle={{position:'relative'}}
      />
      
      <AppIntro visible={showOnboarding} toggleModal={toggleModal}/>
    </View>
  );
}
