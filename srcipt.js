console.log("Hello World!")
console.log(document.body)
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.firstChild)

let cont = document.body.childNodes[1]
console.log(cont)

console.log(cont.lastElementChild)

cont.lastElementChild.style.color = "red"
cont.lastElementChild.style.backgroundColor="Green"
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[3])
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].nextSibling)



