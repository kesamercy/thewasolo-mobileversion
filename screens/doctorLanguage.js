import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,Picker
} from 'react-native';
import {Header} from 'native-base';


export default class LanScreen extends React.Component {
	constructor(){
		super();
		this.state={
			PickerValue:''
			
		}
		
	};
	
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header style={styles.header}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>THE WASOLO</Text>
          </Header>
          <Text style={{textAlign:'center', fontSize: 30, fontWeight:'bold', marginTop: 30, textDecorationLine: 'underline',
        textDecorationColor: 'teal'}}>DOCTOR SELECT YOUR LANGUAGE</Text>

        </View>
          <View style={styles.pView}>
	        <Picker
	        style={{width:'80%'}}
	        selectedValue={this.state.PickerValue}
	        onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
	      	>
	  	      <Picker.Item label="Select Language" value=""/>
		        <Picker.Item label="English" value="English" />
		        <Picker.Item label="French" value="French"/>
            <Picker.Item label="German" value="German"/>
		        <Picker.Item label="Italian" value="Italian"/>
		        <Picker.Item label="Arabic" value="Arabic"/>
		        <Picker.Item label="Spanish" value="Spanish"/>

		      </Picker>
          </View>
          <View style={styles.BView}>
	      	  <Button title="Back" onPress={ ()=>this.props.navigation.navigate('Home')}/>
            <Button title="Next" onPress={ ()=>this.props.navigation.navigate('Language')}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  header:{
    backgroundColor: "teal"
},

BView:{
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  marginTop: 50,
  fontSize: 20
},

pView:{
  alignItems: 'center',
  marginBottom: 300
}
});