import { useGlobalContext } from '../context/context'
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
const Display = () => {  
    return (
    <div className='flex flex-col md:flex-row w-[80%] mx-auto mt-4 justify-between p-4 gap-10'>
      <IncomeList />
      <ExpenseList />
    </div>
  )
}

export default Display