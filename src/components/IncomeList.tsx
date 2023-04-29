import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useGlobalContext } from '../context/context';
import { listProp } from '../context/reducer';
const IncomeList = () => {
  const {state, removeItem} = useGlobalContext();
  const {income, incomeStorage} = state;  
  
  return (
    <div className='w-full'>
      <p>INCOME</p>
      <ul>
        {
          income.map((item: listProp)  => {
            const {desc, amount, id} = item;
            return (
              <li key={id} className='flex cursor-pointer w-full justify-between border-t border-b py-3'>
              <p>{desc}</p>
              <div className='flex items-center gap-2'>
              <p className='text-green-400'>{`${amount.toLocaleString()}.00`}</p>
                <div 
                onClick={()=> removeItem(id, 'incomeList')}
                className='w-[0px] transition-all 
                duration-300 icon overflow-hidden'>
                    <HighlightOffOutlinedIcon className='text-green-500 font-normal' />
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

export default IncomeList