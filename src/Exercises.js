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
            height='100vh'
            bodystyle={bodyStyle}
            okText= {<span>OK <Icon type="check"/></span>}
            onOk={this.onOk}
            onCancel={this.onCancel}
            cancelText= {<span>CLOSE <Icon type="stop"/></span>}
            visible={this.state.visible}>
               <div class="topnav" id="myTopnav">
                    <a href="#home" class="active">Lumbar</a>
                    <a href="#news">Cervical</a>
             <div class="dropdown">
                     <button class="dropbtn">Upper Extremities
                     <i class="fa fa-caret-down"></i>
                     </button>
                  <div class="dropdown-content">
                    <a href="#">Shoulders</a>
                    <a href="#">Biceps</a>
                    <a href="#">Upper Torso</a>
                    </div>
                    </div>
                 <div class="dropdown">
                    <button class="dropbtn">Lower Extremities 
                     <i class="fa fa-caret-down"></i>
                     </button>
                    <div class="dropdown-content">
                        <a href="#">Hips</a>
                        <a href="#">Hamstrings</a>
                        <a href="#">Knees</a>
                        <a href="#">Ankles</a>
                        <a href="#">Feet</a>
                    </div>
                </div> 
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
                </div>
            </AntModal>
          </div>      
        )
}
}

export default Exercises;