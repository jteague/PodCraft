import { Image, StyleSheet, Platform, View, TextInput, Text } from 'react-native';
import React, {useState} from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import PodcastDetails from '@/components/podcastDetails';

export default function HomeScreen() {
  const [text, setText] = useState('');
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">PodCraft</ThemedText>
      </ThemedView>
      <PodcastDetails>
          
      </PodcastDetails>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Podcast details</ThemedText>
        <ThemedText>
          This page will have details about the selected podcast. We need some kind of control to show episodes too.
        </ThemedText>
      </ThemedView>
      
      <View style={{padding: 10}}>
      
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
