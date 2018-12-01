import * as React from 'react';
import Dropzone from 'react-dropzone'


class FileDrop extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }
  onCancel() {
    this.setState({
      files: []
    });
  }
  render() {
    return (
      <section>
        <div className="dropzone flex justify-center">
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            onFileDialogCancel={this.onCancel.bind(this)}
          >
            <p className='ma2'>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2 className='mt4'>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li className='list' key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default FileDrop; 