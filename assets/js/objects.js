

//Krijimi i statuses objekt.
statuses = {
    1: 'Status 1',
    2: 'Status 2',
    3: 'Status 3',
    4: 'Status 4'
  };



//Krijimi i occupations objekt.
occupations = {
    1: 'Occupation 1',
    2: 'Occupation 2',
    3: 'Occupation 3',
    4: 'Occupation 4'
  };



//Shfaqja e te dhenave ne onclick function.
function createNewUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const status = document.getElementById('status').value;
  const occupation = document.getElementById('occupation').value;
  


//objekti ku shfaqen te dhenat.
const user = {
    name:name,
    email:email,
    status:statuses[status],  
    occupation:occupations[occupation]
  }
  


  const userHtml = renderHtml(user);
  document.getElementById('showUsers').appendChild(userHtml);
  
}



//Renderimi i html-it.
function renderHtml(user) {
userHtml = document.createElement('div');
userHtml.classList.add('card');
html = `
    <h4 class="card__h4">Name: <br>${user.name}</h4>
    <h4 class="card__h4">Email: <br>${user.email}</h4>
    <h4 class="card__h4">${user.status}</h4>
    <h4 class="card__h4">${user.occupation}</h4>
  `;
  userHtml.innerHTML = html;
  return userHtml;
}