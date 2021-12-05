import React from "react";
import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className="Loading">
      Loading...
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loading;
