import React, { useContext } from "react";
import { View, Text } from "react-native";
import Button from "../../../components/common/Button";
import { AuthContext } from "../../../context/AuthContext";

export default function Home() {
  const {authContext} = useContext(AuthContext)
  const {signOut} = authContext
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
