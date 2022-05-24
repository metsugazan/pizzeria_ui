
import React from 'react'
import { Card } from 'react-native-paper';

const CustomImage = (props) => {
  const { source } = props
  return (
  <Card.Cover style={{
    borderColor: '#FFBA08',
    width: 170,
    height: 100,
    borderRadius: 8,
}} source={{ uri: source }} />
  )
}

export default CustomImage
