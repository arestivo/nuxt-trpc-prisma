export function useId() {
  const route = useRoute()

  if (typeof route.params.id === 'string') {
    const id = parseInt(route.params.id, 10)

    if (!isNaN(id)) return { id }
    throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })
  }

  throw createError({ statusCode: 500, statusMessage: 'No ID' })
}
