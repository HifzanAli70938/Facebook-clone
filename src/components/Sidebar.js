import React,{useState} from 'react';
import img from './images/bhatti.jpg';
import covd from './images/covd.png';
import friends from './images/friends.png';
import groups from './images/groups.png';
import watch from './images/watch.png';
import './Sidebar.css';

const Sidebar = () => {
    
   const [state] = useState([
       {id:1,image:img,name:'Hifzan Ali'},
       {id:2,image:covd,name:'COVD-19 Information Center'},
       {id:3,image:friends,name:'Friends'}, 
       {id:4,image:groups,name:'Groups'},
       {id:5,image:watch,name:'Watch'}
]);
    return (
    <>
    <div className="parent_sidebar">
{state.map(user=>
<>
    <div className="child_sidebar" key={user.id} >
    <div className="sidebar_img">
            <img src={user.image} alt="image not load"/>
            </div>
            <div className="sidebar_name">
          <p>{user.name}</p>
            </div>
    </div>
    </>
    )}
    </div>

    </>
    )
}

export default Sidebar
