import React from 'react'
import { Constants } from 'expo'

import { View } from 'react-native'
import { run as utilsRun } from 'rw-utils/web/index'
import { run as routerRun } from 'rw-router/web/index' 
import { Button } from 'react-native-elements'

const app = () => <View style={{ marginTop: Constants.statusBarHeight }} ><Button raised title={utilsRun() + routerRun()} onPress={() => console.log('App')} /></View>

export default app