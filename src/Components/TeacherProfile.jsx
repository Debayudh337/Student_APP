import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./TeacherProfile.css"; // Styling for the profile component

const TeacherProfile = ({ teacherId }) => {
  const [teacher, setTeacher] = useState(null);

  // Fetch teacher data based on teacherId
  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        // Simulating fetching from a local JSON file
        const jsonData = await import("../Dummy/dummy.json");
        const teacherData = jsonData.tables.Teacher.find(
          (t) => t.Teach_ID === Number(teacherId) // Convert teacherId to a number
        );
        setTeacher(teacherData);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchTeacherData();
  }, [teacherId]);

  if (!teacher) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="teacher-profile">
      <Link to={`/teacher/${teacher.Teach_ID}`} className="profile-link">
        <img
          src={teacher.Profile_photo || "default_photo.jpeg"} // Fallback if no photo
          alt={teacher.Name}
          className="profile-image"
        />
        <h3 className="teacher-name">{teacher.Name}</h3>
        <p className="teacher-subject">{teacher.Subject} Teacher</p>
        <div className="teacher-rating">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < (teacher.Rating || 0) ? "gold" : "lightgray"} // Handle missing Rating
              />
            ))}
          </div>
          <p className="rating-count">
            ({teacher.Rated_By || 0} people rated) {/* Handle missing Rated_By */}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TeacherProfile;
