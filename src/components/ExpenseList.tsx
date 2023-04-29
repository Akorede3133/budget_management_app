import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useGlobalContext } from '../context/context';
const ExpenseList = () => {
  const {state, removeItem} = useGlobalContext();
  const {expense, income} = state;
  const incomeTotal = income.reduce((acc, item) => {
    return acc += item.amount;
  }, 0)
  return (
    <div className='w-full'>
        <p className='uppercase text-red-500 pb-4'>Expenses</p>
        <ul>
          {
            expense.map(item => {
              const {desc, amount, id} = item;
              const percent = Math.ceil((amount  / incomeTotal) * 100)
              const finalPercent = percent.toString() != 'Infinity' ? `${percent}%` : '---'              
              return (
                <li key={id} className='flex cursor-pointer w-full justify-between border-t border-b py-3'>
                <p>{desc}</p>
                <div className='flex items-center gap-4'>
                <p className='text-red-400'>{`${amount.toLocaleString()}.00`}</p>
                <p className=' text-[.7rem] text-center text-red-500 bg-red-200 px-1 rounded-sm'>{`${finalPercent}`}</p>
                <div 
                onClick={()=> removeItem(id, 'expenseList')}
                className='w-[0px] transition-all duration-300 icon overflow-hidden'>
                    <HighlightOffOutlinedIcon className='text-red-500' />
                </div>
                </div>
            </li>
              )
            })
          }
        </ul>
  </div>
  )
}

export default ExpenseList