import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{

  exitingModal = () =>{
    this.props.hiding(false);
  }

  render(){
    return(
      <>
      <Modal show={this.props.showModal} onHide={this.exitingModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.image_Url} alt={this.props.title} style={{width: '100%', height: '35%'}}/>
          <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.exitingModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default SelectedBeast;