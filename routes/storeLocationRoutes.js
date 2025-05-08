import express from 'express';
import {
    getStoreLocation,
    getStoreLocationById,
    
} from '../controllers/storeLocationController.js'


const router = express.Router()


router.get('/api/storeLocation', getStoreLocation)
router.get('/api/storeLocation/:id', getStoreLocationById)

export default router