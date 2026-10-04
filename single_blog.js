
    const blogContainer = document.getElementById("singleBlog");

    // ✅ Get data from localStorage
    const blogData = JSON.parse(localStorage.getItem("blogData"));

    // ✅ Convert into array (so we can use map)
    const blogArray = [blogData];

    // ✅ Display using map
    blogContainer.innerHTML = blogArray.map(item => `
        <img src="${item.photo}" alt="" class="single-img">

        <div class="date">
            <i class="fa-light fa-pen-fancy" style="color: rgb(255, 212, 59);"></i>
            <p>${item.writer}</p>

            <i class="fa-regular fa-calendar" style="color: rgb(255, 212, 59);"></i>
            <p>${item.publishDate}</p>
        </div>

        <div class="blog-title">
            <p>${item.heading}</p>
        </div>

        <div class="blog-desc">
            <p>${item.details}</p>
        </div>

        <div class="blog-text">
            ${item.fullText}
        </div>
    `).join("");
