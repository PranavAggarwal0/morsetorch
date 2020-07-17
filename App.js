import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import Torch from 'react-native-torch';

export default class HomeActivity extends Component {

  constructor(props) {
      super(props)
      this.state = {
        TextInputValue: ''
      }
  }

  buttonClickListener = () =>{
      const { TextInputValue }  = this.state ;
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
           cipher += ' ';
        }
      }
      Alert.alert(cipher);
      // Torch.switchState(true);
      // Torch.switchState(false);
      // setTimeout(function(){Alert.alert(TextInputValue[i])},2000);
  }

  render() {
    return (
      <>
      <View style={styles.container}>
      <Button
        onPress={this.buttonClickListener}
        title="Enter"
        color="#00B0FF"
      />
      <Text>
      Text to morse.
      </Text>
        <TextInput
          multiline={true}
          numberOfLines={100}
          style={{height: 245,width: "95%",borderColor: "gray",borderWidth: 2}}
          placeholder=" Enter Your Text"
          onChangeText={TextInputValue => this.setState({TextInputValue})}
          underlineColorAndroid="transparent"
        />

      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
