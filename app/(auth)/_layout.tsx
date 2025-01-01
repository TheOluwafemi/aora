import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <View className='flex justify-center items-center h-full'>
      <Text>AuthLayout</Text>
      <Link href='/home'>Go to Home</Link>
    </View>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})