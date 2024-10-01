export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Using for...of to iterate through the iterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Collect employee names
  }

  // Return the names joined by ' | '
  return employeeNames.join(' | ');
}
