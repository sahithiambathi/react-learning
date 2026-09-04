function Marks() {
  const scoreData = [
    {
      code: "CS501",
      subject: "Web Technologies",
      score: 92,
    },
    {
      code: "CS502",
      subject: "Database Management Systems",
      score: 85,
    },
    {
      code: "CS503",
      subject: "Software Engineering",
      score: 78,
    },
  ];

  return (
    <div className="portal-card">
      <h2>Academic Marks</h2>

      <table className="marks-table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Marks Obtained</th>
          </tr>
        </thead>

        <tbody>
          {scoreData.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.subject}</td>
              <td className="score-cell">
                {item.score} / 100
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Marks;