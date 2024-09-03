export function getRequest(url, Ok, Error = (e)=>{} ){
    fetch(url)
    .then(res => res.json())
    .then(Ok)
    .catch(e => {
        console.log(e)
        Error(e)
    })
}