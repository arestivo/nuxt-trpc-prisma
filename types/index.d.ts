import { inferRouterOutputs } from '@trpc/server'
import { AppRouter } from '~/server/trpc/routers'

export {}

declare global {
  type RouterOutput = inferRouterOutputs<AppRouter>
}
