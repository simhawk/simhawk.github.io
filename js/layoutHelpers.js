
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
        $('body,html').animate(
            {
                scrollTop: $('#portfolioThumb1').offset().top
            },
            1200
        );
    }

    if(window.location.href.indexOf('#UAV') != -1) {
        $("#portfolioModal5").modal('show');
        $('body,html').animate(
            {
                scrollTop: $('#portfolioThumb5').offset().top
            },
            1200
        );
    }

    if(window.location.href.indexOf('#Elixr') != -1) {
        $('#portfolioModal4').modal('show');
        $('body,html').animate(
            {
                scrollTop: $('#portfolioThumb4').offset().top
            },
            1200
        );
    }

    if(window.location.href.indexOf('#MLRoad') != -1) {
        $('#portfolioModal3').modal('show');
        $('body,html').animate(
            {
                scrollTop: $('#portfolioThumb3').offset().top
            },
            1200
        );
    }

    if(window.location.href.indexOf('#SLAM') != -1) {
        $('#portfolioModal2').modal('show');
        $('body,html').animate(
            {
                scrollTop: $('#portfolioThumb2').offset().top
            },
            1200
        );
    }

    $('.modal').on('hidden.bs.modal', function(e)
    { 
        $(this).removeData();
    }) ;
    
    
    /* Onclicks */
    var prevDisabled = false;
    $('.btn-prev').on('click', function(event) {

        if(prevDisabled) {
            return;
        }
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

        //disable button on timeout
        prevDisabled = true;
        setTimeout(function(){
            prevDisabled = false;
        }, 500);
    });

    var nextDisabled = false;
    $('.btn-next').on('click', function(event) {

        if(nextDisabled) {
            return;
        }
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
        
        //disable button on timeout
        nextDisabled = true;
        setTimeout(function(){
            nextDisabled = false;
        }, 500);
    });
    
});