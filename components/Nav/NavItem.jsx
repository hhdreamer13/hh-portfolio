import { generateDots } from "@/utils/utils";

const NavItem = ({ text }) => {
  const dots = generateDots(100); // You can adjust the number as needed
  return (
    <div className='flex w-full justify-center items-center font-mono'>
      <div className='flex-1 overflow-hidden'>
        <span className=''>{dots}</span>
      </div>
      <div className='flex-none'>
        <span className='font-bold text-lg'>{text}</span>
      </div>
      <div className='flex-1 overflow-hidden'>
        <span className=''>{dots}</span>
      </div>
    </div>
  );
};

export default NavItem;
