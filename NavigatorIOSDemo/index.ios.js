/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

var Home = require('./commonFile/Home');
var Message = require('./commonFile/Message');
var Discover = require('./commonFile/Discover');
var Mine = require('./commonFile/Mine');

var NavigatorIOSDemo = React.createClass({

  getInitialState() {
      return {
        tabBarSelectedItem: 'home'
      }
  },

  render() {

    return(
        <View style={styles.container}>
          <TabBarIOS tintColor="orange">
            {/* 首页 */}
            <TabBarIOS.Item
                icon={{uri: 'tabbar_home', scale: 2}}
                title="首页"
                selected={this.state.tabBarSelectedItem=='home'}
                onPress={()=>{this.setState({
                    tabBarSelectedItem: 'home'
                })}}
            >
                <NavigatorIOS
                    style={{flex: 1}}
                    initialRoute={
                      {
                        component: Home,
                        title: '首页'
                      }
                    }
                />
            </TabBarIOS.Item>

            {/* 消息 */}
            <TabBarIOS.Item
                icon={{uri: 'tabbar_message_center', scale: 2}}
                title="消息"
                selected={this.state.tabBarSelectedItem=='message'}
                onPress={()=>{this.setState({
                    tabBarSelectedItem: 'message'
                })}}
            >
              <NavigatorIOS
                  style={{flex: 1}}
                  initialRoute={{
                      component: Message,
                      title: '消息'
                  }}
              />
            </TabBarIOS.Item>

            {/* 发现 */}
            <TabBarIOS.Item
                icon={{uri: 'tabbar_discover', scale: 2}}
                title="发现"
                selected={this.state.tabBarSelectedItem=='discover'}
                onPress={()=>{this.setState({
                      tabBarSelectedItem: 'discover'
                })}}
            >
                <NavigatorIOS
                    style={{flex: 1}}
                    initialRoute={{
                        component: Discover,
                        title: '发现'
                    }}
                />
            </TabBarIOS.Item>

            {/* 我的 */}
            <TabBarIOS.Item
                icon={{uri: 'tabbar_profile', scale: 2}}
                title="我的"
                selected={this.state.tabBarSelectedItem=='mine'}
                onPress={()=>{this.setState({
                    tabBarSelectedItem: 'mine'
                })}}
            >
                <NavigatorIOS
                    style={{flex: 1}}
                    initialRoute={{
                        component: Mine,
                        title: '我的'
                    }}
                />
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>
    )
  }
});

const styles = StyleSheet.create({

  container: {
    flex: 1
  }
});


AppRegistry.registerComponent('NavigatorIOSDemo', () => NavigatorIOSDemo);
