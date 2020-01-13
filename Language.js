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
        textDecorationColor: 'cadetblue'}}>CHOOSE LANGUAGE</Text>

        </View>
          <View style={styles.pView}>
	        <Picker
	        style={{width:'80%'}}
	        selectedValue={this.state.PickerValue}
	        onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
	      	>
	  	      <Picker.Item label="Select Language" value=""/>
		        <Picker.Item label="Luganda" value="Luganda" />
		        <Picker.Item label="Lugbara" value="Lugbara"/>
            <Picker.Item label="Lugisu" value="Lugisu"/>
		        <Picker.Item label="Lunyoro" value="Lunyoro"/>
		        <Picker.Item label="Lutoro" value="Lutoro"/>
		        <Picker.Item label="Swahili" value="Swahili"/>

		      </Picker>
          </View>
          <View style={styles.BView}>
	      	  <Button title="Back" onPress={ ()=>this.props.navigation.navigate('Home')}/>
            <Button title="Next" onPress={ ()=>this.props.navigation.navigate('Category')}/>
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
    backgroundColor: "cadetblue"
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