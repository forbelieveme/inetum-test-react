import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Offer() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    async function test() {
      const res = await axios.get("http://localhost:8000/api/info");
      setResponse(res.data);
    }
    test();
  }, []);
  return response ? (
    <>
      <div>
        <ol>
          {response.map((x) => (
            <li key={x.versions[0].id} align="start">
              <div>
                <p className="p-0 m-0">{x.versions[0].id}</p>
                <p >{x.versions[0].name}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  ) : null;
}

export default Offer;
