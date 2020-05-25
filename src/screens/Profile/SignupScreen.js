import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import * as firebase from 'firebase';
import InputTextField from '../../components/profile/InputTextField';
import {SocialIcon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      email: '',
      password: '',
      errorMessage: null,
    };
  }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        userCredentials.user
          .updateProfile({
            displayName: this.state.fname,
          })
          .then(() => {
            firebase
              .auth()
              .signOut()
              .then(() => this.props.navigation.navigate('Loading'));
          });
      })

      .catch((error) => {
        this.setState({errorMessage: error.message});
      });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {/* <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: hp('2%'),
            }}>
            <Image
              source={require('../asset/origanologo.jpg')}
              style={{height: hp('20%'), width: wp('70%')}}
            />
          </View> */}
          <View
            style={{
              height: hp('2%'),
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: hp('2%'),
            }}>
            {this.state.errorMessage && (
              <Text
                style={{color: 'red', fontSize: hp('2%'), textAlign: 'center'}}>
                {this.state.errorMessage}
              </Text>
            )}
          </View>
          {/* <InputTextField
            title={'Full Name'}
          />
          <InputTextField title={'Email'} />
          <InputTextField
            style={{marginTop: hp('2%')}}
            title={'Password'}
            isSecure={true}
          />
          <InputTextField
            style={{marginTop: hp('2%')}}
            title={'Confirm Password'}
            isSecure={true}
          /> */}
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Full Name"
            onChangeText={(fname) => this.setState({fname})}
            value={this.state.fname}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TouchableOpacity onPress={this.handleSignUp}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#F47621', '#F89919']}
              style={styles.button}>
              <Text style={styles.textOrder}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                styles.text,
                styles.link,
                {
                  fontSize: hp('2%'),
                  color: '#ABB4BD',
                  textAlign: 'center',
                },
              ]}>
              Already have an accound?
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Text style={[styles.text, styles.link]}> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default SignupScreen;

const width = Dimensions.get('screen').width;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    justifyContent: 'center',
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
