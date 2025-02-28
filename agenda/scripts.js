let militares = JSON.parse(localStorage.getItem('militares')) || [
    // Diretoria Geral
    { nome: 'Diretor DGPM', telefone: '4827', pin: '4827', secao: 'diretoria' },
    { nome: 'Chefe DGPM', telefone: '2874', pin: '2874', secao: 'diretoria' },

    // 1ª Seção
   // { nome: '1º Sgt - Cel Mariano', telefone: '2874', pin: '', secao: '1-secao' },
   { nome: 'Cel Tostes - Chefe', telefone: '2874', pin: '', secao: '1-secao' }, //sem pin
   { nome: 'TC Carlos Humberto - Adj QAE', telefone: '2876', pin: '4002', secao: '1-secao' },
   { nome: 'St Lourenço - Adj QAE', telefone: '2875', pin: '7501', secao: '1-secao' },
   { nome: 'Cel Monteiro Barros - Aux QAM', telefone: '2877', pin: '1023', secao: '1-secao' },
   { nome: 'Cap Costa Filho - Aux QAM', telefone: '2881', pin: '8834', secao: '1-secao' },
   { nome: '2° Ten Liliane - Aux QAM', telefone: '2879', pin: '8304', secao: '1-secao' },
   { nome: 'St Claudemir - Aux QAM', telefone: '2878', pin: '2075', secao: '1-secao' },
   { nome: 'St Rosso - Aux QAM', telefone: '2879', pin: '', secao: '1-secao' }, //sem pin
   { nome: 'Cb Apolinario - Aux QAM', telefone: '2880', pin: '2426', secao: '1-secao' },
   { nome: 'Sd Edgar - Aux QAM', telefone: '2880', pin: '', secao: '1-secao' }, //sem pin
   { nome: 'Cb Bruno Silva - Secretaria', telefone: '2882', pin: '7671', secao: '1-secao' },
  


    // 2ª Seção
   // { nome: '2º Sgt - Cel Baretta', telefone: '2878', pin: '', secao: '2-secao' },
    { nome: 'Cel Capeleto - Chefe', telefone: '2883', pin: '', secao: '2-secao' }, // Sem pin
    { nome: 'Cel Oliveira - Adj QAO e OTT', telefone: '2884', pin: '7470', secao: '2-secao' },
    { nome: 'Cap Rudimar - Adj QAO e OTT', telefone: '2884', pin: '9562', secao: '2-secao' },
    { nome: 'Cap Reinaldo - Adj QAO e OTT', telefone: '2884', pin: '8486', secao: '2-secao' },
    { nome: '1° Ten Joel - Adj QAO e OTT', telefone: '2884', pin: '4744', secao: '2-secao' },
    { nome: 'St Clodoaldo - Adj QAO e OTT', telefone: '2884', pin: '3987', secao: '2-secao' },
    { nome: 'Cb Albuquerque - Secretaria', telefone: '2884', pin: '9983', secao: '2-secao' },
    { nome: 'Sd Bruno - Secretaria', telefone: '2884', pin: '6156', secao: '2-secao' },
    { nome: 'TC Thomaz - Adj CPS', telefone: '2885', pin: '7619', secao: '2-secao' },
    { nome: 'Cap Walker - Contencioso', telefone: '2886', pin: '5654', secao: '2-secao' },
    { nome: '2º Ten Silvio Lopes - Contencioso', telefone: '8770', pin: '', secao: '2-secao' },
    { nome: '1° Ten Anger - Contencioso', telefone: '2886', pin: '1746', secao: '2-secao' },
    { nome: 'St Jarderson - Contencioso', telefone: '2886', pin: '1693', secao: '2-secao' },
    { nome: '2° Sgt Gomes - Contencioso', telefone: '2886', pin: '1720', secao: '2-secao' },
    { nome: 'Sd Gomes - Contencioso', telefone: '2886', pin: '2011', secao: '2-secao' },
    // { nome: 'Secretaria', telefone: '2887', pin: '', secao: '2-secao' }, tem que rever de novo na segunda
    { nome: 'Cap Rocha - Sala da CPS', telefone: '2888', pin: '5856', secao: '2-secao' },
    { nome: '2º Ten R Martins - Sala da CPS', telefone: '2888', pin: '', secao: '2-secao' },// Sem pin
    { nome: 'St Flavio - Sala da CPS', telefone: '2888', pin: '1325', secao: '2-secao' },
    { nome: '1º Sgt Siconelli - Sala da CPS', telefone: '2888', pin: '9975', secao: '2-secao' },

    // 3ª Seção
   // { nome: '3º Sgt - Cel Baretta', telefone: '2878', pin: '2878', secao: '3-secao' },
    { nome: 'Cel Nakamura - Chefe', telefone: '2889', pin: '', secao: '3-secao' }, //sem pin
    { nome: 'TC Meyrenice - Processamento', telefone: '2890', pin: '9357', secao: '3-secao' },
    { nome: 'Cap Arnaldo - Processamento', telefone: '2890', pin: '1356', secao: '3-secao' },
    { nome: '2º Ten Andre Luiz - Produtos', telefone: '2891', pin: '2217', secao: '3-secao' },
    { nome: 'Cb Torrão - Produtos', telefone: '2891', pin: '7766', secao: '3-secao' },
    { nome: 'Cb Santana - Produtos', telefone: '2891', pin: '', secao: '3-secao' }, //sem pin
    { nome: 'Cel Rafael - Análise', telefone: '2892', pin: '6596', secao: '3-secao' },
    { nome: '1° Ten Gabrielli - Análise', telefone: '2892', pin: '4193', secao: '3-secao' },
    { nome: '1º Ten Carolina Vinhas	 - Análise', telefone: '2892', pin: '3646', secao: '3-secao' },
    { nome: '1º Ten Brito - Análise', telefone: '2892', pin: '5548', secao: '3-secao' },
    { nome: '2º Ten A Moreira - Análise', telefone: '2892', pin: '5697', secao: '3-secao' },
    { nome: 'Sd Ithalo - Protocolo', telefone: '2893', pin: '6091', secao: '3-secao' },

    // 4ª Seção
  //  { nome: '4º Sgt - TC Petrônio', telefone: '2884', pin: '', secao: '4-secao' },
    { nome: 'Cel Felipe Barros - Chefe', telefone: '2894', pin: '', secao: '4-secao' }, //sem pin
    { nome: 'TC Vitor - Adj RIP', telefone: '2895', pin: '8250', secao: '4-secao' },
    { nome: 'Cap Tonin - Aux RIP ', telefone: '2896', pin: '1228', secao: '4-secao' },
    { nome: 'Cap Lazaro - Aux RIP ', telefone: '2896', pin: '1777', secao: '4-secao' },
    { nome: '1° Sgt Pacheco - Aux RIP ', telefone: '2896', pin: '6449', secao: '4-secao' },
    { nome: '2° Sgt Barros - Aux RIP ', telefone: '2896', pin: '7864', secao: '4-secao' },
    { nome: 'Maj Murilo - Adj FVM', telefone: '2897', pin: '9961', secao: '4-secao' },
    { nome: 'Cap Elaor - Aux FVM', telefone: '2898', pin: '7135', secao: '4-secao' },
    { nome: 'St de Castro - Aux FVM', telefone: '2898', pin: '9300', secao: '4-secao' },
    { nome: 'St José Roberto - Aux FVM', telefone: '2898', pin: '9300', secao: '4-secao' },//Sem pin
    { nome: '2° Sgt Martins - Aux FVM', telefone: '2898', pin: '', secao: '4-secao' },// sem pin
    { nome: 'Cap Paulo Rocha - Adj seleção', telefone: '2899', pin: '8375', secao: '4-secao' },
    { nome: '3° Sgt Maninho - Aux seleção', telefone: '2900', pin: '1238', secao: '4-secao' },
    { nome: 'Sc Glaucius - Aux seleção', telefone: '2900', pin: '2480', secao: '4-secao' },
    { nome: 'Cb Lourenço - Protocolo', telefone: '2901', pin: '7501', secao: '4-secao' },
    { nome: 'Cb Vieira - Protocolo', telefone: '2901', pin: '4146', secao: '4-secao' },

    //Base Ap As Jura
     { nome: 'Maj Novak - Chefe', telefone: '2902', pin: '5038', secao: 'base-ap-as-jura' },
     { nome: '1° Ten Falcão - Adj e Aux', telefone: '2903', pin: '2126', secao: 'base-ap-as-jura' }, 
     { nome: '2° Ten Kairala - Adj e Aux', telefone: '2903', pin: '4940', secao: 'base-ap-as-jura' }, 
     { nome: '2° Ten Anderson Lima - Adj e Aux', telefone: '2903', pin: '9170', secao: 'base-ap-as-jura' }, 
     { nome: 'St Estanislau - Adj e Aux', telefone: '2903', pin: '6499', secao: 'base-ap-as-jura' }, 
     { nome: 'St Marcio Ribeiro Adj e Aux', telefone: '2903', pin: '4997', secao: 'base-ap-as-jura' }, 
     { nome: 'Sd do Anjos - Adj e Aux', telefone: '2903', pin: '', secao: 'base-ap-as-jura' },//sem pin
     { nome: 'Sc Walter - Adj e Aux', telefone: '2903', pin: '2064', secao: 'base-ap-as-jura' }, 
     

    //APG
    { nome: 'Cel Pontes - Chefe', telefone: '2904', pin: '2675', secao: 'apg' },
    { nome: 'Cap Edson - Assessoria', telefone: '2905', pin: '9334', secao: 'apg' },
    { nome: '2° Ten Jessica Rocha- Assessoria', telefone: '2905', pin: '1530', secao: 'apg' },
    { nome: 'St Marcos - Assessoria', telefone: '2905', pin: '', secao: 'apg' },//sem pin
    { nome: 'St Rabelo - Assessoria', telefone: '2905', pin: '', secao: 'apg' },//sem pin
    { nome: '2° Sgt Itamar - Protocolo', telefone: '2906', pin: '3624', secao: 'apg' },
    { nome: 'Cb Torres - Protocolo', telefone: '2906', pin: '8803', secao: 'apg' },

    //informatica
    { nome: '1° Ten Lago - Chefe', telefone: '2913', pin: '5358', secao: 'informatica' },
    { nome: '1° Ten Lago - Análise', telefone: '2913', pin: '5358', secao: 'informatica' },
    { nome: '2° Ten Giovani - Desenvolvimento', telefone: '2915', pin: '9062', secao: 'informatica' },
    { nome: '2° Ten Bruno Reis - Desenvolvimento', telefone: '2915', pin: '8202', secao: 'informatica' },
    { nome: '3° Sgt Castro - Desenvolvimento', telefone: '2915', pin: '3598', secao: 'informatica' },
    { nome: 'Cb Kevin - Desenvolvimento', telefone: '2915', pin: '8226', secao: 'informatica' },
    { nome: 'Sd Fagundes - Desenvolvimento', telefone: '2915', pin: '7775', secao: 'informatica' },
    { nome: '2° Ten Soares - Suporte', telefone: '2916', pin: '6980', secao: 'informatica' },
    { nome: '3° Sgt A.Vidal - Suporte', telefone: '2916', pin: '1059', secao: 'informatica' },
    { nome: '3° Sgt Diego - Suporte', telefone: '2916', pin: '4714', secao: 'informatica' },
    { nome: '3° Sgt Isabelly - Suporte', telefone: '2916', pin: '9581', secao: 'informatica' },

    

    //Ajudancia
    { nome: '1° Ten Costa Silva - Chefe', telefone: '2907', pin: '4476', secao: 'ajg' },
    { nome: '2° Sgt Cavalcanti - Auxiliares', telefone: '2908', pin: '3992', secao: 'ajg' },
    { nome: 'Cb Freire - Auxiliares', telefone: '2908', pin: '6176', secao: 'ajg' },
    { nome: '1° Sgt Vilas Boas - Patrimônio', telefone: '2909', pin: '9674', secao: 'ajg' },
    { nome: 'Sc Helenise - Patrimônio', telefone: '2909', pin: '6915', secao: 'ajg' },
    { nome: '2° Ten Poliany - Material', telefone: '2910', pin: '2192', secao: 'ajg' },
    { nome: '2° Sgt Cloves - Material', telefone: '2910', pin: '4266', secao: 'ajg' },
    { nome: '2° Sgt Silva - Pagamento', telefone: '2911', pin: '6846', secao: 'ajg' },
    { nome: 'Sd Ximenes - Protocolo', telefone: '2912', pin: '7156', secao: 'ajg' },
];


