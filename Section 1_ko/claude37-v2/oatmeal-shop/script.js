document.addEventListener('DOMContentLoaded', function() {
    // Cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    const closeCartBtn = document.querySelector('.close-cart');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    let cart = [];
    
    // Open cart modal
    cartBtn.addEventListener('click', function() {
        cartModal.classList.add('active');
    });
    
    // Close cart modal
    closeCartBtn.addEventListener('click', function() {
        cartModal.classList.remove('active');
    });
    
    // Add to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            const productImage = productCard.querySelector('img').src;
            
            const price = parseFloat(productPrice.replace('$', ''));
            
            // Check if product already in cart
            const existingItem = cart.find(item => item.name === productName);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    name: productName,
                    price: price,
                    image: productImage,
                    quantity: 1
                });
            }
            
            updateCart();
            cartModal.classList.add('active');
        });
    });
    
    // Update cart
    function updateCart() {
        // Clear cart items
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
            cartCount.textContent = '0';
            cartTotalPrice.textContent = '$0.00';
            return;
        }
        
        let total = 0;
        let itemCount = 0;
        
        // Add each item to cart
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-name="${item.name}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase" data-name="${item.name}">+</button>
                        <button class="remove-item" data-name="${item.name}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
            
            total += item.price * item.quantity;
            itemCount += item.quantity;
        });
        
        // Update cart count and total
        cartCount.textContent = itemCount.toString();
        cartTotalPrice.textContent = `$${total.toFixed(2)}`;
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const name = this.dataset.name;
                const item = cart.find(item => item.name === name);
                
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart = cart.filter(item => item.name !== name);
                }
                
                updateCart();
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', function() {
                const name = this.dataset.name;
                const item = cart.find(item => item.name === name);
                
                item.quantity++;
                updateCart();
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const name = this.dataset.name;
                cart = cart.filter(item => item.name !== name);
                updateCart();
            });
        });
    }
    
    // Checkout
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) return;
        
        alert('Thank you for your order! This is a demo, so no actual purchase will be made.');
        cart = [];
        updateCart();
        cartModal.classList.remove('active');
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const toggle = otherItem.querySelector('.faq-toggle i');
                    toggle.className = 'fas fa-plus';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const toggle = item.querySelector('.faq-toggle i');
            toggle.className = item.classList.contains('active') ? 'fas fa-minus' : 'fas fa-plus';
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        
        if (nameInput.value && emailInput.value) {
            alert(`Thank you, ${nameInput.value}! You've been subscribed to our newsletter.`);
            newsletterForm.reset();
        }
    });
    
    // Create an images folder if it doesn't exist
    function copyImagesToFolder() {
        console.log('Images are ready to be used from the images folder.');
    }
    
    copyImagesToFolder();
});
