import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import FormStep from './FormStep';
import Button from './Button';
import FileUpload from './FileUpload';

const agreementSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  terms: z.string().min(20, 'Terms must be at least 20 characters'),
  deadline: z.string().min(1, 'Deadline is required'),
  party1: z.string().email('Invalid email format'),
  party2: z.string().email('Invalid email format')
});

type AgreementFormData = z.infer<typeof agreementSchema>;

export default function AgreementForm() {
  const [paperContract, setPaperContract] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AgreementFormData>({
    resolver: zodResolver(agreementSchema),
  });

  const onSubmit = async (data: AgreementFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log({ ...data, paperContract });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <FormStep
        step={1}
        title="Basic Information"
        description="Enter the agreement details"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Agreement Title
            </label>
            <input
              type="text"
              id="title"
              {...register('title')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter agreement title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              {...register('description')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Brief description of the agreement"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>
        </div>
      </FormStep>

      <FormStep
        step={2}
        title="Agreement Terms"
        description="Define the terms and deadline"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="terms" className="block text-sm font-medium text-gray-700">
              Terms and Conditions
            </label>
            <textarea
              id="terms"
              {...register('terms')}
              rows={5}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter the terms of the agreement"
            />
            {errors.terms && (
              <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              {...register('deadline')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.deadline && (
              <p className="mt-1 text-sm text-red-600">{errors.deadline.message}</p>
            )}
          </div>
        </div>
      </FormStep>

      <FormStep
        step={3}
        title="Parties"
        description="Enter the email addresses of both parties"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="party1" className="block text-sm font-medium text-gray-700">
              Party 1 Email
            </label>
            <input
              type="email"
              id="party1"
              {...register('party1')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="email@example.com"
            />
            {errors.party1 && (
              <p className="mt-1 text-sm text-red-600">{errors.party1.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="party2" className="block text-sm font-medium text-gray-700">
              Party 2 Email
            </label>
            <input
              type="email"
              id="party2"
              {...register('party2')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="email@example.com"
            />
            {errors.party2 && (
              <p className="mt-1 text-sm text-red-600">{errors.party2.message}</p>
            )}
          </div>
        </div>
      </FormStep>

      <div className="space-y-4">
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              'Creating Agreement...'
            ) : (
              <>
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Create Agreement
              </>
            )}
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">or upload contract</p>
          <FileUpload
            onChange={setPaperContract}
            value={paperContract}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
        </div>
      </div>
    </form>
  );
}