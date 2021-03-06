import { Controller } from '@/presentation/protocols'

export const adaptRoute = (controller: Controller) => {
  return async (req, res) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {}),
      ...(req.headers || {})
    }
    const httpResponse = await controller.handle(request)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return res.send(httpResponse.data, httpResponse.statusCode)
    } else {
      return res.send({ error: httpResponse.data.message }, httpResponse.statusCode)
    }
  }
}
