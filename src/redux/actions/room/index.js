import { default as msgActionCreators } from './msg'
import { default as imgActionCreators } from './img'

export default {
  ...msgActionCreators,
  ...imgActionCreators
}
