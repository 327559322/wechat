import React,{Component} from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import { Button, Flex, WhiteSpace, WingBlank,InputItem,List} from '@ant-design/react-native';

class mobileLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phoneValue:''
        }
    }
    static navigationOptions = {
        title: '',
        headerStyle: {
            //display:'none'
            borderWidth:0
        },
    };

    render() {
        return (
            <View style={{flex:1}}>
                <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
                    <Text style={styles.title}>手机号登录</Text>
                    <View style={styles.flexRow}>
                        <Text style={[styles.item,styles.itemFontSize,{flex:2}]}>国家/地区</Text>
                        <Text style={[styles.item,styles.itemFontSize,{color:'green',flex:5}]}>中国大陆（+86）</Text>
                    </View>
                </WingBlank>
                <InputItem style={[styles.itemFontSize,{paddingLeft:25}]}
                           clear
                           value={this.state.value}
                           placeholder="请填写手机号"
                           type="phone"
                           onChange={(value)=>{
                               this.setState({
                                   value
                               })
                           }}
                >
                    <Text style={[styles.itemFontSize]}>手机号</Text>
                </InputItem>
                <WingBlank style={{marginTop:20}}>
                    <Text style={styles.otherLogin}>用微信/QQ号/邮箱登录</Text>
                    <Button
                        size={"large"}
                        disabled={true}>
                        <Text>下一步</Text>
                    </Button>
                </WingBlank>
                <View style={styles.bottomNav}>
                        <Text style={{color:'blue'}}>找回密码</Text>
                        <Text style={{marginLeft:10,marginRight:10,color:'blue'}}>|</Text>
                        <Text style={{color:'blue'}}>紧急冻结</Text>
                        <Text style={{marginLeft:10,marginRight:10,color:'blue'}}>|</Text>
                        <Text style={{color:'blue'}}>微信安全中心</Text>

                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        marginTop:30,
        marginBottom: 50
    },
    item:{
        flex:1,
        //display:'inline'
    },
    itemFontSize:{
      fontSize:18
    },
    flexRow:{
        flexDirection:'row'
    },
    otherLogin:{
        marginTop:10,
        marginBottom:40,
        fontSize:16,
        color:'blue'
    },
    bottomNav:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'flex-end',
        paddingBottom:10,
        color:'blue',
        flex:1
    }
})
export default mobileLogin
