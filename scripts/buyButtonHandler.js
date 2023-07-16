$(document).ready(function() {
    $('.quantity').prop('readonly', true);

    $('.plus-button').click(increment);
    $('.minus-button').click(decrement);
    $('.buy-button').click(buy);

    function increment() {
        var value = parseInt($('.quantity').val());
        value = isNaN(value) ? 0 : value;
        value++;
        $('.quantity').val(value);
    }

    function decrement() {
        var value = parseInt($('.quantity').val());
        if (value == 0) {
            return;
        }
        value = isNaN(value) ? 0 : value;
        value--;
        $('.quantity').val(value);
    }

    function buy() {
        console.log("h");
        var value = parseInt($('.quantity').val());
        if (value > 0) {
            toastr.info(`В корзину добавлено ${value} товар(ов)`);
        }
        else toastr.info(`Добавьте хотя бы 1 товар в корзину`);
    }
  });