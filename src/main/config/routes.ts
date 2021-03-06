import { readdirSync } from 'fs'

export default (app): void => {
  const router = app.newRouter()
  app.use('/v1', router)

  // eslint-disable-next-line node/no-path-concat
  readdirSync(`${__dirname}/../routes`).map(async file => {
    // if (!file.includes('.test.') && !file.endsWith('.map')) {
    //   (await import(`../routes/${file}`)).default(router)
    // }
  })
}
