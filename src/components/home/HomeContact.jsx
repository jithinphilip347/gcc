"use client";

import React, { useState , useRef, useEffect} from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";
import toast from "react-hot-toast";
import { CONTACT_FORM_ID, GOOLE_SHEET_ID } from "@/utilis/constants";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import countryCodes  from '@/data/CountryCodes.json'
const GOOGLE_SHEET_URL = `https://script.google.com/macros/s/${CONTACT_FORM_ID}/exec`;

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

    const [codeOpen, setCodeOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState("+91");
    const codeRef = useRef(null);
  
    const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setErrors({});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForm();
    setErrors(validation);

    if (Object.keys(validation).length !== 0) return;

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const res = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          phone: `${selectedCode.replace('+', '')}${formData.phone}`
        }),
      });
      

      const data = await res.json();
     
      
    } catch (err) {
       console.log(JSON.stringify(formData),err)

      setStatusMessage("Something went wrong!");
    } finally {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success("THANKS! We will get back to you soon");
      setIsSubmitting(false);
    }

    
  };

  const filteredCountries = countryCodes.filter((item) =>
    item.dial_code.includes(search) ||
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const handlePhoneChange = (e) => {
    // Allow only numbers
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: value });
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (codeRef.current && !codeRef.current.contains(event.target)) {
        setCodeOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div id="HomeContact">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            Contact <span>Us</span>
          </h2>
        </div>

        <div className="ContactMain">
          <div className="ContactMainLeft">
            <p className="ContactTitle">Get in Touch With GCC Academy</p>

            <p className="ContactDesc">
              Kerala’s leading institute for DHA, HAAD, PROMETRIC, SPLE, OMAN,
              and MOH  and other healthcare licensing exam preparation..
            </p>

            <div className="ContactAddressBox">
              <div className="ConnectBox">
                <HiOutlineLocationMarker />
                <a>Building No. 625/10, Keezhillam, Pin - 683541, Kerala, India</a>
              </div>

              <div className="ConnectBox">
                <HiOutlinePhone />
                <p className="numberBox">
                  <a href="tel:+917907974340">+91-79079 74340</a>
                  <a href="tel:+917012584203">+91-70125 84203</a>
                </p>
              </div>

              <div className="ConnectBox">
                <HiOutlineMail />
                <a href="mailto:info@gccacademy.net">info@gccacademy.net</a>
              </div>
            </div>
          </div>

          <div className="ContactMainRight">
            <form className="ContactFormGroup" onSubmit={handleSubmit}>
              <div className="ContactFormBox">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                
              </div>

              <div className="ContactFormBox">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
               
              </div>

              {/* <div className="ContactFormBox">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                
              </div> */}

                  <div className="ContactFormBox ContactphoneGroup" ref={codeRef}>
                    <div className="phoneInputWrapper">
                      
                      
                      <div
                        className="codeDropdownHeader"
                        onClick={() => setCodeOpen(!codeOpen)}
                      >
                        <span>{selectedCode}</span>
                        {codeOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                      </div>

                      {codeOpen && (
                        <ul className="codeDropdownList">
                          <li className="search-li" onClick={(e) => e.stopPropagation()}>
                            <input
                              type="text"
                              placeholder="Search country..."
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              autoFocus
                            />
                          </li>
                          {filteredCountries.map((item) => (
                            <li
                              key={item.code} 
                              onClick={() => {
                                setSelectedCode(item.dial_code);
                                setCodeOpen(false);
                                setSearch("");
                              }}
                            >
                              {item.dial_code} {item.name}
                            </li>
                          ))}
                        </ul>
                      )}

                      
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>

              <div className="ContactFormBox">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                
              </div>

              <div className="ContactBtn">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <p>Submitting...</p>
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
