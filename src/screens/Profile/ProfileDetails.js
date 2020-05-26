import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class ProfileDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsView}>
          <Image source={this.props.source} style={styles.icons} />
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.details}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: hp('0.8%'),
  },
  iconsView: {
    backgroundColor: '#EC942A',
    height: hp('6%'),
    width: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  icons: {
    height: hp('4%'),
    width: wp('7%'),
  },
  detailsView: {
    justifyContent: 'center',
    width: '87%',
  },
  details: {
    fontWeight: 'bold',
    color: '#555555',
    paddingHorizontal: wp('7%'),
  },
});

export default ProfileDetails;
