import { default as didsActionCreators } from './bids'
import { default as deposActionCreators } from './depos'
import { default as remindsActionCreators } from './reminds'
import { default as winsActionCreators } from './wins'

import { default as didsMsgActionCreators } from './bidsMsg'
import { default as deposMsgActionCreators } from './deposMsg'
import { default as remindsMsgActionCreators } from './remindsMsg'
import { default as winsActionMsgCreators } from './winsMsg'

export default {
  ...didsActionCreators,
  ...deposActionCreators,
  ...remindsActionCreators,
  ...winsActionCreators,
  
  ...didsMsgActionCreators,
  ...deposMsgActionCreators,
  ...remindsMsgActionCreators,
  ...winsActionMsgCreators
}
