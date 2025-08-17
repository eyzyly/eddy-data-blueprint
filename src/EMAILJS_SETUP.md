# EmailJS Setup Instructions

To make the contact form work, you need to set up EmailJS:

## 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

## 2. Add Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use these template variables:
  ```
  From: {{from_name}} <{{from_email}}>
  Subject: {{subject}}
  
  Message:
  {{message}}
  ```

## 4. Get Your Configuration
- **Service ID**: From your Email Services page
- **Template ID**: From your Email Templates page
- **Public Key**: From Integration > Account

## 5. Update ContactForm.tsx
Replace these placeholders in `src/components/ContactForm.tsx`:
```typescript
const serviceId = 'your_service_id'; // Replace with your Service ID
const templateId = 'your_template_id'; // Replace with your Template ID
const publicKey = 'your_public_key'; // Replace with your Public Key
```

And replace this email:
```typescript
to_email: 'your-email@example.com' // Replace with your email
```

## 6. Test the Form
- Build and deploy your site
- Test the contact form to make sure emails are being sent

That's it! Your contact form should now work on GitHub Pages.