document.addEventListener("DOMContentLoaded", function () {
  const eventosContainer = document.querySelector(".eventos");
  const eventosList = document.createElement("div");
  eventosList.id = "eventos-list";
  eventosContainer.appendChild(eventosList);

  const addButton = document.createElement("button");
  addButton.textContent = "Adicionar Evento";
  addButton.id = "add-evento";
  eventosContainer.appendChild(addButton);

  const voices = document.createElement("select");
  voices.textContent = "Selecione a voz";
  voices.id = "select-voz";
  eventosContainer.appendChild(voices);

  let selectedVoice = null; // Variável para armazenar a voz selecionada
  let eventInputs = []; // Para armazenar os inputs de data
  let lastSpoken = {}; // Para armazenar os avisos já falados

  // Carregar eventos salvos
  function carregarEventos() {
    const eventosSalvos = JSON.parse(localStorage.getItem("eventos")) || [];
    eventosList.innerHTML = "";
    eventInputs = []; // Reinicia a lista de inputs

    eventosSalvos.forEach((evento, index) => {
      criarEventoElement(evento, index);
    });

    // Atualiza a lista de inputs de data
    eventInputs = document.querySelectorAll(".evento-data");
  }

  // Criar elementos de evento
  function criarEventoElement(evento, index) {
    const eventoItem = document.createElement("div");
    eventoItem.className = "evento-item";

    const inputData = document.createElement("input");
    inputData.type = "datetime-local";
    inputData.value = evento.data;
    inputData.className = "evento-data";

    const inputTexto = document.createElement("textarea");
    inputTexto.placeholder = "Detalhes do evento";
    inputTexto.rows = 2;
    inputTexto.value = evento.texto;
    inputTexto.className = "evento-texto";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remover";
    deleteButton.className = "delete-evento";
    deleteButton.addEventListener("click", () => removerEvento(index));

    eventoItem.appendChild(inputData);
    eventoItem.appendChild(inputTexto);
    eventoItem.appendChild(deleteButton);
    eventosList.appendChild(eventoItem);
  }

  // Função para ler o texto do evento com a voz selecionada
  function lerEvento(eventText) {
    if (selectedVoice !== null) {
      const voicesList = window.speechSynthesis.getVoices();
      const utterance = new SpeechSynthesisUtterance(eventText);
      utterance.lang = "pt-BR";
      utterance.voice = voicesList[selectedVoice]; // Usando a voz selecionada
      window.speechSynthesis.speak(utterance);
    }
  }

  // Carregar as vozes do navegador
  function carregarVozes() {
    const voicesList = window.speechSynthesis.getVoices();
    voices.innerHTML = ""; // Limpa o select de vozes

    voicesList.forEach((voice, index) => {
      let option = document.createElement("option");
      option.value = index;
      option.textContent = voice.name;
      voices.appendChild(option);
    });
  }

  // Atualiza a voz selecionada
  voices.addEventListener("change", () => {
    selectedVoice = parseInt(voices.value, 10);
  });

  // Inicializa as vozes ao carregar o evento 'voiceschanged'
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.addEventListener("voiceschanged", carregarVozes);
  } else {
    carregarVozes();
  }

  // Salvar eventos
  function salvarEventos() {
    const eventos = [];
    document.querySelectorAll(".evento-item").forEach((item) => {
      const data = item.querySelector(".evento-data").value;
      const texto = item.querySelector(".evento-texto").value;
      if (data && texto) {
        eventos.push({ data, texto });
      }
    });
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }

  // Adicionar novo evento
  addButton.addEventListener("click", () => {
    criarEventoElement(
      { data: "", texto: "" },
      document.querySelectorAll(".evento-item").length
    );
    salvarEventos(); // Salva o estado atualizado dos eventos no localStorage
  });

  // Remover evento
  function removerEvento(index) {
    const eventoItem = document.querySelectorAll(".evento-item")[index];
    if (eventoItem) {
      eventoItem.style.transition = "opacity 0.5s";
      eventoItem.style.opacity = "0";
      setTimeout(() => {
        const eventos = JSON.parse(localStorage.getItem("eventos")) || [];
        eventos.splice(index, 1);
        localStorage.setItem("eventos", JSON.stringify(eventos));
        carregarEventos(); // Recarrega os eventos para atualizar os índices
      }, 500); // Espera a transição terminar
    }
  }

  // Função para verificar os eventos e falar quando necessário (10, 5 e 2 minutos)
  function checkEventTimes() {
    const now = new Date();

    eventInputs.forEach((input, index) => {
      const eventTime = new Date(input.value);
      const timeDifference = eventTime - now;
      const eventText = input.nextElementSibling.value;

      if (eventTime < now - 30 * 60 * 1000) {
        // Remove o evento se já passou 30 minutos
        removerEvento(index);
        return;
      }

      if (!lastSpoken[input.value]) {
        lastSpoken[input.value] = { ten: false, five: false, two: false };
      }

      if (
        timeDifference <= 10 * 60 * 1000 &&
        timeDifference > 9 * 60 * 1000 &&
        !lastSpoken[input.value].ten
      ) {
        lerEvento(`Faltam 10 minutos para: ${eventText}`);
        lastSpoken[input.value].ten = true;
      }

      if (
        timeDifference <= 5 * 60 * 1000 &&
        timeDifference > 4 * 60 * 1000 &&
        !lastSpoken[input.value].five
      ) {
        lerEvento(`Faltam 5 minutos para: ${eventText}`);
        lastSpoken[input.value].five = true;
      }

      if (
        timeDifference <= 2 * 60 * 1000 &&
        timeDifference > 1 * 60 * 1000 &&
        !lastSpoken[input.value].two
      ) {
        lerEvento(`Faltam 2 minutos para: ${eventText}`);
        lastSpoken[input.value].two = true;
      }
    });
  }

  // Salvar eventos ao modificar inputs
  eventosContainer.addEventListener("input", salvarEventos);

  // Inicializar eventos salvos
  carregarEventos();
  carregarVozes(); // Carregar as vozes disponíveis ao carregar a página

  // Checar os eventos a cada 60 segundos
  setInterval(checkEventTimes, 60 * 1000); // Verifica os eventos a cada minuto

  // destinos
  function carregaAutoridades() {
    var destten = [];
    var destsgt = [];
    var destcb = [];
    var destsd = [];
    var htmldir = "";

    $.get("destinos/destinos_ten.txt", function (txt) {
      var lines = txt.split("\n");
      for (var i = 0, len = lines.length; i < len; i++) {
        destten.push(lines[i]);
      }
      $.each(destten, function (i, val) {
        htmldir += '<option value="' + (i + 1) + '">' + val + "</option>";
        $("#destten").html(htmldir);
      });
    });

    $.get("destinos/destinos_ten.txt", function (txt) {
      var lines = txt.split("\n");
      for (var i = 0, len = lines.length; i < len; i++) {
        destsgt.push(lines[i]);
      }
      $.each(destsgt, function (i, val) {
        htmldir += '<option value="' + (i + 1) + '">' + val + "</option>";
        $("#destten").html(htmldir);
      });
    });

    $.get("destinos/destinos_ten.txt", function (txt) {
      var lines = txt.split("\n");
      for (var i = 0, len = lines.length; i < len; i++) {
        destten.push(lines[i]);
      }
      $.each(destten, function (i, val) {
        htmldir += '<option value="' + (i + 1) + '">' + val + "</option>";
        $("#destten").html(htmldir);
      });
    });

    $.get("destinos/destinos_ten.txt", function (txt) {
      var lines = txt.split("\n");
      for (var i = 0, len = lines.length; i < len; i++) {
        destten.push(lines[i]);
      }
      $.each(destten, function (i, val) {
        htmldir += '<option value="' + (i + 1) + '">' + val + "</option>";
        $("#destten").html(htmldir);
      });
    });
  }

  carregaAutoridades();
});
