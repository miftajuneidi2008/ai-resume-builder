import React from "react";
import WrapperClass from "./WrapperClass";
import Cards from "./Cards";
import { Building2, ChartNoAxesCombined } from "lucide-react";

const Service = () => {
  return (
    <WrapperClass>
      <div>
        <h1 className="my-4 text-center text-2xl font-bold text-indigo-500 md:my-8 md:text-4xl">
          Our Services
        </h1>
        <div>
          <div className="flex flex-col justify-center gap-2 sm:flex-row md:gap-6">
            <Cards
              title="Resume Building"
              icon={<Building2 />}
              description="Effortlessly create a professional and polished resume in minutes with our intuitive Resume Generation tool. Simply input your information, and our platform will guide you through the process with AI-powered suggestions for skills and job descriptions."
            />
            <Cards
              title="Resume Analysis"
              icon={<ChartNoAxesCombined />}
              description="Get detailed insights and feedback on your existing resume with our AI-powered Resume Analysis tool. Upload your resume, and our platform will provide personalized suggestions for improvement, helping you stand out to potential employers."
            />
          </div>
        </div>
      </div>
    </WrapperClass>
  );
};

export default Service;
