import React, {useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import CodeInput from 'react-native-confirmation-code-input';

export default function Login() {
    async function authenticate(code){
        const hasPassword = await LocalAuthentication.isEnrolledAsync();

        if(!hasPassword) return;

        const response = await LocalAuthentication.authenticateAsync();

        if(response.success){
            if(code === '12345'){
                alert('Passed!');
            }
            else{
                alert('Código de Acesso Invalido!');
            }
        }
        if(response.error){
            alert('Erro na autenticação biometrica!');
        }
    }

    function populate(code){
        alert('teste');
    }

    return(
    <View>
        <View>
            <Image style={styles.IconLogo} source={require('../../../assets/font-white.png')}/>
        </View>
        <View style={styles.codAcess}>
            <Text style={styles.text}>LOGIN ID</Text>
            <CodeInput
            secureTextEntry
            className={'border-b'}
            space={5}
            size={30}
            inputPosition='left'
            onFulfill={(code) => authenticate(code)}
            onCodeChange={populate()}
            />
        </View>
        <View style={styles.btnContainer}>
            <TouchableHighlight style={styles.btn} onPress={authenticate}>
                <View>
                    <Image style={styles.tinyLogo} source={require('../../../assets/fingerprint.png')} />
                </View>
            </TouchableHighlight>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    IconLogo:{
        marginTop: 100,
        width: 200,
        height: 50,
    },
    btn: {
        marginLeft: 65,
        width: 65,
        borderWidth: 1.5,
        borderRadius: 50,
        padding: 15,
        paddingLeft: 5,
        borderColor: 'white'
    },
    btnContainer: {
        flex: 1,
        marginTop: 550,
        position: 'absolute',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    codAcess:{
        marginTop: 100,
        alignItems: 'center',
        color: 'white',   
    },
    input: {
        margin: 20,
        borderWidth: 1,
        width: 60,
        borderRadius: 4,
        paddingLeft: 6,
        borderColor: 'white'  
    },
    text:{
        color: 'white',
        fontSize: 16,
    }
  });