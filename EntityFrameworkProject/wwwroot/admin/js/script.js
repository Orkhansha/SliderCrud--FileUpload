
$(document).ready(function () {



    // HEADER




    $(document).on("click", ".on-off-btn", function () {

        console.log("ok")

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



    



    ////////////////////////////////////////////////////////////////




})