import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaruantInfoCard } from "../components/restaurant-info-card.component";

export const RestaruantsScreen = () => {


  return (
    <SafeArea >
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaruantList 
        data={[{ name: 1 }, { name:2 }]}
        renderItem={ () =><RestaruantInfoCard /> }
        keyExtractor={ (item) => item.name }
      />
    </SafeArea>
  )
}

const SafeArea = styled(SafeAreaView)`
  flex:1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
const SearchContainer = styled.View`
  padding: ${ (props) => props.theme.space[3] };
`
const RestaruantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding: 16,
  }
})``;

