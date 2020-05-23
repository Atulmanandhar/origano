import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Carousel from './components/Carousel';
// import {carouselData} from './carouselData/CarouselData';
const width = Dimensions.get('screen').width;

var data = [
  {
    name: 'Pizza',
    image: require('../asset/hampizza.jpg'),
  },
  {
    name: 'Burger',
    image: require('../asset/burgercombo.jpg'),
  },
  {
    name: 'Sides',
    image: require('../asset/hutieu.jpg'),
  },
  {
    name: 'Salad',
    image: require('../asset/cuondiep.jpg'),
  },
  {
    name: 'Desserts',
    image: require('../asset/dessert.jpg'),
  },
  {
    name: 'Beverages',
    image: require('../asset/beverage.jpg'),
  },
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      data_temp: data,
      search: '',
    };
  }

  renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.handleClick(item)}>
        <LinearGradient
          colors={['#ba000d', '#ff7961']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.item}>
          <View style={styles.image_container}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.name}>{item.name}</Text>
            <Icon
              name="chevron-right"
              size={20}
              color="#fbfbfb"
              style={{paddingTop: 8}}
            />
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    );
  };
  handleClick(item) {
    if (item.name == 'Pizza') {
      this.props.navigation.navigate('PizzaScreen');
    }
    if (item.name == 'Burger') {
      this.props.navigation.navigate('BurgerScreen');
    }
    if (item.name == 'Sides') {
      this.props.navigation.navigate('SidesScreen');
    }
    if (item.name == 'Salad') {
      this.props.navigation.navigate('SaladScreen');
    }
    if (item.name == 'Desserts') {
      this.props.navigation.navigate('DessertScreen');
    }
  }
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
    console.log(this.props);
    const listHeader = () => {
      return (
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginVertical: -10,
            }}>
            <View>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#df0f1d', '#ff7961']}
                style={styles.buttonDelivery}>
                <Text style={styles.textOrder}>Delivery </Text>
                <MaterialCommunityIcons
                  name="truck-fast"
                  color="white"
                  size={20}
                />
              </LinearGradient>
            </View>
            <View>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#df0f1d', '#ff7961']}
                style={styles.buttonDelivery}>
                <Text style={styles.textOrder}>Pickup </Text>
                <FAIcon name="store" color="white" />
              </LinearGradient>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#df0f1d',
                marginVertical: 10,
              }}>
              OUR BEST MENU
            </Text>
          </View>
        </View>
      );
    };
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SearchScreen')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#ddd',
              justifyContent: 'center',
              marginHorizontal: 10,
              backgroundColor: '#f7f7f7',
              marginTop: 10,
              marginVertical: 10,
            }}>
            <Ionicons
              name="ios-search"
              size={22}
              style={{marginTop: 6}}
              color="#B6B6B6"
            />
            <Text
              style={{flex: 1, marginLeft: 10, fontSize: 16, color: '#B6B6B6'}}>
              Search..
            </Text>
          </View>
        </TouchableOpacity>
        {/* <Carousel data={carouselData} /> */}

        <View style={styles.container}>
          <View style={styles.flatList}>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorComponent}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={listHeader}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // tabbar: {
  //   flex: 1,
  //   marginTop: width * 0.05,
  //   paddingHorizontal: 30,
  // },
  // title: {
  //   color: 'white',
  //   marginTop: 25,
  //   fontWeight: 'bold',
  //   fontSize: 25,
  // },
  flatList: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 150,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    // borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    right: 20,
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
  price_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  textPrice: {
    color: '#cc0000',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
  },
  buttonDelivery: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginVertical: 20,
    padding: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 50,
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
