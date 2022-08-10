export default defineEventHandler(() => {
  return {
    status: true,
    mess: 'Success',
    data: {
      id: '',
      title: '',
      note: '',
      isCompleted: true,
      createdOn: '',
      assignTo: '',
      expiredDate: ''
    }
  }
})
