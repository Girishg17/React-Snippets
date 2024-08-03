// App.js
import React, { useState, useEffect } from 'react';
import Spinner from './spinnercomponents/spinnercomponent';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? <Spinner /> : <div style={{alignItems:'center'}}>Content Loaded</div>}
    </div>
  );
};

export default App;
