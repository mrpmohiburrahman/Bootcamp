import React from "react";
import { View,ScrollView } from "react-native";
import commonStyles from '../../../theme/common-styles'
import { Metrics,Colors } from "../../../theme";
import Text from "../../../components/common/Text";

export default function HomeDetails({ route, navigation }) {
  const {card}=route.params
  return (
    <ScrollView style={commonStyles.container}>
      <View style={{margin:Metrics.base}}>
        <Text title bold>HomeDetails</Text>
        <Text>{card.title}</Text>
        
      </View>
    </ScrollView>
    
  );
}
