let burgerIsActive = () => {
    document.getElementById('Header').classList.toggle('isActive')
    document.getElementById('root').classList.toggle('lock')
}

let descriptionSplit = (n = 400) => {
    let elementList = document.querySelectorAll('.goodDescription')
    elementList.forEach((description) => {
        if(description.innerHTML.length > n) {
            let text = description.innerHTML.slice(0, n) + '...'
            description.replaceWith( document.createTextNode(text))
        }
    })
}

descriptionSplit()

let titleSplit = (n = 30) => {
    let elementsList = document.querySelectorAll('.goodTitle')
    elementsList.forEach((title) => {
        if(title.innerHTML.length > n) {
            let text = title.innerHTML.slice(0, n) + '...'
            title.replaceWith(document.createTextNode(text))
        }
    })
}

titleSplit()