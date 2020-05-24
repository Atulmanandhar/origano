import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
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
import Carousel from '../components/Carousel';
import {carouselData} from '../carouselData/CarouselData';

var data = [
  {
    name: "Today's Special",
    image: require('../asset/hampizza.jpg'),
  },
  {
    name: 'Pizza',
    image: require('../asset/hampizza.jpg'),
  },
  {
    name: 'Burger',
    image: require('../asset/burgercombo.jpg'),
  },
  {
    name: 'Pastas',
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
      <View style={{paddingHorizontal: 10}}>
        <TouchableWithoutFeedback onPress={() => this.handleClick(item)}>
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
              <Icon
                name="chevron-right"
                size={20}
                color="#fbfbfb"
                style={{paddingTop: hp('0.5%')}}
              />
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    );
  };
  handleClick(item) {
    if (item.name == "Today's Special") {
      this.props.navigation.navigate('Special');
    }
    if (item.name == 'Pizza') {
      this.props.navigation.navigate('Pizza');
    }
    if (item.name == 'Burger') {
      this.props.navigation.navigate('Burger');
    }
    if (item.name == 'Pastas') {
      this.props.navigation.navigate('Pasta');
    }
    if (item.name == 'Salad') {
      this.props.navigation.navigate('Salad');
    }
    if (item.name == 'Desserts') {
      this.props.navigation.navigate('Dessert');
    }
    if (item.name == 'Beverages') {
      this.props.navigation.navigate('Beverage');
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
        <SafeAreaView style={{flex: 1}}>
          <Carousel data={carouselData} />
          <View style={styles.orderBtnsView}>
            <View>
              <TouchableOpacity>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#F47621', '#F89919']}
                  width={wp('35%')}
                  height={hp('6%')}
                  style={styles.buttonDelivery}>
                  <Text style={styles.textOrder}>Delivery </Text>
                  <MaterialCommunityIcons
                    name="truck-fast"
                    color="white"
                    size={20}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#F47621', '#F89919']}
                  width={wp('35%')}
                  height={hp('6%')}
                  style={styles.buttonDelivery}>
                  <Text style={styles.textOrder}>Pickup </Text>
                  <FAIcon name="store" color="white" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.bestMenuText}>OUR BEST MENU</Text>
          </View>
        </SafeAreaView>
      );
    };
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Search')}>
          <View style={styles.searchBtn}>
            <Ionicons name="ios-search" size={22} color="#B6B6B6" />
            <Text
              style={{flex: 1, color: '#B6B6B6', paddingHorizontal: wp('2%')}}>
              Search..
            </Text>
          </View>
        </TouchableOpacity>

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
  searchBtn: {
    flexDirection: 'row',
    height: hp('6%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: wp('2%'),
    paddingHorizontal: wp('3%'),
    borderRadius: 100,
    backgroundColor: '#f7f7f7',
  },
  orderBtnsView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: hp('5%'),
    marginVertical: hp('1%'),
  },
  bestMenuText: {
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    color: '#EC942A',
    marginVertical: hp('2%'),
  },
  item: {
    flex: 1,
    // paddingVertical: 10,
    paddingVertical: hp('1.5%'),
    // paddingHorizontal: 10,
    paddingHorizontal: wp('3%'),
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 150,
    height: 90,
  },
  image: {
    width: '80%',
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
    paddingHorizontal: wp('3%'),
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('3%'),
    // right: 20,
    right: wp('4%'),
  },

  textPrice: {
    color: '#cc0000',
    fontWeight: 'bold',
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
