import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Podcast',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'mic-outline' : 'mic-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          title: 'Record',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'radio-button-on-outline' : 'radio-button-on-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          title: 'Edit',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'create-outline' : 'create-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="publish"
        options={{
          title: 'Publish',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cloud-upload-outline' : 'cloud-upload-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings-outline' : 'settings-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
    
  );
}
