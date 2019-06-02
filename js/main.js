(function(){
    $(document).ready(init);

    function init(){
        $('.dropdown-trigger').dropdown();
        $('.sidenav').sidenav();
        $("#arrow").on('click', scrollDown);
    }

    function scrollDown(){
        $("html, body").animate({
            scrollTop: $(".basics").offset().top
        }, "slow");
    }
})();