import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import RBSheet from 'react-native-raw-bottom-sheet';
import DetailTopping from '../components/DetailTopping';

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('asd');
    console.log(this.props.route.params.name);
    this.state = {
      image: this.props.route.params.image,
      name: this.props.route.params.name,
      price: this.props.route.params.price,
    };
  }

  onClickCart(image, name, price) {
    console.log(name);
    var food = {image: image, name: name};
    var itemCart = {
      food: food,
      price: price,
      quantity: 1,
    };
    AsyncStorage.getItem('cart')
      .then((datacart) => {
        if (datacart !== null) {
          const cart = JSON.parse(datacart);
          cart.push(itemCart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemCart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        }
        alert('Add successful');
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.image_container}>
          <Image source={this.state.image} style={styles.image} />
        </View>
        <View style={styles.back}>
          <Ionicons
            name="ios-arrow-round-back"
            color="white"
            size={35}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <ScrollView style={[styles.footer]}>
          <View style={styles.status}>
            <Text style={{color: '#EC942A'}}>AVALIABLE</Text>
          </View>
          <Text style={styles.textPrice}>${this.state.price}</Text>
          <Text numberOfLines={2} style={styles.textName}>
            {this.state.name.toUpperCase()}
          </Text>
          <Text style={styles.textDetail}>
            The template details auto text code displays the complete template
            details, including attribute details and metric details.
          </Text>
          <TouchableOpacity onPress={() => this.RBSheet.open()}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#F47621', '#F89919']}
              style={styles.button}>
              <Text style={styles.textOrder}>ADD TO CART</Text>
            </LinearGradient>
          </TouchableOpacity>
          <RBSheet
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            height={500}
            openDuration={350}
            closeOnDragDown={true}
            customStyles={{
              container: {
                borderTopEndRadius: 30,
                borderTopStartRadius: 30,
              },
            }}>
            <DetailTopping
              itemName={this.state.name}
              itemImg={this.state.image}
              itemPrice={this.state.price}
            />
          </RBSheet>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const height_image = height * 0.5 * 0.9;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  image_container: {
    width: width,
    height: height_image,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  back: {
    position: 'absolute',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  status: {
    // marginTop: 30,
    marginVertical: hp('2.5%'),
    paddingVertical: hp('0.5%'),
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#EC942A',
  },
  textPrice: {
    color: '#EC942A',
    fontWeight: 'bold',
    fontSize: hp('4%'),
  },
  textName: {
    color: '#3e3c3e',
    fontWeight: 'bold',
    fontSize: hp('6%'),
  },
  textDetail: {
    color: 'gray',
    marginVertical: hp('3%'),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    borderRadius: 100,
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
});
