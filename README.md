# Email Service API

A Node.js/Express API service for sending transactional emails using Brevo (formerly Sendinblue).

## Features

- 📧 Send transactional emails via Brevo API
- 🔒 TypeScript for type safety
- ⚡ Express.js REST API
- 🛡️ Input validation

## Prerequisites

- Node.js (v14 or higher)
- Brevo account and API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/email-service.git
cd email-service
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
BREVO_API_KEY=your_brevo_api_key_here
PORT=5000
```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## API Endpoints

### Send Email
Send a transactional email via Brevo.

**Endpoint:** `POST /api/send-email`

**Request Body:**
```json
{
  "subject": "Welcome to our service!",
  "htmlContent": "<h1>Hello!</h1><p>Thanks for signing up.</p>",
  "sender": {
    "name": "My App",
    "email": "noreply@myapp.com"
  },
  "to": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Success Response (200):**
```json
{
  "message": "Email sent successfully",
  "data": {
    "messageId": "<...>"
  }
}
```

**Error Response (400):**
```json
{
  "message": "Missing required fields: subject, htmlContent, sender, to"
}
```

### Example cURL Request
```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "subject": "Test Email",
    "htmlContent": "<h1>Hello World</h1>",
    "sender": {
      "name": "My App",
      "email": "noreply@myapp.com"
    },
    "to": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }'
```

## Project Structure

```
email-service/
├── controllers/
│   └── sendEmailController.ts    # Email sending logic
├── routes/
│   └── api.ts                    # API route definitions
├── services/
│   └── emailService.ts           # Brevo email service wrapper
├── .env                          # Environment variables
├── app.ts                        # Express app setup
├── package.json
└── tsconfig.json
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BREVO_API_KEY` | Your Brevo API key | Yes |
| `PORT` | Server port (default: 5000) | No |

## Getting Your Brevo API Key

1. Sign up at [Brevo](https://www.brevo.com/)
2. Navigate to **Settings** → **SMTP & API**
3. Generate a new API key
4. Copy the key to your `.env` file

## Setting Up Brevo

### 1. Verify Your Sender Email

Before sending emails, you must verify your sender email address:

1. Log in to your Brevo account
2. Go to **Senders, Domains & Dedicated IPs** → **Senders**
3. Click **Add a New Sender**
4. Enter your sender email address and name
5. Click **Save**
6. Check your email inbox for a verification email from Brevo
7. Click the verification link in the email
8. Once verified, the sender status will show as **Active**

**Note:** You can only send emails from verified sender addresses. Make sure the `sender.email` in your API requests matches a verified sender.

### 2. Authorize Your Server IP (Optional but Recommended)

For added security, you can whitelist your server's IP address:

1. Go to **Settings** → **SMTP & API**
2. Scroll down to **IP Management**
3. Click **Add an IP Address**
4. Enter your server's public IP address
5. Click **Save**

**How to find your server IP:**
```bash
# For your local machine
curl ifconfig.me

# For a deployed server
curl https://api.ipify.org
```

**Note:** If you don't whitelist an IP, Brevo will still work but may have additional rate limits or security checks.

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Brevo** - Email service provider

## Error Handling

The service includes comprehensive error handling:
- Input validation errors (400)
- Server errors (500)
- All errors are logged and returned with appropriate messages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please open an issue on GitHub.