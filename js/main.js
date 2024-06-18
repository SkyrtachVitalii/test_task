const currentData = new Date();
const dataPost = document.getElementById("dataPost");
dataPost.innerText = String(`${currentData.getDate() - 5}.${currentData.getMonth()}.${currentData.getFullYear()}`);
