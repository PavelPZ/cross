import React from 'react'
import { run as libRun } from 'rw-utils/common/index' 
import App from 'rw-utils/common/app-d'
import { hallo } from '../common/index' 

export const run = () => 'Hello rw-router / ' + libRun() + ' / ' + App.Consts.animationDurationMsec + ' / ' + hallo  

