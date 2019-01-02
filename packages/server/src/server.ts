const functions = require('firebase-functions')
const APIRouter = require('./api/api').default
module.exports = {
  api: functions.https.onRequest(APIRouter)
}
