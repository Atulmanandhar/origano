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
import LinearGradient from 'react-native-linear-gradient';

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
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: hp('2%'),
            }}>
            <Image
              source={require('../asset/origanologo.jpg')}
              style={{height: hp('20%'), width: wp('70%')}}
            />
          </View> */}

          <InputTextField title={'Email'} />
          <InputTextField
            style={{marginTop: hp('2%')}}
            title={'Password'}
            isSecure={true}
          />

          <Text style={[styles.text, styles.link, {textAlign: 'right'}]}>
            Forgot Password?
          </Text>
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#F47621', '#F89919']}
              style={styles.button}>
              <Text style={styles.textOrder}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text
            style={[
              styles.text,
              {
                fontSize: hp('2%'),
                color: '#ABB4BD',
                textAlign: 'center',
                marginTop: hp('3%'),
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
export default ProfileScreen;

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
