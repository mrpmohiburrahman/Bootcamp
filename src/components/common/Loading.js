import {Colors} from '../../theme'

export default function Loading({size='large'}){
    return (
        <View>
            <ActivityIndicator color={Colors.primary} />
        </View>
    )
}