import React from 'react'
import ReactDOM from 'react-dom'
import { run } from './web/index'
import { Button, PropTypes } from 'material-ui'    
import { run as emptyRun } from 'rw-empty/index'
//import App from './common/app-d'

emptyRun()
//const x = App.Consts.animationDurationMsec
//let y: IState = {}

export const init = () => ReactDOM.render(<Button raised color='primary'>{run()}</Button>, document.getElementById('content'))