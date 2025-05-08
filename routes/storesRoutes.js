import express from 'express';
import {
    getStores,
    getStoresByLocation,
    createStore
} from '../controllers/storesController.js'

const router = express.Router()

router.get('/stores', getStores)
router.get('/stores/location/:location', getStoresByLocation)
router.post('/stores', createStore)

export default router 