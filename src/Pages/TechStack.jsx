import CircularGallery from "../blocks/Components/CircularGallery/CircularGallery";

const TechStack = () => {
  return (
    <div className="flex justify-center items-center  sm:h-[600px] sm:relative ">
      <CircularGallery bend={0} textColor="#000000" borderRadius={0.05} />
    </div>
  );
};

export default TechStack;
