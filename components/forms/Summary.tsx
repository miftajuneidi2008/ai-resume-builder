import React from "react";
import { useFormContext } from "react-hook-form";
import { fullSchematype } from "../MulstistepForm";

const Summary = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<fullSchematype>();
  return (
    <div className="space-y-3">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Job Summary</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Summary *
          </label>
          <textarea
            {...register("summaryInfo.summary")}
            className="h-24 w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your summary or give little information and generate by AI"
          />
          {errors.summaryInfo?.summary && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.summaryInfo.summary.message)}
            </p>
          )}
          <button className="rounded-md bg-blue-600 px-2 py-2 text-white w-full cursor-pointer">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
