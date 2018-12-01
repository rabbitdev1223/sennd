import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {FileDrop} from './components'
import { Card } from 'antd';



class App extends Component {
  render() {
    return (
        <div className="pa3 flex justify-center w-100">

        <Card
          title={(<div className='flex justify-center' ><img className='mr2' height='30px' src='logo.png' alt=''/> Dropzone</div>)}
          style={{width: '100%', maxWidth:'500px'}}
        >
          <FileDrop />

          </Card>
        </div>
    );
  }
}

export default App;
