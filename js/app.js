$(document).ready(function() {

    $(".international, .politics, .business, .technology, .culture, .blogs").on("click", function(event) {
        event.preventDefault();
        if ($(this).hasClass("active")) {
            $("#slide-down").slideUp();
            $("#primary-nav li").removeClass("active");
        } else {
            $("#primary-nav li").removeClass("active");
            $('.drop').hide();
            var className = this.className;
            $('section.' + className).show();
            $(this).addClass("active");
            $("#slide-down").slideDown();
        }
    });
});

// refactor this to get all drop downs to be as short as poss
