import { combineReducers } from 'redux'
import myBids from './bids'
import myDepos from './depos'
import myReminds from './reminds'
import myWins from './wins'

export default combineReducers({
  myBids,
  myDepos,
  myReminds,
  myWins
})
