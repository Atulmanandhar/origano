import React, {Component, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import CheckboxGroup from './CheckboxGroup';
import CheckboxGroup from './CheckboxGroup';

export class DetailTopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
    };
  }
  componentDidMount() {
    console.log(this.props);
  }

  renderSizeSection() {
    const {size} = this.state;
    return (
      <View style={styles.section}>
        <View>
          <Text style={styles.title}>Choose your Size</Text>
        </View>
        <View style={styles.size}>
          <TouchableOpacity
            style={[styles.buttonSize, size === 'small' ? styles.active : null]}
            onPress={() => this.setState({size: 'small'})}>
            <Text style={styles.sizeText}>Small</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonSize,
              size === 'medium' ? styles.active : null,
            ]}
            onPress={() => this.setState({size: 'medium'})}>
            <Text style={styles.sizeText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonSize, size === 'large' ? styles.active : null]}
            onPress={() => this.setState({size: 'large'})}>
            <Text style={styles.sizeText}>Large</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <CheckboxGroup props={this.props} />
      </ScrollView>
    );
  }
}

export default DetailTopping;
const {width, height} = Dimensions.get('screen');
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

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
    borderColor: '#EC942A',
    borderWidth: 1,
    justifyContent: 'space-around',
  },
  buttonSize: {
    flex: 1,
    padding: 14,
    alignContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#EC942A',
    color: '#FFF',
  },
  checkbox: {},
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
  sizeText: {
    fontSize: 16,
  },
});
