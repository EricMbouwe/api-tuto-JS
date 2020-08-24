
// Async and Await

function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
}

async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}

const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
}

anArray.forEach(async item => {
  // do something asynchronously for each item in 'anArray'
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
});

server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});




//Error Handling

asyncFunctionCall().catch(err => {
  console.error(err)
});

async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}
