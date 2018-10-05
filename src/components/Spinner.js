import React from 'react'
import Spinner from 'react-spin'

export default ({ label }) => <div style={{ position: 'fixed', zIndex: 4, top: 0, left: 0, bottom: 0, right: 0, background: 'rgba(0, 0, 0, 0.7)' }}>
  {label &&
    <h4 style={{ position: 'absolute', top: '50%', left: '50%', color: 'white', transform: 'translate(-50%, -60px)' }}>{label}</h4>
  }
  <Spinner config={{ color: 'white' }} />
</div>
