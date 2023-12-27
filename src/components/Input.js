import { AntDesign } from '@expo/vector-icons'
import { View, TextInput } from 'react-native'
import { styles } from '../utils/Styles' 

export function Input(props) {
  const { placeholder, onChangeText } = props
  const { input } = styles
  return (
    <View style={input}>
      <AntDesign
        name="search1"
        size={20}
        color="hsl(0, 0%, 52%)"
        style={{ marginRight: 30 }}
      />
      <TextInput
      onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="hsl(0, 0%, 52%)"
        style={{ flex: 1, paddingVertical: 8, fontSize: 16 }}
      />
    </View>
  )
}
