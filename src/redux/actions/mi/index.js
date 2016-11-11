import { default as didsActionCreators } from './bids'
import { default as deposActionCreators } from './depos'
import { default as remindsActionCreators } from './reminds'
import { default as winsActionCreators } from './wins'

export default {
  ...didsActionCreators,
  ...deposActionCreators,
  ...remindsActionCreators,
  ...winsActionCreators
}
