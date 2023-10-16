import { router } from '../trpc'

import { posts } from './posts'

export const appRouter = router({
  posts,
})

export type AppRouter = typeof appRouter
