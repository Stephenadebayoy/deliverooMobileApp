import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { View, Text, ScrollView, Animated, Easing } from 'react-native';
import CatergoryCard from './CatergoryCard';

const Categories = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const progress1 = useRef(new Animated.Value(2));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.circle,
      useNativeDriver: true,
    }).start();
    Animated.timing(scale, {
      toValue: 2,
      useNativeDriver: true,
      duration: 5000,
      easing: Easing.ease,
    }).start();
  });
  return (
    <Animated.ScrollView
      style={{ opacity: progress, shadowOpacity: scale }}
      // style={{ opacity: progress, transform: [{ scale }] }}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CatergoryCard
        imgUrl='https://media.istockphoto.com/photos/nigerian-food-party-jollof-rice-with-fried-chicken-wings-closeup-top-picture-id1057435248?k=20&m=1057435248&s=612x612&w=0&h=3mhLF1h6WVX0Snn5YXSBegGWDUnojA9dHaW7AJcqSAI='
        title='Testing'
      />
      <CatergoryCard
        imgUrl='https://media.istockphoto.com/photos/abak-soup-with-fufu-or-pounded-yam-picture-id1327486579?k=20&m=1327486579&s=612x612&w=0&h=q1Z2asiXaOjSQ_rf1R0CnOGqUg-14V1YpOOC6IX2mtc='
        title='Testin'
      />
      <CatergoryCard
        imgUrl='https://media.istockphoto.com/photos/plate-of-beans-served-with-red-palm-oil-stew-and-a-loaf-of-bread-picture-id654775018?k=20&m=654775018&s=612x612&w=0&h=BI9aL8h52h2OEqVoWBIJ-Iw2BE1WRCAudqHCd-M-cSk='
        title='Testing'
      />
      <CatergoryCard
        imgUrl='https://media.istockphoto.com/photos/african-national-food-dish-nigerian-grilled-meat-and-chicken-dish-picture-id1219948971?k=20&m=1219948971&s=612x612&w=0&h=yL6Lt_T-OveIJxqNe6Q_g5dd4b7jtfra4gn1X5qW19o='
        title='Testing'
      />
      <CatergoryCard
        imgUrl='https://media.istockphoto.com/photos/regional-african-food-picture-id1169415720?k=20&m=1169415720&s=612x612&w=0&h=9CywvzohCjs9m2iAjnhSDKDsBRYpRjJWe20WhKJQn48='
        title='Testing'
      />
      <CatergoryCard
        imgUrl='https://media.istockphoto.com/photos/regional-african-food-picture-id1169415845?k=20&m=1169415845&s=612x612&w=0&h=oEcNjl_nNXLzeG8IRradk8PqP6fguFRF95xWWisHsIE='
        title='Testing'
      />
    </Animated.ScrollView>
  );
};

export default Categories;
