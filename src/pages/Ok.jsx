import { useState } from "react";

const [formData, setFormData] = useState({
  name: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("api", {
      name: formData.name,
    });
    console.log("done:", response.data);
  } catch (error) {
    console.error("error", error);
  }
};
