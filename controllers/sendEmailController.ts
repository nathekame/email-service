import { Request, Response } from 'express';
import EmailService from '../services/emailService';

export const sendEmailController = async (req: Request, res: Response) => {
  try {
    const { subject, htmlContent, sender, to } = req.body;

    if (!subject || !htmlContent || !sender || !to) {
      return res.status(400).json({ 
        message: 'Missing required fields: subject, htmlContent, sender, to' 
      });
    }

    if (!sender.name || !sender.email || !to.name || !to.email) {
      return res.status(400).json({ 
        message: 'Sender and recipient must have name and email' 
      });
    }

    const emailService = new EmailService(req.body);
    const result = await emailService.sendEmail();

    if (result.success) {
      return res.status(200).json({ 
        message: 'Email sent successfully',
        data: result.data 
      });
    } else {
      return res.status(500).json({ 
        message: 'Failed to send email',
        error: result.error 
      });
    }
  } catch (err) {
    console.error('Email controller error:', err);
    return res.status(500).json({ 
      message: 'Server error',
      error: err instanceof Error ? err.message : 'Unknown error'
    });
  }
};