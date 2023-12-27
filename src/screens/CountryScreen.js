import { View, Text, Image } from 'react-native'
import { styles } from '../utils/Styles'
import IconButton from '../components/IconButton'
import React, { useEffect } from 'react'
import * as countries from '../utils/data.json'
import { fetchData } from '../utils/Functions'

export default function CountryScreen({ route, navigation }) {
  const { container } = styles
  const { country } = route.params
  const {
    name,
    population,
    capital,
    region,
    flags,
    subregion,
    tld,
    currencies,
    languages,
    borders
  } = country

  useEffect(() => {
    Object.entries(borders).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
    })
  }, [])

  const borderComponents = borders.map((countryCode, index) => (
    <Text key={index} style={styles.borderCountry}>
      {countryCode}
    </Text>
  ))

  return (
    <View style={container}>
      {/* <IconButton title="Back" icon="arrowleft" onPress={{}} />
      <View style={{ marginTop: 20 }} /> */}
      <Image style={styles.image} source={{ uri: flags['png'] }} />
      <View style={{ marginTop: 10 }} />
      <Text style={[styles.countryTitle, { fontSize: 24 }]}>
        {name['official']}
      </Text>
      <View style={{ marginTop: 20 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Native Name:</Text>{' '}
        {Object.values(name['nativeName'])
          .map((language) => language.common)
          .join(', ')}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Population:</Text>{' '}
        {population.toLocaleString('en-US', { style: 'decimal' })}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Region:</Text> {region}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Sub Region:</Text> {subregion}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Capital:</Text> {capital}
      </Text>
      <View style={{ marginTop: 30 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Top Level Domain:</Text>{' '}
        {tld.join(', ')}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Currencies:</Text>{' '}
        {Object.values(currencies)
          .map((currency) => currency.name)
          .join(', ')}
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Languages:</Text>{' '}
        {Object.values(languages).join(', ')}
      </Text>
      <View style={{ marginTop: 30 }} />
      <Text style={styles.countryTitle}>Border Countries:</Text>
      <View style={{ marginTop: 10 }} />
      <View style={{ flexDirection: 'row' }}>{borderComponents}</View>
    </View>
  )
}
