
        // scripts.js

$(document).ready(function() {
    $('.add-to-cart').click(function() {
        const card = $(this).closest('.product-card');
        const id = card.data('id');
        const name = card.find('h2').text();
        const price = card.find('p').text().replace('Price: ', '');

        const cartItem = $('<li></li>').text(`${name} - ${price}`);
        const removeButton = $('<button></button>').text('Remove').addClass('remove-from-cart');
        removeButton.click(function() {
            $(this).parent().remove();
        });
        cartItem.append(removeButton);
        $('#cart-items').append(cartItem);
    });
});

   