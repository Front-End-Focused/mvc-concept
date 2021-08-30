const backButton = `<button type="button" id="back">Back</button>`
const home = `<h1>Welcome home!</h1>`;

const routes = {
    home,
    profile: `
    <div>
        ${backButton}
        <br /><br />
        <h1>Profile page!</h1>
    </div>
    `,
    settings: `<h1>Settings page!</h1>`,
    default: `<h1>Not found page!</h1>`,
}

const appRoot = document.getElementById('app')

document.addEventListener('click', (event) => {
    if (event.target.id === 'back') {
        window.history.back();
    }
})

window.addEventListener('hashchange', initRouting);

function initRouting() {
    const { hash } = window.location
    const pathname = hash.substring(1);
    
    appRoot.innerHTML = routes[pathname] || routes.default

    handleActiveLink(pathname)
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

initRouting()