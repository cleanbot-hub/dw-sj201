$(function() {
    function updateResult() {
        var text1Value = parseFloat($('#text1').val()) || 0;
        var text2Value = parseFloat($('#text2').val()) || 0;
        var sign = $('#sign').val();
        var result;

        switch (sign) {
            case '+':
                result = text1Value + text2Value;
                break;
            case '-':
                result = text1Value - text2Value;
                break;
            case '*':
                result = text1Value * text2Value;
                break;
            case '/':
                result = text2Value !== 0 ? text1Value / text2Value : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operator';
        }

        $('#result').text('Result: ' + result);
    }

    // Listen for changes in text1, text2, and sign inputs
    $('#text1, #text2, #sign').on('input', function () {
        updateResult();
    });
});
