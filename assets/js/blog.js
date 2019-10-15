var blog = {};

blog.fetchblog = function () {
    $.ajax({
        url: 'api.myprofile.com/api/blogs/all',
        type:'get',
        data: {method: 'fetch'},
        success: function(data) {
            $('.blog-item .blog').html(data);
        }
    });
};

// chat.throwMessage =function(message) {
//     if($.trim(message).length !=0){
//         $.ajax({
//             url: 'ajax/chat.php',
//             type:'get',
//             data: {method: 'throw', message:message},
//             success: function(data) {
//                 $('.chat .messages').html(data);
//                 chat.fetchmessage();
//                 chat.entry.val('');
//             }
//         });
//     }
// };

blog.interval = setInterval(chat.fetchmessage, 8000);
blog.fetchblog();

