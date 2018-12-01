import React, { Component } from 'react';
// import {FileDrop} from '../../components'
import QRCode from 'qrcode.react';
import { Card } from 'antd';


class Home extends Component {
  state = {}
  componentDidMount() {
    this.timer = setInterval(()=> this.getId(), 1000);
  }
  
  componentWillUnmount() {
    this.timer = null; // here...
  }

  getId() {
    this.setState({ id: document.getElementById('iam').innerHTML || null})
    if(this.state.id) {
      console.log(this.state.id)
      clearInterval(this.timer)
    }
  }

  render() {
    return (
      <div className="pa3 flex justify-center w-100">
        <Card
          title={(<div className='flex justify-center' ><img className='mr2' height='30px' src='logo.png' alt=''/> Sennd.me</div>)}
          style={{width: '100%', maxWidth:'500px'}}
        >
          {/*<FileDrop />*/}
          <div className='w-100 flex justify-center'>
            <QRCode value={`http://${document.location.hostname}/room-${this.state.id || 'null'}`}/>
          </div>
          <div id="main">
          
          <hr />
          <div>I am <span id="iam">...</span></div><br />
          <div id="peerZone">
          </div>

          <hr />
      </div>
          </Card>
      </div>
    );
  }
}

export default Home;
