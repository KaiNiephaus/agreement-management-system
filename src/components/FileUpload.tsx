import React, { ChangeEvent } from 'react';
import { DocumentArrowUpIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

interface FileUploadProps {
  onChange: (file: File | null) => void;
  error?: string;
  value?: File | null;
  accept?: string;
}

export default function FileUpload({ onChange, error, value, accept = ".pdf,.doc,.docx" }: FileUploadProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div>
      <label 
        className={clsx(
          "flex justify-center w-full h-32 px-4 transition border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer",
          "hover:border-blue-400 focus:outline-none",
          error ? "border-red-500" : "border-gray-300"
        )}
      >
        <div className="flex flex-col items-center justify-center">
          <DocumentArrowUpIcon className="w-10 h-10 text-gray-400" />
          <div className="flex flex-col items-center">
            <span className="font-medium text-gray-600">
              {value ? value.name : 'Drop files to Attach, or'}
            </span>
            <span className="text-blue-600">browse</span>
          </div>
          <input 
            type="file" 
            name="file" 
            className="hidden" 
            accept={accept}
            onChange={handleChange}
          />
        </div>
      </label>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {value && !error && (
        <p className="mt-1 text-sm text-gray-500">
          Selected file: {value.name}
        </p>
      )}
    </div>
  );
}