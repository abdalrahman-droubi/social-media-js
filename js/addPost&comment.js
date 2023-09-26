const userData = JSON.parse(localStorage.getItem("userData"));
const addPostForm = document.getElementById("addPostForm");
const pathname = location.pathname;
const [params1, isAddComment] = location.search.split("&");

const openPopup = () => {
  document.getElementById("popup").style.display = "flex";
};

const closePopup = () => {
  document.getElementById("popup").style.display = "none";
};

addPostForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const content = e.target.content.value;
  if (pathname === "/pages/post.html") {
    const newPost = await postData("posts", {
      userId: userData.id,
      body: content,
      title: title,
    });
    renderNewPost(newPost);
  } else if (pathname === "/pages/comment.html") {
    const newComment = await postData("comments", {
      email: userData.email,
      body: content,
      name: title,
      postId: postId,
    });
    renderNewComment(newComment);
  }
  closePopup(); 
  e.target.reset();
});

const renderNewPost = (newPost) => {
  const postElement = document.createElement("div");
  const vector = document.createElement("hr");
  postElement.classList.add("post");
  postElement.innerHTML = ` <div class="userInfoheader">
                               <div class = "userInfo">
                                 <img
                                 src="../assets/images/810-8105444_male-placeholder.png"
                                 alt=""
                                 width="28px"
                                 height="28px"
                               />
                               <div>
                                 <p>${userData.name}</p>
                                 <span>@${userData.username}</span>
                               </div>
                               </div>
                               <span class = "seeComment"><a href="../pages/comment.html?postId=${newPost.id}"> see comment</a></span>
                             </div>
                             <div class="postContant">
                             <h4>${newPost.title}</h4>
                             ${newPost.body}</div>
                             <div class="addComment" id="addComment">
                               <img src="../assets/icon/comment.svg" alt="" width="28px" height="28px" />
                               Add Comment...
                             </div>`;

  posts.prepend(vector);
  posts.prepend(postElement);
};

const renderNewComment = (newComment) => {
  const commentContainer = document.getElementById("commentContainer");
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");
  commentElement.innerHTML = ` 
                               <div class = "userInfoComment">
                                 <img
                                 src="../assets/images/810-8105444_male-placeholder.png"
                                 alt=""
                                 width="28px"
                                 height="28px"
                               />
                                 <span>${newComment.email}</span>
                               </div>
                             <div class="commentContant">
                             <h4>${newComment.name}</h4>   
                             ${newComment.body}
                             </div>`;
  commentContainer.prepend(commentElement);
};
isAddComment ? openPopup() : null;
