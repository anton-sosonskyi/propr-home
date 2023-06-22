import * as yup from "yup";

export const validationSchema = yup.object({
  propertyGoal: yup.string(),
  propertyType: yup.string(),
  sellPeriod: yup.string(),
  address: yup.string().trim(),
  price: yup.string(),
  agentFocus: yup.string(),
  isAgentInform: yup.boolean(),
});
