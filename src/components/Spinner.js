import React from 'react'
import Spinner from 'react-spin'
import Backdrop from './Backdrop'

export default () => (
  <Backdrop>
    <Spinner config={{ color: 'white' }} />
  </Backdrop>
)
