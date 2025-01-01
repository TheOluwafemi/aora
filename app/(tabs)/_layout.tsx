import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'


import { TabIcon } from '../../components/ui/TabIcon'
import { useColorScheme } from '@/hooks/useColorScheme'

import icons from '@/constants/icons'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarLabelStyle: { marginTop: 4 },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Home"
              color={color}
              focused={focused}
              icon={icons.home}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Bookmark"
              color={color}
              focused={focused}
              icon={icons.bookmark}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Create"
              color={color}
              focused={focused}
              icon={icons.plus}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Profile"
              color={color}
              focused={focused}
              icon={icons.profile}
            />
          ),
        }}
      />
    </Tabs>
  )
}
