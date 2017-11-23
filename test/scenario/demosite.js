module.exports ={
    'selectProduct' : function(browser){
    browser
        .url('https://demo.klarna.se/fashion/kco/')
        .waitForElementVisible('body', 1000)
        .click('a[class= button]')
       
    },
    'addProductInCart' : function(browser){
    browser
        .click('a[title="TriBeCa Skinny Jean"]')
        .click('a[name="black"]')
        .click('a[title="29"]')
        .click('button[onclick="productAddToCartForm.submit(this)"]')
    },
    'cartToCheckoutPage' : function(browser){
    browser
        .click('li[class="method-checkout-cart-methods-onepage-bottom"]')
        .waitForElementVisible('body', 1000)
    },
    'challenge' :function(browser){
    browser 
        .frame('klarna-checkout-iframe')
        .setValue('input[type="email"]','ajantabisht@gmail.com')
        .setValue('input[name="postal-code"]' , '16273')
        .click('button[data-cid="button.continue.challenge"]')
    }
        
};