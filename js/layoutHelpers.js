
$(document).ready(function() {

    Number.prototype.mod = function(n) {
        return ((this%n)+n)%n;
    };


    for(var i = 1; i <= 18; i++) {
        var modalID = '#portfolioModal' + i;
        if(window.location.href.indexOf(modalID) != -1) {
            $(modalID).modal('show');
        }
    }

    if(window.location.href.indexOf('#digi') != -1) {
        $("#portfolioModal1").modal('show');
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

    
    /* Onclicks */
    $('.btn-prev').on('click', function(event) {

        //close modal
        $('.modal').modal('hide');
        $('.modal-backdrop').remove()

        var modal = $(this).parents().eq(5);
        var modalID = modal.attr('id')
        var numberText = modalID.split("portfolioModal")[1];
        var number = parseInt(numberText, 10) - 1;
        var newNum = (number-1).mod(18);
        var newModalID = '#portfolioModal' + (newNum+1);

        $(newModalID).modal('show');
    });

    $('.btn-next').on('click', function(event) {

        //cloase modal
        $('.modal').modal('hide');
        $('.modal-backdrop').remove()

        var modal = $(this).parents().eq(5);
        var modalID = modal.attr('id')
        var numberText = modalID.split("portfolioModal")[1];
        var number = parseInt(numberText, 10)-1;
        var newNum = (number+1).mod(18);
        var newModalID = '#portfolioModal' + (newNum+1);

        //close then open
        $(newModalID).modal('show');
    });
    
});