import React from 'react';
import Stepper from './Stepper';
// import './style.css';
import { AppProps } from './stepperForm.interface';
// Define the interface for the props


const App: React.FC<AppProps> = ({ currentStep, setCurrentStep, data, numberOfSteps }) => {
 // Update to match the length of data

  return (
    <div className='md:block'>
      <Stepper currentStep={currentStep} numberOfSteps={numberOfSteps} data={data} />
      <br />
      {/* <section className="flex gap-10">
        <button onClick={goToPreviousStep} className="bg-blue-600 text-white p-2 rounded-md">Previous step</button>
        <button onClick={goToNextStep} className="bg-blue-600 text-white p-2 rounded-md">Next step</button>
      </section> */}
    </div>
  );
}

export default App;
