import { Router } from 'express'
import { createUser } from '../controllers/registration.controller.js'
import { validateRequiredFields } from '../middlewares/validateRequiredFields.js'

const router = Router()

router.post('/registration', validateRequiredFields, createUser)

export default router
