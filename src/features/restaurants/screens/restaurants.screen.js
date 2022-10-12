import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaruantInfoCard } from "../components/restaurant-info-card.component";

export const RestaruantsScreen = () => {


  return (
    <SafeAreaView style={ styles.container }>
        <View style={ styles.search }>
          <Searchbar />
        </View>
        <View style={ styles.list }>
         <RestaruantInfoCard />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:StatusBar.currentHeight
  },
  search: {
    padding:16, 
  },
  list: {
    flex:1, 
    padding:16, 
    // backgroundColor:'blue'
  }
});