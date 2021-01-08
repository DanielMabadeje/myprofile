var blog = {};
const api_url='http://localhost/myprofilebackend/api/posts';
blog.fetchblog = function () {
    $.ajax({
        url: api_url,
        type:'get',
        // data: {method: 'fetch'},
        success: function(data) {
            // console.log(data);
            // $('.blog-item .blog').html(data);
            // data.posts.
var blogs =data.message.posts;
console.log(blogs);
var html=``

blogs.forEach((blogpost) => {
    html +=`<a href="#" class="post md-opjjpmhoiojifppkkcdabiobhakljdgm_doc">
    <div class="container ">
        <div class="col-md-8 col-md-offset-2 post-inner mx-auto">
            <h2 class="post-title">${blogpost.title}</h2>
            <p>${blogpost.body}</p>
            <div class="blog-info">Posted <span>${blogpost.created_at}</span> by Daniel Mabadeje</div>
        </div>
    </div>
    <img class="blog-preview" src="${blogpost.file}" alt="">
</a>
<div class="line col-md-4 col-md-offset-4 mx-auto"></div>`
}); 
         
            document.getElementById('allblogs').innerHTML=html;
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

// blog.interval = setInterval(chat.fetchmessage, 8000);
blog.fetchblog();

