let backButton = `<button type="button" id="back">Back</button>`
const home = `<h1>Welcome home!</h1>`;

const profileWithoutBtnBack= `<div><h1>Profile page!</h1></div>`
const profileWithBtnBack = `${backButton}
               <div>
                    <br />
                    <h1>Profile page!</h1>
                </div>`


const routes = {
    home,
    profile: '',
    settings: `<h1>Settings page!</h1>`,
    default: '',
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

    if (pathname === 'profile') {
        changeVisibilityBtnBack()
    } 
    changeTitleDocument(pathname || 'Роутинг')
    
    appRoot.innerHTML = routes[pathname] || renderDefaultPage(pathname)
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

function changeVisibilityBtnBack() {
    return routes.profile = window.history.length > 2 ? profileWithBtnBack : profileWithoutBtnBack
}

function renderDefaultPage(pathname) {
    return !pathname ? home : `<h1>Page: "${pathname}" not found!</h1>`
}

function changeTitleDocument(pathname) {
    return document.title = pathname[0].toUpperCase() + pathname.slice(1);
}


// проверка кнопки back
// вернуть 'page "name" не найдена'
// изменить title

