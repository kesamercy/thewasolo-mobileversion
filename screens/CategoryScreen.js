import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,Picker,
  ScrollView

} from 'react-native';
import {Header} from 'native-base';


export default class CatScreen extends React.Component {
	constructor(){
		super();
		this.state={
			PickerValue:''
			
		}
		
	};
	
  render() {
    return (

        <View style={styles.container}>
        <Header style={styles.header}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>THE WASOLO</Text>
          </Header>

      <ScrollView>
      <Text style={{textAlign:'center', fontSize: 30, fontWeight:'bold', marginTop: 30, textDecorationLine: 'underline',
        textDecorationColor: 'teal'}}>CHOOSE QUESTIONS FROM EACH CATEGORY
</Text>

      <ScrollView style={styles.scroll} >
        



		<Picker
		style={{width:'80%'}}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		  <Picker.Item label="CATEGORY 1" value=""/>
		  <Picker.Item label="Option 1" value="Option 1" />
		  <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
		  <Picker.Item label="Option 4" value="Option 4"/>

		</Picker>




        <Picker
		style={{width:'80%'}}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		  <Picker.Item label="CATEGORY 2" value=""/>
		  <Picker.Item label="Option 1" value="Option 1" />
		  <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
		  <Picker.Item label="Option 4" value="Option 4"/>
		</Picker>





        <Picker
		style={{width:'80%'}}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		  <Picker.Item label="CATEGORY 3" value=""/>
		  <Picker.Item label="Option 1" value="Option 1" />
		  <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
		  <Picker.Item label="Option 4" value="Option 4"/>

		</Picker>





        <Picker
		style={{width:'80%'}}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		  <Picker.Item label="CATEGORY 4" value=""/>
		  <Picker.Item label="Option 1" value="Option 1" />
		  <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
		  <Picker.Item label="Option 4" value="Option 4"/>

		</Picker>






        <Picker
		style={{width:'80%'}}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
          <Picker.Item label="CATEGORY 5" value=""/>
		  <Picker.Item label="Option 1" value="Option 1" />
		  <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
		  <Picker.Item label="Option 4" value="Option 4"/>

		</Picker>




        <Picker
		style={{width:'80%'}}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		  <Picker.Item label="CATEGORY 6" value=""/>
		  <Picker.Item label="Option 1" value="Option 1" />
		  <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
		  <Picker.Item label="Option 4" value="Option 4"/>
		  

		</Picker>
        <View style={styles.BView}>
		<Button title="Back" onPress={ ()=>this.props.navigation.navigate('Language')}/>
        <Button title="Next" onPress={ ()=>this.props.navigation.navigate('About')}/>   
        </View>
      </ScrollView>
      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#F5FCFF',
 // padding: 10
  },
  

  header:{
    backgroundColor: "teal"
  },
  scroll:{
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 30,
    marginLeft: 60,
    
  },
  BView:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 50,
    


  }


});