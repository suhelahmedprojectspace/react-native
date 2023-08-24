import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

const AnimationPage = () => {
  const [balloonSize] = useState(new Animated.Value(50));

  const inflateBalloon = () => {
    Animated.timing(balloonSize, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={inflateBalloon}>
        <Animated.View
          style={{
            width: balloonSize,
            height: balloonSize,
            backgroundColor: 'blue',
            borderRadius: balloonSize.interpolate({
              inputRange: [50, 150],
              outputRange: [25, 75],
            }),
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AnimationPage;
