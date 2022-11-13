import React, { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import "../css/loading.css";

const Loading = () => {
  const [isLoading,setIsLoading] = useState(false);
  

  return( 
    this.useState.show ? (
            <div id = "loading">
              <Spinner animation="border" variant="primary" />
            </div>
    ):null
  )  
};

export default Loading;