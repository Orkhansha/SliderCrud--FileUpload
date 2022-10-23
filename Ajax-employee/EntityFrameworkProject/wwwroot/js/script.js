const { log } = require("console");

$(document).ready(function () {



    // HEADER

    //load more
    $(document).on("click", ".show-more button", function () {

        let parent = $("#parent-products");

        let skipCount = $("#parent-products").children().length;

        let productCount = $("#product-count").val();


        $.ajax({
            /* url: `/product/loadmore?skip=${skipCount}`,*/
            url: "/product/loadmore",
            type: "Get",
            data: {
                skip: skipCount
            },
            success: function (res) {

                $(parent).append(res);
                skipCount = $("#parent-products").children().length;

                if (skipCount >= productCount) {
                    $(".show-more button").addClass("d-none");
                }
            }
        })

    });


    $(document).on("click", ".add-to-cart", function () {

        let productId = parseInt($(this).closest(".product-item").children(0).val());

        let data = { id: productId };

     

        $.ajax({
            url: "/home/addbasket",
            type: "POST",
            data: data,
            contentType: "application/x-www-form-urlencoded",
            success: function (res) {

                Swal.fire(
                    'Good job!',
                    'Product added',
                    'success'
                )



            }
        })

    });



    $(document).on('click', '#search', function () {
        $(this).next().toggle();
    })

    $(document).on('click', '#mobile-navbar-close', function () {
        $(this).parent().removeClass("active");

    })
    $(document).on('click', '#mobile-navbar-show', function () {
        $('.mobile-navbar').addClass("active");

    })

    $(document).on('click', '.mobile-navbar ul li a', function () {
        if ($(this).children('i').hasClass('fa-caret-right')) {
            $(this).children('i').removeClass('fa-caret-right').addClass('fa-sort-down')
        }
        else {
            $(this).children('i').removeClass('fa-sort-down').addClass('fa-caret-right')
        }
        $(this).parent().next().slideToggle();
    })

    // SLIDER

    $(document).ready(function(){
        $(".slider").owlCarousel(
            {
                items: 1,
                loop: true,
                autoplay: true
            }
        );
      });

    // PRODUCT

    $(document).on('click', '.categories', function(e)
    {
        e.preventDefault();
        $(this).next().next().slideToggle();
    })

    $(document).on('click', '.category li a', function (e) {
        e.preventDefault();
        let category = $(this).attr('data-id');
        let products = $('.product-item');
        
        products.each(function () {
            if(category == $(this).attr('data-id'))
            {
                $(this).parent().fadeIn();
            }
            else
            {
                $(this).parent().hide();
            }
        })
        if(category == 'all')
        {
            products.parent().fadeIn();
        }
    })

    // ACCORDION 

    $(document).on('click', '.question', function()
    {   
       $(this).siblings('.question').children('i').removeClass('fa-minus').addClass('fa-plus');
       $(this).siblings('.answer').not($(this).next()).slideUp();
       $(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
       $(this).next().slideToggle();
       $(this).siblings('.active').removeClass('active');
       $(this).toggleClass('active');
    })

    // TAB

    $(document).on('click', 'ul li', function()
    {   
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        let dataId = $(this).attr('data-id');
        $(this).parent().next().children('p.active').removeClass('active');

        $(this).parent().next().children('p').each(function()
        {
            if(dataId == $(this).attr('data-id'))
            {
                $(this).addClass('active')
            }
        })
    })

    $(document).on('click', '.tab4 ul li', function()
    {   
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        let dataId = $(this).attr('data-id');
        $(this).parent().parent().next().children().children('p.active').removeClass('active');

        $(this).parent().parent().next().children().children('p').each(function()
        {
            if(dataId == $(this).attr('data-id'))
            {
                $(this).addClass('active')
            }
        })
    })

    // INSTAGRAM

    $(document).ready(function(){
        $(".instagram").owlCarousel(
            {
                items: 4,
                loop: true,
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                }
            }
        );
      });

      $(document).ready(function(){
        $(".say").owlCarousel(
            {
                items: 1,
                loop: true,
                autoplay: true
            }
        );
      });



    ////////////////////////////////////////////////////////////////

    $(document).on("click", ".on-off-btn", function () {

        let empId = parseInt($(this).closest(".employee-item").children(0).val());

        let data = { id: empId };

        console.log(empId)





        //$.ajax({
        //    /* url: `/product/loadmore?skip=${skipCount}`,*/
        //    url: "/adminarea/employee/setstatus",
        //    type: "POST",
        //    data: data
        //    success: function (res) {

        //    }
        //})

    });

   

})