import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const CatergoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={{ position: 'relative', marginRight: 2 }}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{ width: 85, height: 85, borderRadius: 5 }}
      />
      <Text
        style={{
          position: 'absolute',
          bottom: 1,
          left: 1,
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CatergoryCard;
