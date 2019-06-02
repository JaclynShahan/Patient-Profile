import React, { Component } from 'react'
import { Button, Modal as AntModal, Icon } from 'antd'

class Exercises extends Component {
  constructor () {
    super()
    this.state = {
      visible: false
    }
  }
  onOk = () => {
    this.setState({ visible: false })
  }
  onCancel = () => {
    this.setState({ visible: false })
  }

  render () {
    const bodyStyle = {
      height: '50vh'
    }
    return (
      <div>
        <Button onClick={() => this.setState({ visible: true })}>
          <Icon className='iconFolder' type='folder' />
        </Button>
        <AntModal
          width='90vw'
          height='100vh'
          bodystyle={bodyStyle}
          okText={
            <span>
              OK <Icon type='check' />
            </span>
          }
          onOk={this.onOk}
          onCancel={this.onCancel}
          cancelText={
            <span>
              CLOSE <Icon type='stop' />
            </span>
          }
          visible={this.state.visible}
        >
          <div class='topnav' id='myTopnav'>
            <a href='https://youtu.be/7qHInWs_3mY' target='_blank'>
              Lumbar
            </a>
            <a href='https://youtu.be/0SLairHEutE' target='_blank'>
              Cervical
            </a>
            <div class='dropdown'>
              <button class='dropbtn'>
                Upper Extremities
                <i class='fa fa-caret-down' />
              </button>
              <div class='dropdown-content'>
                <a href='https://youtu.be/fpqMU88DfyE' target='_blank'>
                  Shoulders
                </a>
                <a href='https://youtu.be/b7lqYyQVPhw' target='_blank'>
                  Biceps
                </a>
                <a href='https://youtu.be/DaULkpm71Bg' target='_blank'>
                  Upper Torso
                </a>
              </div>
            </div>
            <div class='dropdown'>
              <button class='dropbtn'>
                Lower Extremities
                <i class='fa fa-caret-down' />
              </button>
              <div class='dropdown-content'>
                <a href='https://youtu.be/z1fzp7aD6gY' target='_blank'>
                  Hips
                </a>
                <a href='https://youtu.be/tUQ86Ok69gY' target='_blank'>
                  Hamstrings
                </a>
                <a href='https://youtu.be/4UxUfRb619A' target='_blank'>
                  Knees
                </a>
                <a href='https://youtu.be/hK_Tk69GU_s' target='_blank'>
                  Ankles
                </a>
                <a href='https://youtu.be/FtbKGWfQVCk' target='_blank'>
                  Feet
                </a>
              </div>
            </div>
            <div class='dropdown'>
              <button class='dropbtn'>
                Occupational Therapy
                <i class='fa fa-caret-down' />
              </button>
              <div class='dropdown-content'>
                <a href='https://youtu.be/bNkjHdgV0hg' target='_blank'>
                  Elbows
                </a>
                <a href='https://youtu.be/cxYiRrRMTtU' target='_blank'>
                  Wrists
                </a>
                <a href='https://youtu.be/xQrP97h4MMg' target='_blank'>
                  Fingers
                </a>
              </div>
            </div>
            <a href='javascript:void(0);' class='icon' onclick='myFunction()'>
              &#9776;
            </a>
          </div>
        </AntModal>
      </div>
    )
  }
}

export default Exercises