function saveData() {
    localStorage.setItem('militares', JSON.stringify(militares));
}

function openForm() {
    document.getElementById('form-popup').style.display = 'flex';
}

function closeForm() {
    document.getElementById('form-popup').style.display = 'none';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
// adicionar militar
function addMilitar(event) {
    event.preventDefault();
    const militar = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        pin: document.getElementById('pin').value,
        telefone: document.getElementById('telefone').value,
        secao: document.getElementById('secao').value
    };

    militares.push(militar);
    document.getElementById('militar-form').reset();
    closeForm();
    saveData();
    displayMilitares();
}
// deletar militar
function deleteMilitar(index) {
    if (confirm('Tem certeza que deseja excluir este militar?')) {
        militares.splice(index, 1);
        saveData();
        displayMilitares();
    }
}

function displayMilitares() {
    const secoes = ['1-secao', '2-secao', '3-secao', '4-secao', 'base-ap-as-jura', 'apg', 'informatica', 'ajg'];

    secoes.forEach(secao => {
        const list = document.getElementById(`${secao}-list`);
        list.innerHTML = ''; // Limpa a lista antes de recriá-la

        const fragment = document.createDocumentFragment();

        militares
            .filter(m => m.secao === secao)
            .forEach(militar => {
                const item = document.createElement('div');
                item.className = 'militar-item';
                item.innerHTML = `
                    <span>${militar.nome}</span>
                    <span class="tel">${militar.telefone}</span>
                    <button class="delete-button">&times;</button>
                `;

                // Encontrar o índice correto no array original
                const militarIndex = militares.findIndex(m => m === militar);

                item.onclick = () => showMilitarInfo(militarIndex);
                item.querySelector('.delete-button').onclick = (e) => {
                    e.stopPropagation(); // Evita que o evento de clique no item seja disparado
                    deleteMilitar(militarIndex);
                };

                fragment.appendChild(item);
            });

        list.appendChild(fragment); // Adiciona todos os itens de uma vez
    });
}


function showMilitarInfo(index) {
    const militar = militares[index];
    const info = `
        <strong>Nome:</strong> ${militar.nome}<br>
        <strong>PIN:</strong> ${militar.pin}<br>
        <strong>Telefone:</strong> ${militar.telefone}
    `;
    document.getElementById('militar-info').innerHTML = info;
    document.getElementById('popup').style.display = 'flex';
}

// Inicialização
document.addEventListener('DOMContentLoaded', displayMilitares);
document.getElementById('popup').addEventListener('click', (e) => {
    if (e.target === document.getElementById('popup')) closePopup();
});
document.getElementById('form-popup').addEventListener('click', (e) => {
    if (e.target === document.getElementById('form-popup')) closeForm();
});