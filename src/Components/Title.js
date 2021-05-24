import React from 'react';
import '../title.css'
const title = (props)=>{
return (
  <div className="mb-5">
    <p className="title">{props.name}</p>
  </div>
);
}
export default title;