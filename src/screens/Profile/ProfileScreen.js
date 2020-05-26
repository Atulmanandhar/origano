import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import * as firebase from 'firebase';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ProfileDetail from './ProfileDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import CardView from 'react-native-cardview';

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      displayName: '',
      isLoading: false,
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
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating={this.state.isLoading} />
        </View>
      );
    } else {
      return (
        // <SafeAreaView style={styles.container}>
        //   <Text>Hello {this.state.displayName}</Text>
        //   <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
        //     <Text>Logout</Text>
        //   </TouchableOpacity>
        // </SafeAreaView>
        <SafeAreaView style={styles.container}>
          <View style={styles.profileUI}>
            <Image
              source={require('../../asset/user.jpg')}
              style={{height: hp('15%'), width: wp('30%'), borderRadius: 60}}
            />
            <Text
              style={{
                fontSize: hp('3.5%'),
                fontWeight: 'bold',
                marginTop: hp('2%'),
                marginBottom: hp('8%'),
                color: '#fbfbfb',
              }}>
              {/* {this.state.displayName} */}
              Roshan Nepal
            </Text>
          </View>

          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={styles.iconsView}>
              <Image
                source={require('../../asset/phone.png')}
                style={styles.icons}
              />
            </View>
            <View style={styles.detailsView}>
              <Text style={styles.details}>{this.state.displayName}</Text>
            </View>
          </View> */}
          <CardView
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={20}
            style={{
              paddingHorizontal: wp('5%'),
              paddingVertical: hp('2%'),
              marginHorizontal: wp('3%'),
              position: 'absolute',
              marginVertical: hp('30%'),
            }}>
            <ProfileDetail
              name={'+9779862244150'}
              source={require('../../asset/phone.png')}
            />
            <ProfileDetail
              name="enlighray1998@gmail.com"
              source={require('../../asset/mail.png')}
            />
            <ProfileDetail
              name={'Sukedhara-04,Kathmandu'}
              source={require('../../asset/pin.png')}
            />
            <ProfileDetail
              name={'Male'}
              source={require('../../asset/gender.png')}
            />
            <TouchableOpacity
              style={{marginVertical: hp('5%'), alignSelf: 'center'}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#F47621', '#F89919']}
                width={wp('35%')}
                height={hp('6%')}
                style={styles.buttonDelivery}>
                <Text style={styles.textOrder}>Edit Profile </Text>
              </LinearGradient>
            </TouchableOpacity>
          </CardView>
        </SafeAreaView>
      );
    }
  }
}
export default ProfileScreen;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    justifyContent: 'flex-start',
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
  profileUI: {
    width: wp('100%'),
    paddingTop: hp('7%'),
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#EC942A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDelivery: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
    flexDirection: 'row',
    borderRadius: 50,
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
});
