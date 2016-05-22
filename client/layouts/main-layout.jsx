import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import NavBar from '../myApp/NavBar.jsx';


export const MainLayout = ({content}) => (

    <div className="wrapper-main">
        <NavBar />
    <main>
      {content}
    </main>
</div>

)
