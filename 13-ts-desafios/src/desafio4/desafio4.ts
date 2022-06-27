// Desafio TypeScript 4 - Em andamento...

type TmdbResultObj = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

type TmdbObj = {
    page: number,
    results: TmdbResultObj[],
    totalPages: number,
    totalResults: number
}

type RequestTokenObj = {
    success: boolean,
    expires_at: string,
    request_token: string
}

type GenreObj = {
    id: number,
    name: string
}

/* ****************** */
// remover antes de commitar
// lembretes
// 1 - lembrar de configurar dotenv
// 2 - colocar tudo em inglês
let apiKey: string = "";
let requestToken: string;
let username: string = "";
let password: string = "";
//let sessionId: number;
//let listId = '';
/* ****************** */

const loginButton = document.getElementById('login-button') as HTMLButtonElement;
const searchButton = document.getElementById('search-button') as HTMLButtonElement;
const searchContainer = document.getElementById('search-container') as HTMLDivElement;
const apiKeyInput = document.getElementById("api-key") as HTMLInputElement;
const searchInput = document.getElementById("search") as HTMLInputElement;
const lista = document.getElementById("lista") as HTMLUListElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;


function validateLoginButton(): void {
    loginButton.disabled = false;

    if (!username || !password || !apiKey)
        loginButton.disabled = true;
}

class HttpClient {
    static async get({ url, method, body }) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(method, url, true);

            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    })
                }
            }
            request.onerror = () => {
                reject({
                    status: request.status,
                    statusText: request.statusText
                })
            }

            if (body) {
                request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                body = JSON.stringify(body);
            }
            request.send(body);
        });
    }
}

async function procurarFilme(query: string, page: number = 1): Promise<TmdbObj> {
    query = encodeURI(query);
    console.log(query)

    let result: TmdbObj = await HttpClient.get({
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&query=${query}`,
        method: "GET",
        body: null
    }) as TmdbObj;

    return result;
}

async function adicionarFilme(filmeId) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
        method: "GET",
        body: null
    });

    console.log(result);
}

async function criarRequestToken(): Promise<boolean> {
    console.log("- Get Request Token");

    try {
        let result = await HttpClient.get({
            url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
            method: "GET",
            body: null
        }) as RequestTokenObj;

        requestToken = result.request_token;
        console.log(typeof result);
    }
    catch (error) {
        console.log(error);
        return false;
    }

    return true;
}

async function logar(): Promise<boolean> {
    console.log("- Validate Request Token with user/passwd");
    let result: any; //estudar melhor forma.

    try {
        result = await HttpClient.get({
            url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
            method: "POST",
            body: {
                "username": `${username}`,
                "password": `${password}`,
                "request_token": `${requestToken}`
            }
        });

        if (!result.success)
            alert(`Error Code: ${result.status_code} \nMessage: ${result.status_message}`)
    }
    catch (error) {
        alert(error);
        console.log(error);
    } finally {
        return result.success;
    }
}

async function criarSessao(): Promise<boolean> {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
        method: "GET",
        body: null
    });

    sessionId = result.session_id;
}

async function criarLista(nomeDaLista, descricao) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
        method: "POST",
        body: {
            name: nomeDaLista,
            description: descricao,
            language: "pt-br"
        }
    })
    console.log(result);
}

async function adicionarFilmeNaLista(filmeId, listaId) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
        method: "POST",
        body: {
            media_id: filmeId
        }
    })
    console.log(result);
}

async function pegarLista() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
        method: "GET",
        body: null
    })
    console.log(result);
}

async function loadGenresList(): Promise<GenreObj[]> {
    console.log("- Load Genres List");

    try {
        let result = await HttpClient.get({
            url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`,
            method: "GET",
            body: null
        }) as GenreObj[];

        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
        return [];
    }
};


loginButton.addEventListener('click', async () => {
    if (!await criarRequestToken()) {
        alert("Não foi possível recuperar token, valide os dados de login!");
    }

    //await logar();
    //await criarSessao();
});

searchButton.addEventListener('click', async () => {
    let query = searchInput.value;

    console.log("Query:", query);
    console.log("API Key:", apiKey);

    if (!apiKey) {
        alert("Campo 'API Key' deve ser informado.");

        return;
    }

    if (!query) {
        alert("Campo 'Palavra-chave' deve ser informado.");
        return;
    }

    lista.innerHTML = "";

    let moviesList: TmdbObj = await procurarFilme(query);
    console.log(moviesList);

    for (const item of moviesList.results) {
        let listItem = document.createElement('li') as HTMLLIElement;
        listItem.appendChild(document.createTextNode(item.original_title));

        lista.appendChild(listItem);
    }

    searchContainer.appendChild(lista);
})

usernameInput.addEventListener("change", () => {
    username = usernameInput.value;
    console.log("Username:", username);
    validateLoginButton();
});

passwordInput.addEventListener("change", () => {
    password = passwordInput.value;
    console.log("Password:", password);
    //validateLoginButton();
});

apiKeyInput.addEventListener("change", () => {
    apiKey = apiKeyInput.value;
    console.log("API Key:", apiKey);
    //validateLoginButton();
});
