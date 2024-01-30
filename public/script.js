async function getAllPets() {
  try {
    const petArray = await fetch('/api/v1/pets');
    console.log(petArray);
    return petArray;
  } catch (e) {
    console.error(e);
  }
}

console.log(getAllPets());

console.log('something');
