import express from 'express'
import Story from '../controllers/Story.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new express.Router()

router.post('/create', Story.addVideo);
router.delete('/delete/:id', Story.deleteVideo);
router.put('/edit/:id', Story.editVideo);

export default router