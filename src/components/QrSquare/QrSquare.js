import * as React from 'react';
import QRCode from 'qrcode.react';

class QrSquare extends React.Component { 

  render (){
    return (
      <><QRCode value="http://facebook.github.io/react/"/></>
    );
  }
}

export default QrSquare