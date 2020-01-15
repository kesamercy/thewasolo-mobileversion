import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button, TextInput} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';





export default class extends React.Component {

    constructor(){
        super()
        this.state = {
            value: ""
        }
        this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleChangeText(){
        this.setState({

        })
    }
    render() {
        return(

            
            
            <View style={styles.container}>
            <View>
                <Header style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>THE WASOLO</Text>

                </Header>
            </View>
                <SafeAreaView style={{flex: 1}}>
                <View style= {styles.inputContainer}>
                   <Text style={styles.textStyle}>First Name</Text>
                   <TextInput
                   defaultValue = {this.state.value}
                   onChangeText = {this.handleChangeText}

                   placeholder = "Your First Name"
                   style = {styles.input}
                   //value = {input}
                   
                   />




                   <Text style={styles.textStyle}>Last Name</Text>
                   <TextInput
                   defaultValue = {this.state.value}
                   onChangeText = {this.handleChangeText}

                   placeholder = "Your Last Name"
                   style = {styles.input}
                   //value = {input}
                   
                   />

                   <Text style={styles.textStyle}>How Are You Feeling?</Text>
                   <TextInput
                   defaultValue = {this.state.value}
                   onChangeText = {this.handleChangeText}

                   placeholder = "Good or Sick"
                   style = {styles.input}
                  // value = {input}
                   
                   />

                   <Text style={styles.textStyle}>Did You Vaccinate?</Text>
                   <TextInput
                   defaultValue = {this.state.value}
                   onChangeText = {this.handleChangeText}

                   placeholder = "Yes or No"
                   style = {styles.input}
                   //value = {input}
                   
                   />

                     <Button title= 'Submit' onPress={()=> this.props.navigation.navigate('About')}/>                    
                   </View>

                   <View style={styles.BView}>
	      	         <Button title="Back" onPress={ ()=>this.props.navigation.navigate('Category')}/>
                     <Button title="Finish" onPress={ ()=>this.props.navigation.navigate('About')}/>
                   </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor: ''  
    },


    inputContainer: {
        flex: 0.8,
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    input: {
       width: '95%',
       borderColor: 'black',
       borderWidth: 1,
       padding: 15
        
          },
    BView:{
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'row',
       marginTop: 50,
       },

      header:{
        backgroundColor: "teal"
    },

    textStyle:{
        fontSize: 20,
        fontWeight: 'bold'
    }

    
   
  });



