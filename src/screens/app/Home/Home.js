import React, { useContext } from "react";
import { View, Text } from "react-native";
import Button from "../../../components/common/Button";
import { AuthContext } from "../../../context/AuthContext";

export default function Home() {
  const {authContest} = useContext(AuthContext)
  const {signOut} = AuthContext
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
