import {Ionicons} from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'
import {COLORS} from '../../constants/themes'

export default function Tabslayout() {
  return (
    <Tabs 
    screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle:{
           height: 50,
           position: 'absolute',
           bottom: 0,
           left: 0,
           right: 0,
           elevation: 0,
            backgroundColor: COLORS.secondary,
            
        }
    }}>

      <Tabs.Screen name="index" 
      options={{ tabBarIcon: ({size,color}) => <Ionicons name="home" color={COLORS.primary} size={size} /> } } />
      <Tabs.Screen name="Profile" 
      options={{ tabBarIcon: ({size}) => <Ionicons name="person" size={size} color={COLORS.primary}/> }} />
      <Tabs.Screen name="create" 
      options={{ tabBarIcon: ({size}) => <Ionicons name="add-circle" size={size} color={COLORS.primary}/> }} />
      <Tabs.Screen name="bookmarks" 
      options={{ tabBarIcon: ({size}) => <Ionicons name="bookmark" size={size} color={COLORS.primary}/> }} />
      <Tabs.Screen name="Notify" 
      options={{ tabBarIcon: ({size}) => <Ionicons name="notifications" size={size} color={COLORS.primary}/> }} />

    </Tabs>
  )
}