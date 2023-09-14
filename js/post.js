const posts = document.getElementById("posts");
const isuserLogin = JSON.parse(localStorage.getItem("userData")) ? true : false;

const handlePostData = async () => {
  const postData = await fetchData("posts");
  const usersData = await fetchData("users");
  const usersDict = {};
  usersData.map((user) => {
    usersDict[user.id] = { name: user.name, username: user.username };
  });

  const postsWithUserData = postData.map((post) => ({
    ...post,
    user: {
      name: usersDict[post.userId].name,
      username: usersDict[post.userId].username,
    },
  }));
  renderPost(postsWithUserData);
};

const renderPost = (postsWithUserData) => {
  postsWithUserData.map((post) => {
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
                               <p>${post.user.name}</p>
                               <span>@${post.user.username}</span>
                             </div>
                             </div>
                             <span class = "seeComment"><a href="../pages/comment.html?postId=${post.id}"> see comment</a></span>
                           </div>
                           <div class="postContant">
                           <h4>${post.title}</h4>
                           ${post.body}</div>
                           <div class="addComment" id="addComment" >
                             <img src="../assets/icon/comment.svg" alt="" width="28px" height="28px" />
                             Add Comment...
                           </div>`;
    posts.appendChild(postElement);
    posts.appendChild(vector);
  });
};

isuserLogin ? handlePostData() : location.replace("../index.html");
