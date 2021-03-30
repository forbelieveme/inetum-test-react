import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Characteristics() {
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
              {x.versions[0].name}
              {x.versions[0].characteristics.map((y) => (
                <div>
                  <p className="p-0 m-0">
                    {y.versions[0].displayValue
                      ? y.versions[0].displayValue
                      : ""}
                  </p>
                </div>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </>
  ) : null;
}

export default Characteristics;
