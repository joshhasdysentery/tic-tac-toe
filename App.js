import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainMenu from './src/MainMenu';
import PlayerVsComp from './src/PlayerVsComp';
import PlayerVsPlayer from './src/PlayerVsPlayer';

const Navigator = createStackNavigator({
  MainMenu: { screen: MainMenu },
  PlayerVsComp: { screen: PlayerVsComp },
  PlayerVsPlayer: { screen: PlayerVsPlayer },
});

const App = createAppContainer(Navigator);

export default App;
