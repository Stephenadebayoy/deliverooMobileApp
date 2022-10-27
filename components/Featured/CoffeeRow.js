import React from 'react';

import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title}</Text>
        <ArrowRightIcon color='#00ccbb' />
      </View>
      <Text style={{ fontSize: 15, color: '#a9a9a9', paddingHorizontal: 4 }}>
        {description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 4 }}
      >
        <ResturantCard
          id={123}
          imgUrl='https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=600'
          title='Jacob Creek'
          rating={4.5}
          genre='Germany'
          address='2 Fred island'
          short_description=''
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl='https://images.pexels.com/photos/2308939/pexels-photo-2308939.jpeg?auto=compress&cs=tinysrgb&w=600'
          title='Sauvignon Blanc'
          rating={4.5}
          genre='Nigerian'
          address='2 lagos island'
          short_description=''
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGVCkuohijpYDHVJvUtHMPbFL_N-Z_ylvRw&usqp=CAU'
          title='Martell'
          rating={4.5}
          genre='Boston'
          address='3 chevron'
          short_description='A cool wine'
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl='https://images.pexels.com/photos/162691/wine-bottle-white-lemons-162691.jpeg?auto=compress&cs=tinysrgb&w=600'
          title='Nobilo'
          rating={4.5}
          genre='France'
          address='7 Cheek fr'
          short_description='A cool wine'
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl='https://images.pexels.com/photos/838673/pexels-photo-838673.jpeg?auto=compress&cs=tinysrgb&w=600'
          title='Imperial Cream'
          rating={4.5}
          genre='Uk'
          address='34 Luxamb'
          short_description='A cool wine'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
