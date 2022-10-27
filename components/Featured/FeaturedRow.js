import React from 'react';
import { useEffect, useRef } from 'react';
import { View, Text, ScrollView, Animated, Easing } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';

const FeaturedRow = ({ id, title, description }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.sin,
      useNativeDriver: true,
    }).start();
  });
  return (
    <Animated.View style={{ opacity: progress }}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
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
        style={{ paddingTop: 10 }}
      >
        <ResturantCard
          id={123}
          imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUQW7Tu3TO48FPfhuuPdhgDzVvlipA01o2A&usqp=CAU'
          title='Ebiripo'
          rating={4.5}
          genre='Nigerian'
          address='34 Ijebu ode str'
          short_description='Ebiripo is a staple of the magnificent and sociable Ijebu people of Western Nigeria. Its a dish made out of grated cocoyam, which is wrapped in local banana leaves, popularly called Moi Moi leaves and steamed, just as you would Moi Moi.'
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl='https://media.istockphoto.com/photos/serving-of-ofada-rice-and-sauce-picture-id1269320975?k=20&m=1269320975&s=612x612&w=0&h=GP3GR8rjLw0TZKXTwfGMxJ_jIID1ucpdEfnimD1fG1Y='
          title='Ofada'
          rating={4.7}
          genre='Nigerian'
          address='34 Ibadan str'
          short_description='Nigeria local rice'
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl='https://media.istockphoto.com/photos/plate-of-beans-served-with-red-palm-oil-stew-and-a-loaf-of-bread-picture-id654775424?k=20&m=654775424&s=612x612&w=0&h=askrHS0wv4qpY4SYjHNH8QWJOnSjn0VKEm3oXaca4hE='
          title='Bread and beans'
          rating={3.9}
          genre='Nigerian'
          address='34 lagos city'
          short_description='Always a morning food to keep the stomach heavy'
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl='https://media.istockphoto.com/photos/roasted-suya-on-display-picture-id1269320918?k=20&m=1269320918&s=612x612&w=0&h=gMfzsGhACV8-2eW7UWmVpuoQzLY-_wTin2MzDFrFo4Y='
          title='Suya meat'
          rating={3.9}
          genre='Nigerian'
          address='34 lagos city'
          short_description='Cow meat roasted '
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={123}
          imgUrl='https://media.istockphoto.com/photos/egusi-and-amala-picture-id1406320763?k=20&m=1406320763&s=612x612&w=0&h=ewYcNpHAj-1I6C7Sm2Qf6jGFZft4awa18SVEj29fT-g='
          title='Amala'
          rating={3.9}
          genre='Nigerian'
          address='2 osun str'
          short_description='Yoruba Swallow with a lovely taste'
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </Animated.View>
  );
};

export default FeaturedRow;
