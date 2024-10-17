import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import React from 'react'
// import { AppProps } from '@/components/StepperForm/stepperForm.interface';

const ProfileInformationForm: React.FC<any> = ({ 
    currentStep, numberOfSteps, 
    steps,goToNextStep,goToPreviousStep}) => {

    // const submit=():void=>{
    //    goToNextStep()
    // }
    // const submit=():void=>{
    //     goToNextStep()
    //  }
    console.log('first',currentStep)
    return (
         <div>
            <><p className='font-semibold text-lg'>Personnel Info</p></>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                <div>
                    <Input placeholder='Name' customClass='rounded-full' id='1' isRequired name='name' inputType='text'/>
                </div>
                <div>
                    <Input placeholder='Age' customClass='rounded-full' id='1' isRequired name='name' inputType='number'/>
                </div>
                <div>
                    <Input placeholder='Date of Birth' customClass='rounded-full' id='1' isRequired name='name' inputType='text'/>
                </div>
                <div>
                    <Input placeholder='Name' customClass='rounded-full' id='1' isRequired name='name' inputType='text'/>
                </div>
                <div>
                    <Input placeholder='Age' customClass='rounded-full' id='1' isRequired name='name' inputType='number'/>
                </div>
                <div>
                    <Input placeholder='Date of Birth' customClass='rounded-full' id='1' isRequired name='name' inputType='text'/>
                </div>
                
            </div>
            <br/>
            
         </div>

    )
}

export default ProfileInformationForm