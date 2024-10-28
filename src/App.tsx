import React from 'react';
import AgreementForm from './components/AgreementForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Agreement Management System</h1>
          <p className="mt-2 text-sm text-gray-600">
            Create and manage agreements between two parties
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <AgreementForm />
        </div>
      </div>
    </div>
  );
}