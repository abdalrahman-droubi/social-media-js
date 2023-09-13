const postId = location.search.slice().split("=")[1];
const post = document.getElementById("post");
const userLogin = JSON.parse(localStorage.getItem("userData")) ? true : false;

const handleCommentData = async () => {
  const commentData = await fetchData(`comments?postId=${postId}`);
  const postData = await fetchData(`posts/${postId}`);
  const userData = await fetchData(`users/${postData.userId}`);
  renderPost(userData, postData);
  renderComment(commentData);
};
const renderPost = (userData, postData) => {
  post.innerHTML = `        <div class = "post">     
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
                           <div class="postContant">
                           <h4>${postData.title}</h4>
                           ${postData.body}</div>
                           <div class="addComment" id="addComment">
                           <img src="../assets/icon/comment.svg" alt="" width="28px" height="28px" />
                           Add Comment...
                         </div>
                           
                           </div>
                           <hr>
                           <div class="commentContainer" id="commentContainer">
                           </div>`;
};

const renderComment = (commentData) => {
  const commentContainer = document.getElementById("commentContainer");
  console.log(commentContainer);
  commentData.map((comment, index) => {
    const commentElement = document.createElement("div");
    const vector = document.createElement("hr");
    commentElement.classList.add("post");
    commentElement.innerHTML = ` 
                               <div class = "userInfo">
                                 <img
                                 src="../assets/images/810-8105444_male-placeholder.png"
                                 alt=""
                                 width="28px"
                                 height="28px"
                               />
                               <div>
                                 <p></p>
                                 <span>${comment.email}</span>
                               </div>
                               </div>
                             <div class="commentContant">
                             <h4>${comment.name}</h4>   
                             ${comment.body}
                             </div>`;
    commentContainer.appendChild(commentElement);
    // commentContainer.appendChild(vector);
  });
};

userLogin ? handleCommentData() : location.replace("../index.html");
