const backButton = `<button type="button" id="back">Back</button>`;
const home = `<h1>Welcome Home!</h1>`;


const routes = {
    home,
    profile: {
        component: `
<div>
    ${backButton}
    <br><br>
    <h1>Profile Page!</h1>
</div>
`
    },
    settings: {
        component: `<h1>Setting Page!</h1>`
    },
    default: home
}



window.addEventListener('hashchange', initRouting);

const appRoot = document.getElementById('app');

document.addEventListener('click', (event) => {
    if (event.target.id === 'back') {
        if (window.history.length > 2) {
            window.history.back()
        } else {
            alert('Нет истории')
        }
    }
})

function initRouting() {
    const {hash} = window.location;
    const pathname = hash.substring(1);
    console.log(pathname);
    appRoot.innerHTML = routes[pathname].component || routes.default;
    let name = pathname.split('')
    name[0] = name[0].toUpperCase();
    document.title = name.join('');
    activeLink((pathname))
}



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
    document.title = currentPath.charAt(1).toUpperCase() + currentPath.substring(1)
}


