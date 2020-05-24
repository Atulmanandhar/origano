import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window');
let flatList;
function infiniteScroll(dataList) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;
  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) {
      scrollValue = scrollValue + width;
    } else {
      scrollValue = 0;
      scrolled = 0;
    }
    this.flatList.scrollToOffset({animated: true, offset: scrollValue});
  }, 3000);
}

const Carousel = ({data}) => {
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  });
  return (
    <View>
      <FlatList
        ref={(flatList) => (this.flatList = flatList)}
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <CarouselItem item={item} />;
        }}
      />
    </View>
  );
};

export default Carousel;
