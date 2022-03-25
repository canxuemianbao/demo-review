import React from 'react'
import { ROLE } from '../../enums'
import Shipments from './Shipments'

export default function CompanyShipments() {
  
  return  <Shipments role={ROLE.COMPANY}/>
}