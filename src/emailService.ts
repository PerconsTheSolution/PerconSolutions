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
export const sendEmailViaWeb3Forms = async (formData: EmailFormData): Promise<void> => {
  const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY'; // Get from web3forms.com
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    });

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email send failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};
