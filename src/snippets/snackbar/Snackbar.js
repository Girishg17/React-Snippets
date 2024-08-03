import React, { useState } from 'react';
import Snackbar from './snackbarcomponent/Snackbars';

const App = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleShowSnackbar = () => {
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  return (
    <div>
      <button onClick={handleShowSnackbar} style={{padding: '10px 20px',backgroundColor:'#282c34' ,color:'white',margin:'10px'}}>Show Snackbar</button>
      {showSnackbar && (
        <Snackbar message="This is a message " duration={3000} />
      )}
    </div>
  );
};

export default App;
