import z, { email } from "zod";

export const PersonalInfoSchema= z.object({
    fullName: z.string().min(3, "Full name is required"),
    profession: z.string().min(2, "Profession is required").optional(),
    phone: z.string().min(10, "Phone number is required"),
    email: email("Invalid email address"),
    address: z.string().min(5, "Address is required").optional(),
    linkedIn: z.string().url("Invalid URL").optional(),
    website:z.string().url("Invalid URL").optional(),

})

export const SummarySchema = z.object({
    summary: z.string().min(50, "Summary must be at least 50 characters").max(500, "Summary must be at most 500 characters"),
})

export const ExperienceSchema = z.object({
    jobTitle: z.string().min(2, "Job title is required"),
    company: z.string().min(2, "Company name is required"),
    location: z.string().min(2, "Location is required"),
    startDate: z.coerce.date().min(new Date("2000-01-01"), "Invalid start date"),
    endDate: z.coerce.date().min(new Date("2000-01-01"), "Invalid end date").optional(),
    description: z.string().min(10, "Description must be at least 10 characters").optional(),
})