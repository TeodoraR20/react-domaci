import React from 'react';

import '../styles/Menu.css';
import { MenuList } from "../helpers/MenuList";
import MenuItems from "../components/MenuItems";
function Menu() {
  return <div className="menu">
<h1 className="menuTitle">Our menu</h1>


<div className="menuList">
{MenuList.map((menuItem, key) =>{

return (

<MenuItems key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>

);
})}


</div>
  </div>

}

export default Menu;
