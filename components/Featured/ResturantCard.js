import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';
const ResturantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Resturant', {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      style={{ backgroundColor: 'white', marginRight: 3, shadowOpacity: 0.5 }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{ height: 150, width: 200 }}
      />
      <View style={{ paddingHorizontal: 3, paddingBottom: 4 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 2 }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 1,
          marginRight: 1,
        }}
      >
        <StarIcon color='green' opacity={0.5} size={22} />
        <Text>
          <Text style={{ color: 'green' }}>{rating}</Text> .{genre}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 1,
        }}
      >
        <MapPinIcon color='green' opacity={0.4} size={22} />
        <Text style={{ fontSize: 15, color: '#a9a9a9' }}>
          Nearby . {address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
