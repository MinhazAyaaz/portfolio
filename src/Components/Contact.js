import React, { useState, forwardRef, useEffect } from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { Button, FormControl, TextField } from "@mui/material";
import emailjs from 'emailjs-com'

const Contact = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Add an event listener to update the screenWidth state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showIconOnly = screenWidth < 1150;

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (name === "") {
      setNameError(true);
    }
    if (message === "") {
      setMessageError(true);
    }

    if (email && name && message) {
      event.preventDefault();

    emailjs.sendForm('service_cxj8mwj', 'template_9c2u1ng', event.target, '0mgnt5e_CfL0TUt8G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setTimeout(() => {
        setIsLoading(false)
        setName("");
        setEmail("");
        setMessage("");
        event.target.reset();
      }, 5000); // 5000 milliseconds delay
    }
  };

  return (
    <div className={`h-screen bg-[#fdc689] ${showIconOnly ? '' : 'pt-[116px]'}`} ref={ref}>
      <h1 className="absolute flex justify-center w-full pt-16 text-white font-semibold text-5xl">
        Contact Me
      </h1>
      <div className="absolute w-16 h-2 bg-white left-1/2 transform -translate-x-1/2 mt-[120px] rounded-full"></div>
      <div className={`w-full h-full flex justify-between px-24 pb-24 ${showIconOnly ? 'flex-col items-center pt-5' : 'pt-48'}`}>
        <div className="w-[49%] h-full px-36 pt-36 flex flex-col items-center">
          <section className="flex bg-white w-96 h-16 mb-6 justify-center items-center rounded-full">
            <PhoneAndroidIcon className="mr-4" />
            <h1 className="text-lg font-sans font-semibold">++8801670755808</h1>
          </section>
          <section className="flex bg-white w-96 h-16 mb-6 justify-center items-center rounded-full">
            <EmailIcon className="mr-4" />
            <h1 className="text-lg font-sans font-semibold">
              minhazabedin1@gmail.com
            </h1>
          </section>
          <section className="flex bg-white w-96 h-16 mb-6 justify-center items-center rounded-full">
            <PlaceIcon className="mr-4" />
            <h1 className="text-lg font-sans font-semibold">
              Dhaka, Bangladesh
            </h1>
          </section>
        </div>
        {!showIconOnly && <div className="border-l-8 h-[600px] absolute left-1/2"></div>}
        <div className="w-[49%] h-full p-20 flex flex-col justify-between items-center">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between items-center">
            <h1 className="w-96 py-2 font-custom font-semibold text-gray-">
              Your Name:
            </h1>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="w-[400px] bg-white rounded-lg"
              required
              value={name}
              error={nameError}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <h1 className="w-96 py-2 font-custom font-semibold text-gray-900">
              Your Email:
            </h1>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-[400px] bg-white rounded-lg"
              required
              value={email}
              error={emailError}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <h1 className="w-96 py-2 font-custom font-semibold text-gray-900">
              Your Message:
            </h1>
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              className="w-[400px] bg-white rounded-lg"
              required
              value={message}
              error={messageError}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            />
            <span className="h-5"></span>
            <Button
              disabled={isLoading}
              fullWidth
              variant="contained"
              type="submit"
              className="bg-white rounded-lg"
              style={{
                backgroundColor: isLoading ? "#Dadada" : "#fff",
                color: "rgb(17,24,39)",
                fontFamily: "sans-serif",
                borderRadius: "9999px",
                fontWeight: "700",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
})

export default Contact;
