 const input = document.getElementById('input');
 const search = document.getElementById('search');
//  const meaning = document.getElementById('meaning');
 const phonetics = document.getElementById('phonetics');


 search.addEventListener( 'click',  e =>{
   e.preventDefault();


 
    let apiURL = https://od-api.oxforddictionaries.com/api/v2/entries/en/${search.value}`;
    const response = await fetch(apiURL);
   //  const data = await response.json();
   data
 
}
