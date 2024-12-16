import styles from "./student.module.css";

interface Student {
  firstName: string;
  lastName: string;
  studyYear: number;
}

function Students() {
  const students: Student[] = [
    { firstName: "Jacek", lastName: "Placek", studyYear: 2024 },
    { firstName: "Skibidi", lastName: "Sigma", studyYear: 2023 },
    { firstName: "Ohio", lastName: "Rizz", studyYear: 2022 },
    { firstName: "Baby", lastName: "Gronk", studyYear: 2024 },
    { firstName: "Hawk", lastName: "Tuah", studyYear: 2023 },
  ];

  return (
    <div>
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
    </div>
  );
}

export default Students;
