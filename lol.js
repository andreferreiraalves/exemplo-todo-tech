const btn = document.getElementById('botao');
const imagens = document.getElementById('lista');

btn.addEventListener('click', async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3');
    const dados = await response.json();

    console.log(dados);


    dados.forEach(dado => {
        const item = document.createElement('div');

        const imagem = document.createElement('img');
        imagem.src = dado.image;

        const nome = document.createElement('p');
        nome.innerText = dado.name

        item.appendChild(imagem)
        item.appendChild(nome);

        imagens.appendChild(item);
    });
})


// btn.addEventListener('click', () => {
//     fetch('https://rickandmortyapi.com/api/character/1,2,3')
//         .then(response => response.json())
//         .then(dados => {
//             console.log(dados)
//             dados.forEach(dado => {

//                 const item = document.createElement('div');

//                 const imagem = document.createElement('img');
//                 imagem.src = dado.image;

//                 const nome = document.createElement('p');
//                 nome.innerText = dado.name

//                 item.appendChild(imagem)
//                 item.appendChild(nome);

//                 imagens.appendChild(item);
//             });
//         })
// })