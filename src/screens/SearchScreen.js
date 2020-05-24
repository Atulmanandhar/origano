import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Category from '../components/Explore/Category';

const {height, width} = Dimensions.get('screen');

class SearchScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBox}>
          <Ionicons
            name="ios-search"
            color="#B6B6B6"
            style={{fontSize: 22, marginHorizontal: wp('3%')}}
          />
          <TextInput
            autoFocus={true}
            placeholder="Search"
            style={{flex: 1, color: '#B6B6B6'}}
            // value={this.state.search}
          />
          <TouchableOpacity style={{paddingHorizontal: wp('3%')}}>
            <Ionicons name="ios-close" color="gray" size={20} />
          </TouchableOpacity>
        </View>

        <ScrollView scrollEventThrottle={16}>
          <View style={{flex: 1, paddingTop: 20}}>
            <Text
              style={{
                fontSize: hp('3%'),
                fontWeight: '700',
                paddingHorizontal: wp('5%'),
                color: '#EC942A',
              }}>
              What can we Help you find, John?
            </Text>
            <View style={{height: hp('20%'), marginVertical: hp('3%')}}>
              <ScrollView horizontal={true}>
                <Category
                  imageUri={require('../asset/hampizza.jpg')}
                  name="Ham Pizza"
                />
                <Category
                  imageUri={require('../asset/burgercombo.jpg')}
                  name="Burger Combo"
                />
                <Category
                  imageUri={require('../asset/hutieu.jpg')}
                  name="Noodles"
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('5%'),
    marginVertical: hp('2%'),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
