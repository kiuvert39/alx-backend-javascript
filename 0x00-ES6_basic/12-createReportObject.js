export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array using spread syntax, then join with '|'
  return [...reportWithIterator].join(' | ');
}
