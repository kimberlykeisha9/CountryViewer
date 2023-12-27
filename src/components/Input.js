import { AntDesign } from '@expo/vector-icons'
import { View, TextInput } from 'react-native'
import { styles } from '../utils/Styles' 

export function Input(props) {
  const { placeholder } = props
  const { input } = styles
  return (
    <View style={input}>
      <AntDesign
        name="search1"
        size={20}
        color="#999"
        style={{ marginRight: 30 }}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={{ flex: 1, paddingVertical: 8, fontSize: 16 }}
      />
    </View>
  )
}
