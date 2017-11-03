import React from 'react' 
import ReactDOM from 'react-dom'
import { run as utilsRun } from 'rw-utils/web/index'    
import { run as routerRun } from 'rw-router/web/index'

export const init = () => ReactDOM.render(<h1 onClick={() => console.log('App')}>{utilsRun()} {routerRun()}</h1>, document.getElementById('content')) 

