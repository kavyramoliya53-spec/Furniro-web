const blogPosts = [
    {
        id: 1,
        image: "image/person.jpg",
        Auxion: "Surf Auxion",
        date: "May 10, 2026",
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
    },

    {
        id: 2,
        image: "./image/person (3).jpg",
        Auxion: "Surf Auxion",
        date: "May 12, 2026",
        title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
    },

    {
        id: 3,
        image: "image/person (2).jpg",
        Auxion: "Surf Auxion",
        date: "May 15, 2026",
        title: "Sit nam congue feugiat nisl, mauris amet nisi.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.."
    }
];

const container = document.getElementById("blogContainer");

container.innerHTML = blogPosts.map(post => `

    
<div class="blog-card">

<img src="${post.image}" alt="">

<div class="blog-content">

<div class="date">
<i class="fa-light fa-pen-fancy"></i>
<div class="SurfAuxion">${post.Auxion}</div>

<i class="fa-regular fa-calendar"></i>
<div class="blog-date">${post.date}</div>
</div>

<div class="blog-title">${post.title}</div>

<div class="blog-desc">${post.desc}</div>

<a href="#" onclick="openBlog(${post.id})" class="read-more">Read More</a>

</div>
</div>
`).join("");


function viewBlog(item) {
    console.log(item);

    const blog_product = blog.find((index, pass) => item == pass)
    localStorage.setItem("blogDetail", JSON.stringify(blog_product));
    window.location.href = "single_blog.html";

}


