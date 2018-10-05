import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Backdrop from './Backdrop'

export default ({ error, dismiss }) => (
  <Backdrop>
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error}</Modal.Body>
      <Modal.Footer>
        <Button bsStyle='primary' onClick={dismiss}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </Backdrop>
)
