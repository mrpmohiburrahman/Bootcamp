import React from "react";
import { View, Text,ScrollView } from "react-native";
import commonStyles from '../../../theme/common-styles'
import { Metrics,Colors } from "../../../theme";

export default function HomeDetails() {

  return (
    <ScrollView style={commonStyles.container}>
      <View style={{margin:Metrics.base}}>
        <Text title bold>HomeDetails</Text>
      </View>
    </ScrollView>
    
  );
}
