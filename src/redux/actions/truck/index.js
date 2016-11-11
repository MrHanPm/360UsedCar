import { default as truckActionCreators } from './msg'
import { default as modeActionCreators } from './mode'

export default {
  ...truckActionCreators,
  ...modeActionCreators
}
