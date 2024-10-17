interface DataItem {
  name: string;
}

export interface AppProps {
  currentStep: number;
  setCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
  data: DataItem[]; // Define data as an array of DataItem objects
  steps?: object[];
  numberOfSteps?: number;
}
