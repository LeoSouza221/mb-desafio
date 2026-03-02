export function createUser(req, res) {
  res.status(201).json({
    success: true,
    message: 'Todos os campos foram preenchidos',
  })
}
