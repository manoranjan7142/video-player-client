import React from 'react'
import './Sidebar.css'



const Sidebar = ({sidebar, category, setCategory}) => {



  return (

    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
       <div className="sortcut-links">
           <li><div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <p>All Video </p>    
            </div></li> 
            <li><div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
               <p>Gaming</p>    
            </div> </li> 
            <li> <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <p>Automobiles</p>    
            </div> </li> 
            <li><div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <p>Sports</p>    
            </div> </li> 
            <li> <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <p>Entertainment</p>    
            </div></li> 
            <li> <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <p>Technology</p>    
            </div> </li> 
            <li> <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <p>Music</p>    
            </div></li> 
            <li> <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <p>Blogs</p>    
            </div> </li> 
            <li><div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <p>News</p>    
            </div></li>  
        </div>  
    </div>
          
  );
};

export default Sidebar
