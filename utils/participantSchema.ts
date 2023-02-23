import { date, number, object, string } from "yup";

const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/g;

export const participantSchema = object({
  firstName: string().trim().required("First name is required"),
  lastName: string().trim().required("Last name is required"),
  email: string()
    .trim()
    .email("Must be a valid email")
    .required("Email is required"),
  password: string()
    .trim()
    .max(8, "Password must be 8 characters")
    .matches(
      passwordRegexp,
      "Password must have one uppercase letter, one lowercase letter, one number and a length of 8 characters"
    )
    .required("Password is required"),
  telephone: string()
    .max(10, "Telephone must be 10 characters")
    .matches(/[0-9]/, "Telephone must have only numbers")
    .required("Telephone is required"),
  cellphone: string()
    .max(10, "Cellphone must be 10 characters")
    .matches(/[0-9]/, "Cellphone must have only numbers")
    .required("Cellphone is required"),
  formAware: string().trim().required("Form aware is required"),
  otherFormAware: string().trim().required("Other form aware is required"),
  position: string().trim().required("Position is required"),
  companyName: string().trim().required("Company name is required"),
  originDate: date().required("Origin date is required"),
  employeesNumber: string().trim().notRequired(),
  menNumber: number().required("Men number is required"),
  womenNumber: number().required("Women number is required"),
  nonBinaryNumber: number().required("Non binary number is required"),
  geographyIntervention: string()
    .trim()
    .required("Geography intervention is required"),
  businessName: string().trim().required("Business name is required"),
  businessUrl: string().trim().required("Business url is required"),
  postalCode: string()
    .max(5, "Postal code must be 5 digits")
    .matches(/[0-9]/, "Postal code must have only numbers")
    .required(),
  streetNumber: string().trim().required("Street number is required"),
  suburb: string().trim().required("Suburb is required"),
  municipalityDelegation: string()
    .trim()
    .required("Municipality delegation is required"),
  city: string().trim().required("City is required"),
  country: string().trim().required("Country is required"),
  vision: string().trim().required("Vision is required"),
  mission: string().trim().required("Mission is required"),
  customers: string().trim().required("Customers is required"),
  users: string().trim().required("Users is required"),
  allies: string().trim().required("Allies is required"),
  interestGroups: string().trim().required("Interest groups is required"),
  competence: string().trim().required("Competence is required"),
  hasAccelerationProgram: string()
    .trim()
    .required("Acceleration program is required"),
  programName: string().trim().required("Program is required"),
  firstYear: string().trim().required("First year is required"),
  secondYear: string().trim().required("Second year is required"),
  thirdYear: string().trim().required("Third year is required"),
});
