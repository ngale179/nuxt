export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  return {
    status: true,
    mess: "Success",
    data: null
  };
})
