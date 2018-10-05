import React from 'react'
import { Table as BootstrapTable } from 'react-bootstrap'

export default ({ headings, ListComponent, listElements, ...props }) => (
  <BootstrapTable striped bordered condensed hover>
    <thead>
      <tr>{headings.map((heading, index) => <th key={index}>{heading}</th>)}</tr>
    </thead>
    <tbody>
      {listElements.map((element, index) =>
        <ListComponent key={index} index={index} element={element} {...props} />)
      }
    </tbody>
  </BootstrapTable>
)
