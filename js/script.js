input.onkeyup = async (event) => {
    if (event.keyCode == 13) {
        /*let soz=''
        for(let i of input.value){
            if(i==' '){
                soz+='+'
            }else soz+=i 
        }
        let response = await fetch(
            `https://pixabay.com/api/?key=22407618-3db0030dd22c559ad8308ae4b&q=${soz}&image_type=photo&pretty=true`
        );
        
        response = await response.json();
        if(response.hits.length==0){
            alert('rasm topilmadi')
        }
        oragan.innerHTML=null   
        for (let i = 0; i < response.hits.length; ++i) {
            let img = document.createElement("img");
            img.src = response.hits[i].webformatURL;
            img.style.width='150px'
            oragan.append(img);
        }*/
        let soz = "";
        for (let i of input.value) {
            if (i == " ") {
                soz += "%20";
            } else soz += i;
        }
        try{
        if(input.value=='') alert('Biror nima yozing')
        let response = await fetch(
            `https://bing-image-search1.p.rapidapi.com/images/search?q=${soz}&count=50`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "b7d51fb40bmsh9dcc48e5494e522p137378jsn3db9a875370f",
                    "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
                },
            }
        );
        response = await response.json();
        if(response.value.length==0){
            alert('Rasm topilmadi')
        }
        if(input.value==''){
            alert('Rasm topilmadi')
        }
        console.log(response);
        oragan.innerHTML = null;
        for (let i = 0; i < response.value.length; ++i) {
            let img = document.createElement("img");
            img.src = response.value[i].contentUrl;
            img.style.width = "150px";
            oragan.append(img);
        }
    }catch(er){

    }
    }
};
