import React from "react";

const FormWithSelect = () => {
  const [serviceForm, setServiceForm] = useState({
    category: "mathematics",
    title: "",
    description: "",
    image: "",
    price: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setServiceForm({ ...serviceForm, [name]: value });
  };
  return (
    <div>
      <div className="field">
        <label className="label">Category</label>
        <div className="control">
          <div className="select">
            <select name="category" onChange={handleChange}>
              <option value="mathematics">Mathematics</option>
              <option value="programming">Programming</option>
              <option value="painting">Painting</option>
              <option value="singing">Singing</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            onChange={handleChange}
            name="title"
            className="input"
            type="text"
            placeholder="Text input"
          />
        </div>
      </div>
    </div>
  );
};

export default FormWithSelect;
