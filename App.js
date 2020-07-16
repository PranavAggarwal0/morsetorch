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
      Torch.switchState(true);
      Alert.alert(TextInputValue);
  }

  render() {
    return (
      <>
      <View style={styles.container}>
      <Text>
      Text to morse
      </Text>
        <TextInput
          multiline={true}
          numberOfLines={100}
          style={{height: 245,width: "95%",borderColor: "gray",borderWidth: 2}}
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
