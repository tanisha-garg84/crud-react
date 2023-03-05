import logo from './logo.svg';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import PhoneDirectoryForm from './component/PhoneDirectoryForm';
import PhoneDirectoryTable from './component/PhoneDirectoryTable';

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element = {<PhoneDirectoryForm />} />
        <Route path='table' element = {<PhoneDirectoryTable />} />
        <Route path='/:editData' element = {<PhoneDirectoryForm />} />
      </Routes>
    </Router>
   </div>
 


 
  )
}

export default App;
