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
        .waitForElementVisible('body', 1000)
        .frame('klarna-checkout-iframe')
        .waitForElementVisible('body', 1000)
        .setValue('input[type="email"]','test+yellowt@test.com')
        .setValue('input[name="postal-code"]' , '16273')
        .click('button[data-cid="button.continue.challenge"]')
        
    },
    'billingAddress' : function(browser){
    browser
        .frame('klarna-checkout-iframe')
        .waitForElementVisible('body', 1000)
        .setValue('input[data-cid="editor.billing_address.given_name"]' , 'First name')
        .setValue('input[data-cid="editor.billing_address.family_name"]' , 'Last name')
        .setValue('input[data-cid="editor.billing_address.street_address"]' , 'Address 01')
        .setValue('input[data-cid="editor.billing_address.phone"]' , '0765260086')
        .setValue('input[data-cid="editor.customer.national_identification_number"]' , '8503189006')
        .click('button[data-cid="button.continue.billing_address"]')
            
    },
    'buy' : function(browser){
    browser
        .frame('klarna-checkout-iframe')
        .click('#buy-button > span', function(){
            console.log("Hi")
        })
        .waitForElementVisible('body', 5000)
        //.verify.elementPresent('.checkout-confirmation__header-inner')
        .frameParent()
    }
        
};