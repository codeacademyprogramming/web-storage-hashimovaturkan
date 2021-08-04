document.addEventListener("DOMContentLoaded",()=>{
    const box = document.querySelector(".product");
    let storedProducts = localStorage.getItem("storedProducts");

    if(storedProducts){
        let newStoredProducts=[];
        storedProducts = storedProducts.split("},");
        storedProducts.forEach((product,index)=>{
            if(index!==storedProducts.length-1){
                newStoredProducts.push(JSON.parse(product+"}"));
            } 
            else{
                newStoredProducts.push(JSON.parse(product));
            }
        })
        storedProducts=newStoredProducts;
    }
    
    storedProducts.forEach((product)=>{
        const productBox = document.createElement("div");
        productBox.classList.add("product__box");
        productBox.setAttribute("id",`${product.id}`);
        const productImgBox = document.createElement("div");
        productImgBox.classList.add("product__img-box");
        const productImg = document.createElement("img");
        productImg.classList.add("product__img");
        productImg.setAttribute("src",`${product.imgUrl}`);
        const productPrice = document.createElement("div");
        productPrice.classList.add("product__price");
        productPrice.innerText=`${product.price}`;
        const productDesc = document.createElement("div");
        productDesc.classList.add("product__desc");
        const productName = document.createElement("h2")
        productName.classList.add("product__name");
        productName.innerText=`${product.name}`;
        const productYear = document.createElement("span")
        productName.classList.add("product__year");
        productName.innerText=`${product.year}`;
        const productMotor = document.createElement("span")
        productName.classList.add("product__motor");
        productName.innerText=`${product.motor}`;
        const productKm = document.createElement("span")
        productName.classList.add("product__km");
        productName.innerText=`${product.km}`;
        const productAttributes= document.createElement("p");
        productAttributes.classList.add("product__attributes");
        const productBottom = document.createElement("p");
        productBottom.classList.add("product__buttoms");
        productBottom.innerText=`${product.bottom}`;
        if(product.salon==="yes"){
            const productSalon=document.createElement("span");
            productSalon.innerText="SALON";
            productSalon.classList.add("product__salon");
            productImgBox.prepend(productSalon);

        }
        // if(product.credit==="yes"){
        //     const productSalon=document.createElement("span");
        //     productSalon.innerHTML=;
        //     productSalon.classList.add("product__credit");
        //     productImgBox.prepend(productSalon);

        // }
        

        productAttributes.prepend(productKm);
        productAttributes.prepend(productMotor);
        productAttributes.prepend(productYear);
        productDesc.prepend(productBottom);
        productDesc.prepend(productAttributes);
        productDesc.prepend(productName);

        productImgBox.prepend(productPrice);
        productImgBox.prepend(productImg);

        productBox.prepend(productDesc);
        productBox.prepend(productImgBox);

        box.prepend(productBox);
        



    })

    
})