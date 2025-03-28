function submitData(name, email){
    return fetch ("http://localhost:3000/users", {
        method: "POST",
        headers:{
            "content-type":"application/json",
            "accept":"application/json"
        },
        body:JSON.stringify({name, email})

    })
    .then(response=>response.json())
    .then(data=>{
        const body=document.querySelector("body");
        const p = document.createElement("p");
        p.textContent=`NEW ID:${data.id}`;
        body.appendChild("p");
    })
    .catch(errors=>{
        
    })
}
