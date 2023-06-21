import { FormProvider, useForm } from 'react-hook-form';

export const FindAgentMultiStepForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        FindAgentMultiStepForm
      </form>
    </FormProvider>
  );
};
