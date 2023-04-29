import { useGlobalContext } from "../context/context"
const InputField = () => {
  const {state, handleTextChange, handleAmount, handleSelect, handleSubmit} = useGlobalContext();
  const {text, amount, type} = state;        
  return (
    <div className='  md:bg-purple-100 p-3'>
      <form action="" 
      onSubmit={(e: React.FormEvent<HTMLFormElement>)=> handleSubmit(e)}
      className='flex 
      flex-col 
      md:flex-row
      items-center 
      gap-4
      w-[90%]
      md:w-[800px]
      mx-auto
      '>
        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> handleSelect(e)} className=' mt-2 px-3 py-2 outline-none border'>
          <option value="income">+</option>
          <option value="expenses">-</option>
        </select>
        <input type="text" 
        value={text}
        onChange={(e)=> handleTextChange(e)}
        className={`border outline-none w-full py-2 px-4 rounded-md ${type ==='expenses' ? 'focus:border-red-500' : 'focus:border-green-500'}`} 
        placeholder='Add Description'/>
        <input type="number"
        value={amount}
        onChange={(e) => handleAmount(e)} 
        className={`w-[100px] outline-none border p-2 rounded-md  ${type ==='expenses' ? 'focus:border-red-500' : 'focus:border-green-500'}`} 
        placeholder='value'/>
        <button className={` ${type === 'expenses' ? 'bg-red-400' : 'bg-green-400'} py-2 px-10 rounded-md text-white`}>Add</button>
      </form>
    </div>
  )
}

export default InputField