import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
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
                        <Text style={styles.titleText}>About</Text>
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
        marginBottom: 100,
        textDecorationLine: 'underline',
        textDecorationColor: 'cadetblue'
        
      },
      header:{
        backgroundColor: "cadetblue"
    }
    
   
  });