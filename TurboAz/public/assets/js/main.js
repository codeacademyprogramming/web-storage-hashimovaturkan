document.addEventListener("DOMContentLoaded",()=>{
    const products = document.querySelectorAll(".product__box");
    let selectedProducts = [];
    products.forEach((product)=>{
        const icon = product.querySelector(".product__icon");
        icon.addEventListener("click",()=>{
            let storedProducts = localStorage.getItem("storedProducts");
            let haveOrNot=false;
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
                haveOrNot = storedProducts.some((selectedItem)=>{
                    const productId = product.getAttribute("id");
                    return productId===selectedItem.id;
                });
                console.log(haveOrNot)
                console.log(storedProducts)
            }
            
            if(haveOrNot){
                // localStorage.setItem("color","white")
                // icon.style.fill=localStorage.getItem("color");
                const productId = product.getAttribute("id");
                selectedProducts=[];
               // console.log(storedProducts);
                storedProducts.forEach((product)=>{
                    if(productId!==product.id){
                        selectedProducts.push(JSON.stringify(product));
                    }
                })
                storedProducts=selectedProducts;
                console.log(storedProducts)
                //console.log(selectedProducts)
                
                localStorage.setItem("storedProducts",storedProducts.toString());
            }
            else{
                // localStorage.setItem("color","red")
                // icon.style.fill=localStorage.getItem("color");
                const productId = product.getAttribute("id");
                const obj={};
                const productPrice = product.querySelector(".product__price").textContent;
                const productName = product.querySelector(".product__name").textContent;
                const productYear = product.querySelector(".product__year").textContent;
                const productMotor = product.querySelector(".product__motor").textContent;
                const productKm = product.querySelector(".product__km").textContent;
                const productBottom = product.querySelector(".product__buttoms").textContent;
                const productImgUrl = product.querySelector(".product__img").getAttribute("src");
                const productBarter = product.querySelector(".product__barter");
                const productCredit = product.querySelector(".product__credit");
                const productSalon = product.querySelector(".product__salon");
                obj.id=productId;
                obj.price=productPrice;
                obj.name=productName;
                obj.year=productYear;
                obj.motor=productMotor;
                obj.km=productKm;
                obj.bottom=productBottom;
                obj.imgUrl=productImgUrl;
                obj.barter=productBarter?"yes":"no";
                obj.credit=productCredit?"yes":"no";
                obj.salon=productSalon?"yes":"no";

                if(storedProducts){
                    selectedProducts=[];
                    storedProducts.forEach((product)=>{
                        selectedProducts.push(JSON.stringify(product));
                    })
                    selectedProducts.push(JSON.stringify(obj));
                    localStorage.setItem("storedProducts",selectedProducts.toString());
                }
                else{
                    selectedProducts.push(JSON.stringify(obj));
                    localStorage.setItem("storedProducts",selectedProducts.toString());
                }

            }




        })
    })
    
})
