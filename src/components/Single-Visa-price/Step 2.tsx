import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdDelete, MdOutlineFileUpload } from "react-icons/md";
const Step2 = ({
  handleStartButtonClick,
  isStartButtonEnabledf,
  isStartButtonEnabledg,
}: {
  handleStartButtonClick: any;
  isStartButtonEnabledf: any;
  isStartButtonEnabledg: any;
}) => {
  const [imagesUploaded, setImagesUploaded] = useState(false);
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
  const [selectedFile2, setSelectedFile2] = useState<
    string | ArrayBuffer | null
  >(null);
  const [selectedFile3, setSelectedFile3] = useState<File | null>(null);
  const fileInputRef = React.createRef<HTMLInputElement>();
  const fileInputRef2 = React.createRef<HTMLInputElement>();
  const fileInputRef3 = React.createRef<HTMLInputElement>();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile1(file);
      setImagesUploaded(true);
    }
  };
  const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string" || result instanceof ArrayBuffer) {
          setSelectedFile2(result as string | ArrayBuffer);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === "string" || result instanceof ArrayBuffer) {
          setSelectedFile3(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleCustomFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleCustomFileClick2 = () => {
    if (fileInputRef2.current) {
      fileInputRef2.current.click();
    }
  };

  const handleCustomFileClick3 = () => {
    if (fileInputRef3.current) {
      fileInputRef3.current.click();
    }
  };
  const onDeleteImage = () => {
    setSelectedFile1(null);
  };
  const onDeleteImage2 = () => {
    setSelectedFile2(null);
  };
  const onDeleteImage3 = () => {
    setSelectedFile3(null);
  };

  const close = () => {
    window.location.reload();
  };
  return (
    <Dialog>
      <DialogTrigger>
        <button
          onClick={handleStartButtonClick}
          className={`bg-[#e90000]  text-white pl-32 pr-[17px] xl:pl-12 xl:pr-3 text-md font-light pb-[9px] pt-[9px] uppercase flex text-center ${
            isStartButtonEnabledg ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={isStartButtonEnabledf}
        >
          Start
          <IoIosArrowForward className="text-2xl ml-[90px] xl:ml-8 text-white" />
        </button>
      </DialogTrigger>
      <DialogContent className="h-full text-center overflow-y-auto max-w-screen-2xl bg-[#f5f5f5]">
      <DialogHeader>
          <div className="flex justify-center items-center mt-[10px]">
            <hr className="w-[300px] lg:w-[970px]" />
          </div>
          <div className="flex lg:w-[1300px] text-center absolute top-0 gap-5 lg:-ml-0 -ml-[8px] lg:gap-64 justify-center items-center">
            <div className="flex w-fit flex-col justify-center items-center gap-2">
              <div className="rounded-full border-2 bg-[#f5f5f5] border-black/60 h-14 w-14" />
              <p className="text-center text-black/50 text-sm font-bold">
                DOCUMENTS
              </p>
            </div>
            <div className="flex w-fit flex-col justify-center items-center gap-2">
              <div className="rounded-full bg-[#f5f5f5] border-2 h-14 w-14" />
              <p className="text-center text-black/50 text-sm font-bold">
                DETAILS
              </p>
            </div>
            <div className="flex w-fit flex-col justify-center items-center gap-2">
              <div className="rounded-full bg-[#f5f5f5] border-2 h-14 w-14" />
              <p className="text-center text-black/50 text-sm font-bold">
                REVIEW
              </p>
            </div>
            <div className="flex w-fit flex-col justify-center items-center gap-2">
              <div className="rounded-full bg-[#f5f5f5] border-2 h-14 w-14" />
              <p className="text-center text-black/50 text-sm font-bold">
                CHECKOUT
              </p>
            </div>
          </div>
        </DialogHeader>
        <div className=" mt-20 lg:mt-10">
          <div className=" flex justify-center xl:justify-between flex-col sm:flex-row ">
            <h1 className="text-[#e90000] text-xl">MAIN APPLICANT</h1>
            <div>
              Order Total:
              <span className="text-xl font-bold">180 USD</span>
            </div>
          </div>

          <div>
            <p className=" mt-16 text-xl">
              Please Upload the Following Documents
            </p>
            <div className="flex mt-10 text-sm  justify-between xl:flex-row flex-col px-0 xl:px-80">
              <div>
                Accepted Formats:
                <span className="text-[#e90000]">PDF, JPG or PNG</span>
              </div>
              <div>
                Maximum File Size:
                <span className="text-[#e90000]">4 MB per upload</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-6">
              <input
                type="file"
                accept=".jpg,.png" // Limit accepted file types
                onChange={handleFileChange}
                style={{ display: "none" }} // Hide default file input
                ref={fileInputRef}
              />
              <label className="bg-white w-52 h-40 flex flex-col justify-center items-center">
                {selectedFile1 ? (
                  <div>
                    <p>Passport</p>
                    <div className="flex text-center border p-1 justify-between gap-[50px] mb-6 mt-4">
                      <p className="text-[15px]">{selectedFile1.name}</p>
                      <p onClick={onDeleteImage}>
                        <MdDelete
                          fill="#e90000"
                          className="cursor-pointer"
                          size={23}
                        />
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="overflow-hidden w-20 h-16 flex justify-center items-center">
                      <img
                        onClick={handleCustomFileClick}
                        className="cursor-pointer w-10"
                        src="/id-Card.svg"
                        alt="Selected Image"
                      />
                    </div>
                    <p>Passport</p>
                  </div>
                )}

                <MdOutlineFileUpload
                  className="text-red-500 ml-36 -mb-4 cursor-pointer"
                  onClick={handleCustomFileClick}
                  size={30}
                />
              </label>

              <input
                type="file"
                accept=".jpg,.png" // Limit accepted file types
                onChange={handleFileChange2}
                style={{ display: "none" }} // Hide default file input
                ref={fileInputRef2}
              />
              <label className="bg-white w-52 h-40 flex flex-col justify-center items-center">
                {selectedFile2 ? (
                  <div className="rounded-full cursor-pointer overflow-hidden w-20 h-16 flex justify-center items-center">
                    <img
                      src={selectedFile2 as string}
                      alt="Selected Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="overflow-hidden cursor-pointer w-20 h-16 flex justify-center items-center">
                    <img
                      onClick={handleCustomFileClick2}
                      src="/Mansvg.svg"
                      alt="Selected Image"
                    />
                  </div>
                )}

                {selectedFile2 ? (
                  <div>
                    <p>Photograph</p>
                    <p>
                      <MdDelete
                        onClick={onDeleteImage2}
                        className="text-red-500 cursor-pointer ml-36 -mb-4"
                        size={30}
                      />
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>Photograph</p>
                    <MdOutlineFileUpload
                      onClick={handleCustomFileClick2}
                      className="text-red-500 cursor-pointer ml-36 -mb-4"
                      size={30}
                    />
                  </div>
                )}
              </label>

              <input
                type="file"
                accept=".jpg,.png" // Limit accepted file types
                onChange={handleFileChange3}
                style={{ display: "none" }} // Hide default file input
                ref={fileInputRef3}
              />
              <label className="bg-white w-52 h-40 flex flex-col justify-center items-center">
                {selectedFile3 ? (
                  <div>
                    <p>National ID</p>
                    <div className="flex text-center border p-1 justify-between gap-[50px] mb-6 mt-4">
                      <p className="text-[15px]">{selectedFile3.name}</p>
                      <p onClick={onDeleteImage3}>
                        <MdDelete
                          fill="#e90000"
                          className="cursor-pointer"
                          size={23}
                        />
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="overflow-hidden w-20 h-16 flex justify-center items-center">
                      <img
                        onClick={handleCustomFileClick3}
                        className="cursor-pointer"
                        src="/nationality.svg"
                        alt="Selected Image"
                      />
                    </div>
                    <p>National ID</p>
                  </div>
                )}

                <MdOutlineFileUpload
                  className="text-red-500 ml-36 -mb-4 cursor-pointer"
                  onClick={handleCustomFileClick3}
                  size={30}
                />
              </label>
            </div>
          </div>

          <div className=" mt-12 flex flex-col xl:flex-row gap-4 justify-center">
            <button
              onClick={close}
              className="border border-black px-12 text-md font-light py-2 duration-600 transition-all hover:bg-[#E6E6E6] uppercase"
            >
              Cancel
            </button>

          <Dialog>
            <DialogTrigger>
            <button
  onClick={handleStartButtonClick}
  className={`bg-[#e90000] hover:bg-[#e90000] text-white text-md font-light w-full justify-center lg:w-fit lg:h-fit px-6 py-3 uppercase flex text-center ${
    imagesUploaded ? "" : "opacity-50 cursor-not-allowed"
  }`}
  disabled={!imagesUploaded}
>
  Details
  <IoIosArrowForward className="text-2xl ml-[60px] xl:ml-8 text-white" />
</button>
            </DialogTrigger>
          <DialogContent className="h-full text-center overflow-y-auto max-w-screen-2xl bg-[#f5f5f5]">
            <DialogHeader>
          <div className="flex justify-center items-center mt-[10px]">
            <hr className="w-[300px] lg:w-[970px]" />
          </div>
          <div className="flex lg:w-[1300px] text-center absolute top-0 gap-5 lg:-ml-0 -ml-[8px] lg:gap-64 justify-center items-center">
            <div className="flex w-fit flex-col justify-center items-center gap-2">
              <div className="rounded-full border-2 bg-[#f5f5f5] border-[#339933] h-14 w-14" />
              <p className="text-center text-black/50 text-sm font-bold">
                DOCUMENTS
              </p>
            </div>
            <div className="flex w-fit flex-col justify-center items-center gap-2">
              <div className="rounded-full bg-[#f5f5f5] border-black/60 border-2 h-14 w-14" />
              <p className="text-center text-black/50 text-sm font-bold">
                DETAILS
              </p>
            </div>
            <div className="flex w-fit flex-col justify-center items-center gap-2">
              <div className="rounded-full bg-[#f5f5f5] border-2 h-14 w-14" />
              <p className="text-center text-black/50 text-sm font-bold">
                REVIEW
              </p>
            </div>
            <div className="flex w-fit flex-col justify-center items-center gap-2">
              <div className="rounded-full bg-[#f5f5f5] border-2 h-14 w-14" />
              <p className="text-center text-black/50 text-sm font-bold">
                CHECKOUT
              </p>
            </div>
          </div>
        </DialogHeader>
  
          </DialogContent>
          </Dialog>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Step2;
