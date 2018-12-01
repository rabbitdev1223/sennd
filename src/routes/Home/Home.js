import React, { Component } from 'react';
import {FileDrop} from '../../components'
import QRCode from 'qrcode.react';
import { Card } from 'antd';



class Home extends Component {
  render() {
    return (
      <div className="pa3 flex justify-center w-100">

        <Card
          title={(<div className='flex justify-center' ><img className='mr2' height='30px' src='logo.png' alt=''/> Sennd.me</div>)}
          style={{width: '100%', maxWidth:'500px'}}
        >
          <FileDrop />
          <div className='w-100 flex justify-center'>
            <QRCode value="http://facebook.github.io/react/"/>
          </div>
          </Card>
        </div>
    );
  }
}

export default Home;
