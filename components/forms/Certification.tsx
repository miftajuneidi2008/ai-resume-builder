import React from 'react'
import { fullSchematype } from '../MulstistepForm';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Plus, Trash2 } from 'lucide-react';

const Certification = () => {
 const {
    register,
    control,
    formState: { errors },
  } = useFormContext<fullSchematype>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "certificationInfo",
  });

  const addExperience = () => {
    append({
        name: "",
        institution:"",
        date: new Date(),
        link: ""
    });
  };

  return (
    <div className="space-y-3">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Education</h2>
    
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-6 rounded-lg border relative">
          <button
            type="button"
            onClick={() => remove(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700 cursor-pointer"
          >
            <Trash2 size={16} />
          </button>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Certificate Name *
              </label>
              <input
                type="text"
                {...register(`certificationInfo.${index}.name`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="AJ Creative Designs"
              />
              {errors.certificationInfo?.[index]?.name && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.certificationInfo[index]?.name?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Issuer Organization *
              </label>
              <input
                type="text"
                {...register(`certificationInfo.${index}.institution`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="shareholder"
              />
              {errors.certificationInfo?.[index]?.institution && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.certificationInfo[index]?.institution?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                {...register(`certificationInfo.${index}.date`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="100"
              />
              {errors.certificationInfo?.[index]?.date && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.certificationInfo[index]?.date?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Link 
              </label>
              <input
                type="text"
                {...register(`certificationInfo.${index}.link`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
              {errors.certificationInfo?.[index]?.link && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.certificationInfo[index]?.link?.message)}
                </p>
              )}
            </div>

          </div>
        </div>
      ))}
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
        >
          <Plus size={16} />
          <span>Add Certificate</span>
        </button>
    </div>
  );
};

export default Certification