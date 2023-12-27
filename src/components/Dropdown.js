import { Picker } from '@react-native-picker/picker'
import { View, Text } from 'react-native'
import { styles } from '../utils/Styles'
import React, { useState } from 'react'

export default function Dropdown(props) {
  const { defaultText, listItems } = props

  const [selectedItem, setSelectedItem] = useState(defaultText)
  return (
    <View
      style={[
        styles.input,
        { width: '70%', paddingVertical: 5, paddingHorizontal: 5 }
      ]}
    >
      <Picker
        itemStyle={{ backgroundColor: '#fff', color: 'black' }}
        mode="dropdown"
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
        style={{ flex: 1 }}
      >
        <Picker.Item label={defaultText} value={defaultText} />
        {listItems.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
    </View>
  )
}
