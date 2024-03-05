/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigator from './src/navigation';
import {RecoilRoot} from 'recoil';
function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
