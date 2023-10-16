import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const posts = router({
  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany()
  }),
  getPost: publicProcedure.input(z.number()).query(async ({ ctx, input: id }) => {
    return await ctx.prisma.post.findUniqueOrThrow({ where: { id } })
  }),
})
