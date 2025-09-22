import z, { email } from "zod";
import { de } from "zod/locales";

export const PersonalInfoSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  profession: z
    .string()
    .min(2, "Profession is required")
    .optional()
    .or(z.literal("")),
  phone: z.string().min(10, "Phone number is required"),
  email: email("Invalid email address"),
  address: z
    .string()
    .min(5, "Address is required")
    .optional()
    .or(z.literal("")),
  linkedIn: z.string().url("Invalid URL").optional().or(z.literal("")),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const SummarySchema = z.object({
  summary: z
    .string()
    .min(50, "Summary must be at least 50 characters")
    .max(500, "Summary must be at most 500 characters"),
});

export const ExperienceSchema = z.object({
  jobTitle: z.string().min(2, "Job title is required"),
  company: z.string().min(2, "Company name is required"),
  location: z.string().min(2, "Location is required"),
  startDate: z.coerce.date().min(new Date("2000-01-01"), "Invalid start date"),
  endDate: z.coerce
    .date()
    .min(new Date("2000-01-01"), "Invalid end date")
    .optional()
    .or(z.literal("")),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .optional()
    .or(z.literal("")),
});

export const EducationSchema = z.object({
  degreeTitle: z.string().min(2, "Degree title is required"),
  field: z.string().min(2, "Field of study is required"),
  institution: z.string().min(2, "Institution name is required"),
  location: z.string().min(2, "Location is required"),
  graduationDate: z.coerce
    .date()
    .min(new Date("1900-01-01"), "Invalid graduation date"),
  gpa: z.coerce
    .number()
    .min(0, "GPA must be at least 0")
    .max(4, "GPA must be at most 4")
    .optional()
    .or(z.literal("")),
});

export const SkillSchema = z.object({
  skills: z.preprocess(
    (value) => {
      if (typeof value !== "string" || value.length === 0) {
        return [];
      }
      return value.split(",").map((skill) => skill.trim());
    },
    z
      .array(
        z
          .string()
          .min(2, {
            message: "Each skill must be at least 2 characters long.",
          }),
      )
      .nonempty({ message: "Please enter at least one skill." }),
  ),
});

export const ProjectSchema = z.object({
    title: z.string().min(2, "Project title is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    link: z.string().url("Invalid URL").optional().or(z.literal("")),
})

export const certificationSchema = z.object({
    name: z.string().min(2, "Certification name is required"),
    institution: z.string().min(2, "Issuing institution is required"),
    date: z.coerce.date().min(new Date("1900-01-01"), "Invalid date"),
    link: z.string().url("Invalid URL").optional().or(z.literal("")),
})

export const languageSchema = z.object({
    language: z.string().min(2, "Language is required"),
    proficiency: z.enum(["beginner", "intermediate", "advanced","Mother Tongue"],{error:"Proficiency level is required"})
})