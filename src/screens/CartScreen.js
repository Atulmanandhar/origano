import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Tooltip} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import RBSheet from 'react-native-raw-bottom-sheet';
import Checkout from '../components/Checkout';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('screen').width;
export class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      isEmpty: false,
    };
  }

  getdata = () => {
    AsyncStorage.getItem('cart').then((cart) => {
      //console.log(cart);
      if (cart !== null) {
        const cartfood = JSON.parse(cart);
        this.setState({dataCart: cartfood, isEmpty: false});
      }
    });
  };
  componentDidMount() {
    //Reload Trick
    const {navigation} = this.props;
    console.log(navigation);
    //Adding an event listner om focus
    this.focusListener = navigation.addListener('focus', () => {
      console.log('cart component rendered');
      this.getdata();
    });
  }
  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
  }
  onChangeQuat(i, type) {
    const tempDataCart = this.state.dataCart;
    let cartq = tempDataCart[i].quantity;
    if (type) {
      cartq = cartq + 1;
      tempDataCart[i].quantity = cartq;
      this.setState({dataCart: tempDataCart});
    } else if (type == false && cartq >= 2) {
      cartq = cartq - 1;
      tempDataCart[i].quantity = cartq;
      this.setState({dataCart: tempDataCart});
    } else if (type == false && cartq == 1) {
      tempDataCart.splice(i, 1);
      this.setState({dataCart: tempDataCart});
    }

    AsyncStorage.setItem('cart', JSON.stringify(this.state.dataCart));
  }
  onCrossItem(i) {
    const tempDataCart = this.state.dataCart;
    tempDataCart.splice(i, 1);
    this.setState({dataCart: tempDataCart});
    AsyncStorage.setItem('cart', JSON.stringify(this.state.dataCart));
  }

  onCartTotal() {
    let total = 0;
    const cart = this.state.dataCart;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price * cart[i].quantity;
    }
    return total;
  }

  renderEmpty() {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          flex: 1,
          alignItems: 'center',
        }}>
        <View>
          {/* <Image source={EmptyCart} style={{height: 200, width: 200}} /> */}
          <Icon name={'ios-cart'} style={[{color: '#ddd'}]} size={200} />
          <Text
            style={{
              fontSize: hp('3.5%'),
              fontWeight: 'bold',
              color: '#B6B6B6',
              // marginLeft: 20,
              marginHorizontal: wp('3%'),
            }}>
            Cart is Empty
          </Text>
        </View>
      </View>
    );
  }
  renderCartItems() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My Cart</Text>
        </View>
        <View style={{height: 15}} />

        {/* <Text>{JSON.stringify(this.state.dataCart)}</Text> */}
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
          <ScrollView>
            {this.state.dataCart.map((item, i) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderColor: '#cccccc',
                    width: wp('95%'),
                    paddingVertical: hp('2%'),
                  }}>
                  <Image
                    style={{
                      // width: width / 3,
                      // height: width / 3,
                      width: wp('30%'),
                      height: hp('18%'),
                      borderRadius: 4,
                    }}
                    source={item.food.image}
                  />
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{marginHorizontal: wp('5%')}}>
                      <Text style={{fontSize: hp('2.5%'), fontWeight: 'bold'}}>
                        {item.food.name}
                      </Text>
                      {/* {JSON.stringify(item)} */}
                      <Text style={{fontSize: hp('1.7%'), fontWeight: 'bold'}}>
                        Size :
                        <Text style={{color: 'grey'}}> {item.food.size}</Text>
                      </Text>

                      <Text style={{fontSize: hp('1.7%'), fontWeight: 'bold'}}>
                        Toppings :
                        {item.ingredients.map((ingredient) => {
                          return (
                            <Text style={{color: 'grey'}}>
                              {ingredient.x}
                              {'\n'}
                            </Text>
                          );
                        })}
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: wp('5%'),
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                          onPress={() => this.onChangeQuat(i, false)}>
                          <Icon
                            name={'ios-remove-circle'}
                            style={{color: '#EC942A'}}
                            size={30}
                          />
                        </TouchableOpacity>

                        <Text
                          style={{
                            fontWeight: 'bold',
                            marginHorizontal: wp('5%'),
                          }}>
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => this.onChangeQuat(i, true)}>
                          <Icon
                            name={'ios-add-circle'}
                            style={[{color: '#EC942A'}]}
                            size={30}
                          />
                        </TouchableOpacity>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: '#EC942A',
                            fontSize: hp('3%'),
                            marginHorizontal: wp('15%'),
                          }}>
                          ${item.price * item.quantity}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => this.onCrossItem(i)}>
                    <Icon
                      name={'ios-close'}
                      style={[{color: 'grey'}]}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
            <View style={{height: 20}} />
          </ScrollView>
        </View>

        {/* <View style={{height: 10}} /> */}
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <View
            style={{
              marginHorizontal: wp('5%'),
            }}>
            <Tooltip
              backgroundColor="transparent"
              containerStyle={{
                flexDirection: 'column',
                width: 200,
              }}
              popover={
                <Text style={{fontSize: 20, color: '#cc0000'}}>
                  <Text
                    style={{
                      fontSize: hp('2.5%'),
                      color: '#000',
                      alignContent: 'flex-end',
                    }}>
                    Sub Total:{''}
                  </Text>
                  ${this.onCartTotal()}
                  {'\n'}
                  <Text style={{fontSize: hp('2.5%'), color: '#cc0000'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: '#000',
                        alignContent: 'flex-end',
                      }}>
                      Tax 5%:{' '}
                    </Text>
                    $
                    {Math.round(
                      this.onCartTotal() * 0.05 * 100 + Number.EPSILON,
                    ) / 100}
                    {'\n'}
                  </Text>
                  <Text style={{fontSize: hp('2.5%'), color: '#cc0000'}}>
                    <Text
                      style={{
                        fontSize: hp('2.5%'),
                        color: '#000',
                        alignContent: 'flex-end',
                      }}>
                      Service 2%:{' '}
                    </Text>
                    $
                    {Math.round(
                      this.onCartTotal() * 0.02 * 100 + Number.EPSILON,
                    ) / 100}
                    {/* {'\n'} */}
                  </Text>
                </Text>
              }>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Icon name={'ios-information-circle-outline'} size={20} />
                <Text
                  style={{
                    fontSize: hp('2.5%'),
                    color: '#EC942A',
                    fontWeight: 'bold',
                  }}>
                  <Text
                    style={{
                      fontSize: hp('2.5%'),
                      color: '#000',
                      fontWeight: 'bold',
                    }}>
                    Total:{' '}
                  </Text>
                  $
                  {this.onCartTotal() +
                    Math.round(
                      this.onCartTotal() * 0.05 * 100 + Number.EPSILON,
                    ) /
                      100 +
                    Math.round(
                      this.onCartTotal() * 0.02 * 100 + Number.EPSILON,
                    ) /
                      100}
                </Text>
              </View>
            </Tooltip>
          </View>
          <View
            style={{
              right: 20,
            }}>
            <TouchableOpacity
              onPress={() => this.RBSheet.open()}
              style={{
                backgroundColor: '#EC942A',
                width: wp('35%'),
                alignItems: 'center',
                padding: 10,
                borderRadius: 30,
              }}>
              <Text style={styles.checkOutButtontext}>CHECKOUT</Text>
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
              <Checkout />
            </RBSheet>
          </View>
        </View>
        <View style={{height: 15}} />
      </View>
    );
  }
  render() {
    if (this.state.dataCart.length != 0) {
      return <View style={{flex: 1}}>{this.renderCartItems()}</View>;
    } else {
      return <View style={{flex: 1}}>{this.renderEmpty()}</View>;
    }
    // return (
    //   <View style={{flex: 1}}>
    //     {this.state.isEmpty && this.renderEmpty()}

    //     {!this.state.isEmpty && this.renderCartItems()}
    //   </View>
    // );
  }
}

export default CartScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginVertical: hp('1%'),
  },
  totalCart: {
    alignContent: 'space-between',
  },
  title: {
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    color: '#EC942A',
  },
  checkOutButtontext: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: 'white',
  },
});
