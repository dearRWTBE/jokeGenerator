 const btnEl = document.getElementById('btn');
 const jokeEl = document.getElementById('joke');
 const apkiKey = "jre0nxid6dA5asAkDBqmkqoRTTjfC8qJhnONYI0p";
 const apiLink = 'https://api.api-ninjas.com/v1/jokes?limit=1';
 const option = {
    method: "GET",
    headers: {
        "X-Api-Key" : apkiKey,
    }       
 };
async function getjoke(){
   
    try {
    btnEl.innerHTML = "Loading..."
    const response = await fetch(apiLink, option);
    const data = await response.json();    
    jokeEl.innerHTML = data[0].joke;
    btnEl.innerHTML = 'Tell me a joke'
        
    } catch (error) {
        btnEl.innerHTML = "Loading..."
        jokeEl.innerHTML = "Something went wrong Try agani after some time"
        btnEl.innerHTML = "Tell me a joke";
    }
}
 btnEl.addEventListener("click", getjoke);