const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findUnconfirmed,
  findById,
  add,
  update,
  remove
};



function findUnconfirmed() {
  return db('logs')
  .select('logs.*', 'submitter.username AS submitter_username')
  .leftJoin('users as submitter', 'logs.log_submitting_user_id', 'submitter.user_id')
  .whereNull('log_confirmed')
}

function find() {
  return db('logs')
  .select('logs.*', 'submitter.username AS submitter_username', 'confirmer.username AS confirmer_username')
  .leftJoin('users as submitter', 'logs.log_submitting_user_id', 'submitter.user_id')
  .leftJoin('users as confirmer', 'logs.log_confirming_user_id', 'confirmer.user_id')
}

function findById(id) {
  return db('logs')
    .where( 'log_id', id )
    .first();
}

function add(log) {
  return db('logs')
    .insert(log)
    .returning('log_id')
    .then(res => {
      return findById(res[0])
    })
}

function update(changes, id) {
  return db('logs')
    .where('log_id', id)
    .update(changes)
    .returning('log_id')
    .then(res => {
      return findById(res[0])
    })
}

function remove(id) {
  return db('logs')
    .where( 'log_id', id )
    .del();
}