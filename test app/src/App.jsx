import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [agree, setAgree] = useState(false);
  const [data, setData] = useState('')

  // console.log(name)

  const body = {
    name,
    sector,
    agree,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8800/api/users/save", body)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    let mounted = true
    axios
      .get("http://localhost:8800/api/sectors")
      .then((response) => {
        console.log(response.data);
        if (mounted) {
          setData(response.data.sector);
        }
      return () => mounted = false
        // (
        //   response.data.sector.map((data) =>
        //     console.log(data.name)
        //   )
        // );
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
              
              {Object.keys(data).map((data, i) => (
                <optgroup key={i}>{data[name]}</optgroup>
              ))} 
              {/* <optgroup label="Manufacturing">
                <option value="Construction materials">
                  Construction materials
                </option>
                <option value="Electronic and Optics">
                  Electronic and Optics
                </option>
              </optgroup>
              <optgroup label="Food and Beverage">
                <option value="Bakery & Confectionery Products">
                  Bakery & Confectionery Products
                </option>
                <option value="Beverages">Beverages</option>
                <option value="Fish & Fish Products">
                  Fish & Fish Products
                </option>
                <option value="Meat & Meat Products">
                  Meat & Meat Products
                </option>
                <option value="Milk & Dairy Products">
                  Milk & Dairy Products
                </option>
                <option value="Sweets & snack food">Sweets & snack food</option>
                <option value="Others">Others</option>
              </optgroup> */}
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
