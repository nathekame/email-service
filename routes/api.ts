import { Router } from 'express';
import { sendEmailController } from '../controllers/sendEmailController';

const router = Router();

router.post('/send-email', sendEmailController);

export default router;
