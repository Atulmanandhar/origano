import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import InputTextField from '../../components/profile/InputTextField';
import {SocialIcon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import * as firebase from 'firebase';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }
  handleLogin = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
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

          {/* <InputTextField title={'Email'} />
          <InputTextField
            style={{marginTop: hp('2%')}}
            title={'Password'}
            isSecure={true}
          /> */}
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

          <Text style={[styles.text, styles.link, {textAlign: 'right'}]}>
            Forgot Password?
          </Text>
          <TouchableOpacity onPress={this.handleLogin}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#F47621', '#F89919']}
              style={styles.button}>
              <Text style={styles.textOrder}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
              Don't have an account yet?
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Signup');
              }}>
              <Text style={[styles.text, styles.link]}> Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.text,
              {
                color: '#ABB4BD',
                fontSize: hp('2.5%'),
                textAlign: 'center',
                marginVertical: hp('2%'),
              },
            ]}>
            or
          </Text>
          <SocialIcon title="Sign In With Facebook" button type="facebook" />
          <SocialIcon title="Sign In With Google" button type="google" />
        </View>
      </SafeAreaView>
    );
  }
}
export default LoginScreen;

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
