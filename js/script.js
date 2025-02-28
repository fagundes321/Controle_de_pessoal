document.addEventListener("DOMContentLoaded", function () {
  // ========== CÓDIGO EXISTENTE (VOZ/SISTEMAS/ANIVERSARIANTES) ==========
  const voicesSelect = document.getElementById("select-voz");
  let selectedVoice = null;

  // Controle de vozes
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    const voicesList = window.speechSynthesis.getVoices();
    voicesSelect.innerHTML = "";
    voicesSelect.appendChild(new Option("Selecione a voz", ""));
    voicesList.forEach((voice, index) => {
      const option = document.createElement("option");
      option.setAttribute("value", index);
      option.innerText = voice.name;
      voicesSelect.appendChild(option);
    });
  });

  /// Verificação de status dos sistemas
  const systems = [
    { id: "status-FOCOM", url: "http://focom.daprom.eb.mil.br" },
    { id: "status-ModDespacho", url: "http://despacho.daprom.eb.mil.br" },
    { id: "status-ModDoc", url: "http://oficiais.daprom.eb.mil.br/admin" },
    { id: "status-fio", url: "http://fiprom.daprom.eb.mil.br/auth/login" },
    { id: "status-fis", url: "http://fiprom.daprom.eb.mil.br/auth/login" },
    { id: "status-ModGra", url: "http://gra.daprom.eb.mil.br/admin" },
    { id: "status-Modjulg", url: "http://julg.daprom.eb.mil.br" },
    { id: "status-ModProcessos", url: "http://processos.daprom.eb.mil.br/" },
    { id: "status-qae", url: "http://qae.daprom.eb.mil.br/admin" },
    { id: "status-qam", url: "http://oficiais.daprom.eb.mil.br/admin" },
    { id: "status-ModGra", url: "http://sisprom.daprom.eb.mil.br/" },
    { id: "status-rip", url: "http://sgrip.daprom.eb.mil.br/" },
    { id: "status-sapo", url: "http://ot.daprom.eb.mil.br" },
    { id: "status-sap", url: "http://qe.daprom.eb.mil.br/" },
    { id: "status-carta", url: "http://carta.daprom.eb.mil.br/main" },
    { id: "status-vota", url: "http://votacao.daprom.eb.mil.br/" },
    { id: "status-2.0", url: "http://relator.daprom.eb.mil.br" },
    { id: "status-re", url: "http://ressarcimento.daprom.eb.mil.br/" },
    { id: "status-rela", url: "http://relator.daprom.eb.mil.br/" },
    {
      id: "status-sup",
      url: "http://suporte.daprom.eb.mil.br/admin/pedido/index",
    },
    { id: "status-relato", url: "http://relator.daprom.eb.mil.br/" },
  ];

  async function verificarStatusSite(id, url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // Timeout de 5s

    try {
      await fetch(url, { mode: "no-cors", signal: controller.signal });
      atualizarStatus(id, "green");
    } catch (error) {
      atualizarStatus(id, "red");
    } finally {
      clearTimeout(timeout);
    }
  }

  function atualizarStatus(id, color) {
    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundColor = color;
      element.style.transition = "opacity 0.5s ease-in-out";

      let blink = false;
      setInterval(() => {
        blink = !blink;
        element.style.opacity = blink ? "1" : "0.5";
      }, 500);
    }
  }

  // Verifica todos os sistemas
  systems.forEach((system) => verificarStatusSite(system.id, system.url));

  // Lógica para exibir aniversariantes do mês
  const aniversariantes = [
    { nome: "1º Ten Lago", data: "1985-12-10", foto: "img/3.jpg" },
    { nome: "Cb Kevin", data: "1985-01-14", foto: "img/9.jpeg" },
    { nome: "3º Sgt Isabelly", data: "1985-12-06", foto: "img/8.jpg" },
    { nome: "3º Sgt Diego Miranda", data: "1985-03-07", foto: "img/4.jpg" },
    { nome: "3º Sgt A Vidal", data: "1985-22-07", foto: "img/2.jpg" },
    { nome: "2º Ten Giovani", data: "1985-23-08", foto: "img/7.jpg" },
    { nome: "3º Sgt Castro", data: "1985-27-08", foto: "img/8.jpg" },
    { nome: "2º Ten Bruno Reis", data: "1985-11-11", foto: "img/1.jpg" },
    { nome: "Sd Fagundes", data: "1985-26-10", foto: "img/9.jpg" },
    { nome: "1º Ten Lago", data: "1985-16-12", foto: "img/10.jpg" },
  ];

  function mostrarAniversariantes() {
    const container = document.getElementById("aniversariantes-container");
    const mesAtual = new Date().getMonth() + 1;
    aniversariantes.forEach((militar) => {
      const dataNascimento = new Date(militar.data);
      if (dataNascimento.getMonth() + 1 === mesAtual) {
        const aniversarianteItem = document.createElement("div");
        aniversarianteItem.classList.add("aniversariante-item");
        aniversarianteItem.innerHTML = `
                    <img src="${militar.foto}" alt="Foto do Militar" class="foto-militar">
                    <span class="nome-aniversariante">${militar.nome}</span>
                `;
        container.appendChild(aniversarianteItem);
      }
    });
  }
  mostrarAniversariantes();

  // ========== NOVAS FUNCIONALIDADES (EVENTOS/MODAL) ==========
  const eventosKey = "eventosSalvos";
  let eventos = JSON.parse(localStorage.getItem(eventosKey)) || [];
  const eventosList = document.getElementById("eventos-list");
  const addEventoButton = document.getElementById("add-evento");

  // Funções do Modal
  function abrirModal() {
    document.getElementById("eventDate").min = new Date()
      .toISOString()
      .split("T")[0];
    document.getElementById("eventModal").classList.add("visible");
    document.getElementById("modalBackdrop").classList.add("visible");
  }

  function fecharModal() {
    document.getElementById("eventModal").classList.remove("visible");
    document.getElementById("modalBackdrop").classList.remove("visible");
    document.getElementById("eventForm").reset();
  }

  // Renderizar eventos
  function renderEventos() {
    // Ordena os eventos do mais recente para o mais antigo
    eventos.sort((a, b) => {
      const dataHoraA = new Date(`${a.data} ${a.hora}`);
      const dataHoraB = new Date(`${b.data} ${b.hora}`);
      return dataHoraB - dataHoraA; // Mais recente primeiro
    });

    eventosList.innerHTML = "";
    eventos.forEach((evento, index) => {
      const eventoDiv = document.createElement("div");
      eventoDiv.classList.add("evento");
      eventoDiv.innerHTML = `
                <div class="evento-info">
                    <span>${evento.nome} - ${evento.data} ${evento.hora}</span>
                </div>
                <div class="evento-actions">
                    <button class="delete-evento" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
      eventosList.appendChild(eventoDiv);
    });

    document.querySelectorAll(".delete-evento").forEach((button) => {
      button.addEventListener("click", (e) => {
        if (confirm("Tem certeza que deseja excluir este evento?")) {
          const index = e.target.closest("button").dataset.index;
          eventos.splice(index, 1);
          salvarEventos();
          renderEventos();
          mostrarFeedback("Evento excluído com sucesso!", "success");
        }
      });
    });
  }

  // Funções de Data
  function formatarData(dataInput) {
    const data = new Date(dataInput);
    const offset = data.getTimezoneOffset() * 60000;
    return new Date(data.getTime() - offset)
      .toISOString()
      .split("T")[0]
      .split("-")
      .reverse()
      .join("/");
  }

  // Salvar eventos
  function salvarEventos() {
    localStorage.setItem(eventosKey, JSON.stringify(eventos));
  }

  // Validação do Formulário
  document.getElementById("eventForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("eventName").value.trim();
    const dataInput = document.getElementById("eventDate").value;
    const horaInput = document.getElementById("eventTime").value;

    // Validar fuso horário
    const dataEvento = new Date(`${dataInput}T${horaInput}:00-03:00`);

    if (
      !nome ||
      !dataInput ||
      !horaInput ||
      dataEvento.toString() === "Invalid Date"
    ) {
      mostrarFeedback("Preencha todos os campos corretamente!", "error");
      return;
    }

    if (dataEvento < new Date()) {
      mostrarFeedback("Não é possível agendar eventos no passado!", "error");
      return;
    }

    eventos.push({
      nome,
      data: formatarData(dataEvento),
      hora: dataEvento.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      timestamp: dataEvento.getTime(),
      alertaMostrado: false,
    });

    salvarEventos();
    renderEventos();
    fecharModal();
    mostrarFeedback("Evento adicionado com sucesso!", "success");
  });

  // Verificação de Eventos
  function verificarEventos() {
    const agora = new Date().getTime();

    eventos.forEach((evento) => {
      const tempoRestante = evento.timestamp - agora;

      if (
        tempoRestante > 0 &&
        tempoRestante <= 600000 &&
        !evento.alertaMostrado
      ) {
        mostrarAlertModal(evento.nome);
        evento.alertaMostrado = true;
        salvarEventos();
      }
    });

    eventos = eventos.filter((evento) => agora - evento.timestamp <= 600000);
    salvarEventos();
    renderEventos();
  }

  // Sistema de Alertas
  function mostrarAlertModal(nomeEvento) {
    const alertModal = document.getElementById("alertModal");
    alertModal.innerHTML = `<div class="alert-content clayson">
            <h3>⚠️ ALERTA DE EVENTO ⚠️</h3>
            <p>Faltam 10 minutos para:<br><strong>${nomeEvento}</strong></p>
            <button onclick="fecharAlertModal()">Entendi</button>
        </div>`;

    alertModal.style.display = "block";

    // Toca o áudio local da pasta "audio"
    const audio = new Audio("audio/alerta.mp3");
    audio
      .play()
      .catch((error) => console.error("Erro ao reproduzir áudio:", error));
  }

  window.fecharAlertModal = () => {
    document.getElementById("alertModal").style.display = "none";
  };

  // Feedback Visual
  function mostrarFeedback(mensagem, tipo) {
    const feedback = document.getElementById("feedbackMessage");
    feedback.textContent = mensagem;
    feedback.className = `${tipo} show`;
    setTimeout(() => feedback.classList.remove("show"), 3000);
  }

  // ========== INICIALIZAÇÃO ==========
  addEventoButton.addEventListener("click", abrirModal);
  document
    .querySelector('.modal-buttons button[type="button"]')
    .addEventListener("click", fecharModal);
  document
    .getElementById("modalBackdrop")
    .addEventListener("click", fecharModal);
  document.getElementById("alertModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("alertModal")) fecharAlertModal();
  });

  // ========== STATUS MILITARES ==========
  function salvarStatusMilitares() {
    const dados = Array.from(document.querySelectorAll(".destino-item")).map(
      (militar) => ({
        nome: militar.querySelector(".nome").textContent.trim(),
        status: militar.querySelector("select").value,
      })
    );
    localStorage.setItem("statusMilitares", JSON.stringify(dados));
  }

  function carregarStatusMilitares() {
    const dados = JSON.parse(localStorage.getItem("statusMilitares")) || [];
    document.querySelectorAll(".destino-item").forEach((militar) => {
      const nome = militar.querySelector(".nome").textContent.trim();
      const savedStatus = dados.find((d) => d.nome === nome)?.status;
      if (savedStatus) militar.querySelector("select").value = savedStatus;
    });
  }

  document.querySelectorAll(".destino-item select").forEach((select) => {
    select.addEventListener("change", salvarStatusMilitares);
  });

  // Inicialização Final
  carregarStatusMilitares();
  renderEventos();
  setInterval(verificarEventos, 60000);

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("add-evento")
      .addEventListener("click", function () {
        document.getElementById("eventModal").classList.add("visible");
        document.getElementById("modalBackdrop").classList.add("visible");
      });

    document
      .getElementById("modalBackdrop")
      .addEventListener("click", function () {
        fecharModal();
      });

    function fecharModal() {
      document.getElementById("eventModal").classList.remove("visible");
      document.getElementById("modalBackdrop").classList.remove("visible");
    }
  });
});

// Relogio
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = timeString;
}

setInterval(updateTime, 1000); // Atualiza a cada segundo
updateTime(); // Chama a função para exibir o tempo atual imediatamente
