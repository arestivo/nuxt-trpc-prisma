import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const posts = router({
  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany()
  }),
  getPost: publicProcedure.input(z.number()).query(async ({ ctx, input: id }) => {
    return await ctx.prisma.post.findUniqueOrThrow({ where: { id } })
  }),
  createPost: publicProcedure
    .input(z.object({ title: z.string(), text: z.string() }))
    .query(async ({ ctx, input: { title, text } }) => {
      return await ctx.prisma.post.create({ data: { title, text } })
    }),
})
