import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavTop from "../Components/NavTop";
import PageHeader from "../Components/PageHeader";
import TeacherProfile from "../Components/TeacherProfile";
import "./TeacherProfilePage.css";

const TeacherProfilePage = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [activeTab, setActiveTab] = useState("summary");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const jsonData = await import("../Dummy/dummy.json");
        const teacherData = jsonData.tables.Teacher.find(
          (t) => t.Teach_ID === Number(id)
        );
        setTeacher(teacherData);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchTeacherData();
  }, [id]);

  if (!teacher) {
    return <p>Loading teacher details...</p>;
  }

  const handleRequestTrial = () => {
    navigate(`/request-trial?teacherId=${teacher.Teach_ID}`);
  };

  const handleCall = () => {
    window.location.href = `tel:${teacher.Phone_No}`;
  };

  return (
    <div className="teacher-profile-page">
      <NavTop />
      <PageHeader heading="Profile Summary" />

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

      <div className="profile-content">
        <div className="profile-left">
          <TeacherProfile teacherId={id} />
        </div>

        <div className="profile-right">
          {activeTab === "summary" && (
            <>
              <div className="summary-section">
                <h3>Summary</h3>
                <p>
                  Greetings everyone. My name is {teacher.Name}, and I'm
                  delighted to be your child's {teacher.Subject} teacher. I have
                  3 years of experience teaching grade 8 - 12. I'm passionate
                  about fostering a love for learning and creating a supportive
                  classroom environment. My goal is to make {teacher.Subject}{" "}
                  enjoyable and help every student achieve academic success. I
                  look forward to working with all of you!
                </p>
              </div>

              <div className="achievement-section">
                <h4>Achievements</h4>
                <div className="achievement-box">
                  I scored 100% in {teacher.Subject.toLowerCase()} in class 10
                  and 90% in sciences always.
                </div>
              </div>

              <div className="outcome-section">
                <h4>Outcomes</h4>
                <div className="outcome-box">
                  I successfully helped 5 students increase their{" "}
                  {teacher.Subject.toLowerCase()} score by 100%.
                </div>
              </div>

              <div className="action-buttons">
                <button onClick={handleRequestTrial} className="action-button">
                  Request for Trial
                </button>
                <button onClick={handleCall} className="action-button">
                  Call
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfilePage;
