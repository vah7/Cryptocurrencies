import React from 'react';
import Header from './components/common/Header';
import List from './components/list/List'

const App = () => {
    const title = 'React Coin';
    return(
        <div>
            <Header />
            <List />
        </div>
    );
}
export default App;
  