import restana from 'restana'

import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const app = restana()

setupMiddlewares(app)
setupRoutes(app)

export default app
