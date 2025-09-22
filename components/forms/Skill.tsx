import React from 'react'
import { fullSchematype } from '../MulstistepForm';
import { useFormContext } from 'react-hook-form';

const Skill = () => {
    const {
      register,
      formState: { errors },
    } = useFormContext<fullSchematype>();
    return (
      <div className="space-y-3">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Skill  *
            </label>
            <textarea
              {...register("skillInfo.skills")}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your skill"
            />
            {errors.skillInfo?.skills && (
              <p className="mt-1 text-sm text-red-500">
                {String(errors.skillInfo.skills.message)}
              </p>
            )}
          </div>
        </div>
      </div>
  )
}

export default Skill