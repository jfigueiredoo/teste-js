// Dados simulados
const processosSetorFinanceiro = {
    "Supervisor Financeiro": {
        "Solicitação de Ativação do Cartão Zona Azul": [
            "A01: Quando há solicitação",
            "A02: Pegar o celular",
            "A03: Abrir o aplicativo do Zona Azul",
            "A04: O veículo já está no sistema?",
            "Caso SIM: Ir para A09",
            "Caso NÃO: Ir para A05 e seguir a leitura",
            "A05: Cadastrar veículo no aplicativo do Zona Azul",
            "A06: Ir na aba 'placas e usos' na aba de 'veículos' e depois em 'novo' selecionando se é moto ou carro",
            "A07: Preencher informações adicionando os dados Placa do veículo",
            "A08: Apertar em 'Cadastrar'",
            "A09: Selecionar veículo",
            "A10: Apertar o botão 'ativar cartão'",
            "A11: Selecionar a duração e a forma de pagamento, escolhendo a opção 'usar meus créditos'",
            "A12: Confirmar ativação",
            "A13: Cartão ativado"
        ],
        "Revisão das Provisões de Pagamento": [
            "A01: Semanalmente",
            "A02: Entrar no site do Sicredi",
            "A03: Apertar no botão 'DDA/Agenda de boletos'",
            "A04: Apertar no botão 'Administrador financeiro'",
            "A05: Apertar no botão 'Abrir pesquisa avançada'",
            "A06: Inserir datas da pesquisa Início e conclusão da semana requerida",
            "A07: Apertar em 'pesquisar'",
            "A08: Imprimir o relatório das provisões da semana para pagamento",
            "A09: Abrir o OMIE",
            "A10: Ir na aba 'Finanças'",
            "A11: Apertar no botão 'Contas a pagar' e depois em 'exibir todas'",
            "A12: Apertar em 'Razão Social' buscando pelo nome da empresa ou da pessoa",
            "A13: Conferir informações como o valor e a data, buscando alterá-los caso seja necessário",
            "A14: Revisão dos pagamentos concluída"
        ],
        "Recebimento de Notas Fiscais Físicas": [
            "A01: Quando há recebimento de nota fiscal",
            "A02: Receber nota fiscal",
            "A03: Lançar no sistema OMIE",
            "A04: Pegar a nota fiscal",
            "A05: Colocar a nota no scanner",
            "A06: Abrir 'Epson scan 2' para escanear a nota fiscal",
            "A07: Apertar em 'Digitalizar'",
            "A08: Salvar como PNG no computador após ter sido escaneado",
            "A09: Anexar o PDF da nota no sistema OMIE",
            "A10: Lançar as provisões da nota no sistema (vencimento, valor de pagamento e parcela), programando as repetições no sistema a partir das datas dos pagamentos posteriores",
            "A11: Conferir os lançamentos",
            "A12: Anexar nota no sistema em formato de PDF",
            "A13: Apertar botão (SALVAR) no sistema OMIE",
            "A14: Salvar na pasta ONE DRIVE - Central NIT",
            "A15: Recebimento de notas fiscais finalizado"
        ]
    }
};

const processosRH = {
    "Gerente de RH": {
        "Processo de Recrutamento e Seleção": [
            "A01: Receber solicitação de vaga",
            "A02: Publicar vaga em plataformas de emprego",
            "A03: Triagem de currículos",
            "A04: Agendar entrevistas",
            "A05: Conduzir entrevistas",
            "A06: Selecionar candidato",
            "A07: Enviar proposta ao candidato",
            "A08: Finalizar processo de seleção"
        ],
        "Onboarding de Novos Funcionários": [
            "A01: Preparar documentação de admissão",
            "A02: Agendar integração",
            "A03: Realizar integração com novos funcionários",
            "A04: Acompanhar primeiros dias do novo funcionário"
        ]
    }
};

// Combinando todos os processos em um único objeto
const processos = {
    "Setor Financeiro": processosSetorFinanceiro,
    "Recursos Humanos (RH)": processosRH
};

// Funções para carregar dados
function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    const processoSelect = document.getElementById('processos');
    const detalhesList = document.getElementById('detalhes-list');
    const fluxogramaDiv = document.getElementById('fluxograma');
    
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    detalhesList.innerHTML = '';
    fluxogramaDiv.style.display = 'none';

    if (area && processos[area]) {
        Object.keys(processos[area]).forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo;
            option.textContent = cargo;
            cargoSelect.appendChild(option);
        });
    }
}

function loadProcessos() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processoSelect = document.getElementById('processos');
    const detalhesList = document.getElementById('detalhes-list');
    const fluxogramaDiv = document.getElementById('fluxograma');

    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    detalhesList.innerHTML = '';
    fluxogramaDiv.style.display = 'none';

    if (area && cargo && processos[area] && processos[area][cargo]) {
        Object.keys(processos[area][cargo]).forEach(processo => {
            const option = document.createElement('option');
            option.value = processo;
            option.textContent = processo;
            processoSelect.appendChild(option);
        });
    }
}

function loadDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processo = document.getElementById('processos').value;
    const detalhesList = document.getElementById('detalhes-list');
    const fluxogramaDiv = document.getElementById('fluxograma');
    const fluxogramaImg = document.getElementById('fluxograma-imagem');

    detalhesList.innerHTML = '';
    fluxogramaDiv.style.display = 'none';

    if (area && cargo && processo && processos[area][cargo][processo]) {
        processos[area][cargo][processo].forEach(detalhe => {
            const li = document.createElement('li');
            li.textContent = detalhe;
            detalhesList.appendChild(li);
        });

        // Simulação do fluxograma
        fluxogramaImg.src = 'path_to_fluxograma_image.png'; // Substitua pelo caminho real da imagem
        fluxogramaDiv.style.display = 'block';
    }
}

// Inicializar as áreas no carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    const areaSelect = document.getElementById('areas');
    Object.keys(processos).forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        areaSelect.appendChild(option);
    });
});
