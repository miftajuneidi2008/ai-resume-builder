import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  PersonalInfoSchema,
  SummarySchema,
  ExperienceSchema,
} from "@/schema/schema"; // Assuming schemas are in this file
import { z } from "zod";

// Infer types from your Zod schemas
type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
type SummaryInfo = z.infer<typeof SummarySchema>;
type Experience = z.infer<typeof ExperienceSchema>;

export interface ResumeState {
  personalInfo: PersonalInfo;
  summaryInfo: SummaryInfo;
  experience: Experience[];
}

const initialState: ResumeState = {
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
  experience: [
    {
      jobTitle: "",
      company: "",
      location: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
    },
  ],
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
      state.experience.push(action.payload);
    },
  },
});

export const { updatePersonalInfo, updateSummaryInfo, addExperience } =
  resumeSlice.actions;

export default resumeSlice.reducer;
