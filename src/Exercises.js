import React, { Component } from 'react';
import { Button, Modal as AntModal, Icon} from 'antd';

class Exercises extends Component {
    constructor() {
        super()
        this.state = {
            visible: false
        }
    }
    onOk = () => {
        this.setState({visible: false});
    }
    onCancel = () => {
        this.setState({visible: false});
    }

    render() {
        const bodyStyle = {
            height: '50vh'
        }
        return ( 
          <div>
              <Button onClick={() => this.setState({visible: true})}><Icon type="folder"/></Button>
            <AntModal
            width='90vw'
            bodystyle={bodyStyle}
            okText= {<span>OK <Icon type="check"/></span>}
            onOk={this.onOk}
            onCancel={this.onCancel}
            cancelText= {<span>CLOSE <Icon type="stop"/></span>}
            visible={this.state.visible}>
            </AntModal>
          </div>      
        )
}
}

export default Exercises;