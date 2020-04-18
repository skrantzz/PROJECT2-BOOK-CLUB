$(document).ready(function() {
    var weekid = $("#week-id").val();
    $.ajax({
        url:"/api/comments/"+weekid,
        method: "GET", 
        success: function(comments) {
            $.each(comments, function (index, comment){
                addComment(comment);
            });
        }
    });
    $("#post-discussion-btn").click(function (event) {
        event.preventDefault();
        var firstName = $("#first-name").val();

        var comment = $("#comment").val();
        var weekid = $("#week-id").val();
        
        $.ajax({
            url:"/api/comments/"+weekid,
            method: "POST", 
            data:{
                posterName:firstName,
                body: comment,
            },
            success: function(newComment){
                addComment(newComment);
            }
        });
    });
});
function addComment(comment) {
    var $card = $("<div>");
    $card.addClass("card");
   
    var $cardContent = $("<div>");
    $cardContent.addClass("card-content");

    var $cardTitle = $("<span>");
    $cardTitle.addClass("card-title");
    $cardTitle.text(comment.posterName);
    $cardContent.append($cardTitle);

    var $cardBody = $("<p>");
    $cardBody.text(comment.body);
    $cardContent.append($cardBody);
    $card.html($cardContent);
    $("#comment-cards").prepend($card);
}


