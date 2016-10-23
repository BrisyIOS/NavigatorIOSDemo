/**
 * Created by Brisy on 2016/10/22.
 */
/**
 * Created by Brisy on 2016/10/22.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Mine = React.createClass({

    render() {
        return(
            <View style={styles.mineStyle}>
                <Text style={styles.textStyle}>首页</Text>
            </View>
        )
    }
});


// 设置样式
const styles = StyleSheet.create({
    mineStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


    textStyle: {
        color: 'red',
        fontSize: 30,
    }
});


// 输出类
module.exports = Mine;