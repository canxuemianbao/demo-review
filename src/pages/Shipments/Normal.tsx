import React from 'react'
import { ROLE } from '../../enums'
import Shipments from './Shipments'

export default function NormalShipments() {
  return  <Shipments role={ROLE.NORMAL}/>
}