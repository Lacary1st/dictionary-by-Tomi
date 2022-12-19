 const input = document.getElementById('input');
 const search = document.getElementById('search');

 async function dictionaryAPI(search){
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`;
    const response = await fetch(apiURL);
    const data = await response.json();
 }
