import express from 'express';
import {
    CrearStore,
    getStoresByStoreLocation
} from '../controllers/storeController.js'

const router = express.Router()

router.post('/api/stores', CrearStore)
router.get("/stores/location/:storeLocation", getStoresByStoreLocation);

export default router
