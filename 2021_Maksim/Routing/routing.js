
const backButton = `<button type="button" id="back">Back</button`

const home = ` <h1>Welcome home </h1>`

const routes = {
    home,

    profile:
        ` <div>
            ${backButton}
            <br /><br />
            <h1>profile page</h1>
        </div>`,
    setting:
        `<h1>setting page</h1>`,
    default: home

}

const appRoot = document.getElementById('app')

document.addEventListener('click', (event) => {
    if (event.target.id === 'back') {
        if (window.history.length != 2) {
            window.history.back();
        }

        else alert("Истории нет ")
    }
})

window.addEventListener('hashchange', initRouting)

function initRouting() {
    const { hash } = window.location
    const pathname = hash.substring(1)

    if (routes[pathname] || pathname === "") {
        appRoot.innerHTML = routes[pathname] || routes.default
    }
    else appRoot.innerHTML = `"${pathname}" page not found!`
    handleActiveLink(pathname)
    getTitle(pathname)
}

function handleActiveLink(currentPath) {
    const currentlyActive = document.querySelector('.link.is-active')
    const currentElement = document.getElementById(currentPath)

    if (currentlyActive) {
        currentlyActive.classList.remove('is-active')
    }
    if (currentElement) {
        currentElement.classList.add('is-active')
    }
}

function getTitle(str) {
    document.title = str[0].toUpperCase() + str.slice(1);
}



initRouting()
