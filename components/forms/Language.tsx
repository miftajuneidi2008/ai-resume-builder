import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form';
import { fullSchematype } from '../MulstistepForm';
import { Plus, Trash2 } from 'lucide-react';

const Language = () => {
const {
    register,
    control,
    formState: { errors },
  } = useFormContext<fullSchematype>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "languageInfo",
  });

  const addExperience = () => {
    append({
      language: "",
      proficiency: "beginner",

  
    });
  };

  return (
    <div className="space-y-3">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Language</h2>
    
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
                Language *
              </label>
              <input
                type="text"
                {...register(`languageInfo.${index}.language`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="AJ Creative Designs"
              />
              {errors.languageInfo?.[index]?.language && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.languageInfo[index]?.language?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proficiency Level *
              </label>
              <select  id="proficiency"  {...register(`languageInfo.${index}.proficiency`)} >
                <option value="">Select Proficiency</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                 <option value="Mother Tongue">Mother Tongue</option>
              </select>
            
              {errors.languageInfo?.[index]?.proficiency && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.languageInfo[index]?.proficiency?.message)}
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
          <span>Add Language</span>
        </button>
    </div>
  );
};

export default Language