import React from 'react'  
import ReactDOM from 'react-dom'
import { run as utilsRun } from 'rw-utils/web/index'    
import { run as routerRun } from 'rw-router/web/index' 
import { Button } from 'material-ui'     

export const init = () => ReactDOM.render(<Button raised color='primary' onClick={() => console.log('App')}>{utilsRun()} {routerRun()}</Button>, document.getElementById('content')) 
