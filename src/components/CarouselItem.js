import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.imageView} source={item.image} />
      <View style={styles.textView}>
        {/* <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width,
    height: height / 3.5,
    backgroundColor: '#fbfbfb',
    marginVertical: hp('1%'),

    // marginBottom: hp('2%'),
    // borderRadius: 10,
    shadowColor: '#000',
    // shadowOffset: {width: 0.5, height: 0.5},
  },
  // textView: {
  //   position: 'absolute',
  //   bottom: 10,
  //   margin: 10,
  //   left: 10,
  // },
  imageView: {
    width: width,
    height: height / 3.5,
    // borderRadius: 10,
  },
});

export default CarouselItem;
