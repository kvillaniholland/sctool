import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default ({ error, dismiss }) => <div style={{ position: 'fixed', zIndex: 4, top: 0, left: 0, bottom: 0, right: 0, background: 'rgba(0, 0, 0, 0.7)' }}>
<Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Error</Modal.Title>
  </Modal.Header>
  <Modal.Body>{error}</Modal.Body>
  <Modal.Footer>
    <Button bsStyle="primary" onClick={dismiss}>Close</Button>
  </Modal.Footer>
</Modal.Dialog>
</div>
