const BreadCrumbs = ({
  data,
  isSelected,
  setIsSelected,
  isSelectedCategory,
}: any) => {
  const handleClick = (name: number | React.Key) => {
    setIsSelected(name);
  };

  return (
    <div
      className={`${
        isSelectedCategory && "hidden"
      }   sm:mt-20 mt-8 overflow-x-auto h-16 breadCrumbScroll w-full flex items-center justify-start sm:gap-10 gap-6`}
    >
      {data.map((item: string, idx: React.Key) => (
        <p
          key={idx}
          onClick={() => handleClick(item)}
          className={`sm:font-medium text-[#301D13] sm:text-xl text-base relative flex items-end justify-center after:duration-300 after:ease-in select-none ${
            isSelected === item &&
            "after:absolute after:w-[70%] sm:after:h-[5px] after:h-[4px] after:bg-[#301D13] after:-bottom-2 after:rounded-full"
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default BreadCrumbs;
