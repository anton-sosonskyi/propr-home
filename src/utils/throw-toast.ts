import { toast } from 'react-toastify';

type ToastPayload = {
  title?: string;
};

export const throwErrorToast = ({ title }: ToastPayload) => {
  if (!title) return;
  toast(title, { type: 'error' });
};