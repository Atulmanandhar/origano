import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const width = Dimensions.get('screen').width;

var data = [
  {
    name: 'Ham and Cheese Pizza',
    image: require('../asset/hampizza.jpg'),
    rating: 5,
    price: 12,
  },
];

export default class PizzaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      data_temp: data,
      search: '',
    };
  }
  _rating(item) {
    let rating = [];
    for (i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('../asset/star.png')}
          style={{width: 15, height: 15, marginRight: 3}}
          resizeMode="cover"
        />,
      );
    }
    return rating;
  }

  renderItem = ({item}) => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableWithoutFeedback
          onPress={() =>
            this.props.navigation.navigate('Detail', {
              image: item.image,
              price: item.price,
              name: item.name,
            })
          }>
          <LinearGradient
            colors={['#F47621', '#F89919']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.item}>
            <View style={styles.image_container}>
              <Image source={item.image} style={styles.image} />
            </View>

            <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.rating}>{this._rating(item.rating)}</View>
              <View style={styles.price_container}>
                <View style={styles.price}>
                  <Text style={styles.textPrice}>${item.price}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Detail', {
                  image: item.image,
                  price: item.price,
                  name: item.name,
                })
              }
              style={styles.button}>
              <AntDesign name="arrowright" color="#cc0000" size={15} />
            </TouchableOpacity>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  };

  ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 10,
        }}
      />
    );
  };

  _search(text) {
    let data = [];
    this.state.data_temp.map(function (value) {
      if (value.name.indexOf(text) > -1) {
        data.push(value);
      }
    });
    this.setState({
      data: data,
      search: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
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
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: hp('3.5%'),
              fontWeight: 'bold',
              color: '#EC942A',
            }}>
            Pizza
          </Text>
          <Ionicons
            name="ios-cart"
            color="grey"
            size={28}
            onPress={() => this.props.navigation.navigate('Cart')}
          />
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp('3%'),
  },
  flatList: {
    flex: 1,
  },
  item: {
    flex: 1,
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('3%'),
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp('3%'),
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
  rating: {
    marginTop: hp('1%'),
    flexDirection: 'row',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container: {
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    borderRadius: 50,
  },
  textPrice: {
    color: '#F89919',
    fontWeight: 'bold',
  },
});
