import * as yup from "yup";

export const ValidationSchema = yup.object({
  propertyGoal: yup.string().required().min(2),
  propertyType: yup.string().required().min(2),
  sellPeriod: yup.string().required().min(2),
  address: yup.string().trim().required().min(2),
  price: yup.string().required().min(2),
  agentFocus: yup.string().required().min(2),
  isAgentInform: yup.boolean(),
});

export type ValidationSchemaType = yup.InferType<typeof ValidationSchema>;

export type Answers = {
  propertyGoal: string;
  propertyType: string;
  sellPeriod: string;
  address: string;
  price: string;
  agentFocus: string;
  isAgentInform: boolean;
}
