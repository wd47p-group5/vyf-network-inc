let parentElement = document.querySelector('.products-container');

let children = parentElement.children;

for(let i = 0; i < children.length; i++){

let brandName = children[i].className;
if(brandName === 'products-title'){
  continue;
}

let productName = brandName.substring(0, brandName.indexOf(' '));
    if (productName.includes('-')){
      productName = productName.substring(0, productName.indexOf('-'));
    }
    
let modulePath;


if (productName){
    modulePath = `./product-brands/${productName}.js`
    brandName = productName;}
else {
    modulePath = `./product-brand/${brandName}.js`;
    }
    
    import(modulePath)
      .then((module) => {
 

    let soloBrand = document.querySelectorAll("." + brandName);
    let brandComputing = document.querySelector("." + brandName + "-computing");
    let brandNetworking = document.querySelector("." + brandName + "-networking");
    let brandCctv = document.querySelector("." + brandName + "-cctv");
    let brandVoip = document.querySelector("." + brandName + "-voip");
    let brandSecurity = document.querySelector("." + brandName + "-security");
    let brandStructuredCabling = document.querySelector("." + brandName + "-structuredCabling");
    let brandSoftwareSolution = document.querySelector("." + brandName + "-softwareSolution");
    let brandDataCenter = document.querySelector("." + brandName + "-dataCenter");
    
    let { brandProducts } = module;
    let computing = brandProducts.filter(item => item.type === "computing");
    let networking = brandProducts.filter(item => item.type === "networking");
    let cctv = brandProducts.filter(item => item.type === "cctv");
    let voip = brandProducts.filter(item => item.type === "voip");
    let security = brandProducts.filter(item => item.type === "security");
    let structuredCabling = brandProducts.filter(item => item.type === "structuredCabling");
    let softwareSolution = brandProducts.filter(item => item.type === "softwareSolution");
    let dataCenter = brandProducts.filter(item => item.type === "dataCenter");

        function name(card, a) {
            let name = document.createElement('h4');
            card.appendChild(name).className = "products-name";
            name.append(a);
        }
        
        function description(card, c) {
            let description = document.createElement('p');
            card.appendChild(description);
            description.append(c);
        }
        
        function button(card) {
            let button = document.createElement('a');
            button.setAttribute("href","#");
            card.appendChild(button).className = "btn btn-blue text-white mt-auto";
            button.append("View Details");
        }
        
        function image(card, a, b) {
            let image = document.createElement('img');
            image.setAttribute("alt", a);
            image.setAttribute("src", b);
            card.appendChild(image).className = "card mb-4 shadow-sm";
        }
        // End of CARD BODY
        
        // Start of CARD CONTAINER
        function card(cardContainer, a, b, c){
            let card = document.createElement('div');
            cardContainer.appendChild(card).className = "card mb-4 shadow-sm";
            if(b) {
              image(card, a, b);
            }
            name(card, a);
            description(card, c);
            button(card);
        }
        
        function cardContainer(a, b, c, divContainer) {
            let cardContainer = document.createElement('div');
            divContainer.appendChild(cardContainer).className = "col-lg-3 col-md-6 d-flex align-items-stretch";
            card(cardContainer, a, b, c);
        }
        // End of CARD CONTAINER
        
        function productContainer(a, b, c, divContainer) {
            cardContainer(a, b, c, divContainer);
        }
        
    // for(let i = 0; soloBrand.length)



    if(soloBrand[0]) {
        let divContainer = soloBrand[0];
        for (let item of brandProducts) {
          let productName = item.name;
          let productImageSrc = item.src;
          let productDescription = item.description;
          productContainer(productName, productImageSrc, productDescription, divContainer);
        }
      } 
    else if(brandComputing) {
        let divContainer = brandComputing;
        for (let item of computing) {
            let productName = item.name;
            let productImageSrc = item.src;
            let productDescription = item.description;
            productContainer(productName, productImageSrc, productDescription, divContainer);
          }
    }
    else if(brandNetworking) {
        let divContainer = brandNetworking;
        for (let item of networking) {
            let productName = item.name;
            let productImageSrc = item.src;
            let productDescription = item.description;
            productContainer(productName, productImageSrc, productDescription, divContainer);
          }
    }
    else if(brandCctv) {
        let divContainer = brandCctv;
        for (let item of cctv) {
            let productName = item.name;
            let productImageSrc = item.src;
            let productDescription = item.description;
            productContainer(productName, productImageSrc, productDescription, divContainer);
          }
    }
    else if(brandVoip) {
        let divContainer = brandVoip;
        for (let item of voip) {
            let productName = item.name;
            let productImageSrc = item.src;
            let productDescription = item.description;
            productContainer(productName, productImageSrc, productDescription, divContainer);
          }
    }
    else if(brandSecurity) {
        let divContainer = brandSecurity;
        for (let item of security) {
            let productName = item.name;
            let productImageSrc = item.src;
            let productDescription = item.description;
            productContainer(productName, productImageSrc, productDescription, divContainer);
          }
    }
    else if(brandStructuredCabling) {
        let divContainer = brandStructuredCabling;
        for (let item of structuredCabling) {
            let productName = item.name;
            let productImageSrc = item.src;
            let productDescription = item.description;
            productContainer(productName, productImageSrc, productDescription, divContainer);
          }
    }
    else if(brandSoftwareSolution) {
        let divContainer = brandSoftwareSolution;
        for (let item of softwareSolution) {
            let productName = item.name;
            let productImageSrc = item.src;
          let productDescription = item.description;
          productContainer(productName, productImageSrc, productDescription, divContainer);
          }
    }
    else if(brandDataCenter) {
        let divContainer = brandDataCenter;
        for (let item of dataCenter) {
            let productName = item.name;
            let productImageSrc = item.src;
          let productDescription = item.description;
          productContainer(productName, productImageSrc, productDescription, divContainer);
          }
    }

    
    })
      .catch((error) => {
        console.error(`Error loading module: ${error}`);
      });
    }