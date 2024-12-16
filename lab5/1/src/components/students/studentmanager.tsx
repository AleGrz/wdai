import React from "react";
import styles from "./student.module.css";

function StudentManager() {
  const [students, setStudents] = React.useState([
    { firstName: "Jacek", lastName: "Placek", studyYear: 2024 },
    { firstName: "Skibidi", lastName: "Sigma", studyYear: 2023 },
    { firstName: "Ohio", lastName: "Rizz", studyYear: 2022 },
    { firstName: "Baby", lastName: "Gronk", studyYear: 2024 },
    { firstName: "Hawk", lastName: "Tuah", studyYear: 2023 },
  ]);
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Study Year</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, id) => (
            <tr key={id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.studyYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddStudent studentState={setStudents} />
    </div>
  );
}

function AddStudent({ studentState }: { studentState: any }) {
  const i1 = React.createRef<HTMLInputElement>();
  const i2 = React.createRef<HTMLInputElement>();
  const i3 = React.createRef<HTMLInputElement>();

  return (
    <div>
      <input type="text" placeholder="First Name" ref={i1} />
      <input type="text" placeholder="Last Name" ref={i2} />
      <input type="text" placeholder="Study Year" ref={i3} />
      <button
        onClick={() => {
          const firstName = i1.current?.value;
          const lastName = i2.current?.value;
          const studyYear = parseInt(i3.current?.value || "0");

          if (firstName && lastName && studyYear) {
            studentState((prev: any) => [
              ...prev,
              { firstName, lastName, studyYear },
            ]);
          }
        }}
      >
        Add Student
      </button>
    </div>
  );
}

export default StudentManager;
