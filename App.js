import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, Keyboard } from "react-native";
import Torch from 'react-native-torch';

export default class HomeActivity extends Component {

  constructor(props) {
      super(props)
      this.state = {
        TextInputValue: ''
      }
  }

  buttonClickListener = () =>{
      Keyboard.dismiss()
      const { TextInputValue }  = this.state ;
      if(!(/^[ A-Za-z0-9(),.?/-]*$/.test(TextInputValue))) {
          Alert.alert('Invalid characters');
          return;
      }
      var message = TextInputValue.toUpperCase();
      var morse_dict = { 'A':'.-', 'B':'-...',
         'C':'-.-.', 'D':'-..', 'E':'.',
         'F':'..-.', 'G':'--.', 'H':'....',
         'I':'..', 'J':'.---', 'K':'-.-',
         'L':'.-..', 'M':'--', 'N':'-.',
         'O':'---', 'P':'.--.', 'Q':'--.-',
         'R':'.-.', 'S':'...', 'T':'-',
         'U':'..-', 'V':'...-', 'W':'.--',
         'X':'-..-', 'Y':'-.--', 'Z':'--..',
         '1':'.----', '2':'..---', '3':'...--',
         '4':'....-', '5':'.....', '6':'-....',
         '7':'--...', '8':'---..', '9':'----.',
         '0':'-----', ',':'--..--', '.':'.-.-.-',
         '?':'..--..', '/':'-..-.', '-':'-....-',
         '(':'-.--.', ')':'-.--.-'
      };
      var cipher = '';
      var i;
      for (i = 0; i < message.length; i++) {
        if(message[i] != ' ') {
           cipher += morse_dict[message[i]] + ' ';
        }
        else {
           cipher += '/';
        }
      }
      var j = 0;
      function myLoop() {
        if(cipher[j] == '.') {
          Torch.switchState(true);
          setTimeout(function(){Torch.switchState(false)},300);
          j++;
          if(j < cipher.length) {
            setTimeout(function(){myLoop()},300)
          }
        }
        else if(cipher[j] == '-') {
          Torch.switchState(true);
          setTimeout(function(){Torch.switchState(false)},900);
          j++;
          if(j < cipher.length) {
            setTimeout(function(){myLoop()},300);
          }
        }
        else if(cipher[j] == ' ') {
          j++;
          if(j<cipher.length) {
            setTimeout(function(){myLoop()},900);
          }
        }
        else {
          j++;
          if(j<cipher.length) {
            setTimeout(function(){myLoop()},2100);
          }
        }
      }
      myLoop();
      Alert.alert("Converted to Morse\n"+cipher);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{fontSize:30,fontWeight: 'bold'}}>
            morseTorch{"\n"}
          </Text>
          <Text style={{fontSize:20}}>
            Text to Morse
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={100}
            style={{height: 245,width: "95%",borderColor: "black",borderWidth: 2}}
            placeholder=" Enter Your Text"
            onChangeText={TextInputValue => this.setState({TextInputValue})}
            underlineColorAndroid="transparent"
          />
          <Button
            onPress={this.buttonClickListener}
            title="Enter"
            color="#00B0FF"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 70,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FEC8D8"
  },
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FEC8D8"
  }
});
