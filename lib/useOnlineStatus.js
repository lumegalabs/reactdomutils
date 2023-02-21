import { useState, useEffect } from "react";

useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    document.addEventListener("online", handleOnline);
    document.addEventListener("offline", handleOffline);

    return () => {
      document.removeEventListener("online", handleOnline);
      document.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
