import React from "react";
import { useFormContext } from "react-hook-form";
import { fullSchematype } from "../MulstistepForm";

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<fullSchematype>();
  return (
    <div className="space-y-3">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            {...register("personalInfo.fullName")}
            type="text"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
          {errors.personalInfo?.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.personalInfo.fullName.message)}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Profession *
          </label>
          <input
            {...register("personalInfo.profession")}
            type="text"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your profession"
          />
          {errors.personalInfo?.profession && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.personalInfo.profession.message)}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            {...register("personalInfo.phone")}
            type="tel"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
          {errors.personalInfo?.phone && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.personalInfo.phone.message)}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            {...register("personalInfo.email")}
            type="email"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.personalInfo?.email && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.personalInfo.email.message)}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            {...register("personalInfo.address")}
            type="text"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
              {errors.personalInfo?.address && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.personalInfo.address.message)}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Linkedin Url
          </label>
          <input
            {...register("personalInfo.linkedIn")}
            type="text"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your  Linkedin Url"
          />
              {errors.personalInfo?.linkedIn && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.personalInfo.linkedIn.message)}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Personal Website
          </label>
          <input
            {...register("personalInfo.website")}
            type="text"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your personal website"
          />
              {errors.personalInfo?.website && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.personalInfo.website.message)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
