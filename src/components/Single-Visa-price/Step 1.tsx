import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"; import Image from "next/image"; import React, { useState } from "react"; import { IoIosArrowForward } from "react-icons/io"; import Steps from "../Terms-and-condition/Steps"; import Step2 from "./Step 2";
const Step1 = ({ handleStartButtonClick, isStartButtonEnabledf, isStartButtonEnabledg, }: { handleStartButtonClick: any; isStartButtonEnabledf: any; isStartButtonEnabledg: any}) => {
    const [isChecked1, setIsChecked1] = useState(false);const [isChecked2, setIsChecked2] = useState(false); const handleDialogToggle2 = () => { setIsChecked1(false); setIsChecked2(false); window.location.reload();};const isStartButtonEnabled2 = () => {return isChecked1 && isChecked2;}; const handleDivClick1 = () => {setIsChecked1(!isChecked1);}; const handleDivClick2 = () => {setIsChecked2(!isChecked2);};
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="sm:justify-end">
                    <button
                        onClick={handleStartButtonClick}
                        className={`bg-[#e90000] hover:bg-[#e90000] rounded-none w-full text-white text-md font-light lg:w-fit py-2 px-6 uppercase flex text-center ${{ isStartButtonEnabledg } ? "" : "opacity-50 cursor-not-allowed"
                            }`}
                        disabled={isStartButtonEnabledf}
                    >
                        <span className="ml-6">Start</span>
                        <IoIosArrowForward className="text-2xl ml-[20px] text-white" />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="w-full lg:h-fit h-full lg:max-w-max bg-[#efefef] overflow-y-auto">
                <DialogHeader className="mt-7">
                    <DialogTitle className="text-center text-xl"> Let(s) get your Visa(s) </DialogTitle>
                    <DialogDescription className="text-center text-lg"> What(s) required to make this application? </DialogDescription>
                </DialogHeader>
                <div className=" flex flex-col lg:flex-row gap-5 mb-9 mt-9">
                    <Steps image="/id-Card.svg" width={40} height={40} title="Valid Passport" description="Clear passport scan or picture with minimum of 6 months validity." className=""/>
                    <Steps image="/Mansvg.svg" width={56} height={56} title="Picture / Headshot" description="Clear passport style color photo or a selfie with white background." className=""/>
                    <Steps image="/linessvg.svg" width={60} height={60} title="Personal Details" description="Name and contact details so we can facilitate your application." className=" mt-4"/>
                    <Steps image="/nationality.svg" width={60} height={60} title="Additional Documents"  description="In some cases additional documents may be required." className=" my-2"/>
                </div>
                <p className="text-left text-sm mb-4">Please confirm that you have read and agreed to the following:</p>
                <div className="flex flex-col text-black/80 gap-4">
                    <p className="text-left text-sm flex gap-4">
                        <div
                            className={`w-14 xl:w-6 h-6 border-2 border-red-500  flex justify-center rounded cursor-pointer`}
                            onClick={handleDivClick1}
                        >
                            {isChecked1 ? (
                                <span className="text-red-500 font-bold mt-0 ">✔</span>
                            ) : (
                                <span></span>
                            )}
                        </div>
                        The decision to grant or refuse the visa(s) is the sole prerogative
                        and at the sole discretion of Government of UAE.
                    </p>
                    <p className="text-left text-sm flex gap-3">
                        <div
                            className={`w-14 xl:w-6 h-6 border-2 border-red-500 flex items-center justify-center rounded cursor-pointer`}
                            onClick={handleDivClick2}
                        >
                            {isChecked2 ? (
                                <span className="text-red-500 font-bold mt-0">✔</span>
                            ) : (
                                <span></span>
                            )}
                        </div>
                        I hereby confirm that no active visa application is currently under
                        processing by another agent. This could lead to a none
                        <br />
                        refundable rejection of my visa application.
                    </p>
                    <p className="text-left text-sm flex gap-3">
                        <Image src="/Alert.svg" alt="Alert" width={30} height={30} />
                        You may order up to 9 Visas in <br /> the same application.
                    </p>
                </div>
                <DialogFooter className=" mt-0 xl:-mt-11">
                    <div>
                        <div className="flex gap-6 xl:flex-row flex-col">
                            <button
                                onClick={handleDialogToggle2}
                                className="border border-black px-12 text-md font-light py-2 transition-all duration-500 hover:bg-[#E6E6E6] uppercase"
                            >
                                Cancel
                            </button>
                            <Step2 handleStartButtonClick={handleStartButtonClick} isStartButtonEnabledf={!isStartButtonEnabled2()} isStartButtonEnabledg={isStartButtonEnabled2()} />
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
export default Step1;