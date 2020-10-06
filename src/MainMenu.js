import React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';

export default class MainMenu extends React.Component {
  static navigationOptions = {
    title: 'Tic Tac Toe',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
    },
    headerStyle: {
      backgroundColor: '#7FDBFF',
    },
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={StyleSheet.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigate('PlayerVsComp')}>
            <Text>Computer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('PlayerVsPlayer')}>
            <Text>Two Player</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  computerButton: {
    flex: 1,
    backgroundColor: '#7FDBFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  pvpButton: {
    flex: 1,
    backgroundColor: '#7FDBFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
});
