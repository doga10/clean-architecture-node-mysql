import { bodyParser, newCors } from '@/main/middlewares'

export default (app): void => {
  app.use(bodyParser)
  app.use(newCors)
}
