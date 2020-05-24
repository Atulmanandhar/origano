import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Checkbox from './Checkbox';
import AsyncStorage from '@react-native-community/async-storage';
const {width, height} = Dimensions.get('screen');

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sausage: 0,
      pepporoni: 0,
      pineapple: 0,
      mushrooms: 0,
      onions: 0,
      bacon: 0,
      extraCheese: 0,
      blackOlives: 0,
      greenPeppers: 0,
      finalIngredients: [],
      size: '',
    };
  }
  componentDidMount = () => {
    // console.log(this.props.props);
  };
  renderSizeSection() {
    const {size} = this.state;
    return (
      <View style={styles.section}>
        <View>
          <Text style={styles.title}>Choose your Size</Text>
        </View>
        <View style={styles.size}>
          <TouchableOpacity
            style={[styles.buttonSize, size === 'Small' ? styles.active : null]}
            onPress={() => this.setState({size: 'Small'})}>
            <Text style={styles.sizeText}>Small</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonSize,
              size === 'Medium' ? styles.active : null,
            ]}
            onPress={() => this.setState({size: 'Medium'})}>
            <Text style={styles.sizeText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonSize, size === 'Large' ? styles.active : null]}
            onPress={() => this.setState({size: 'Large'})}>
            <Text style={styles.sizeText}>Large</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onSubmitCart = () => {
    // this.makeingredientsarray();
    //   console.log(this.state);
    let newArry = [...this.state.finalIngredients];
    if (this.state.sausage) {
      let x = 'Sausage';
      newArry = [...newArry, {x}];
    }
    if (this.state.pepporoni) {
      let x = 'Pepporoni';
      newArry = [...newArry, {x}];
    }
    if (this.state.pineapple) {
      let x = 'Pineapple';
      newArry = [...newArry, {x}];
    }
    if (this.state.mushrooms) {
      let x = 'Mushrooms';
      newArry = [...newArry, {x}];
    }
    if (this.state.onions) {
      let x = 'Onions';
      newArry = [...newArry, {x}];
    }
    if (this.state.bacon) {
      let x = 'Bacon';
      newArry = [...newArry, {x}];
    }
    if (this.state.extraCheese) {
      let x = 'Extra Cheese';
      newArry = [...newArry, {x}];
    }
    if (this.state.blackOlives) {
      let x = 'Black Olives';
      newArry = [...newArry, {x}];
    }
    if (this.state.greenPeppers) {
      let x = 'Green Peppers';
      newArry = [...newArry, {x}];
    }
    var food = {
      image: this.props.props.itemImg,
      name: this.props.props.itemName,
      size: this.state.size,
    };
    var itemCart = {
      food: food,
      price: this.props.props.itemPrice,
      quantity: 1,
      ingredients: newArry,
    };

    // console.log('food', itemCart);

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
  };

  renderIngridientSection() {
    return (
      <View style={styles.section}>
        <View>
          <Text style={{fontSize: 18, marginVertical: 14}}>
            Add Ingredients
          </Text>
        </View>
        <View>
          <Checkbox
            ingredient="Sausage"
            addIngredient={() => {
              this.setState({sausage: !this.state.sausage});
            }}
            checkValue={this.state.sausage}
          />
          <Checkbox
            ingredient="Pepporoni"
            addIngredient={() => {
              this.setState({pepporoni: !this.state.pepporoni});
            }}
            checkValue={this.state.pepporoni}
          />
          <Checkbox
            ingredient="Pineapple"
            addIngredient={() => {
              this.setState({pineapple: !this.state.pineapple});
            }}
            checkValue={this.state.pineapple}
          />
          <Checkbox
            ingredient="Mushrooms"
            addIngredient={() => {
              this.setState({mushrooms: !this.state.mushrooms});
            }}
            checkValue={this.state.mushrooms}
          />
          <Checkbox
            ingredient="Onions"
            addIngredient={() => {
              this.setState({onions: !this.state.onions});
            }}
            checkValue={this.state.onions}
          />
          <Checkbox
            ingredient="Bacon"
            addIngredient={() => {
              this.setState({bacon: !this.state.bacon});
            }}
            checkValue={this.state.bacon}
          />
          <Checkbox
            ingredient="Extra Cheese"
            addIngredient={() => {
              this.setState({extraCheese: !this.state.extraCheese});
            }}
            checkValue={this.state.extraCheese}
          />
          <Checkbox
            ingredient="Black Olives"
            addIngredient={() => {
              this.setState({blackOlives: !this.state.blackOlives});
            }}
            checkValue={this.state.blackOlives}
          />
          <Checkbox
            ingredient="Green Peppers"
            addIngredient={() => {
              this.setState({greenPeppers: !this.state.greenPeppers});
            }}
            checkValue={this.state.greenPeppers}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderSizeSection()}
        {this.renderIngridientSection()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: '#EC942A',
              width: width - 30,
              flex: 1,
              alignItems: 'center',
              padding: 10,
              borderRadius: 5,
              marginBottom: 20,
            }}
            onPress={this.onSubmitCart}>
            <Text style={styles.checkOutButtontext}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CheckboxGroup;

var styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomColor: '#A5A5A5',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 18,
    marginVertical: 14,
  },
  size: {
    flexDirection: 'row',
    borderRadius: 7,
    borderColor: '#FF7657',
    borderWidth: 1,
    borderColor: '#FF7657',
    justifyContent: 'space-around',
  },
  buttonSize: {
    flex: 1,
    padding: 14,
    alignContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#FF7657',
    color: '#FFF',
  },
  sizeText: {
    fontSize: 16,
  },
  checkOutButtontext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
