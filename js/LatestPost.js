const latestPost = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const latestPosts = data;
    displayLatestPost(latestPosts);
   
}

const displayLatestPost = (latestPosts) =>{
    // console.log(latestPosts);
    const latestPostContainer = document.getElementById('Latest-post-container');

    latestPosts.forEach(latest => {
        console.log(latest);
        const latestPostCard = document.createElement('div');
        latestPostCard.classList = `card bg-base-100 w-96 shadow-xl`;
        latestPostCard.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${latest.cover_image}"alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body  ">
                <div class="flex items-center gap-3 text-[#94a3b8]">
                    <i class="fa-regular fa-calendar-check"></i>
                    <p>${latest.author.posted_date}</p>
                </div>
                <h2 class="card-title">${latest.title}</h2>
                <p>${latest.description}</p>
                <div class="card-actions items-center mt-3">
                    <img src="${latest. profile_image}" class="w-10 h-10 rounded-full"/>
                    <p class="text-base font-semibold">${latest.author.name}</p>
                </div>
            </div>
        ` 
        latestPostContainer.appendChild(latestPostCard);
    });
    
}
latestPost();