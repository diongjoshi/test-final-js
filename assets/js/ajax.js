
const API = 'https://jsonplaceholder.typicode.com';



//Marrja e posteve
fetch(`${API}/posts`)
  .then(response => response.json())
  .then(posts=>{
        posts.forEach(post =>{
            let ceratedHtmlPost = renderPosts(post);
            document.getElementById('posts').appendChild(ceratedHtmlPost);
        });
  }).catch(error => console.error(error));



  // Renderimi i posteve
  function renderPosts(post) {
    const blogPost = document.createElement('div');
    blogPost.id = 'card-'+post.id;
   const html = `
                <h3>${post.title}</h3>
                <b>UserId: ${post.userId}</b>
                <p>${post.body}</p>
                <br>
                <button class="deleteBtn" onclick="deletePost(${post.id})">Delete This Post</button>
                <br>
                <h4 class="newPost">Update your post</h4>
                <input class="inputTitle" type="text" id="title-${post.id}" placeholder="title" value="${post.title}">
                <br>
                <input class="inputNumber" type="number" name="userId" id="userId-${post.id}" placeholder="user id" value="${post.userId}">
                <br>
                <textarea class="textArea" name="body" id="body-${post.id}" cols="30" rows="10">${post.body}</textarea>
                <br>
                <button class="updateBtn" onclick="updatePost(${post.id})">Update</button>
                <br>
                <button class="loadCmt" onclick="getComments(${post.id})">Load Comments</button>
                <hr>
              `;
    blogPost.innerHTML = html;
    return blogPost;          
}



//Insertimi i një posti
function insertPost() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const userId = document.getElementById('userId').value;

  const  data = {
    title:title,
    body:body,
    userId:userId
  }

  fetch(`${API}/posts`,{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  })
  .then(response => response.json())
  .then(post=>{
    let ceratedHtmlPost = renderPosts(post);
    document.getElementById('posts').appendChild(ceratedHtmlPost);
  }).catch(error => console.error(error));
}



// Delete Post funksioni
function  deletePost(id) {
   fetch(`${API}/posts/${id}`,{
     method:'DELETE',
   }).then(response => response.json())
   .then(post=>{
    document.getElementById('card-'+id).remove();
   })
}



//Update Post funksioni
function updatePost(id) {
  const title = document.getElementById('title-'+id).value;
  const body = document.getElementById('body-'+id).value;
  const userId = document.getElementById('userId-'+id).value;

  const data = {
    title:title,
    body:body,
    userId:userId
  }

  fetch(`${API}/posts/${id}`,{
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  })
  .then(response => response.json())
  .then(post=>{
     document.getElementById('card-'+id).getElementsByTagName('h3')[0].innerText = post.title;
     document.getElementById('card-'+id).getElementsByTagName('b')[0].innerText ='UserId: '+ post.userId;
     document.getElementById('card-'+id).getElementsByTagName('p')[0].innerText = post.body;
  }).catch(error => console.error(error));
}



//Marrja e komenteve
function getComments(id) {
    fetch(`${API}/posts/${id}/comments`)
    .then(response => response.json())
    .then(comments => {
      document.getElementById('comments').innerHTML = '';
      comments.forEach(comment => {
        let createComment = renderComments(comment);
        document.getElementById('comments').appendChild(createComment);
     });
    document.getElementById('modal').classList.add('active');
  })
  .catch(error => console.error(error));
}



//Renderimi i komenteve
function renderComments(comment) {
   const blogComment = document.createElement('div');
   blogComment.id = 'comment-item-'+comment.id;
  const html = `
    <h3>${comment.name}</h3>    
    <p>${comment.body}</p>
    <a href="mailto:${comment.email}">By: ${comment.email}</a>
    <p>------------------------------------------------</p>
  `;
  blogComment.innerHTML = html;
  return blogComment;
}



//Close button - mbyllja e komenteve
function closeModal() {
    document.getElementById('comments').innerHTML = '';
    document.getElementById('modal').classList.remove('active');
}


