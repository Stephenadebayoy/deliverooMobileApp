import React from 'react';
import { View, Text, Image } from 'react-native';

const DishCard = ({ id, name, short_description, price, image }) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ width: '50%' }}>{short_description}</Text>
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={{ height: 200, width: 200, position: 'relative' }}
          />
          <Text
            style={{
              position: 'absolute',
              top: 100,
              left: 50,
              fontSize: 25,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DishCard;
