import { default as bidActionCreators } from './bid'
import { default as payActionCreators } from './pay'

export default {
  ...bidActionCreators,
  ...payActionCreators
}
