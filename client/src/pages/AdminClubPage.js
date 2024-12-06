import React, { useState, useRef } from "react";
import {
  FaGlobe,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTrash,
} from "react-icons/fa";

const AdminPage = () => {
  const [clubDetails, setClubDetails] = useState({
    name: "ACM-CEG",
    description:
      "The ACM-CEG Student Chapter, initiated in 2004, aims to instill an unwavering enthusiasm for computer science in students. The club provides a plethora of networking opportunities and helps to seek advice from the top experts in the field. The club has been steadily working to inculcate an unalloyed interest in Computer Science in students and consequently, stimulating the advancement of computer science as a whole.",
    image: null,
  });

  const [members, setMembers] = useState([
    { name: "Ansh Bomb", position: "President" },
    { name: "Shiyam Ganesh T", position: "Vice President" },
  ]);

  const [events, setEvents] = useState([
    { description: "Prodigy event description.", link: "" },
    { description: "CodHer event description.", link: "" },
  ]);

  const [socials, setSocials] = useState({
    website: "",
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  });

  const fileInputRef = useRef(null);

  // Handlers for club details
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setClubDetails({ ...clubDetails, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        setClubDetails({ ...clubDetails, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  // Handlers for members
  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const addMember = () => setMembers([...members, { name: "", position: "" }]);

  const removeMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  // Handlers for events
  const handleEventChange = (index, field, value) => {
    const updatedEvents = [...events];
    updatedEvents[index][field] = value;
    setEvents(updatedEvents);
  };

  const addEvent = () => setEvents([...events, { description: "", link: "" }]);

  const removeEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  // Handlers for socials
  const handleSocialsChange = (e) => {
    const { name, value } = e.target;
    setSocials({ ...socials, [name]: value });
  };

  // Submission handler (mock functionality)
  const handleSubmit = () => {
    console.log("Updated Club Details: ", clubDetails);
    console.log("Updated Members: ", members);
    console.log("Updated Events: ", events);
    console.log("Updated Socials: ", socials);
    alert("Updates submitted successfully!");
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Page</h1>
      <form
        className="bg-white shadow-md rounded p-6 space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Club Image Upload */}
        <div>
          <h2 className="text-2xl mb-4">Club Image</h2>
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer flex items-center justify-center"
            onClick={triggerImageUpload}
          >
            {clubDetails.image ? (
              <img
                src={clubDetails.image}
                alt="Club"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500">Upload Image</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden font-normal "
          />
        </div>

        <hr className="my-4" />

        {/* Club Details Section */}
        <div>
          <h2 className="text-2xl mb-4">Club Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Club Name</label>
              <input
                type="text"
                name="name"
                value={clubDetails.name}
                onChange={handleDetailsChange}
                className="w-full font-normal  p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                value={clubDetails.description}
                onChange={handleDetailsChange}
                rows="4"
                className="w-full font-normal p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Members Section */}
        <div>
          <h2 className="text-2xl mb-4">Club Members</h2>
          <div className="space-y-4">
            {members.map((member, index) => (
              <div key={index} className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={member.name}
                  onChange={(e) =>
                    handleMemberChange(index, "name", e.target.value)
                  }
                  className="w-1/2 font-normal p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={member.position}
                  onChange={(e) =>
                    handleMemberChange(index, "position", e.target.value)
                  }
                  className="w-1/2 p-2 font-normal border border-gray-300 rounded"
                />
                {/* Trash Icon */}

                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  className="p-3 items-center justify-center text-white bg-rose-500 hover:bg-red-900 rounded"
                  style={{ height: "100%" }}
                >
                  <FaTrash icon="trash" className="text-xl" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addMember}
              className="text-blue-500 hover:underline"
            >
              Add Member
            </button>
          </div>
        </div>

        <hr className="my-4" />

        {/* Events Section */}
        <div>
          <h2 className="text-2xl mb-4">Events</h2>
          <div className="space-y-4 bg-gray-100 p-4 rounded shadow">
            {events.map((event, index) => (
              <div key={index} className="grid gap-2 grid-cols-12 relative">
                {/* Event Description */}
                <textarea
                  placeholder="Event Description"
                  value={event.description}
                  onChange={(e) =>
                    handleEventChange(index, "description", e.target.value)
                  }
                  rows="2"
                  className="md:col-span-11 col-span-9 font-normal p-2 border border-gray-300 rounded"
                ></textarea>
                {/* Trash Icon */}
                <button
                  type="button"
                  onClick={() => removeEvent(index)}
                  className="row-span-2  col-span-3 md:col-span-1 flex items-center justify-center text-white bg-rose-500 hover:bg-red-900 rounded"
                  style={{ height: "100%" }}
                >
                  <FaTrash icon="trash" className="text-2xl" />
                </button>

                {/* Event Link */}
                <input
                  type="text"
                  placeholder="Event Link"
                  value={event.link}
                  onChange={(e) =>
                    handleEventChange(index, "link", e.target.value)
                  }
                  className="md:col-span-11 col-span-9 font-normal p-2 border border-gray-300 rounded"
                />

                {/* Separator */}
                {index < events.length - 1 && (
                  <hr className="col-span-12 my-4 border-gray-300" />
                )}
              </div>
            ))}

            {/* Add Event Button */}
            <button
              type="button"
              onClick={addEvent}
              className="text-blue-500 hover:underline"
            >
              Add Event
            </button>
          </div>
        </div>

        <hr className="my-4" />

        {/* Socials Section */}
        <div>
          <h2 className="text-2xl mb-4">Socials</h2>
          <div className="space-y-4">
            {Object.entries(socials).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-4">
                {getSocialIcon(key)}
                <input
                  type="text"
                  name={key}
                  placeholder={`Enter ${capitalize(key)} URL`}
                  value={value}
                  onChange={handleSocialsChange}
                  className="flex-1 font-normal p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>
        </div>

        <hr className="my-4" />

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Updates
          </button>
        </div>
      </form>
    </div>
  );
};

// Helper functions
const getSocialIcon = (social) => {
  const icons = {
    website: <FaGlobe />,
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedin />,
    youtube: <FaYoutube />,
  };
  return icons[social] || FaGlobe;
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default AdminPage;
