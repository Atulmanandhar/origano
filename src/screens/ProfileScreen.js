import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import InputTextField from '../components/profile/InputTextField';
import {SocialIcon} from 'react-native-elements';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {/* <View
            style={{
              marginTop: hp('5%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../asset/pizzalogomed.png')} />
            <Text
              style={[
                styles.text,
                {marginTop: 10, fontSize: 28, fontWeight: '500'},
              ]}>
              Origano FireWood Pizza
            </Text>
          </View> */}

          {/* <View
            style={{
              marginTop: hp('5%'),
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <View style={styles.socialButton}>
                <Image
                  source={require('../asset/facebook.png')}
                  style={styles.socialLogo}
                />
                <Text style={styles.text}>Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.socialButton}>
                <Image
                  source={require('../asset/google.png')}
                  style={styles.socialLogo}
                />
                <Text style={styles.text}>Google</Text>
              </View>
            </TouchableOpacity>
          </View> */}
          {/* 
          <Text
            style={[
              styles.text,
              {
                color: '#ABB4BD',
                fontSize: 15,
                textAlign: 'center',
                marginVertical: 20,
              },
            ]}>
            or
          </Text> */}
          <InputTextField title={'Email'} />
          <InputTextField
            style={{marginTop: 32, marginBottom: 8}}
            title={'Password'}
            isSecure={true}
          />

          <Text style={[styles.text, styles.link, {textAlign: 'right'}]}>
            Forgot Password?
          </Text>
          <TouchableOpacity style={styles.submitContainer}>
            <Text
              style={[
                styles.text,
                {color: '#fff', fontWeight: '600', fontSize: 16},
              ]}>
              Login
            </Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                color: '#ABB4BD',
                textAlign: 'center',
                marginTop: 24,
              },
            ]}>
            Don't have an account yet?
            <Text style={[styles.text, styles.link]}> Register Now</Text>
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.text,
              {
                color: '#ABB4BD',
                fontSize: 15,
                textAlign: 'center',
                marginVertical: 20,
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
export default ProfileScreen;

const width = Dimensions.get('screen').width;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Avenier Next',
    color: '#1D2029',
  },
  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171,180,189,0.65)',
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: 'rgba(171,180,189,0.35)',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    color: '#FF1654',
    fontSize: 14,
    fontWeight: '500',
  },
  submitContainer: {
    backgroundColor: '#FF1654',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 14,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255,22,84,0.24)',
    shadowOffset: {width: 0, height: 9},
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});
