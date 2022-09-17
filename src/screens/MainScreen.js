import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const MainScreen = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(60);
  const [finish, setFinish] = useState(false);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0 && stop) {
        setTime(time - 1);
      }
      if (time === 0 && !finish) {
        setFinish(true);
        setTime(10);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [start, time, stop, finish]);

  const pressHandler = async () => {
    setStart(true);
    if (time > 0) {
      setStop(!stop);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <View>
        <View style={{alignItems: 'center', marginVertical: 100}}>
          <Text style={{color: '#8649FB', fontWeight: 'bold'}}>
            {finish ? 'BREAK TIME' : 'WORK TIME'}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              padding: 30,
              backgroundColor: '#E4D3FF',
              borderRadius: 350,
            }}>
            <TouchableOpacity
              onPress={pressHandler}
              disabled={finish}
              style={{
                padding: 40,
                borderRadius: 350,
                backgroundColor: '#8649FB',
                alignItems: 'center',
              }}>
              {start ? (
                <>
                  <View style={{padding: 16}}>
                    <Text>00:{time}</Text>
                  </View>
                </>
              ) : (
                <>
                  <Image
                    source={require('../../assets/Object.png')}
                    resizeMode="contain"
                    style={{height: 40, width: 40, tintColor: 'white'}}
                  />
                  <Text style={{fontWeight: '600', color: 'white'}}>
                    Tap to start
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Pressable
          disabled={finish}
          onPress={() => {
            setTime(60);
          }}
          style={{
            marginTop: 30,
            backgroundColor: '#8649FB',
            padding: 10,
            alignItems: 'center',
            borderRadius: 8,
            // width: '80%',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Reset</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
