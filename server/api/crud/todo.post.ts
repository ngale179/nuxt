export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  return {
    status: true,
    mess: "Success",
    data: null
  };
})
