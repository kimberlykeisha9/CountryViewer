import { View, ScrollView, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../utils/Styles'
import { fetchData } from '../utils/Functions'
import { Input } from '../components/Input'
import Dropdown from '../components/Dropdown'
import CountryCard from '../components/CountryCard'

export default function HomeScreen() {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  const { container } = styles
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const apiUrl =
      'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,nativename,tld,currencies,subregion,languages,borders'

    const fetchDataAsync = async () => {
      try {
        setLoading(true)
        const result = await fetchData(apiUrl)
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchDataAsync()
  }, [])

  const renderItem = ({ item }) => <CountryCard country={item} />

  return (
    <View style={container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      <Input
        placeholder="Search for a country..."
        onChangeText={updateData('https://restcountries.com/v3.1/name/')}
      />
      <View style={{ marginTop: 20 }} />
      <Dropdown
        defaultText="Filter by Region"
        listItems={regions}
        onChange={updateData('https://restcountries.com/v3.1/region/')}
      />
      <View style={{ marginTop: 20 }} />
      <FlatList style={{ width: '100%' }} data={data} renderItem={renderItem} />
    </View>
  )

  function updateData(url) {
    console.log(url)
    return (selectedValue) =>
      fetchData(`${url}${selectedValue}`).then((result) => {
        try {
          setLoading(true)
          setData(result)
        } catch (error) {
          setError(error)
        } finally {
          setLoading(false)
        }
      })
  }
}
