import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: '#EC942A', fontWeight: 'bold'}}>
        You must login to continue.
      </Text>
      <View style={styles.section}>
        <Text style={{fontSize: 16, color: '#EC942A'}}>
          Already have an account?
        </Text>
        <TouchableOpacity>
          <Text style={styles.btnText}> Login </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={{fontSize: 16, color: '#EC942A'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity>
          <Text style={styles.btnText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  section: {
    flexDirection: 'row',
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomColor: '#A5A5A5',
    borderBottomWidth: 0.5,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EC942A',
  },
});

export default Checkout;
