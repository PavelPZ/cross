﻿import { Constants } from 'expo'
import React from 'react'
import { View, Text } from 'react-native'
import { run as utilsRun } from 'rw-utils/web/index'
import { run as routerRun } from 'rw-router/web/index'

//const App = () => <View><Text>{utilsRun()} {routerRun()} {Constants.expoVersion}</Text></View>
const App = () => <View><Text>XX{Constants.expoVersion}XX</Text></View>

export default App