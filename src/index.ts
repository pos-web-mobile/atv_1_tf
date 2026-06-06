/**
 * Apresentação do TCC - Context Flow
 * Funcionalidades em TypeScript
 */

// Tipagem do tema
type Tema = 'light' | 'dark';

// Data limite para entrega do TCC
const DATA_LIMITE: Date = new Date('2026-11-30T23:59:59');

document.addEventListener('DOMContentLoaded', () => {
  exibirDataAtual();
  calcularDiasRestantes();
  inicializarTema();
  inicializarFiltro();
  inicializarCalculadora();
});

// ─────────────────────────────────────────
// 1. Exibe a data atual formatada em pt-BR
// ─────────────────────────────────────────
function exibirDataAtual(): void {
  const el = document.getElementById('data-atual');
  if (!el) return;

  const hoje: Date = new Date();
  
  // Saudação de acordo com o horário
  const hora: number = hoje.getHours();
  let saudacao: string = 'Boa noite';
  if (hora >= 5 && hora < 12) {
    saudacao = 'Bom dia';
  } else if (hora >= 12 && hora < 18) {
    saudacao = 'Boa tarde';
  }

  const opcoes: Intl.DateTimeFormatOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  };
  const dataFormatada: string = hoje.toLocaleDateString('pt-BR', opcoes);
  
  // Exemplo: "Boa tarde! Hoje é Sexta-feira, 5 de junho de 2026"
  el.textContent = `${saudacao}! Hoje é ${dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)}`;
}

// ─────────────────────────────────────────
// 2. Calcula dias restantes até a entrega
// ─────────────────────────────────────────
function calcularDiasRestantes(): void {
  const el = document.getElementById('dias-restantes');
  if (!el) return;

  const hoje: Date = new Date();
  const diferenca: number = DATA_LIMITE.getTime() - hoje.getTime();
  const dias: number = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

  el.textContent = dias > 0 ? `${dias} dias restantes` : 'Prazo encerrado';
}

// ─────────────────────────────────────────
// 3. Alterna o tema claro/escuro (Bootstrap 5)
// ─────────────────────────────────────────
function inicializarTema(): void {
  const btn = document.getElementById('btn-tema') as HTMLButtonElement | null;
  const icone = document.getElementById('icone-tema');
  if (!btn || !icone) return;

  btn.addEventListener('click', () => {
    const html = document.documentElement;
    const temaAtual: Tema = html.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
    const novoTema: Tema = temaAtual === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-bs-theme', novoTema);

    // Ícone
    icone.className = novoTema === 'dark'
      ? 'bi bi-sun-fill text-warning'
      : 'bi bi-moon-fill';

    // Cor do botão acompanha o tema da navbar
    btn.classList.remove('btn-outline-light', 'btn-outline-dark');
    btn.classList.add(novoTema === 'dark' ? 'btn-outline-light' : 'btn-outline-dark');
  });
}

// ─────────────────────────────────────────
// 4. Filtro/busca nos cards por categoria
// ─────────────────────────────────────────
function inicializarFiltro(): void {
  const botoes = document.querySelectorAll<HTMLButtonElement>('.btn-filtro');
  const cards = document.querySelectorAll<HTMLElement>('.card-filtro');

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const categoria: string = btn.getAttribute('data-categoria') ?? 'todos';

      // Atualiza estado ativo dos botões
      botoes.forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-outline-primary');
      });
      btn.classList.remove('btn-outline-primary');
      btn.classList.add('btn-primary');

      // Mostra/oculta cards
      cards.forEach(card => {
        const cardCategoria: string = card.getAttribute('data-categoria') ?? '';
        if (categoria === 'todos' || cardCategoria === categoria) {
          card.closest<HTMLElement>('.col-card')!.style.display = 'block';
        } else {
          card.closest<HTMLElement>('.col-card')!.style.display = 'none';
        }
      });
    });
  });
}

// ─────────────────────────────────────────
// 5. Calculadora de esforço
// ─────────────────────────────────────────
interface EntradaCalculadora {
  tarefas: number;
  tempoPorTarefa: number; // em horas
}

function inicializarCalculadora(): void {
  const btn = document.getElementById('btn-calcular');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const inputTarefas = document.getElementById('input-tarefas') as HTMLInputElement;
    const inputTempo = document.getElementById('input-tempo') as HTMLInputElement;
    const resultado = document.getElementById('resultado-calc');
    if (!inputTarefas || !inputTempo || !resultado) return;

    const entrada: EntradaCalculadora = {
      tarefas: Number(inputTarefas.value),
      tempoPorTarefa: Number(inputTempo.value)
    };

    if (entrada.tarefas <= 0 || entrada.tempoPorTarefa <= 0) {
      resultado.textContent = 'Preencha os dois campos com valores maiores que zero.';
      resultado.className = 'alert alert-warning mt-3';
      return;
    }

    const totalHoras: number = entrada.tarefas * entrada.tempoPorTarefa;
    const totalDias: number = Math.ceil(totalHoras / 8);
    const totalSemanas: number = Math.ceil(totalDias / 5);

    resultado.innerHTML = `
      <strong>Estimativa de esforço:</strong><br>
      📋 ${entrada.tarefas} tarefas × ${entrada.tempoPorTarefa}h = <strong>${totalHoras}h totais</strong><br>
      📅 Equivalente a <strong>${totalDias} dia(s)</strong> de trabalho ou <strong>${totalSemanas} semana(s)</strong>
    `;
    resultado.className = 'alert alert-success mt-3';
  });
}
