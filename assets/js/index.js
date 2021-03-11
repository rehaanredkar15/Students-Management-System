
$("#add_user").submit(function (event) {
   
    alert("DATA saved");
});

$('#update_user').submit(function (event) {

    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function (n,) {
        
        data[n['name']] = n['value']
    })
    console.log(data);

    var request = {
        
        'url':`http://localhost:1011/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        
        alert("Data Uploaded Sucessfully");
    })
});
    
if (window.location.pathname == "/")
{
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
         
        var id = $(this).attr("data-id");

         var request = {
        
        'url':`http://localhost:1011/api/users/${id}`,
        "method": "DELETE"
        }
        
        if (confirm("Are you sure you want to delete"))
        {
            $.ajax(request).done(function (response) {
                
                alert("Data is deleted sucessfullY");
                location.reload();
            })
            }
    })
    

}
