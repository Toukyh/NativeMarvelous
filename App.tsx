import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-700">App</Text>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;
