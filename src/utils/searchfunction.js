/**
 * 
 * @param {Array} allproducts 
 * @param {string} category 
 * @param {string} searchtext 
 * @returns {Array}
 */
export function search(allproducts, category, searchtext){

    var filteredProducts;

    if(!category || category.toLowerCase()==='all'){
        filteredProducts=allproducts.flatMap(product=>product.items);
    }
    else{
        const selectedCategory=allproducts.find((product)=>product.category===category);
        filteredProducts=selectedCategory?selectedCategory:[];
    }

    if(searchtext && searchtext.trim()!==""){
        return filteredProducts.filter((product)=>product.title.toLowerCase().includes(searchtext) || product.description.toLowerCase().includes(searchtext));
    }

    return filteredProducts;
}