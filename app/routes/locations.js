/**
 * labels router
 * @file labels.js
 * @author Augustin Godiscal
 */

// Module dependencies

import {create, locate, list, update, remove, bulk, elasticsearch, search} from '../controllers/locations'
import {challenge} from '../controllers/auth'

/**
 * @function
 * @param {Object} router
 */

export default (router) => {
  router
    .route('/:id')
    .put(challenge, update)
    .delete(challenge, remove)

  router
    .route('/esearch')
    .get(elasticsearch)

  router
    .route('/search')
    .get(search)

  router
    .route('/bulk')
    .post(challenge, bulk)

  router
    .route('/list')
    .get(challenge, list)

  router
    .route('/')
    .post(challenge, create)
    .get(locate)
}
