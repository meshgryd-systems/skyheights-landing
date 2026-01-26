'use client';

import { useState } from 'react';
import Button from './Button';
import { useSubmitContactMutation } from '@/store/services';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [submitContact, { isLoading: isSubmitting }] = useSubmitContactMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error message when user starts typing
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitStatus('idle');

    try {
      const result = await submitContact({
        email: formData.email,
        name: formData.name || undefined,
        phone: formData.phone || undefined,
        subject: formData.subject || undefined,
        message: formData.message
      }).unwrap();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');

      if (error?.data?.message) {
        setErrorMessage(error.data.message);
      } else if (error?.data?.errors && Array.isArray(error.data.errors)) {
        setErrorMessage(error.data.errors.join(', '));
      } else {
        setErrorMessage('An error occurred while submitting your message. Please try again.');
      }

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const inputClasses = 'w-full px-4 py-3 border border-divider-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent transition-all';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-deep-navy font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-deep-navy font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-deep-navy font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="+234 xxx xxx xxxx"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-deep-navy font-medium mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Select a subject</option>
            <option value="admissions">Admissions Enquiry</option>
            <option value="curriculum">Curriculum Information</option>
            <option value="fees">Fees & Payment</option>
            <option value="facilities">Facilities Tour</option>
            <option value="general">General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-deep-navy font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={inputClasses}
          placeholder="Tell us how we can help..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you for your message! We will get back to you shortly.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {errorMessage || 'There was an error submitting your message. Please try again.'}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full md:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
