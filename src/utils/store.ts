import { create } from 'zustand';

type State = {
  formData: { title: string; description: string };
  setFormData: (data: { title: string; description: string }) => void;
};

export const useStore = create<State>((set) => ({
  formData: { title: '', description: '' },
  setFormData: (data) => set({ formData: data }),
}));