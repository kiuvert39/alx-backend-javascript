export default function handleApiResponse(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API'); // Logs message for every resolution
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.log('Got a response from the API'); // Logs message for every rejection as well
      return new Error();
    })
    .finally(() => {
      // This block will always execute after the promise is settled,
      // so it's optional in this case since logging is done in both .then and .catch.
    });
}
