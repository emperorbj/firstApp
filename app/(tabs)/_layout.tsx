import {Ionicons} from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'

export default function Tabslayout() {
  return (
    <Tabs 
    screenOptions={{
        tabBarShowLabel: false
    }}>

      <Tabs.Screen name="index" 
      options={{ tabBarIcon: ({size}) => <Ionicons name="home" size={size} /> } } />
    <Tabs.Screen name="Profile" options={{ tabBarIcon: ({size}) => <Ionicons name="person" size={size}/> }} />
      <Tabs.Screen name="create" options={{ tabBarIcon: ({size}) => <Ionicons name="add-circle" size={size}/> }} />
      <Tabs.Screen name="bookmarks" options={{ tabBarIcon: ({size}) => <Ionicons name="bookmark" size={size}/> }} />
      <Tabs.Screen name="Notify" options={{ tabBarIcon: ({size}) => <Ionicons name="notifications" size={size}/> }} />

    </Tabs>
  )
}