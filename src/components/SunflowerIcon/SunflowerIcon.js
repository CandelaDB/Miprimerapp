import { BsFlower1 } from "react-icons/bs";
import {Link} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';


const SunflowerIcon = () => {
    return (
    <Link to= "/" className="Icon">
      <i>
        <BsFlower1 size={40} /> AURA.
      </i>
    </Link>
    )
}

export default SunflowerIcon