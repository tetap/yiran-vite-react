import { RouteObject, useRoutes } from 'react-router-dom'

const libs: any = import.meta.glob('./libs/*.ts', { eager: true })

const routes: RouteObject[] = []
for (const lib in libs) {
  routes.push(...libs[lib].default)
}
export default function () {
  return useRoutes(routes)
}
