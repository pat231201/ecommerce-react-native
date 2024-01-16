import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';

const ModalScreen = ({isVisible, onClose}) => {
  return (
    <BottomModal
      onBackdropPress={() => setModalVisible(!modalVisible)}
      swipeDirection={['up', 'down']}
      swipeThreshold={200}
      modalAnimation={
        new SlideAnimation({
          slideFrom: 'bottom',
        })
      }
      onHardwareBackPress={() => setModalVisible(!modalVisible)}
      visible={modalVisible}
      onTouchOutside={() => setModalVisible(!modalVisible)}>
      <ModalContent style={{width: '100%', height: 400}}>
        <View style={{marginBottom: 8}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            Choose your Location
          </Text>

          <Text style={{marginTop: 5, fontSize: 16, color: 'gray'}}>
            Select a delivery location to see product availabilty and delivery
            options
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* already added addresses */}
          {addresses?.map((item, index) => (
            <Pressable
              //   onPress={() => setSelectedAddress(item)}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('Address');
              }}
              style={{
                width: 140,
                height: 140,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                marginRight: 15,
                marginTop: 10,
                backgroundColor: selectedAddress === item ? '#FBCEB1' : 'white',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                  {item?.name}
                </Text>
                {/* <Entypo name="location-pin" size={24} color="red" /> */}
              </View>

              <Text
                numberOfLines={1}
                style={{width: 130, fontSize: 13, textAlign: 'center'}}>
                {item?.houseNo},{item?.landmark}
              </Text>

              <Text
                numberOfLines={1}
                style={{width: 130, fontSize: 13, textAlign: 'center'}}>
                {item?.street}
              </Text>
              <Text
                numberOfLines={1}
                style={{width: 130, fontSize: 13, textAlign: 'center'}}>
                India, Bangalore
              </Text>
            </Pressable>
          ))}

          <Pressable
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('Address');
            }}
            style={{
              width: 140,
              height: 140,
              borderColor: '#D0D0D0',
              marginTop: 10,
              borderWidth: 1,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#0066b2',
                fontWeight: '500',
              }}>
              Add an Address or pick-up point
            </Text>
          </Pressable>
        </ScrollView>

        <View style={{flexDirection: 'column', gap: 7, marginBottom: 30}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            {/* <Entypo name="location-pin" size={22} color="#0066b2" /> */}
            <Text style={{color: '#0066b2', fontWeight: '400'}}>
              Enter an Indian pincode
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            {/* <Ionicons name="locate-sharp" size={22} color="#0066b2" /> */}
            <Text style={{color: '#0066b2', fontWeight: '400'}}>
              Use My Currect location
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            {/* <AntDesign name="earth" size={22} color="#0066b2" /> */}

            <Text style={{color: '#0066b2', fontWeight: '400'}}>
              Deliver outside India
            </Text>
          </View>
        </View>
      </ModalContent>
    </BottomModal>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
