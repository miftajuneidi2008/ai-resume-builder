import React from "react";
import { fullSchematype } from "../MulstistepForm";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

const Experience = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<fullSchematype>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experienceInfo",
  });

  const addExperience = () => {
    append({
      jobTitle: "",
      company: "",
      location: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
    });
  };

  return (
    <div className="space-y-3">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Experience</h2>
    
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-6 rounded-lg border relative">
          <button
            type="button"
            onClick={() => remove(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
          >
            <Trash2 size={16} />
          </button>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                {...register(`experienceInfo.${index}.jobTitle`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="AJ Creative Designs"
              />
              {errors.experienceInfo?.[index]?.jobTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.experienceInfo[index]?.jobTitle?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company *
              </label>
              <input
                type="text"
                {...register(`experienceInfo.${index}.company`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="shareholder"
              />
              {errors.experienceInfo?.[index]?.company && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.experienceInfo[index]?.company?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                {...register(`experienceInfo.${index}.location`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                placeholder="100"
              />
              {errors.experienceInfo?.[index]?.location && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.experienceInfo[index]?.location?.message)}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date *
              </label>
              <input
                type="date"
                {...register(`experienceInfo.${index}.startDate`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
              {errors.experienceInfo?.[index]?.startDate && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.experienceInfo[index]?.startDate?.message)}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date *
              </label>
              <input
                type="date"
                {...register(`experienceInfo.${index}.endDate`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
              {errors.experienceInfo?.[index]?.endDate && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.experienceInfo[index]?.endDate?.message)}
                </p>
              )}
            </div>
               <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <input
                type="text"
                {...register(`experienceInfo.${index}.description`)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
              />
              {errors.experienceInfo?.[index]?.description && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.experienceInfo[index]?.description?.message)}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          <Plus size={16} />
          <span>Add Experience</span>
        </button>
    </div>
  );
};

export default Experience;
