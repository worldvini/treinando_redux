import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyC5GOO3dQuYItf-kbAvMtkv4P9Zv3HRhBs'

const App = () => {
    return <div> 
                <SearchBar />
            </div>; 
}

ReactDOM.render(<App />, document.querySelector('#root'))