const backButton = `<button type="button" id="back">Back</button>`
const home = `<h1>Welcome home!</h1>`

const routes = {
    home,
    profile: `
    <div>
    ${backButton}
    <h1>Profile page!</h1>
    </div>`,
    settings: `<h1>Settings page!</h1>`,
    default: home
}

const appRoot = document.getElementById('app')


document.addEventListener('click', (event) => {
    if (event.target.id === 'back') {
        if (window.history.length > 2) {
            window.history.back()
        } else {
            alert('Нет истории')
        }
    }
})



window.addEventListener('hashchange', initRouting)

function initRouting() {
    const { hash } = window.location
    const pathname = hash.substring(1)
    if (routes[pathname] || pathname === "") {
        appRoot.innerHTML = routes[pathname] || routes.default
    } else {
        appRoot.innerHTML = `"${pathname}" page not found!`
    }
    if (pathname) {
        activeLink(pathname)
        title(pathname)
    }
}


// document.querySelector('nav').addEventListener('click', function (event) {
//     let a = document.querySelector('.is-active')
//     a.classList.remove('is-active')
//     let act = event.target;
//     act.classList.add('is-active')

// })

function activeLink(currentPath) {
    const currentElement = document.getElementById(currentPath)
    const currentlyActive = document.querySelector('.link.is-active')

    if (currentlyActive) {
        currentlyActive.classList.remove('is-active')
    }

    if (currentElement) {
        currentElement.classList.add('is-active')
    }
}

function title(currentPath) {
    document.title = currentPath[0].toString().toUpperCase() + currentPath.substring(1)
}

initRouting()


