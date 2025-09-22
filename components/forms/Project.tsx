import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import { fullSchematype } from '../MulstistepForm';
import { Plus, Trash2 } from 'lucide-react';

const Project = () => {
const {
    register,
    control,
    formState: { errors },
  } = useFormContext<fullSchematype>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projectInfo",
  });

  const addExperience = () => {
    append({
        title: "",
        description:"",
        link: "",
        
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
                Project Title *
              </label>
              <input
                type="text"
                {...register(`projectInfo.${index}.title`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="AJ Creative Designs"
              />
              {errors.projectInfo?.[index]?.title && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.projectInfo[index]?.title?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                {...register(`projectInfo.${index}.description`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="Describe your project"
              />
              {errors.projectInfo?.[index]?.description && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.projectInfo[index]?.description?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Link 
              </label>
              <input
                type="text"
                {...register(`projectInfo.${index}.link`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="https://example.com"
              />
              {errors.projectInfo?.[index]?.link && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.projectInfo[index]?.link?.message)}
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
          <span>Add Project</span>
        </button>
    </div>
  );
};
export default Project