import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SideNav from '../myApp/SideNav.jsx';


export const MainLayout = ({content}) => (

    <div className="wrapper-main">
        <SideNav />
    <main>
      {content}
    </main>
</div>

)
