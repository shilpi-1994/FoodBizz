import React from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
