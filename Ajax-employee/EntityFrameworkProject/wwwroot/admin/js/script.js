const { log } = require("console");

$(document).ready(function () {





    ////////////////////////////////////////////////////////////////

    $(document).on("click", ".on-off-btn", function () {

        let empId = parseInt($(this).closest(".employee-item").children(0).val());

        let data = { id: empId };


        $.ajax({
            /* url: `/product/loadmore?skip=${skipCount}`,*/
            url: "/adminarea/employee/setstatus",
            type: "POST",
            data: data
            success: function (res) {

            }
        })

    });

   

})