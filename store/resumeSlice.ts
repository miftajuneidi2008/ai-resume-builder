import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PersonalInfoSchema,
  SummarySchema,
  ExperienceSchema,
  EducationSchema,
  languageSchema,
  SkillSchema,
  certificationSchema,
  ProjectSchema,
} from "@/schema/schema"; // Assuming schemas are in this file
import { z } from "zod";

// Infer types from your Zod schemas
type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
type SummaryInfo = z.infer<typeof SummarySchema>;
type Experience = z.infer<typeof ExperienceSchema>;
type Education = z.infer<typeof EducationSchema>;
type Language = z.infer<typeof languageSchema>;
type Skill = z.infer<typeof SkillSchema>;
type Certificate = z.infer<typeof certificationSchema>;
type Project = z.infer<typeof ProjectSchema>
export interface ResumeState {
  personalInfo: PersonalInfo;
  summaryInfo: SummaryInfo;
  experienceInfo: Experience[];
  educationInfo: Education[];
  languageInfo: Language[];
  skillInfo: Skill[];
  certificationInfo: Certificate[];
  projectInfo: Project[];
}

export const initialState: ResumeState = {
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
      skillInfo: [],
      languageInfo: [],
      certificationInfo: [],
      projectInfo: [],
    };

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
    },
    updateSummaryInfo: (state, action: PayloadAction<SummaryInfo>) => {
      state.summaryInfo = action.payload;
    },
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experienceInfo.push(action.payload);
    },
  },
});

export const { updatePersonalInfo, updateSummaryInfo, addExperience } =
  resumeSlice.actions;

export default resumeSlice.reducer;
