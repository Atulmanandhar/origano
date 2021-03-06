import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ScreenHeaders = ({name, props}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: hp('1%'),
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Ionicons
        name="ios-arrow-round-back"
        color="grey"
        size={42}
        onPress={() => props.navigation.goBack()}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: hp('3.5%'),
          fontWeight: 'bold',
          color: '#EC942A',
        }}>
        {name}
      </Text>
      <Ionicons
        name="ios-cart"
        color="grey"
        size={28}
        onPress={() => props.navigation.navigate('Cart')}
      />
    </View>
  );
};

export default ScreenHeaders;
