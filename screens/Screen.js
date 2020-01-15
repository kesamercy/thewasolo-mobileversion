import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {FontAwesome5} from 'react-native-vector-icons';

export default class extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity style={{alignItems: "flex-end", margin: 16}}
                    onPress= {this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity>

                    <View style={styles.screen}>
                        <Text style={styles.titleText}>TRANSLATION TOOL FOR BANG BANG HOSPITAL</Text>
                        <Text>If you are a health worker with a patient that speaks a language you don't understand, use this application to help you communicate with your patient about their immediate medical needs.</Text>
                    </View>

                </SafeAreaView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"  
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
        marginBottom: 100
        
      }
    
   
  });