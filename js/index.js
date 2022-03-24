const url = "https://api.github.com/users/"
const form = document.getElementById("github-form")
const userInput = document.getElementById("search")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  assembleFetch(userInput)
})

function assembleFetch(input){
  newUrl = `${url}${input.value}/repos`
  console.log(newUrl)
}