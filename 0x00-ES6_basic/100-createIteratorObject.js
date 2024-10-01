export default function createIteratorObject(report) {
  const allEmployees = [];

  // Loop through each department and collect all employees into one array
  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department);
  }

  // Return an iterator for the array of all employees
  return allEmployees[Symbol.iterator]();
}
