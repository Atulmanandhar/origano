import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {heightPercentageToDP} from 'react-native-responsive-screen';
class InputTextField extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.inputTitle}>{this.props.title}</Text>
        <TextInput
          placeholder={this.props.placeholderText}
          secureTextEntry={this.props.isSecure}
          style={styles.input}></TextInput>
        <View
          style={{borderBottomWidth: 1, borderBottomColor: '#D8D8D8'}}></View>
      </View>
    );
  }
}

export default InputTextField;

const styles = StyleSheet.create({
  inputTitle: {
    color: '#ABB4BD',
    fontSize: 14,
  },
  input: {
    color: '#1D2029',
    fontSize: 14,
    fontFamily: 'Avenier Next',
  },
});
