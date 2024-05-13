import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/data");
      setData(response.data);
    };
    fetchData();
  }, []);

  // ... Implement UI to display data and forms to interact with the API

  return (
    <div>
      <h1 className="">Next 13</h1>
      {/* Display data fetched from /api/data */}
      {/* Form to create new data */}
    </div>
  );
}

export default HomePage;
