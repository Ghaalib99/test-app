import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [agree, setAgree] = useState(false);
  const [data, setData] = useState("");

  const body = {
    name,
    sector,
    agree,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8800/api/users/save", body)
      .then((response) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    let mounted = true;
    axios
      .get("http://localhost:8800/api/subsector")
      .then((response) => {
        if (mounted) {
          setData(response.data.data);
        }
        return () => (mounted = false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="">
      <div className="container">
        <h3>
          Please enter your name and pick the sectors you are currently involved
          in
        </h3>
        <form action="">
          <div className="name">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              placeholder="Input name"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
            />
          </div>

          <div className="sector">
            <label htmlFor="">Sectors:</label>
            <select
              name="sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              id=""
            >
              {Object.values(data).map((data) => (
                <option key={data["_id"]} value={data["name"]}>
                  {data["name"]}
                </option>
              ))}
            </select>
          </div>

          <div className="agree">
            <input
              type="checkbox"
              name="agree"
              onChange={(e) => setAgree(!agree)}
              value={agree}
            />
            <label htmlFor="">Agree to terms</label>
          </div>

          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
