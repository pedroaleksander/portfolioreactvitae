import React from 'react';

const Extras = () => {
  const handleClick = () => {
    window.open('https://docs.google.com/presentation/d/1BAjJCVhm8od7qvWS772IKSEruvbrIDVkM2TxzfBV1rw/edit?usp=sharing', '_blank');
  };

  const handleClick2 = () => {
    window.open('https://docs.google.com/presentation/d/1cPnMq8H0c5mxQari-jRKmt-BYgC1R48O_WsfqFsFZmU/edit?usp=sharing', '_blank');
  };

  const handleClick3 = () => {
    window.open("https://docs.google.com/document/d/1IpLbnNohqSNOtLCHcahL4T3Ros0kwqadEzL5EpWA8zc/edit?usp=sharing", '_blank');
  };

  return (
    <div className="container-main">
      <div className="extrastudo">
        <h1>Extras</h1>
        <button onClick={handleClick}>Portfolio 1°</button>
        <button onClick={handleClick2}>Portfolio 2°</button>
        <button onClick={handleClick3}>Certificados</button>
      </div>
    </div>
  );
};

export default Extras;
