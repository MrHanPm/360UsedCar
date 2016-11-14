import { combineReducers } from 'redux'
import myBids from './bids'
import myDepos from './depos'
import myReminds from './reminds'
import myWins from './wins'

import myBidsMsg from './bidsMsg'
import myDeposMsg from './deposMsg'
import myRemindsMsg from './remindsMsg'
import myWinsMsg from './winsMsg'
export default combineReducers({
  myBids,
  myDepos,
  myReminds,
  myWins,
  myBidsMsg,
  myDeposMsg,
  myRemindsMsg,
  myWinsMsg
})
