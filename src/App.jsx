import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import App1 from './App1';
import App2 from './App2';

function App(){
 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/Message" element={<App2 />}/>
      </Routes>
    </Router>
  );
}
export default App;