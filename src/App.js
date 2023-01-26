import './App.css';

import Address from './Component/Address';
import FullName from './Component/FullName';
import  ProfilePhoto  from './Component/ProfilePhoto';
function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <Address></Address>
      <FullName></FullName>
    
    </div>
  );
}

export default App;
