import React, { useState, useEffect } from 'react';
import AccountContainer from './AccountContainer';

function App() {
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false);  
    }, 2000); 
  }, []);

  if (isLoading) {
    
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
      <div className="ui segment violet inverted" style={{ marginTop: '20px' }}>
        <p>© 2024 by Elias Gitonga</p>
      </div>
    </div>
  );
}

export default App;
