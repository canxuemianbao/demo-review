import { createContext } from 'react'
import { ROLE } from '../../enums'

export interface ShipmentsFeature {
  add?: boolean
  edit?: boolean
  delete?: boolean
  filter?: boolean
}


export const SHIPMENTS_FEATURE: Record<ROLE, ShipmentsFeature> = {
  [ROLE.COMPANY]: {},
  [ROLE.NORMAL]: {
    add: true,
    edit: true,
    delete: true,
    filter: true,
  }
}