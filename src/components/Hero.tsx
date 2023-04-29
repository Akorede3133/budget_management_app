import { useGlobalContext } from "../context/context";
import { listProp } from "../context/reducer";
const Hero = () => {
  const {state} = useGlobalContext();
  const {income, expense} = state  
  const months = [
  'January', 
  'February',
  'March', 
  'April', 
  'May', 
  'June', 
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
  const date = new Date();
  const year = date.getFullYear();
  const monthNum = date.getMonth();
  const incomeTotal = income.reduce((acc: number, item: listProp) => {
    return acc += item.amount;
  }, 0)
  const expenseTotal = expense.reduce((acc, item) => {
    return acc += item.amount;
  }, 0)
  const net = incomeTotal - expenseTotal;
  const percent = Math.ceil((expenseTotal / incomeTotal) * 100);
  const finalPercent = percent.toString() !== 'Infinity' ? `${percent}%` : '---';
  return (
    <div className="bg-hero-img bg-no-repeat bg-cover
    bg-center
    relative w-full h-[250px]
    py-4
     ">
      <div className=' absolute bg-[rgba(0,0,0,0.3)] h-full w-full top-0'>
      </div>
      <div className='z-30 flex flex-col items-center justify-center gap-4'>
        <p className='text-white z-30'>{`Available Budget for ${months[monthNum]} ${year}`}</p>
        <p className='z-30 text-white text-4xl'>{`${net.toLocaleString()}.00`}</p>
        <div className='z-30 rounded-sm w-[70%] bg-[#28b9b5] md:w-[400px] p-3  flex justify-between'>
          <p>INCOME</p>
          <div className='flex gap-4'>
            <p className="text-white">{incomeTotal.toLocaleString() + '.00'}</p>
            <p className=' invisible px-1'>0%</p>
          </div>
        </div>
        <div className='z-30 rounded-sm w-[70%] md:w-[400px] p-3 bg-red-700 flex justify-between'>
          <p>EXPENSES</p>
          <div className='flex items-center gap-4'>
            <p className="text-white">{expenseTotal.toLocaleString() + '.00'}</p>
            <p className='bg-[rgba(255,255,255,0.6)] text-white text-center px-1 text-[.7rem] rounded-sm'>{percent ? `${finalPercent}` : '0%'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero