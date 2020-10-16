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
    
  }
  const toggleModal=()=>{
    setShowOnboarding(!showOnboarding)
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
      <AppIntro visible={showOnboarding} toggleModal={toggleModal}/>
    </View>
  );
}
