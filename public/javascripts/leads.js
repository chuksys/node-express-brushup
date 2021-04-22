function deleteLead(id) {
    $.ajax({
        url: "/lead/" + id + "/delete-json",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({id}),
        type: "POST",
        success: (result  => {
            console.log("Result:", result);
            $( "#" + id ).remove();
        }),
        error: (err => {
            console.log("Error:", err)
        })
      });

}