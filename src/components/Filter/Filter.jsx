import React from 'react'
import { Label, Title } from '../Filter/Filter.styles';

const Filter = ({value, onChange}) => {
  return (
    <Label>
      <Title>Find contacts by name:</Title>
      <input type="text" value={value} onChange={onChange}/>
    </Label>
  )
}

export default Filter;
