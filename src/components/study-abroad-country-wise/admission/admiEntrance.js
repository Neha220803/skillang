import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const AdmiEntranceComp = () => {
  // Sample entrance exam data
  const entranceExamData = [
    {
      id: 1,
      exam: "IELTS",
      fullName: "(International English Language Testing System)",
      criteria: [
        "6.5 overall (with no band less than 6.0).",
        "Higher scores for competitive programs like medicine or law.",
      ],
      requiredFor:
        "Required for most undergraduate and postgraduate programs taught in English.",
    },
    {
      id: 2,
      exam: "TOEFL",
      fullName: "(Test of English as a Foreign Language)",
      criteria: [
        "Minimum required scores typically range from 79-100, depending on the course.",
      ],
      requiredFor:
        "Required for English-taught undergraduate and postgraduate programs.",
    },
    {
      id: 3,
      exam: "PTE Academic",
      fullName: "(Pearson Test of English Academic)",
      criteria: [
        "Typically required scores: 58-65, depending on the university.",
      ],
      requiredFor:
        "Accepted for a wide range of undergraduate and postgraduate programs.",
    },
    {
      id: 4,
      exam: "GMAT",
      fullName: "(Graduate Management Admission Test)",
      criteria: [
        "Required scores: typically between 550-700, depending on the institution.",
      ],
      requiredFor:
        "Required for MBA and postgraduate management-related programs.",
    },
    {
      id: 5,
      exam: "GRE",
      fullName: "(Graduate Record Examinations)",
      criteria: [
        "Scores typically range from 300-320, depending on the institution.",
      ],
      requiredFor:
        "Required for some postgraduate programs, especially in technical fields like engineering and computer science.",
    },
    {
      id: 6,
      exam: "SAT",
      fullName: "(Scholastic Assessment Test)",
      criteria: [
        "Typically requires scores above 1200 for competitive universities.",
      ],
      requiredFor:
        "Required for undergraduate admissions at some UK universities, especially for American curriculum students.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedExams = showAll
    ? entranceExamData
    : entranceExamData.slice(0, 5);

  return (
    <section className="my-5">
      <Container>
        <div className="subheading-big-medium text-content-secondary mb-4">
          Entrance Exam Required
        </div>

        <div className="table-responsive">
          <Table hover className="entrance-exam-table">
            <thead className="bg-light">
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
          </Table>
        </div>

        <div className="text-center mt-3">
          <Button
            variant="outline-primary"
            className="rounded-pill px-4"
            onClick={() => setShowAll(!showAll)}
          >
            View all Exams <i className="fas fa-chevron-down ms-1"></i>
          </Button>
        </div>
      </Container>

      <style jsx>{`
        .entrance-exam-table th {
          font-weight: 600;
          color: #505050;
        }
        .entrance-exam-table td {
          vertical-align: middle;
        }
      `}</style>
    </section>
  );
};

export default AdmiEntranceComp;
