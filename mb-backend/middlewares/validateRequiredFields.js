export function validateRequiredFields(req, res, next) {
  const requiredFields = ['email', 'type', 'name', 'document', 'birthday', 'phoneNumber', 'password']

  const missingFields = requiredFields.filter((field) => {
    const value = req.body[field]
    return value === undefined || value === null || value === ''
  })

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Campos obrigatórios não preenchidos',
      missingFields,
    })
  }

  next()
}
