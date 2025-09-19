"use client";
import React, { useState } from "react";
import PersonalInfo from "./forms/PersonalInfo";
import { z } from "zod";
import { PersonalInfoSchema, SummarySchema } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { ProgressBar } from "./ProgressBar";
import Summary from "./forms/Summary";

const fullSchema = z.object({
  personalInfo: PersonalInfoSchema,
  summaryInfo: SummarySchema
});
export type fullSchematype = z.infer<typeof fullSchema>;
const stepSchema = [z.object({ personalInfo: PersonalInfoSchema }),
       z.object({ summaryInfo: SummarySchema }),
];
const stepTitles = ["Personal Information", "Summary"];
const stepComponents = [PersonalInfo, Summary];

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
      summaryInfo:{
        summary:""
      },
    },
    mode: "onChange",
  });
  const { trigger, getValues } = methods;
  const nextStep = async () => {
    let stepData;

    switch (currentStep) {
      case 0:
        stepData = { personalInfo: getValues("personalInfo") };
        break;
        case 1:
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
    console.log("Final Data: ", data);
  };

  const CurrentStepComponent = stepComponents[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="p-6 bg-zinc-100">
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
                    className="flex items-center space-x-2 rounded-lg bg-gray-100 px-6 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  {currentStep < stepTitles.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center space-x-2 rounded-lg bg-blue-500 px-6 py-3 text-white transition-all duration-200 hover:bg-blue-600"
                    >
                      <span>Next</span>
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center space-x-2 rounded-lg bg-emerald-500 px-6 py-3 text-white transition-all duration-200 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
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
