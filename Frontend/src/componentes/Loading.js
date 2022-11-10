import React, { useState } from "react";

const Loading = () => {
  const [isLoading,setIsLoading] = useState(true);

  return <div>Cargando...</div>;
};

export default Loading;