import React from 'react'

export default ({ children }) => (
  <div style={{ position: 'fixed', zIndex: 4, top: 0, left: 0, bottom: 0, right: 0, background: 'rgba(0, 0, 0, 0.7)' }}>
    {children}
  </div>
)
