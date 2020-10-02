import React from "react";
import { ActivityIndicator, View } from "react-native";
import {Colors} from '../../theme'

export default function Loading({size='large'}){
    return (
        <View>
            {/* <ActivityIndicator */}
            <ActivityIndicator color={Colors.primary} />
        </View>
    )
}