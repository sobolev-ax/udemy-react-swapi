const getResource = async (url) => {
  const res = await fetch(url);

  if(!res.ok) {
    throw new Error(`could not fetch:\n${url}` +
      `\nrecieved ${res.status}`);
  }

  const body = await res.json();

  return body;
}

getResource('https://swapi.dev/api/people/1')
  .then((body) => console.log(body))
  .catch((err) => console.error('getResource,', err));
