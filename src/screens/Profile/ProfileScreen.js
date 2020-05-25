import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as firebase from 'firebase';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      displayName: '',
    };
  }
  componentDidMount() {
    const {email, displayName} = firebase.auth().currentUser;

    this.setState({email, displayName});
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hello {this.state.displayName}</Text>
        <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
export default ProfileScreen;

const width = Dimensions.get('screen').width;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Avenier Next',
    color: '#EC942A',
  },
  link: {
    color: '#EC942A',
    fontSize: hp('2%'),
    fontWeight: '500',
    marginTop: hp('2%'),
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    marginVertical: hp('2%'),
    borderRadius: 100,
  },
});
