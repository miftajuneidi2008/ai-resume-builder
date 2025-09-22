import { Plus, Trash2 } from 'lucide-react';
import React from 'react'
import { fullSchematype } from '../MulstistepForm';
import { useFieldArray, useFormContext } from 'react-hook-form';

const Education = () => {
 const {
    register,
    control,
    formState: { errors },
  } = useFormContext<fullSchematype>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationInfo",
  });

  const addExperience = () => {
    append({
      degreeTitle: "",
      field: "",
      institution: "",
      location: "",
      graduationDate: new Date(),
      gpa: 0,
  
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
                Degree Title *
              </label>
              <input
                type="text"
                {...register(`educationInfo.${index}.degreeTitle`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="AJ Creative Designs"
              />
              {errors.educationInfo?.[index]?.degreeTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.educationInfo[index]?.degreeTitle?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Field of study *
              </label>
              <input
                type="text"
                {...register(`educationInfo.${index}.field`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="shareholder"
              />
              {errors.educationInfo?.[index]?.field && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.educationInfo[index]?.field?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution *
              </label>
              <input
                type="text"
                {...register(`educationInfo.${index}.institution`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="100"
              />
              {errors.educationInfo?.[index]?.institution && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.educationInfo[index]?.institution?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                {...register(`educationInfo.${index}.location`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
              {errors.educationInfo?.[index]?.location && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.educationInfo[index]?.location?.message)}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Graduation Date *
              </label>
              <input
                type="date"
                {...register(`educationInfo.${index}.graduationDate`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
              {errors.educationInfo?.[index]?.graduationDate && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.educationInfo[index]?.graduationDate?.message)}
                </p>
              )}
            </div>
               <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GPA *
              </label>
              <input
                type="number"
                {...register(`educationInfo.${index}.gpa`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
              {errors.educationInfo?.[index]?.gpa && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.educationInfo[index]?.gpa?.message)}
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
          <span>Add Education</span>
        </button>
    </div>
  );
};


export default Education