import * as express from 'express'
import { CounterResult } from '@firebase-monorepo/api-schema'

const app = express()
const result = new CounterResult()
app.get('/', (req, res) => {
  res.send('' + result.count)
})
export default app
