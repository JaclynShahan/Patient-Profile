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
            width='30vw'
            height='100vh'
            bodystyle={bodyStyle}
            okText= {<span>OK <Icon type="check"/></span>}
            onOk={this.onOk}
            onCancel={this.onCancel}
            cancelText= {<span>CLOSE <Icon type="stop"/></span>}
            visible={this.state.visible}>
                <div className="dropdown">
                   <button class="dropbtn">Body Part</button>
                   <div id="myDropdown" class="dropdown-content">
                       <a href="https://youtu.be/bfgI4B20IZ0" target="_blank">Lumbar</a>
                       <a href="https://youtu.be/vU12T1_kzlI" target="_blank">Cervical</a>
                       <a href="https://youtu.be/K9HX4XHVbr0" target="_blank">Shoulders</a>
                       <a href="https://youtu.be/cAL1IxAp3kU" target="_blank">Biceps/Upper Body</a>
                       <a href="https://youtu.be/-FCC32T8uYA" target="_blank">Hips/Pelvis</a>
                       <a href="https://youtu.be/EXx3HLa4jDU" target="_blank">Legs/Thighs</a>
                       <a href="https://youtu.be/eKvSkbB2wu0" target="_blank">Knees</a>
                       <a href="https://youtu.be/2d-mVqEwgbo" target="_blank">Feet/Ankles</a>
                       <a href="https://youtu.be/XUkMwsGkOL8" target="_blank">Hands/Wrists</a>

                   </div>
                </div>
            </AntModal>
          </div>      
        )
}
}

export default Exercises;