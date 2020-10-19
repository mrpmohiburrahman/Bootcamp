import React from "react";
import { View,ScrollView,Image, TouchableOpacity } from "react-native";
import commonStyles from '../../../theme/common-styles'
import { Images,Metrics,Colors } from "../../../theme";
import Text from "../../../components/common/Text";
import Home from "../Home/Home"

export default function HomeDetails({ route, navigation }) {
  const {card}=route.params
  return (
    <ScrollView style={commonStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View>
          <Image source={Images.back}/>
        </View>
      </TouchableOpacity>
      
      <View style={{margin:Metrics.base}}>
        <Text>{card.title}</Text>
      </View>
    </ScrollView>
    
  );
}
