import React, {useState} from 'react';
import au from '../assets/images/Anna_university.jpg';
import whiteCut from '../assets/images/white_cut.png'; // Importing white_cut image
import '../styles/Updates.css';

// Modal Component
const Modal = ({ title, content, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                    {content.map((update, index) => (
                        <p key={index}>{update}</p>
                    ))}
                </div>
                <button 
                    onClick={onClose} 
                    className="mt-4 bg-red-700 text-white py-2 px-4 rounded-lg"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Updates = () => {
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showGeneralModal, setShowGeneralModal] = useState(false);

    const studentUpdates = [
        "Student Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Exam Timetable Released: Check the official portal for details.",
        "Student Workshop on AI: Register before the deadline.",
        "Holiday Announcement: University will remain closed on October 2.",
        "New Library Hours: 8 AM to 10 PM on weekdays.",
        "Student Event 2: Seminars on Data Science happening next week."
    ];

    const generalUpdates = [
        "University Rankings: Anna University ranked in the top 10 in India.",
        "Convocation Ceremony: Scheduled for November 15th.",
        "New Research Center: Inaugurated for advanced studies in nanotechnology.",
        "Alumni Meet: Gathering planned for December 2024.",
        "Infrastructure Update: New auditorium under construction.",
        "General Announcement: University campus Wi-Fi upgraded."
    ];

    return (
        <div className="relative w-full lg:h-screen overflow-hidden">
            {/* Parallax Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: `url(${au})`, 
                    backgroundAttachment: 'fixed', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    zIndex: '-1' 
                }}
            >   
            </div>

            {/* Overlay white_cut image as background for lg screens and above */}
            <div 
                className="absolute inset-0 bg-no-repeat hidden lg:block" // Hidden by default, visible on lg and above
                style={{
                    backgroundImage: `url(${whiteCut})`, 
                    backgroundSize: 'contain',
                    backgroundPosition: 'top right', 
                    zIndex: '0', 
                    opacity: '0.85' // Optional: Add transparency to blend the cut image
                }}
            >
            </div>

            <div className="relative z-10 flex flex-col md:flex-col lg:flex-row items-start lg:items-center lg:justify-between h-full p-6 lg:p-12 justify-evenly">
                {/* "Anna University" text for medium screens and above */}
                <div className="w-full lg:w-6/12 items-center text-center md:text-center lg:text-right mb-6 lg:mb-0 md:order-first lg:order-last relative z-20">
                    <h1 className="text-5xl lg:text-6xl text-red-800">ANNA UNIVERSITY</h1>
                    <p className="text-xl font-bold lg:font-normal text-red-800 mt-4">
                        With a dream and vision, beyond boundaries
                    </p>
                </div>

                {/* Updates sections side by side */}
                <div className="w-full lg:w-6/12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg space-y-6 md:space-y-0 md:flex md:space-x-6">
                    {/* Student Updates Section */}
                    <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md overflow-hidden">
                        <h2 className="text-lg lg:text-2xl font-bold mb-2 text-red-800 text-center">Student Updates</h2>
                        <div className="pt-28 h-56 font-medium overflow-y-hidden relative border-t-2 border-red-700">
                            <div className="space-y-4 animate-scroll-vertical">
                                <p>Student Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p>Exam Timetable Released: Check the official portal for details.</p>
                                <p>Student Workshop on AI: Register before the deadline.</p>
                                <p>Holiday Announcement: University will remain closed on October 2.</p>
                                <p>New Library Hours: 8 AM to 10 PM on weekdays.</p>
                                <p>Student Event 2: Seminars on Data Science happening next week.</p>
                            </div>
                        </div>
                         {/* "View All" Button */}
                         <button 
                            onClick={() => setShowStudentModal(true)} 
                            className="mt-4 bg-red-700 text-white py-2 px-4 rounded-lg w-full text-center"
                        >
                            View All
                        </button>
                    </div>

                    {/* General Updates Section */}
                    <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md overflow-hidden">
                        <h2 className="text-lg lg:text-2xl  font-bold mb-2 text-red-800 text-center">General Updates</h2>
                        <div className="pt-28 h-56 font-medium overflow-y-hidden relative border-t-2 border-red-700">
                            <div className="space-y-4 animate-scroll-vertical">
                                <p>University Rankings: Anna University ranked in the top 10 in India.</p>
                                <p>Convocation Ceremony: Scheduled for November 15th.</p>
                                <p>New Research Center: Inaugurated for advanced studies in nanotechnology.</p>
                                <p>Alumni Meet: Gathering planned for December 2024.</p>
                                <p>Infrastructure Update: New auditorium under construction.</p>
                                <p>General Announcement: University campus Wi-Fi upgraded.</p>
                            </div>
                        </div>
                         {/* "View All" Button */}
                         <button 
                            onClick={() => setShowStudentModal(true)} 
                            className="mt-4 bg-red-700 text-white py-2 px-4 rounded-lg w-full text-center"
                        >
                            View All
                        </button>   
                    </div>
                </div>
            </div>

            {/* Modal for Student Updates */}
            {showStudentModal && (
                <Modal 
                    title="All Student Updates" 
                    content={studentUpdates} 
                    onClose={() => setShowStudentModal(false)} 
                />
            )}

            {/* Modal for General Updates */}
            {showGeneralModal && (
                <Modal 
                    title="All General Updates" 
                    content={generalUpdates} 
                    onClose={() => setShowGeneralModal(false)} 
                />
            )}
        </div>
    );
};

export default Updates;