import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import CheckBox from 'react-native-check-box';

const Checkbox = ({ingredient, addIngredient, checkValue}) => {
  return (
    <View>
      <CheckBox
        style={{flex: 1, padding: 15}}
        onClick={() => addIngredient()}
        isChecked={checkValue}
        checkedImage={
          <Image
            source={require('../asset/added.png')}
            style={{height: 30, width: 30}}
          />
        }
        unCheckedImage={
          <Image
            source={require('../asset/add.png')}
            style={{height: 30, width: 30}}
          />
        }
      />
      <Text
        style={{
          marginLeft: 60,
          fontSize: 18,
          position: 'absolute',
          paddingTop: 18,
        }}>
        {ingredient}
      </Text>
    </View>
  );
};

export default Checkbox;
