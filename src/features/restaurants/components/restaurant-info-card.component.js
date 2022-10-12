import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native'

export const RestaruantInfoCard = ({ restaurant = {} }) => {
  const {  
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant

  return (
    <Card elevation={ 5 } style={ styles.card }>
      <Card.Cover key={ name } style={ styles.cover } source={{ uri:photos[0] }} />
      <Title>{ name }</Title>
    </Card>
  )
}

const Title = styled.Text`
  padding: 16px;
`

const styles = StyleSheet.create({
  card:{
    backgroundColor:'white'
  },
  cover:{
    padding: 20,
    backgroundColor:'white'
  },
})