import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowLeftIcon,
  MapIcon,
  MapPinIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from 'react-native-heroicons/outline';
import DishCard from './components/Featured/DishCard';

// coming from resturantCard navigation i state

const ResturantScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      //it will show the header
      // headerTitle: 'Testing',
      // to disable the header not to show
      headerShown: false,
    });
  }, []);
  const {
    params: {
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
    },
  } = useRoute();

  const [text, setText] = useState(short_description.slice(0, 140));
  const [readMore, setReadMore] = useState(false);
  const [isPressed, setIsPressed] = useState();
  const [add, setAdd] = useState(0);

  return (
    <>
      <ScrollView>
        <View style={{ position: 'relative' }}>
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{
              height: 300,
              backgroundColor: '#dcdcdc',
            }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              position: 'absolute',
              top: 30,
              left: 10,
              padding: 10,
              backgroundColor: '#dcdcdc',
              borderRadius: 50,
            }}
          >
            <ArrowLeftIcon size={20} color='#00ccbb' />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#fff', marginHorizontal: 5 }}>
          <View style={{ paddingHorizontal: 4, paddingTop: 10 }}>
            <Text style={{ fontSize: '25%', fontWeight: 'bold' }}>{title}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              marginVertical: 5,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <StarIcon
                style={{ color: 'green', opacity: 1.5, marginHorizontal: 5 }}
                size={22}
              />
              <Text
                style={{
                  paddingHorizontal: 5,
                  color: 'gray',
                  fontWeight: 'bold',
                }}
              >
                <Text
                  style={{
                    color: 'green',
                    marginLeft: 5,
                  }}
                >
                  {rating}
                </Text>{' '}
                . {genre}
              </Text>
            </View>
            {/* second */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <MapPinIcon
                style={{ color: 'gray', opacity: 1.5, marginHorizontal: 5 }}
                size={22}
              />

              <Text
                style={{
                  color: 'gray',
                }}
              >
                {' '}
                Nearby .{address}
              </Text>
            </View>
          </View>
          <Text style={{ color: 'gray', marginTop: 5, paddingBottom: 15 }}>
            {text}
            {!readMore && '...'}
            <TouchableOpacity>
              <Text
                style={{
                  color: '#000',
                  fontSize: 13,
                }}
                onPress={() => {
                  if (!readMore) {
                    setText(short_description); //entire property
                    setReadMore(true); // readmore will remove
                  } else {
                    setText(short_description.slice(0, 150));
                    setReadMore(false);
                  }
                }}
              >
                {readMore ? ' Show Less' : ' Read More'}
              </Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 2,
              padding: 5,
              borderTopWidth: 1,
              width: 370,
              paddingVertical: 20,
              borderTopColor: 'gray',
            }}
          >
            <QuestionMarkCircleIcon color='gray' size={20} opacity={0.6} />
            <Text style={{ paddingLeft: 4, flex: 1, fontWeight: 'bold' }}>
              Have a food allergy
            </Text>
            <ChevronRightIcon color='#00ccbb' />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 3 }}>
          <Text
            style={{
              paddingVertical: 5,
              paddingTop: 6,
              fontWeight: 'bold',
              fontSize: '20%',
            }}
          >
            Menu
          </Text>
          <TouchableOpacity
            onPress={() => setIsPressed(!isPressed)}
            style={{ backgroundColor: '#fff', padding: 10 }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Image
                source={{
                  uri: imgUrl,
                }}
                style={{ height: 200, width: 200 }}
              />
              <Text style={{ width: '45%' }}>
                Getting starving is not an option ,eat when you have to
              </Text>
            </View>
          </TouchableOpacity>
          {isPressed && (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 5,
                  paddingBottom: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => setAdd(add - 1)}
                  style={{ paddingTop: 5 }}
                >
                  <MinusCircleIcon color='#00ccbb' size={40} />
                </TouchableOpacity>
                <Text>{add}</Text>
                <TouchableOpacity
                  onPress={() => setAdd(add + 1)}
                  style={{ paddingTop: 5 }}
                >
                  <PlusCircleIcon color='#00ccbb' size={40} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <Text
            style={{ marginVertical: 30, fontWeight: 'bold', fontSize: 20 }}
          >
            Free Taste Promo
          </Text>
          <DishCard
            id={1}
            name='Fried Rice'
            short_description='Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat'
            price='$50'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRy7YJ9hlRInUY1cRIkvxPZqIwGVQa-VCRg&usqp=CAU'
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ResturantScreen;
