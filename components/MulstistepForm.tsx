"use client";
import React, { useEffect, useState } from "react";
import PersonalInfo from "./forms/PersonalInfo";
import { z } from "zod";
import {
  certificationSchema,
  EducationSchema,
  ExperienceSchema,
  languageSchema,
  PersonalInfoSchema,
  ProjectSchema,
  SkillSchema,
  SummarySchema,
} from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";
import { updatePersonalInfo } from "@/store/resumeSlice";
import Education from "./forms/Education";
import Skill from "./forms/Skill";
import Project from "./forms/Project";
import Language from "./forms/Language";
import Certification from "./forms/Certification";

const fullSchema = z.object({
  personalInfo: PersonalInfoSchema,
  summaryInfo: SummarySchema,
  experienceInfo: z.array(ExperienceSchema).default([]),
  educationInfo: z.array(EducationSchema).default([]),
  skillInfo: SkillSchema,
  projectInfo: z.array(ProjectSchema).default([]),
  languageInfo: z.array(languageSchema).default([]),
  certificationInfo: z.array(certificationSchema).default([]),
});
export type fullSchematype = z.infer<typeof fullSchema>;
const stepSchema = [
  z.object({ personalInfo: PersonalInfoSchema }),
  z.object({ experienceInfo: z.array(ExperienceSchema).default([]) }),
  z.object({ educationInfo: z.array(EducationSchema).default([]) }),
  z.object({ skillInfo: SkillSchema }),
  z.object({ projectInfo: z.array(ProjectSchema).default([]) }),
  z.object({ languageInfo: z.array(languageSchema).default([]) }),
  z.object({ certificationInfo: z.array(certificationSchema).default([]) }),
  z.object({ summaryInfo: SummarySchema }),
];
const stepTitles = [
  "Personal Information",
  "Experience",
  "Education",
  "Skills",
  "Projects",
  "Languages",
  "Certifications",
  "Summary",
];
const stepComponents = [
  PersonalInfo,
  Experience,
  Education,
  Skill,
  Project,
  Language,
  Certification,
  Summary,
];

const MulstistepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      personalInfo: {
        fullName: "",
        profession: "",
        phone: "",
        email: "",
        address: "",
        linkedIn: "",
        website: "",
      },
      summaryInfo: {
        summary: "",
      },
      experienceInfo: [],
      educationInfo: [],
      skillInfo: {
        skills: [],
      },
      languageInfo: [],
      certificationInfo: [],
      projectInfo: [],
    },
    mode: "onChange",
  });
  const { trigger, getValues,watch } = methods;

  const nextStep = async () => {
    let stepData;

    switch (currentStep) {
      case 0:
        stepData = { personalInfo: getValues("personalInfo") };
        break;
      case 1:
        stepData = { experience: getValues("experienceInfo") };
        break;
      case 2:
        stepData = { experience: getValues("experienceInfo") };
        break;
      case 3:
        stepData = { skillInfo: getValues("skillInfo") };
        break;
      case 4:
        stepData = { projectInfo: getValues("projectInfo") };
        break;
      case 5:
        stepData = { languageInfo: getValues("languageInfo") };
        break;
      case 6:
        stepData = { certificationInfo: getValues("certificationInfo") };
        break;
      case 7:
        stepData = { summaryInfo: getValues("summaryInfo") };
        break;
      default:
        stepData = {};
    }

    const isStepValid = await stepSchema[currentStep].safeParseAsync(stepData);
    if (isStepValid.success) {
      setCurrentStep(currentStep + 1);
    } else {
      // Trigger validation to show errors
      await trigger();
    }
  };
  const prevStep = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const onSubmit = async (data: any) => {
    localStorage.setItem("resumeData", JSON.stringify(data));
    console.log("Final Data: ", data);
  };

  const CurrentStepComponent = stepComponents[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="bg-zinc-100 p-6">
            <h1 className="mb-2 text-3xl font-bold">
              AI Powered Resume Builder
            </h1>
            <p className="text-indigo-500">
              Complete all steps to generate your Resume
            </p>
          </div>

          <div className="p-8">
            <ProgressBar
              currentStep={currentStep}
              totalSteps={stepTitles.length}
              stepTitles={stepTitles}
            />

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="min-h-[600px]">
                  <CurrentStepComponent />
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2 rounded-lg cursor-pointer bg-gray-100 px-6 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  {currentStep < stepTitles.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex cursor-pointer items-center space-x-2 rounded-lg bg-blue-500 px-6 py-3 text-white transition-all duration-200 hover:bg-blue-600"
                    >
                      <span>Next</span>
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex cursor-pointer items-center space-x-2 rounded-lg bg-emerald-500 px-6 py-3 text-white transition-all duration-200 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <>
                        <Send size={16} />
                        <span>Submit Application</span>
                      </>
                    </button>
                  )}
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MulstistepForm;
