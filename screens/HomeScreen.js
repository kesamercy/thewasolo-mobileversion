import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import {FontAwesome5} from 'react-native-vector-icons';
import {Header, Left, Right, Icon} from 'native-base';

export default class extends React.Component {
    render() {
        return(

            
            
            <View style={styles.container}>
            <View>
                <Header style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>THE WASOLO</Text>

                </Header>
            </View>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
                    onPress= {this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity>

                    <View style={styles.screen}>
                        <Text style={styles.titleText}>TRANSLATION TOOL FOR BANG BANG HOSPITAL</Text>
                        <Text style={{marginBottom: 100, fontSize: 20}}>If you are a health worker with a patient that speaks a language you don't understand, use this application to help you communicate with your patient about their immediate medical needs.</Text>
                        <Button title= 'BEGIN' onPress={()=> this.props.navigation.navigate('Doctor')}/>                    
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


    logo: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 30,
        
        
    },

    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      },
      titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 150,
        textDecorationLine: 'underline',
        textDecorationColor: 'teal'
        
      },

      header:{
        backgroundColor: "teal"
    }

    
   
  });