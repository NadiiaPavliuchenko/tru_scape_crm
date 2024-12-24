'use client';
import { Field } from 'formik';
import React from 'react';

export interface InputFieldProps {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-gray-900 text-base">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm border border-gray-300 rounded shadow"
      />
    </div>
  );
}
