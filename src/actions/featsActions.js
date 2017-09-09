import * as types from './types/feats';

export function addFeat(feat) {
  return {
    type: types.ADD_FEAT,
    feat
  }
}

export function removeFeat(feat) {
  return {
    type: types.REMOVE_FEAT,
    feat
  }
}