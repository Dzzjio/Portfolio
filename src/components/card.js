import car from "../img/Car.png";

const Card = () => {
  return (
    <div className="bg-black w-[298px] relative">
      <div className="absolute text-white p-6">
        <h3 className="">Project Title - Here comes the name of the Project</h3>
        <p className="text-sm pt-2">Here are the Tech's used</p>
      </div>
      <img alt='car' src={car} />
    </div>
  )
};

export default Card;
