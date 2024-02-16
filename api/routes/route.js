import express from 'express';
import { info} from '../controllers/controller.js';

const router = express.Router();
router.get("/info", info);
// router.post("/info",info)
export default router;