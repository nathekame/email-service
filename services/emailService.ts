const brevo = require('@getbrevo/brevo');

interface EmailData {
  subject: string;
  htmlContent: string;
  sender: {
    name: string;
    email: string;
  };
  to: {
    email: string;
    name: string;
  };
}

export default class EmailService {
  private data: EmailData;

  constructor(data: EmailData) {
    this.data = data;
  }

  async sendEmail() {
    try {
      const data = this.data;

      const apiInstance = new brevo.TransactionalEmailsApi();
      apiInstance.authentications.apiKey.apiKey = process.env.BREVO_API_KEY as string;

      const sendSmtpEmail = new brevo.SendSmtpEmail();

      sendSmtpEmail.subject = data.subject;
      sendSmtpEmail.htmlContent = data.htmlContent;
      sendSmtpEmail.sender = { 
        name: data.sender.name, 
        email: data.sender.email 
      };
      sendSmtpEmail.to = [
        { 
          email: data.to.email, 
          name: data.to.name 
        }
      ];

      const sendMail = await apiInstance.sendTransacEmail(sendSmtpEmail);

      if (sendMail.response.statusCode === 201) {
        return { success: true, data: sendMail.response.body };
      } else {
        return { success: false, data: "Something went wrong" };
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
}