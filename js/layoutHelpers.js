
$(document).ready(function() {

    for(var i = 1; i <= 18; i++) {
        var modalID = '#portfolioModal' + i;
        if(window.location.href.indexOf(modalID) != -1) {
            $(modalID).modal('show');
        }
    }

    if(window.location.href.indexOf('#UAV') != -1) {
        $("#portfolioModal5").modal('show');
    }

    if(window.location.href.indexOf('#Elixr') != -1) {
        $('#portfolioModal4').modal('show');
    }

    if(window.location.href.indexOf('#MLRoad') != -1) {
        $('#portfolioModal3').modal('show');
    }
    
});