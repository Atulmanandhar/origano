import React from 'react';
import {View, Text} from 'react-native';
import {AntDesign} from 'react-native-vector-icons/AntDesign';

const TabBarItem = ({iconName, isCurrent}) => {
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AntDesign
        name={iconName}
        size={32}
        style={{color: isCurrent ? '#111' : '#ddd'}}
      />
    </View>
  );
};

export default TabBarItem;
