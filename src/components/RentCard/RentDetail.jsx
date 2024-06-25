/* eslint-disable react/prop-types */
import { useState } from "react";
import Buttons from "../Buttons/Buttons";
function RentDetail({ machine, setShowModal }) {
  const [imageSelected, setImageSelected] = useState();

  function handleShowModal() {
    console.log("hiciste click lcdm");
    setShowModal(true);
  };
  return (
    <div id="rent-detail" className="bg-[#473429] pt-20">
      <div className="flex flex-col items-center">
        <div id="rent-detail-container" className="flex flex-col items-center">
          <div
            id="rent-detail-title"
            className="flex justify-center items-center pb-10"
          >
            <h2 className="font-[400] text-2xl md:text-5xl md:pt-10 md:pb-5">
              {machine?.title}
            </h2>
          </div>
          <div id="rent-detail-content" className="flex gap-5">
            <div id="rent-detail-images">
              <div
                id="rent-detail-image-selected"
                className="flex justify-center items-center pb-10"
              >
                <div className="rounded-xl">
                  <img
                    src={imageSelected ? imageSelected : machine?.images[0]}
                    width={"400px"}
                    className="border-black border-4 rounded-md"
                  />
                </div>
              </div>
              <div id="rent-detail-images-thumbnails" className="flex gap-10">
                {machine?.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setImageSelected(image)}
                    className="cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`machine-${index}`}
                      width={"80px"}
                      className={`${
                        image === imageSelected ? "" : "opacity-35"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              id="rent-detail-description"
              className="flex flex-col justify-center items-center w-[50%]"
            >
              <div>
                <p className="md:text-xl">{machine?.description}</p>
              </div>
              <div id="rent-detail-button" className="pt-10">
                <Buttons
                  variant="primary"
                  label="Rent Now"
                  onClick={handleShowModal}
                ></Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentDetail;
