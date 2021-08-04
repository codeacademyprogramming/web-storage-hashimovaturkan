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
        if(product.credit==="yes"){
            const productSalon=document.createElement("span");

            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const iconPath = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );

            iconSvg.setAttribute('fill', 'white');
            iconSvg.setAttribute('viewBox', '0 0 32 32');
            iconSvg.setAttribute('width', '15');
            iconSvg.setAttribute('height', '15');

            iconPath.setAttribute(
                'd',
                'M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM15 29c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12zM16 16v-4h4v-2h-4v-2h-2v2h-4v8h4v4h-4v2h4v2h2v-2h4l-0-8h-4zM14 16h-2v-4h2v4zM18 22h-2v-4h2v4z'
            );

            iconSvg.appendChild(iconPath);

            productSalon.appendChild(iconSvg);

            productSalon.classList.add("product__credit");
            productImgBox.prepend(productSalon);

        }

        if(product.barter==="yes"){
            const productBarter=document.createElement("span");

            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const iconPath1 = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );
            const iconPath2 = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );

            iconSvg.setAttribute('fill', 'white');
            iconSvg.setAttribute('viewBox', '0 0 32 32');
            iconSvg.setAttribute('width', '15');
            iconSvg.setAttribute('height', '15');

            iconPath1.setAttribute(
                'd',
                'M27.802 5.197c-2.925-3.194-7.13-5.197-11.803-5.197-8.837 0-16 7.163-16 16h3c0-7.18 5.82-13 13-13 3.844 0 7.298 1.669 9.678 4.322l-4.678 4.678h11v-11l-4.198 4.197z'
            );
            iconPath2.setAttribute(
                'd',
                'M29 16c0 7.18-5.82 13-13 13-3.844 0-7.298-1.669-9.678-4.322l4.678-4.678h-11v11l4.197-4.197c2.925 3.194 7.13 5.197 11.803 5.197 8.837 0 16-7.163 16-16h-3z'
            );

            iconSvg.appendChild(iconPath1);
            iconSvg.appendChild(iconPath2);

            productBarter.appendChild(iconSvg);

            productBarter.classList.add("product__barter");
            productImgBox.prepend(productBarter);

        }

        
        

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