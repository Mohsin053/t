/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import type { Node } from "react";
import {
  Alert,
  Dimensions,
  Image, NativeModules, PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
const { width: ScreenWidth } = Dimensions.get("screen");


const Login: () => Node = ({ navigation }) => {
  useEffect(() => {
    async function init() {
      try {

        //SMS sending permission
        const send_sms = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
          {
            title: "Sms App Permission",
            message:
              "App needs permission to send sms " +
              "so you can send messages in background.",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          },
        );
        if (send_sms === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("permission granted");
        } else {
          Alert.alert("Permission has been denied. App won't work properly");
        }

        //SMS receiving permission
        const receive_sms = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
          {
            title: "Sms App Permission",
            message:
              "App needs permission to receive sms",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          },
        );
        if (receive_sms === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("permission granted");
        } else {
          Alert.alert("Permission has been denied. App won't work properly");
        }

        //SMS receiving permission
        const read_sms = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          {
            title: "Sms App Permission",
            message:
              "App needs permission to read sms",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          },
        );
        if (read_sms === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("permission granted");
        } else {
          Alert.alert("Permission has been denied. App won't work properly");
        }

        //Phone State permission
        const phone_state = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
          {
            title: "Sms App Permission",
            message:
              "App needs permission to read phone state",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          },
        );
        if (phone_state === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("permission granted");
        } else {
          Alert.alert("Permission has been denied. App won't work properly");
        }


      } catch (err) {
        console.warn(err);
      }
    }

    init();
  }, []);

  const onHaveAccountPress = () => {
    console.log("Opening the camera");
    navigation.navigate("QRCamera");
  };

  return (
    <LinearGradient
    colors={['#FF4961', '#F9F8F8', '#F9F8F8', '#FF4961']}
    locations={[0, 0.3, 0.7, 1]}
    start={{ x: -0.3, y: 0 }}
    end={{ x: 1.5, y: 1 }}
    style={{flex:1}}
  >
      <View style={{height:'20%',alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#FF4961',fontSize:50,fontWeight:'bold',elevation:10,textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color in RGBA format (Red, Green, Blue, Alpha)
    textShadowOffset: { width: 0, height: 3 }, // Shadow offset (horizontal, vertical)
    textShadowRadius: 8, }}>Welcome</Text>
      </View>
      <View style={{
        aspectRatio: 1.4,
        alignSelf: "center",
        alignItems:'center',
        height:'50%',
        justifyContent:'center'
      }}><Image
          resizeMode="contain"
          source={require("../Icons/login.png")}
          style={[styles.logoImageStyle]}
        /></View>
        <View style ={{height:'30%',alignItems:'center'}}>
      <TouchableOpacity
        style={[styles.loginButtonStyle]}
        onPress={onHaveAccountPress}>
        <Text style={[styles.haveAccountTextStyle]}>Add Using QR Code</Text>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  logoImageStyle: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },
  loginButtonStyle: {
    height: 50,
    width: ScreenWidth * 0.8,
    backgroundColor: "#FF4961",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 32,
    elevation: 5,
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "#FF4961",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  haveAccountTextStyle: {
    color: "white",
    fontSize:16,
    fontWeight:'bold'
  },
  
});

export default Login;
