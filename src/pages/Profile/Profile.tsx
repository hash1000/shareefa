import React from 'react'
import Stepper from '@/components/StepperForm/index'
import ProfileInformationForm from './ProfileInformationForm/ProfileInformationForm';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Demographics' },
  { name: 'Family History' },
  { name: 'Insurance Information' },
  { name: 'Health History' }
];

const Profile:React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  // console.log('cur',currentStep)
  const numberOfSteps = data.length;
   const goToNextStep = () => setCurrentStep(prev => (prev === numberOfSteps - 1 ? prev : prev + 1));
  const goToPreviousStep = () => setCurrentStep(prev => (prev <= 0 ? prev : prev - 1));

  return (
    <div className='w-full h-screen pl-10 pt-10'>
       <h1 className="text-2xl">Patient Registration</h1>
       <br />
       <div className='pt-0 flex xs:flex-col md:flex-row'>
       <div className='sm:flex-none'>
          <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} data={data} numberOfSteps={numberOfSteps}/>
       </div>
       <div className='w-full px-5'>
        {currentStep===0 && <ProfileInformationForm 
        currentStep={currentStep}
        setCurrentStep={setCurrentStep} 
        goToNextStep={goToNextStep}
        goToPreviousStep={goToPreviousStep}
       />}
       {currentStep===1 && <h1>Hi</h1>}
       <div className='grid sm:grid-cols-8 gap-2'>
            <Button className='bg-custom-peach text-white' onClick={()=>goToPreviousStep()} type='submit' key='ok'>
                Back
            </Button>
            <Button className='bg-custom-peach text-white' onClick={()=>goToNextStep()} type='submit' key='ok'>
                Next
            </Button>
            </div>
       </div>
       </div>
    </div>
  )
}

export default Profile