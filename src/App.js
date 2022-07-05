import React from 'react';

const Home = React.lazy(() => import('./views/home/Home'));

function App() {
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default App;
