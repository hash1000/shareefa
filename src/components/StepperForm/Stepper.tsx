import React from 'react';
import { LuCheck } from "react-icons/lu";
import { AppProps } from './stepperForm.interface';

const Stepper:React.FC<AppProps>=({ currentStep, numberOfSteps, data })=> {
  const activeColor = (index: number) =>
    currentStep >= index ? 'bg-custom-peach' : 'transparent';
  const activeColorChecked=(index:number)=>
    currentStep >= index? '#FFFFFF' : '#CCCCCC' 
  const activeColorLine = (index:number)=>
    currentStep >= index? 'bg-custom-peach': 'bg-custom-light-gray'
  const activeBorder = (index:number)=>
    currentStep >= index? 'border-custom-light-gray' : 'border-[2px] ' 
  const isFinalStep = (index: number) => index === numberOfSteps && numberOfSteps - 1;
  return (
    <div className="flex items-start border-r-2 xs:w-full md:w-[250px]">
      <div className="flex items-start sm:flex-row md:flex-col">
        {Array.from({ length: numberOfSteps||0 }).map((_, index:number) => (
          <React.Fragment key={index}>
          <div>
          <div className='flex items-center '>
           <div className={`w-5 h-5 flex items-center justify-center ${activeBorder(index)} rounded-full ${activeColor(index)}`}>
              <LuCheck color = {`${activeColorChecked(index)}`} size={12} />
            </div>
            <span className="ml-2 text-lg font-semibold">{data[index].name}</span>
            </div>
            {isFinalStep(index) ? null : (
              <div className={`xs:w-[1px] md:w-[1px] mb-2 ml-[10px] transition-all h-10 ${activeColorLine(index)}`}></div>
            )}
          </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
export default Stepper
