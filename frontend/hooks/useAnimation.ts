import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(15)).current;
  const scale = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.stagger(150, [
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(slideUp, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.spring(scale, {
        toValue: 1,
        tension: 35,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return { fadeIn, slideUp, scale };
};