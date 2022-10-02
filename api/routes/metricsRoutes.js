import express from 'express'
import {addValue,deleteValue,updateValue} from '../controllers/metricsController.js'

const router = express.Router();


router.post('/add',addValue)
router.patch('/update/:id',updateValue)
router.delete('/delete/:id',deleteValue)



export default router;