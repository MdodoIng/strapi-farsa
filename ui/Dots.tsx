type Props = {
  itemsLength: number;
  selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5 absolute -bottom-14 ">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={`${
              !selected && "opacity-50"
            } h-2 w-2 rounded-full transition-all duration-300 bg-brown`}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default Dots;
