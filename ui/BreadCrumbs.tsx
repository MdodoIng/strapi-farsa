const BreadCrumbs = ({ data, isSelected, setIsSelected }: any) => {
  const handleClick = (name: number | React.Key) => {
    setIsSelected(name);
  };
  return (
    <div className="flex items-center justify-start mt-20  gap-10 overflow-x-auto h-16">
      {data.map((item: string, idx: React.Key) => (
        <p
          key={idx}
          onClick={() => handleClick(item)}
          className={`font-medium text-[#301D13] text-xl relative flex items-end justify-center after:duration-300 after:ease-in ${
            isSelected === item &&
            "after:absolute after:w-7 after:h-[5px] after:bg-[#301D13] after:-bottom-2 after:rounded-full"
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default BreadCrumbs;
