import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { ImageSourcePropType } from 'react-native'

interface tabIconProps {
  icon: ImageSourcePropType
  color: string
  name: string
  focused: boolean
}

export const TabIcon = ({ icon, color, name, focused }: tabIconProps) => {
  return (
    <View className="gap-2 justify-center items-center">
      <Image
        source={icon}
        tintColor={color}
        resizeMode="contain"
        className='w-6 h-6'
        alt={ name }
      />
    </View>
  )
}
