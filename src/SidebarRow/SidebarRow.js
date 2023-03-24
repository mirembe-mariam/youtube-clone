import React from 'react'
import "./SidebarRow.css"


function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}> {/*we use back ticks not single quotes to wrap the template literali*/}

        <Icon className="sidebarRow__icon"/>
        <h2 className="sidebarRow__title">{title}</h2>
     </div>
  );
}

export default SidebarRow