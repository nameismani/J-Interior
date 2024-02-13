import { Button, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { IoChatbox } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Feedback = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      data.name.length !== 0 &&
      data.email.length !== 0 &&
      data.feedback.length !== 0
    ) {
      console.log();
      console.log(data);
    } else {
      alert("Enter data first");
    }
  };
  return (
    <>
      {/* <button
          className="fixed bottom-5 left-5 bg-[#4b2aad] w-[56px] h-[56px] cursor-pointer rounded-[50%] text-white flex justify-center items-center text-3xl"
          onClick={() => setModal((value) => !value)}
        >
          <IoChatbox  />
        </button> */}
      <Button
        className="fixed bottom-5 left-5 bg-[#4b2aad] w-[56px] h-[56px] z-30 cursor-pointer rounded-[50%] text-white flex justify-center items-center focus:outline-none "
        color="#4b2aad"
        onClick={() => setModal((value) => !value)}
      >
        {modal ? (
          <MdClose className="text-3xl" />
        ) : (
          <IoChatbox className="text-3xl" />
        )}
      </Button>

      <div>
        {modal && (
          <div
            className="p-0 fixed left-0 lg:left-8 z-30 bottom-24 w-[100%] lg:w-[380px] lg:h-[430px] h-400px border border-solid border-gray-300 bg-white rounded-xl "
            onSubmit={HandleSubmit}
          >
            {/* <button
              className="close-btn-form"
              onClick={() => setModal((value) => !value)}
            >
              X
            </button> */}
            {/* <div className="m1-rem">
              <input
                placeholder="Name"
                name="name"
                onChange={(e) => handleChange(e)}
                required
              />
            </div> */}
            <div className="contact-us-header bg-[#4b2aad] text-white h-full max-h-[70px] shadow-xl p-4 rounded-t-xl">
              <h5 className="text-2xl font-bold"> Contact Us</h5>
            </div>
            <div className="contact-us-body my-8 p-5">
              <form className="" onSubmit={HandleSubmit}>
                <TextInput
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => handleChange(e)}
                />

                <TextInput
                  type="email"
                  name="email"
                  className="mt-3 outline-none"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => handleChange(e)}
                />

                <Textarea
                  name="comment"
                  className="mt-3 resize-none"
                  placeholder="Leave a comment..."
                  rows={4}
                />

                <Button
                  type="submit"
                  className="w-full bg-red-500 mt-4 text-white"
                  color="dark-red"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Feedback;
