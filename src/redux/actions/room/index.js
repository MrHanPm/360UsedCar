import { default as msgActionCreators } from './msg'
import { default as imgActionCreators } from './img'
import { default as postsActionCreators } from './posts'

export default {
  ...msgActionCreators,
  ...imgActionCreators,
  ...postsActionCreators
}
