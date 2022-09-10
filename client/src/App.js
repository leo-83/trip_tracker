import { Routes, Route } from 'react-router-dom';
import Users from './components/users/Users';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Topics from './components/trips/Trips';



const App = () => (
  <>  
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/:userId/trips' element={<Trips />} />
      <Route path='/*' element={<Nomatch />} />
      </Routes>
  </>
)
export default App;
