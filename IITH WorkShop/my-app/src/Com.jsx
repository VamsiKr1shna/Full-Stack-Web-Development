import React from "react";
export default function Com(ages){
    let sum = ages.age1 + ages.age2 + ages.age3;
    return <div className="com">Component {sum} </div>
}