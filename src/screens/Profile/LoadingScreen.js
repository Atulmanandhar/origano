import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

export class LoadingScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? 'Profile' : 'Login');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Loading ...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
