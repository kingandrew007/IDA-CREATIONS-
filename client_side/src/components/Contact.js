import React, { useState } from 'react';
import axios from 'axios';
import './styles/Contact.css';

function Contact() {
  const data = { name: '', emailId: '', userText: '' };
  const [inputData, setInputData] = useState(data);

  const handleOnChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.emailId || !inputData.userText) {
      alert("All fields are mandatory. Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/contact", inputData);
      alert(response.data.msg);
    } catch (err) {
      alert(err.response?.data?.msg || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="container-contact">
      <div className="row-contact">
        <div className="col-contact">
          <h1>Contact Us</h1>
          <div className="container-contact">
            <form onSubmit={handleSubmit}>
              <div className="row-contact">
                <div className="col-contact">
                  <input
                    type="text"
                    className="form-control-contact"
                    onChange={handleOnChange}
                    placeholder='Name'
                    name='name'
                    required
                  />
                </div>
                <div className="col-contact">
                  <input
                    type="email"
                    className="form-control-contact"
                    onChange={handleOnChange}
                    placeholder='Email'
                    name='emailId'
                    required
                  />
                </div>
              </div>
              <div className="row-contact mt-3">
                <div className="col-contact">
                  <textarea
                    className="form-control-contact"
                    placeholder="Message"
                    onChange={handleOnChange}
                    name='userText'
                    rows="5"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row-contact mt-3">
                <div className="col-contact">
                  <button type="submit" className="btn-contact btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-contact">
          {/* Additional content in the second column if needed */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
