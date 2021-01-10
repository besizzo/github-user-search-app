import { useState, useEffect } from "react";

const useRequestsHistory = () => {
  const [requestsHistory, setRequestsHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("history") ?? "[]");
  });

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(requestsHistory));
  }, [requestsHistory]);

  const handleUpdateRequestsHistory = (newRequest) => {
    setRequestsHistory((prevRequestsHistory) => {
      const newRequestsHistory = [newRequest, ...prevRequestsHistory];

      return newRequestsHistory.length > 5
        ? newRequestsHistory.slice(0, -1)
        : newRequestsHistory;
    });
  };

  return { requestsHistory, handleUpdateRequestsHistory };
};

export default useRequestsHistory;
