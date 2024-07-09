// Array of adjectives
const adjectives = [
    "Electric",
    "Sonic",
    "Riff",
    "Thunder",
    "Starlight",
    "Midnight",
    "Velvet",
    "Fury",
    "Stormy",
    "Wildfire"
  ];
  
  const nouns = [
    "Rebels",
    "Riot",
    "Squad",
    " Brigade",
    "Revolution",
    "Uprising",
    "Outlaws",
    "Renegades",
    "Vagabonds",
    "Wreckers"
  ];
  
  // Function to generate a random band name
  function generateBandName() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adjective} ${noun}`;
  }
  
console.log(generateBandName()); 
console.log(generateBandName()); 
console.log(generateBandName()); 
  