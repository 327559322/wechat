import {Image, StyleSheet, Text, View} from "react-native";
import React, { Component } from 'react';
import Button from '@ant-design/react-native/lib/button';
class FirstLogin extends Component {
    static navigationOptions = {
        title: '登录',
        headerStyle: {
            display:'none'
        },
    };
    /*develop branch222333*/
    render() {
        return (
            <View style={styles.container}>
                {/*<Text>123</Text>*/}
                <Image style={styles.backgroundImage} source={require('../../src/images/backgroundImg.jpeg')} />
                <Button style={[styles.loginButton,styles.btn]}
                        size={"large"}
                        activeStyle={styles.loginBtnInTouch}
                        onPress={() => this.props.navigation.navigate('Details')}>
                    <Text style={{color:'#ffffff'}}>登录</Text>
                </Button>
                <Button style={[styles.signButton,styles.btn]}
                        size={"large"}>
                    <Text style={{color:'#0d9838'}}>注册</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backgroundImage:{
        flex:1,
        width:null,
        height:null,
        backgroundColor:'rgba(0,0,0,0)'
    },
    btn:{
        width:130,
        height:50,
    },
    loginButton:{
        position:'absolute',
        bottom:20,
        left:20,
        backgroundColor: '#0d9838',
        borderWidth:0,
    },
    signButton:{
        position:'absolute',
        bottom:20,
        right:20,
        backgroundColor: '#ffffff',
        borderWidth:0,
    },
    loginBtnInTouch:{
        backgroundColor: '#129851'
    }
})

export default FirstLogin
