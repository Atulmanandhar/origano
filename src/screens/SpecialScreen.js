import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './foodliststyles';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScreenHeaders from '../components/ScreenHeaders';

var data = [
  {
    id: 1,
    name: 'Special',
    image: require('../asset/burgercombo.jpg'),
    rating: 5,
    price: 12,
  },
];

export default class SpecialScreen extends Component {
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
        <ScreenHeaders name="Today's Special" props={this.props} />
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
