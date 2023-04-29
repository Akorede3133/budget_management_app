import Hero from './components/Hero';
import { useEffect } from 'react';
import InputField from './components/InputField';
import Display from './components/Display';
import { useGlobalContext } from './context/context';
// import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
function App() {
  const {handleStorage} = useGlobalContext();
  useEffect(() => {
    handleStorage();
  }, [])
  return (
    <div>
      <Hero />
      <InputField />
      <Display />
    </div>
  )
}

export default App
