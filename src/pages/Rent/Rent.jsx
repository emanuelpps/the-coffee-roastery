import RentDetail from "../../components/RentCard/RentDetail";
import machineTypeAone from "/assets/img/machine-A-1.webp";
import machineTypeAtwo from "/assets/img/machine-A-2.webp";
import machineTypeAthree from "/assets/img/machine-A-3.webp";
import machineTypeBone from "/assets/img/machine-B-1.webp";
import machineTypeBtwo from "/assets/img/machine-B-2.webp";

function Rent() {
  const machineDetailsOne = {
    description:
      "The Expobar Sienna Espresso Machine is a professional-grade coffee maker designed for optimal performance in busy environments. Features a robust stainless steel construction, dual group heads, and programmable buttons for precise control, this machine ensures consistent, high-quality espresso shots. Ideal for cafes and coffee enthusiasts, it combines reliability with ease of use, making it a valuable addition to any coffee setup.",
    images: [machineTypeAone, machineTypeAtwo, machineTypeAthree],
    title: "Expobar - Sienna Espresso Machine",
  };
  const machineDetailsTwo = {
    description:
      "The Expobar Verona Espresso Machine is a high-performance, professional-grade coffee maker designed for demanding environments. With its sleek stainless steel design, dual group heads, and intuitive digital controls, this machine delivers consistent and precise espresso shots. Ideal for cafes and baristas, it combines durability with advanced features to enhance your coffee brewing experience.",
    images: [machineTypeBone, machineTypeBtwo],
    title: "Expobar - Verona Espresso Machine",
  };

  return (
    <div className="bg-[#473429] flex flex-col  min-h-[fit-content] h-[fit-content]  w-[100%] items-center pt-28 text-white pb-40  font-playfair">
      <div className="flex flex-col justify-center items-center w-[80%]">
        <RentDetail {...machineDetailsOne} />
        <RentDetail {...machineDetailsTwo} />
      </div>
    </div>
  );
}

export default Rent;
