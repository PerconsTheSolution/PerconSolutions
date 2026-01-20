// Email Service using EmailJS
// Setup: Create account at emailjs.com and get your credentials

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Configure these with your EmailJS credentials from https://dashboard.emailjs.com
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY'
};

export const sendEmail = async (formData: EmailFormData): Promise<void> => {
  // Option 1: Using EmailJS (install: npm install @emailjs/browser)
  try {
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'info@perconsolutions.com'
    };

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
  } catch (error) {
    console.error('Email send failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};

// Option 2: Using Formspree (Alternative - simpler, no npm install needed)
export const sendEmailViaFormspree = async (formData: EmailFormData): Promise<void> => {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // Get from formspree.io
  
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email send failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};

// Option 3: Using Web3Forms (Alternative - free, simple)
export const sendEmailViaWeb3Forms = async (emailData: EmailFormData): Promise<void> => {
  const WEB3FORMS_KEY = 'f321cb06-aa79-4aed-9971-c3a5e373c0d8';
  
  console.log('Attempting to send email with Web3Forms...', emailData);
  
  try {
    // Use FormData instead of JSON for better compatibility
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('name', emailData.name);
    formData.append('email', emailData.email);
    formData.append('subject', emailData.subject);
    formData.append('message', emailData.message);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    console.log('Web3Forms response status:', response.status);
    const result = await response.json();
    console.log('Web3Forms result:', result);
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to send email');
    }
    
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Email send failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};
