$(function () {

    var page = window.location.pathname;

    $(":checkbox").each(function (i, checkbox) {
        var box = $(checkbox);
        box.attr('disabled', false);
        var text = box.parent().text();
        var value = window.localStorage.getItem(page + text);
        if(value === 'true') {
            box.prop('checked', true);
        }
    });

    $('body').on('change', ':checkbox', function (e) {
        var box = $(e.target);
        var text = box.parent().text();
        window.localStorage.setItem(page + text, e.target.checked);
    })

});