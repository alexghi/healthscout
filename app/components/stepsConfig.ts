// components/stepsConfig.ts
export interface Step {
    label: string;
    path: string;
  }

  export const stepsConfig: Step[] = [
    {
      label: 'General Info',
      path: '/general-info',
    },
    {
      label: 'Medical Consultation',
      path: '/medical-consultation',
    },
    {
      label: 'Complete',
      path: '/complete',
    },
  ];
