import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import AppIntro from "../../../components/AppIntro";
import Button from "../../../components/common/Button";
import { AuthContext } from "../../../context/AuthContext";
import commonStyles from "../../../theme/common-styles";


export default function Home() {
  const {authContext} = useContext(AuthContext)
  const {signOut} = authContext
  const [showOnboarding,setShowOnboarding]=useState(false)
  useEffect(()=>{
    checkOnboarding()
  },[])

  const checkOnboarding= async ()=>{
    const isVisited= await AsyncStorage.getItem("visited")
    if(!isVisited){
      setShowOnboarding(true)
    }
    await AsyncStorage.removeItem("visited")
  }
  if(showOnboarding){
    return (
      <View style={commonStyles.container}>
          <AppIntro onDone={()=>{setShowOnboarding(false)}}/>
      </View>
    )
  }

  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={()=>{
          signOut()
        }}
        title='LOG OUT'
      />
    </View>
  );
}
