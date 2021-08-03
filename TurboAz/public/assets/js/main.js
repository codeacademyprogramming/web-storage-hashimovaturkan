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
                    console.log(product)

                    if(index!==storedProducts.length-1){
                        newStoredProducts.push(JSON.parse(product+"}"));
                    } 
                    else{
                        newStoredProducts.push(JSON.parse(product));
                    }
                })
                storedProducts=newStoredProducts;
                console.log(storedProducts)
                haveOrNot = storedProducts.some((selectedItem)=>{
                    const productId = product.getAttribute("id");
                    return productId===selectedItem.id;
                });
                console.log(haveOrNot)
            }
            
            if(haveOrNot){

                const productId = product.getAttribute("id");
                // selectedProducts = storedProducts.filter((product)=>{
                //     // return id!==productId;
                //     return product.id!==productId;
                // })
                selectedProducts=[];
                storedProducts.forEach((product)=>{
                    if(productId!==product.id){
                        selectedProducts.push(JSON.stringify(product));
                    }
                })
                console.log(selectedProducts)
                // selectedProducts = selectedProducts.map((product)=>{
                //     return JSON.stringify(product);
                // })
                
                localStorage.setItem("storedProducts",selectedProducts.toString());
            }
            else{
                const productId = product.getAttribute("id");
                //selectedProducts.push(productId);
                //localStorage.setItem("storedProducts",selectedProducts.toString());
                const obj={};
                const productPrice = product.querySelector(".product__price").textContent;
                const productName = product.querySelector(".product__name").textContent;
                const productYear = product.querySelector(".product__year").textContent;
                const productMotor = product.querySelector(".product__motor").textContent;
                const productKm = product.querySelector(".product__km").textContent;
                const productBottom = product.querySelector(".product__buttoms").textContent;
                const productImgUrl = product.getAttribute("src");
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

                selectedProducts.push(JSON.stringify(obj));
                console.log(selectedProducts.toString())
                localStorage.setItem("storedProducts",selectedProducts.toString());

            }




            
            //selectedProducts.push(product);
        })
    })
    
})
