import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import countryWiseData from "../../../data/countryWiseData";

const AdmiEntranceComp = ({ country = "uk" }) => {
  const data = countryWiseData[country];
  const [showAll, setShowAll] = useState(false);
  if (!data || !data.admission || !data.admission.entranceExamData) {
    return <div>Admission Entrance Exam data not available</div>;
  }
  const entranceExamData = data.admission.entranceExamData;
  const displayedExams = showAll
    ? entranceExamData
    : entranceExamData.slice(0, 5);

  return (
    <div className="">
      <div className="subheading-big-medium text-content-secondary mb-4">
        Entrance Exam Required
      </div>

      <div className="table-responsive">
        <table className="edu-ranking-table caption-bold text-content-secondary">
          <thead className="">
            <tr>
              <th className="py-3 px-4" style={{ width: "25%" }}>
                Exam
              </th>
              <th className="py-3 px-4" style={{ width: "40%" }}>
                Requirement Criteria
              </th>
              <th className="py-3 px-4" style={{ width: "35%" }}>
                Required for
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedExams.map((examData) => (
              <tr key={examData.id}>
                <td className="py-3 px-4">
                  <strong>{examData.exam}</strong> {examData.fullName}
                </td>
                <td className="py-3 px-4">
                  <ul className="list-unstyled mb-0">
                    {examData.criteria.map((criterion, index) => (
                      <li key={index} className="mb-1">
                        <span className="me-2">•</span>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-4">{examData.requiredFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-3">
        <button
          className="btn-secondary-outline px-4"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View all Universities"}{" "}
          {showAll ? (
            <ChevronUp className="ms-1" />
          ) : (
            <ChevronDown className="ms-1" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AdmiEntranceComp;
