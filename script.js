Document.addEventListener(Domcontentloaded => () {
    const products = [
        { id: 1, name: "product1", price: 100.0 },
        { id: 2, name: "product2", price: 100.0 },
        { id: 3, name: "product3", price: 100.0 },

    ];

    constcart = [];
    const cartitems = document.getElementsByClassName("cart-items");
    const itemname = document.getElementsByClassName("item-name");
    const itemqty = document.getElementsByClassName("item-qty");
    const itemprice = document.getElementsByClassName("item-price");
    const removeBtn = document.getElementsByClassName("remove-btn");

})
