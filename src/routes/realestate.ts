import { Router } from 'express'

const router = Router()

// Real State
router.get('/realestate', (req, res) => {
    res.json({ message: 'Hello World' })
})
router.get('/realestate/:id', () => {})
router.post('/realestate', () => {})
router.put('/realestate/:id', () => {})
router.delete('/realestate/:id', () => {})

export default router