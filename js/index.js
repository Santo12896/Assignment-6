const lodeAllPost = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const postes = data.posts;
    displayPost(postes)
}

const displayPost = (postes) =>{
    // console.log(postes);
    const postContainer = document.getElementById('post-container');
    postes.forEach(post => {
        // console.log(post);
        const postCard = document.createElement('div');
        postCard.classList=` card `;
        postCard.innerHTML=`
            <div class="flex gap-4 p-10 border-2 border-teal-500 w-1/2 bg-slate-200 rounded-lg mb-4">
                <div>
                    <img class="w-20" src="${post.image}" alt="Movie" />
                </div>
                <div class=" ">
                    <div class="flex gap-6">
                        <h2># ${post.category}</h2>
                        <p>author: ${post.author.name}</p>
                    </div>
                    <h2 class="card-title ">${post.title}</h2>
                    <h2 >${post.description}</h2>
                    <h1>---------------------------------------------------</h1>
                    <div class="flex gap-6 items-center">
                        <div class="flex gap-3 items-center">
                            <i class="fa-regular fa-envelope"></i>
                            <p>${post.comment_count}</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <i class="fa-regular fa-clock"></i>
                            <p>${post.posted_time}</p>
                        </div>
                    </div>
                    <div class="text-end">
                        <button onclick="cardMessage()" class="btn btn-primary rounded-full text-lg"><i class="fa-solid fa-envelope-open-text"></i></button>
                    </div>
                </div>
            </div>    
        `;
        postContainer.appendChild(postCard);
    });


}

const cardMessage = () =>{
    console.log('card button');
    // lodeAllPost();
}

lodeAllPost();