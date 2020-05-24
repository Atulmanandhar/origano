import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import All from './pizzas/All';
import AussieFav from './pizzas/AussieFav';
import Chicken from './pizzas/Chicken';
import Meat from './pizzas/Meat';
import Veg from './pizzas/Veg';
import SeaFood from './pizzas/SeaFood';

export class PizzaScreen extends Component {
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
        <View style={styles.tabbar}>
          <ScrollableTabView
            initialPage={0}
            tabBarActiveTextColor="#EC942A"
            renderTabBar={() => (
              <ScrollableTabBar
                underlineStyle={{
                  backgroundColor: '#EC942A',
                }}
              />
            )}>
            <All tabLabel="All" props={this.props} />
            <AussieFav tabLabel="Aussie Fav" props={this.props} />
            <Chicken tabLabel="Chicken" props={this.props} />
            <Meat tabLabel="Meat" props={this.props} />
            <SeaFood tabLabel="Sea Food" props={this.props} />
            <Veg tabLabel="Veg" props={this.props} />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}
export default PizzaScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp('3%'),
  },
  header: {
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  title: {
    color: '#EC942A',
    fontWeight: 'bold',
    fontSize: 25,
  },
  tabbar: {
    flex: 1,
  },
});
