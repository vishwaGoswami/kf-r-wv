import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const App: React.FC = () => {
  const uri = 'file:///android_asset/web/index.html';
  return (
    // <View style={styles.container}>
    //   <WebView
    //     source={{ uri: 'file:///android_asset/web/index.html' }}
    //     javaScriptEnabled={true}
    //     domStorageEnabled={true}
    //     allowFileAccess={true}
    //     originWhitelist={['*']}
    //     style={{ flex: 1 }}
    //   />
    // </View>
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.helloText}>Hello from React Native!</Text>
    // </SafeAreaView>
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://vishwaGoswami.github.io/kf-r-wv' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   helloText: {
//     fontSize: 24,
//     color: 'blue',
//   },
// });

export default App;

