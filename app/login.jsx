import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserLogin from '../Components/Auth/UserLogin'

const login = () => {
  return (
    <View style={styles.container}>
      <UserLogin/>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})