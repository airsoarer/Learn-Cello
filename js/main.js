(function(){
    $(document).ready(init);

    function init(){
        $('.dropdown-trigger').dropdown();
        $('.sidenav').sidenav();
        $('.modal').modal();
        $("#arrow").on('click', scrollDown);
    }

    function scrollDown(){
        $("html, body").animate({
            scrollTop: $(".basics").offset().top
        }, "slow");
    }
})();