import React, { useContext } from "react";
import { View, Text } from "react-native";
import AppIntro from "../../../components/AppIntro";
import Button from "../../../components/common/Button";
import { AuthContext } from "../../../context/AuthContext";
import commonStyles from "../../../theme/common-styles";


export default function Home() {
  const {authContext} = useContext(AuthContext)
  const {signOut} = authContext

  return (
    <View style={commonStyles.container}>
        <AppIntro/>
    </View>
  )
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
