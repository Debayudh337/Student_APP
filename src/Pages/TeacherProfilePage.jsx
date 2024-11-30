import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To access route parameters
import NavTop from "../Components/NavTop";
import NavBottom from "../Components/NavBottom";
import PageHeader from "../Components/PageHeader";
import TeacherProfile from "../Components/TeacherProfile";
import "./TeacherProfilePage.css"; // Custom CSS for profile page

const TeacherProfilePage = () => {
  const { id } = useParams(); // Get teacher id from URL
  const [teacher, setTeacher] = useState(null);
  const [activeTab, setActiveTab] = useState("summary"); // Default tab is "summary"

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        
        const jsonData = await import("../Dummy/dummy.json");
        const teacherData = jsonData.tables.Teacher.find(
          (t) => t.Teach_ID === parseInt(id) // Find teacher by id from URL
        );
        setTeacher(teacherData);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchTeacherData();
  }, [id]); // Fetch teacher data based on teacher ID

  if (!teacher) {
    return <p>Loading teacher details...</p>;
  }

  return (
    <div className="teacher-profile-page">
      <NavTop />
      <PageHeader heading="Profile Summary" />

      {/* Navigation Tabs (Summary, Credentials) */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "summary" ? "active" : ""}`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
        <button
          className={`tab ${activeTab === "credentials" ? "active" : ""}`}
          onClick={() => setActiveTab("credentials")}
        >
          Credentials
        </button>
      </div>

      <div className="profile-container">
        {/* Reuse TeacherProfile Component */}
        <TeacherProfile teacherId={id} />

        {/* Display Summary or Credentials Based on Active Tab */}
        <div className="teacher-details">
          {activeTab === "summary" ? (
            <div className="summary">
              <h4>Summary</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sed reiciendis suscipit eligendi, hic expedita illo facere voluptate quam aperiam, accusamus ducimus voluptatum temporibus dolorum harum quae quasi eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam quasi laborum nisi unde recusandae animi ea similique, fugit soluta iste esse nesciunt rerum repellat accusamus possimus facilis ab quas!
              Illo sapiente quaerat reprehenderit labore quos blanditiis repudiandae natus praesentium, deserunt id qui ullam placeat laboriosam explicabo excepturi cupiditate vero assumenda architecto itaque eius! Praesentium voluptatum ratione minus at ipsa.0</p>
            </div>
          ) : (
            <div className="credentials">
              <h4>Credentials</h4>
              <p>Degree: {teacher.Degree}</p>
              <p>Experience: {teacher.Experience}</p>
              <p>Certification: {teacher.Certification}</p>
            </div>
          )}
        </div>
      </div>

      <NavBottom className="bottom-navigation" />
    </div>
  );
};

export default TeacherProfilePage;
