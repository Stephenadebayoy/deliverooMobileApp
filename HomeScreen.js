import { useLayoutEffect } from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from './components/Categories';
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import FeaturedRow from './components/Featured/FeaturedRow';
import CoffeeRow from './components/Featured/CoffeeRow';
import LocalDrinks from './components/Featured/LocalDrinks';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //it will show the header
      // headerTitle: 'Testing',
      // to disable the header not to show
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'gray',
              borderRadius: '50%',
            }}
          />
          {/* flex 1 push the icon to the left  */}
          <View style={{ paddingLeft: '2%', flex: 1 }}>
            <Text style={{ fontWeight: 'bold', color: 'gray' }}>
              Deliver Now!
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              Current Location
              <ChevronDownIcon size={20} color='#00ccbb' />
              {/* <Image
              source={require('./assets/assets/down-arrow.png')}
              fadeDuration={0}
              style={{ width: 20, height: 20 }}
            /> */}
            </Text>
          </View>
          <UserIcon size={35} color='#00ccbb' />
        </View>

        {/* Search */}
        <View
          style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 2,
              backgroundColor: '#dcdcdc',
              padding: 10,
              flex: 1,
            }}
          >
            <MagnifyingGlassIcon color='gray' size={20} />
            <TextInput
              placeholder='Restaurants and Cuisines'
              keyboardType='default'
            />
          </View>
          <AdjustmentsVerticalIcon color='#00ccbb' />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        {/* featured pass the props to FeaturedRoq*/}
        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements from our partners'
        />
        <CoffeeRow
          id='124'
          title='Tasty Discounts'
          description='Paid placements from our partners'
        />
        <LocalDrinks
          id='124'
          title='Local Drinks'
          description='Paid placements from our partners'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
