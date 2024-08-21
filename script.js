// Dados simulados
const processosSetorFinanceiro = {
    "Setor Financeiro": {
"OS de Resgate de Equipamento": [
            "A01: Quando há solicitação de cancelamento de contrato",
            "A02: Cadastrar ocorrência",
            "A03: Selecionar o contrato e serviço da ocorrência",
            "A04: Preencher informações com a empresa do boleto gerado, o setor do operacional e o supervisor do operacional",
            "A05: Escolher o tipo de ocorrência escolhendo a opção - Resgate de equipamento",
            "A06: Selecionar origem",
            "A07: Atualizar informações da OS com status e conteúdo",
            "A08: Fazer OS Externa",
            "A09: Preencher informações com o motivo e nome do responsável",
            "A10: Clicar em cadastrar",
            "A11: Cadastro de OS de Resgate de Equipamento finalizada"
        ],
        "OS de Reclamação de Fatura (PIX)": [
            "A01: Quando o supervisor do RH solicita",
            "A02: Entrar no SDP através do navegador de Internet",
            "A03: Logar no SDP com login e senha",
            "A04: Ir na aba de relatórios - de atendimentos - ocorrências",
            "A05: Preencher o status e o setor como: Aberto e Financeiro",
            "A06: Ir na OS de reclamação de fatura",
            "A07: Ir na aba de documentos",
            "A08: Baixar comprovante que retira no site do Sicredi ou no aplicativo Sicredi",
            "A09: Abrir a conta do banco referente ao comprovante",
            "A10: Entrar na conta do banco referente ao boleto",
            "A11: Ir na seção de PIX",
            "A12: Analisar a aba de extratos PIX",
            "A13: Procurar na data em que se refere o pagamento analisando o nome do cliente e se o valor confere",
            "A14: Houve pagamento?",
            "Caso SIM: Ir para A19 e seguir leitura",
            "Caso NÃO: Ir para A15 e seguir leitura",
            "A15: Procurar o pagamento em um dia anterior e em um dia posterior a data em que se refere",
            "A16: Houve pagamento?",
            "Caso SIM: Ir para A19 e seguir leitura",
            "Caso NÃO: Ir de A17 e A18 para A27",
            "A17: Ir na OS preenchendo o status como finalizada",
            "A18: Avisar a supervisora do RH que o pagamento não foi realizado",
            "A19: Ir na aba de financeiro",
            "A20: Identificar o boleto da baixa",
            "A21: Selecionar o boleto",
            "A22: Clicar no botão de recebimento",
            "A23: Adicionar informações de recebimento: ponto de recebimento, conta em que o cliente pagou, forma de pagamento (transferência bancária), alterando o valor",
            "A24: Baixar título",
            "A25: Ir na OS: Preenchendo o status como finalizada",
            "A26: Avisar a supervisora do RH que o pagamento foi realizado",
            "A27: OS de reclamação de fatura finalizada"
        ],
        "Conferência de Recebimentos de PIX em Andamento": [
            "A01: Quando é solicitada na OS de reclamação de fatura (OS por PIX)",
            "A02: Pegar o celular do Sicredi no celular",
            "A03: Abrir a conta",
            "A04: Ir na aba 'Fazer um pix', indo depois para 'Movimentações'",
            "A05: Procurar a data em que se refere o pagamento",
            "A06: Selecionar a movimentação específica, clicando nela",
            "A07: Conferir os dados do pagante, como nome, instituição, data e hora e o valor",
            "A08: Entrar no SGP",
            "A09: Ir na aba 'Relatórios', 'atendimento', 'ocorrência'",
            "A10: Clicar em 'Consultar' colocando o nome do cliente",
            "A11: Ir na aba 'financeiro'",
            "A12: Ir no boleto atual que está em aberto",
            "A13: Apertar no botão 'receber'",
            "A14: Adicionar informações como conta de recebimento, forma e data de recebimento",
            "A15: Apertar no botão 'receber'",
            "A16: Ir na OS",
            "A17: Mudar o status da OS de 'Aberta' para 'finalizada'",
            "A18: Apertar no botão 'Salvar'",
            "A19: OS finalizada"
        ],
        "Conciliações Bancárias": [
            "A01: Quando há necessidade",
            "A02: Entrar na conta do Sicredi pelo navegador",
            "A03: Logar na conta utilizando login e senha da conta",
            "A04: Ir na aba 'Extrato'",
            "A05: Selecionar a data prevista do extrato",
            "A06: Apertar no botão 'Pesquisar'",
            "A07: Descer a tela até o fim, após aparecer resultado",
            "A08: Apertar no botão 'Gerar OFX'",
            "A09: Entrar no OMIE",
            "A10: Ir na aba 'Finanças'",
            "A11: Ir na aba 'Passo 5 - Conciliar contas correntes'",
            "A12: Selecionar a conta corrente prevista",
            "A13: Apertar no botão 'Importar extrato'",
            "A14: Selecionar o arquivo no computador para ser importado",
            "A15: A transação foi lançada de maneira correta?",
            "Caso SIM: Ir para A16 e finalizar em A18",
            "Caso NÃO: Ir em A19 e seguir leitura",
            "A16: Ir em cada transação",
            "A17: Apertar no botão 'Conciliar este lançamento'",
            "A18: Conciliação bancária finalizada",
            "A19: Entrar no Sicredi para conferir a descrição e o valor da transação",
            "A20: Entrar no OMIE",
            "A21: Ir na aba 'finanças'",
            "A22: Ir na aba 'Número 4 - Baixar contas a pagar'",
            "A23: Ir em 'pagamentos confirmados' procurando a transação identificada com erro",
            "A24: Clicar na conta duas vezes",
            "A25: Ir na aba 'Pagamentos'",
            "A26: Apertar no botão 'Cancelar pagamento'",
            "A27: Fazer alterações",
            "A28: Salvar alterações",
            "A29: Ir na aba 'Pagamentos'",
            "A30: Registrar pagamento",
            "A31: Conferir dados com data, valor e a conta corrente",
            "A32: Apertar no botão 'Confirmar pagamento'",
            "A33: Apertar no botão 'Importar extrato'",
            "A34: Selecionar o arquivo no computador para ser importado",
            "A35: Ir em cada transação",
            "A36: Apertar no botão 'Conciliar este lançamento'",
            "A37: Conciliação bancária finalizada"
        ],
        "Atualização dos Valores da Folha de Pagamento (Passagem e Alimentação)": [
            "A01: Mensalmente",
            "A02: Aguardar envio de planilha com os valores pelo Supervisor do RH",
            "A03: Receber planilha",
            "A04: Abrir o sistema OMIE",
            "A05: Ir na aba 'Finanças'",
            "A06: Apertar no botão 'Contas a pagar' e depois em 'Exibir todas'",
            "A07: Apertar no botão 'Razão Social'",
            "A08: Atualizar valores da Passagem e alimentação de cada funcionário, conferindo as datas, mudando para o último dia de cada mês",
            "A09: Apertar no botão 'Salvar'",
            "A10: Atualização dos valores finalizada"
        ],
        "Atualização dos Valores da Folha de Pagamento (Quinzena e Folha de Pagamento)": [
            "A01: Mensalmente",
            "A02: Supervisor do RH envia planilha com os valores da Folha",
            "A03: Abrir o sistema OMIE no computador, pelo navegador Google Chrome",
            "A04: Ir na aba 'Finanças'",
            "A05: Apertar no botão 'Contas a pagar' e depois em 'Exibir todas'",
            "A06: Apertar no botão 'Razão Social', buscando nome de cada funcionário",
            "A07: Atualizar dados de cada funcionário com a data de pagamento e os valores",
            "A08: Apertar no botão 'salvar'",
            "A09: Atualização dos valores finalizada"
        ],
        "Atualização do Sistema OMIE": [
            "A01: Quando há necessidade de pagamento",
            "A02: Abrir navegador Google Chrome",
            "A03: Entrar no sistema OMIE",
            "A04: Colocar login e senha para logar no sistema",
            "A05: Ir na aba de finanças",
            "A06: Clicar no botão Contas a pagar",
            "A07: Clicar no botão Exibir todas",
            "A08: Ir na aba de fornecedor",
            "A09: Buscar nome da descrição de pagamento",
            "A10: Preencher dados como a categoria do lançamento, data de vencimento, valor, conta corrente que vai ser utilizada e se irá haver repetição do pagamento",
            "A11: Clicar no botão 'Salvar'",
            "A12: Sistema OMIE atualizado"
        ],
        "Atualização da Provisão de Pagamento da Alimentação dos Funcionários": [
            "A01: Mensalmente",
            "A02: Aguardar envio da planilha pela supervisora de RH",
            "A03: Planilha recebida",
            "A04: Abrir planilha",
            "A05: Analisar dados da planilha, procurando ver se as datas estão certas em comparação com o sistema OMIE",
            "A06: As datas na planilha estão certas?",
            "Caso SIM: Ir para A08 e seguir leitura",
            "Caso NÃO: Ir para A07 e seguir leitura",
            "A07: Atualizar datas",
            "A08: Salvar provisão no OMIE",
            "A09: Provisão atualizada"
        ],
        "Atualização da Planilha de Comissão Referente ao Pagamento das Escolas": [
            "A01: Quando a representante comercial solicita a consulta do pagamento",
            "A02: Abrir planilha de comissão",
            "A03: A escola realizou o pagamento?",
            "Caso SIM: Ir da A04 para A09",
            "Caso NÃO: Ir para A05 e seguir leitura",
            "A04: Inserir dados de pagamento: valor, razão social, data de pagamento e a conta em que foi paga",
            "A05: Avisar a representante comercial pelo WhatsApp",
            "A06: Aguardar o envio do comprovante",
            "A07: Comprovante enviado",
            "A08: Fazer uma nova consulta",
            "A09: Atualização da planilha concluída"
        ],
        "Arquivamento de Documentos Físicos": [
            "A01: Quando há recebimento de documento físico",
            "A02: Pegar o documento entregue",
            "A03: Ligar a impressora",
            "A04: Escanear documento colocando o documento no scanner da impressora",
            "A05: Abrir o programa 'Epson scan 2' no computador",
            "A06: Apertar no botão 'Digitalizar'",
            "A07: Salvar documento escaneado no computador em formato de PNG",
            "A08: Salvar na pasta 'ONE DRIVE - Central NET' o documento salvo em PNG",
            "A09: Salvar na pasta referente ao tipo de documento, ex: se for um contrato, salvar na pasta de contratos",
            "A10: Arquivo de documentos físicos finalizado"
        ],
        "Arquivamento de Documentos Digitais": [
            "A01: Quando há solicitação de documento ou emissão de documento",
            "A02: O documento já se encontra no ONEDRIVE?",
            "Caso SIM: Ir de A03 para A07 e pular para A15",
            "Caso NÃO: Ir para A08 e seguir leitura",
            "A03: Entrar no OneDrive",
            "A04: Entrar na pasta 'FINANCEIRO CENTRALNET'",
            "A05: Entrar na pasta 'Documentos empresa'",
            "A06: Entrar na pasta do CNPJ referente ao documento",
            "A07: Selecionar o documento solicitado para envio",
            "A08: Enviar para a pessoa solicitante pelo WhatsApp ou E-mail",
            "A09: Pedir os documentos solicitando pelo WhatsApp",
            "A10: Aguardar o envio do documento pelo e-mail ou WhatsApp",
            "A11: Receber arquivos",
            "A12: Entrar no e-mail corporativo",
            "A13: Baixar arquivo",
            "A14: Salvar na pasta do CNPJ referente ao documento",
            "A15: Enviar para a pessoa solicitante pelo WhatsApp ou E-mail",
            "A16: Documento arquivado"
        ],
        "Arquivamento de Comprovantes": [
            "A01: Quando há realização de pagamentos",
            "A02: Entrar no explorador de arquivos do Windows",
            "A03: Entrar no ONE DRIVE do (FINANCEIRO CENTRALNET)",
            "A04: Entrar na pasta do ano correspondente",
            "A05: Entrar na pasta referente ao mês corrente da pasta do ano correspondente",
            "A06: Existe a pasta do dia?",
            "A07: NÃO",
            "A08: Criar a pasta do dia dentro da pasta do mês referente",
            "A09: Abrir o WhatsApp Business em busca dos comprovantes",
            "A10: Entrar no contato onde ficam os comprovantes",
            "A11: Baixar os arquivos dos comprovantes em PDF no computador",
            "A12: Arquivar arquivos na pasta do dia escolhido",
            "A13: Identificar quem solicitou",
            "A14: É necessário enviar esse comprovante?",
            "A15: SIM",
            "A16: Identificar quem solicitou",
            "A17: Quem solicitou o envio?",
            "A18: RH",
            "A19: Entrar no e-mail corporativo",
            "A20: Clicar no botão 'Anexar comprovante'",
            "A21: Anexar o comprovante que está salvo na pasta do ONEDRIVE",
            "A22: Enviar o e-mail",
            "A23: Envio finalizado",
            "A24: OPERACIONAL",
            "A25: Enviar para o supervisor do operacional pelo WhatsApp",
            "A26: Comprovante arquivado",
            "A27: Envio finalizado"
        ],
        "Adição de Funcionário no Plano de Saúde": [
            "A01: Quando tem solicitação de adesão ao benefício",
            "A02: Imprimir formulário",
            "A03: Entregar formulário para o funcionário",
            "A04: Aguardar o preenchimento pelo funcionário",
            "A05: Escanear formulário",
            "A06: Enviar para o plano de saúde HAPVIDA pelo WhatsApp",
            "A07: Os relatórios foram enviados?",
            "A08: SIM",
            "A09: Abrir relatório",
            "A10: NÃO",
            "A11: Abrir site do plano de saúde Hapvida",
            "A12: Clicar em empresa, depois em 'troca de arquivos e relatórios da fatura'",
            "A13: Logar no sistema",
            "A14: Clicar no botão 'Prosseguir'",
            "A15: Buscar arquivos",
            "A16: Avaliar caixa de mês",
            "A17: Selecionar o arquivo",
            "A18: Clicar no botão 'Baixar aqui'",
            "A19: Abrir o arquivo no navegador, salvando o arquivo em PDF",
            "A20: Renomear arquivo diferenciando se é o plano odontológico ou o normal",
            "A21: Entrar no OneDrive 'Financeiro Central Net'",
            "A22: Entrar na pasta do ano referente e depois a do mês",
            "A23: Selecionar pasta",
            "A24: Anexar na pasta o relatório gerado pelo site",
            "A25: Relatório arquivado"
        ],
        "Acompanhamento de Compras no Cartão Corporativo": [
            "A01: Quando há solicitação dos cartões para compra",
            "A02: Separar o cartão com limite para compra",
            "A03: Escrever a senha do cartão no post-it, colando-o no cartão",
            "A04: Aguardar comprovante de pagamento (físico ou digital)",
            "A05: Receber comprovantes de pagamento (físico ou digital)",
            "A06: Abrir planilha de acompanhamento de compras",
            "A07: Preencher informações como data, quem comprou, valor da compra total, se tem parcelas, valor da parcela e a descrição",
            "A08: Salvar planilha com as alterações feitas no computador",
            "A09: Planilha salva"
        ],
        "Consulta e Negativação no Serasa": [
            "A01: Quando há solicitação dos Diretores",
            "A02: Entrar no site do Serasa logando com login e senha",
            "A03: CONSULTA",
            "A04: Apertar no botão 'Consultar'",
            "A05: Preencher informações com CPF ou CNPJ e a origem do documento",
            "A06: Apertar no botão 'Consultar' abaixo da página",
            "A07: Baixar as informações em PDF",
            "A08: Enviar ao solicitante pelo WhatsApp",
            "A09: Consulta finalizada",
            "A10: NEGATIVAÇÃO",
            "A11: Apertar no botão 'Negativar'",
            "A12: Ir na aba 'adicionar devedores' clicando no botão 'Incluir'",
            "A13: Selecionar CPF ou CNPJ",
            "A14: Clicar no botão de preenchimento automático",
            "A15: As informações estão corretas? NÃO",
            "A16: Incluir informações do devedor SIM",
            "A17: Adicionar informações referente ao débito, tais como valor, natureza e data do débito",
            "A18: Apertar em 'Incluir'",
            "A19: Negativação finalizada"
        ],
        "Consulta dos Devedores no Serasa": [
            "A01: Quando há solicitação de consulta dos devedores",
            "A02: Entrar no site do Serasa logando com login e senha",
            "A03: Apertar no botão NEGATIVAR",
            "A04: Ir na aba de relatórios de devedores",
            "A05: Clicar no botão 'listar'",
            "A06: Selecionar o relatório",
            "A07: Clicar na opção de imprimir para imprimir ou baixar o PDF",
            "A08: Salvar o arquivo na área de trabalho",
            "A09: Enviar arquivo no WhatsApp ao solicitante",
            "A10: Relatório de consulta enviado"
        ],
        "Consulta das Notas Fiscais": [
            "A01: Quando há solicitação de consulta",
            "A02: Abrir o navegador Google Chrome",
            "A03: Acessar o E-fisco",
            "A04: Entrar no E-fisco com o certificado digital",
            "A05: Ir na aba 'Buscar'",
            "A06: Procurar por NF-E de download de NF-E",
            "A07: Ir no link em uma nova guia do navegador",
            "A08: Abrir o link",
            "A09: Preencher informações de busca (CNPJ, inscrição estadual, data de início da busca e data de final)",
            "A10: Apertar no botão 'Buscar'",
            "A11: Selecionar a nota",
            "A12: Ir no botão de 'download' baixando arquivo no computador",
            "A13: Extrair arquivo em XML",
            "A14: Abrir o arquivo no 'Danfe View'",
            "A15: Selecionar imprimir escolhendo a opção PDF",
            "A16: Renomear arquivo",
            "A17: Salvar arquivo na área de trabalho",
            "A18: Enviar documento para solicitante",
            "A19: Consulta de notas finalizada"
        ],
        "Geração de Boletos dos Clientes (Escolas)": [
            "A01: Quando há solicitação pela representante institucional",
            "A02: Ir na OS de emissão de nota fiscal",
            "A03: Copiar as informações da OS, como valor e o que se refere àquele boleto",
            "A04: Entrar na aba 'Financeiro' do OMIE",
            "A05: Clicar em 'Cadastrar título avulso', gerando um boleto referente à data utilizada",
            "A06: Selecionar o contrato referente",
            "A07: Verificar o banco de utilização do cliente para ser feito o boleto",
            "A08: Clicar na aba 'portador'",
            "A09: Selecionar banco para pagamento de acordo com a utilização do cliente",
            "A10: Preencher informações de gerenciamento como demonstrativo, valor e data de vencimento",
            "A11: Clicar em 'Gerar título'",
            "A12: Avisar a solicitante via mensagem pelo WhatsApp",
            "A13: Emissão de boleto finalizada"
        ],
        "Fechamento Mensal": [
            "A01: Mensalmente",
            "A02: Entrar no sistema OMIE",
            "A03: Ir na aba 'passo a passo'",
            "A04: Apertar no botão 'conciliar contas correntes' selecionando todas as contas correntes",
            "A05: Apertar no botão 'contas correntes'",
            "A06: Ir na aba 'período' selecionando 'período específico' e adicionando a data",
            "A07: Clicar no botão 'atualizar'",
            "A08: Exportar arquivo gerado no formato Excel, apertando com o botão direito do mouse",
            "A09: Baixar arquivo",
            "A10: Abrir o arquivo excluindo as colunas redundantes e ajustando os espaços em branco",
            "A11: Ajustar arquivo",
            "A12: Enviar arquivo para o gerente do NOC",
            "A13: Conferir as contas por categoria e data",
            "A14: Conferir no link do Power BI, enviado pelo gerente",
            "A15: Está tudo correto?",
            "A16: Levar no sistema OMIE",
            "A17: Ir na aba 'passo a passo'",
            "A18: Apertar no botão 'contas correntes' selecionando todas as contas correntes",
            "A19: Apertar no botão 'conciliar contas correntes'",
            "A20: Ir na aba 'período' selecionando 'período específico' e adicionando a data da inconsistência",
            "A21: Adicionar a data da inconsistência",
            "A22: Clicar no botão 'atualizar' procurando a inconsistência",
            "A23: Corrigir inconsistências",
            "A24: Clicar no botão 'atualizar'",
            "A25: Fechamento mensal finalizado"
        ],
        "Extração de Relatório de Entrada e Saída": [
            "A01: Mensalmente",
            "A02: Entrar no OMIE no computador, pelo navegador Google Chrome",
            "A03: Ir na aba 'Passo a passo'",
            "A04: Apertar na opção '5 - conciliar contas correntes'",
            "A05: Apertar na opção 'Conta corrente', selecionando a opção 'todas as contas correntes'",
            "A06: Ir na aba 'Período' colocando o período específico (mês anterior)",
            "A07: Adicionar a data do período",
            "A08: Apertar no botão 'atualizar'",
            "A09: Clicar em 'Exportar em Excel', baixando o arquivo no computador",
            "A10: Abrir o arquivo no Excel",
            "A11: Ajustar a planilha excluindo as células mescladas e apagando o espaço em branco",
            "A12: Salvar arquivo na pasta do OneDrive - 'FINANCEIRO CENTRALNET' - ANO - MÊS - Extratos",
            "A13: Enviar para o gerente do NOC",
            "A14: Relatório de Entrada e Saída salvo"
        ],
        "Exclusão de Provisão": [
            "A01: Quando há solicitação de exclusão de provisão",
            "A02: Abrir o sistema OMIE",
            "A03: Ir na aba 'Finanças'",
            "A04: Apertar no botão 'Contas a pagar' e depois 'Exibir todas'",
            "A05: Ir na 'Razão Social' buscando nome de compra ou da pessoa que se deseja excluir a provisão",
            "A06: Selecionar todas as contas relacionadas",
            "A07: Apertar no botão 'Excluir as contas selecionadas'",
            "A08: Provisões excluídas"
        ],
        "Exclusão de Pessoas no Serasa": [
            "A01: Quando há solicitação dos Diretores",
            "A02: Entrar no site do Serasa logando com login e senha",
            "A03: Apertar no botão NEGATIVAR",
            "A04: Ir na aba de relatórios de Devedores",
            "A05: Clicar no botão 'listar' escolhendo a pessoa que foi solicitada",
            "A06: Entrar no cadastro da pessoa solicitada",
            "A07: Apertar botão BAIXAR",
            "A08: Preencher o motivo da baixa",
            "A09: Apertar o botão BAIXAR",
            "A10: Exclusão de pessoa realizada"
        ],
        "OS de Cancelamento de Cobrança": [
            "A01: Quando é solicitado o cancelamento de cobrança - Entrar no SGP",
            "A02: Logando com login e senha",
            "A03: Apertar na aba - Relatórios - atendimento - ocorrências",
            "A04: Preencher - O status e o setor com 'Aberta' e 'Financeiro' respectivamente",
            "A05: Ir na OS - De cancelamento de cobrança",
            "A06: Verificar o número - Do contrato requerido na OS",
            "A07: Ir na aba - Do financeiro",
            "A08: Selecionar os títulos",
            "A09: Apertar no botão 'cancelar' - Após ter selecionado todos os contratos referentes",
            "A10: Escrever motivo do cancelamento",
            "A11: Clicar no botão - CANCELAR TÍTULO",
            "A12: Ir na OS - Preenchendo o status como 'finalizada'",
            "A13: OS de cancelamento de cobrança finalizado"
        ],
        "OS de Monitoramento de Pagamento": [
            "A01: Diariamente",
            "A02: Entrar no SGP logando com login e senha",
            "A03: Apertar na aba Relatórios - atendimento - ocorrências",
            "A04: Preencher o status e o setor com 'Aberta' e 'Financeiro' respectivamente",
            "A05: Ir na OS de monitoramento de pagamento",
            "A06: Ir na aba do financeiro",
            "A07: Verificar o boleto analisando se o pagamento foi feito ou não",
            "A08: O boleto foi pago?",
            "A09: Aguardar pagamento pelo cliente",
            "A10: Ir na OS preenchendo o status como 'finalizada'",
            "A11: OS de monitoramento de pagamento finalizada"
        ],
        "OS de Isenção de Taxa": [
            "A01: Diariamente",
            "A02: Entrar no SGP do SGP com login e senha",
            "A03: Logar no sistema",
            "A04: Apertar na aba de relatórios - atendimento - ocorrência",
            "A05: Preencher os campos de status e setor com 'aberta' e 'financeiro'",
            "A06: Ir na OS de isenção de Taxa - 145-Financeiro- isenção de Taxa",
            "A07: Clicar na numeração da OS abrindo em uma nova guia",
            "A08: Ir na aba de ocorrências para conferir o numero do contrato",
            "A09: Ir na aba de financeiro",
            "A10: Conferir os boletos se eles foram gerados ou não",
            "A11: O boleto foi gerado?",
            "A12: Copiar informações do cliente",
            "A13: Enviar informações para Supervisor Operacional pelo WhatsApp",
            "A14: Aguardar a geração de boletos",
            "A15: Ir na OS",
            "A16: Atualizar o status da OS para encerrado",
            "A17: OS finalizada"
        ],
        "OS de Desvinculação do ONU": [
            "A01: Quando há solicitação de cancelamento de contrato",
            "A02: Cadastrar ocorrência",
            "A03: Selecionar o contrato e serviço da ocorrência",
            "A04: Preencher informações com a empresa do boleto gerado, o setor do estoque e o responsável pelo estoque",
            "A05: Escolher o tipo de ocorrência escolhendo a opção - Desvincular o ONU",
            "A06: Selecionar origem",
            "A07: Atualizar informações da OS com status e conteúdo com Desvincular o ONU",
            "A08: Fazer OS Externa",
            "A09: Preencher informações com o motivo e nome do responsável",
            "A10: Clicar em Cadastrar",
            "A11: Cadastro de OS de Desvincular o ONU finalizado"
        ],
        "OS de Cancelamento de Contrato e Título": [
            "A01: Quando há solicitação de cancelamento de contrato",
            "A02: Entrar no SDP através do navegador de internet",
            "A03: Logar no SDP com Login e Senha",
            "A04: Ir na aba de relatórios de atendimento ocorrências",
            "A05: Preencher o status e o setor como Aberto e Financeiro respectivamente",
            "A06: Ir na OS de cancelamento de contrato",
            "A07: Ir na aba de ocorrências",
            "A08: Preencher informações da OS com status e conteúdo com Cancelamento do contrato",
            "A09: Ir na OS interna no contrato",
            "A10: Ir na aba no contrato",
            "A11: Ir na aba Motivo",
            "A12: Escrever Desconexão ONU",
            "A13: Confirmar saída do cliente no equipamento",
            "A14: Confirmar ONU",
            "A15: Ir na aba de contrato",
            "A16: Dar baixa no contrato",
            "A17: Baixar título no Sicredi",
            "A18: Confirmar boleto",
            "A19: Verificar aditivo referente a outro equipamento",
            "A20: Verificar OS se não houver aditivo em aberto",
            "A21: Enviar e-mail para o cliente do protocolo de cancelamento",
            "A22: Alterar valor",
            "A23: Confirmar pagamento",
            "A24: Realizar baixa de título e contrato",
            "A25: Informar cliente",
            "A26: Enviar e-mail para financeiro do cancelamento",
            "A27: Ticket finalizado"
        ],
        "OS de Cancelamento de Contrato": [
            "A01: Quando possui solicitação de cancelamento de contrato",
            "A02: Entrar no SGP através do navegador de Internet",
            "A03: Logar no SGP com Login e Senha",
            "A04: Ir na aba de relatórios - atendimentos - ocorrência",
            "A05: Preencher o status e setor como: Aberta e Financeiro respectivamente",
            "A06: Ir na OS de cancelamento de contrato",
            "A07: Entrar no cadastro do cliente",
            "A08: Conferir numeração do contrato do cliente para cancelamento",
            "A09: Ir na aba de contratos",
            "A10: Apertar no botão 'Status'",
            "A11: Ir na opção de status preenchendo com 'cancelado'",
            "A12: Preencher informações colocando o motivo e observações: cancelamento",
            "A13: Apertar no botão de cadastrar",
            "A14: Ir na OS mudando o status para 'finalizada'",
            "A15: OS de Cancelamento de Contrato Finalizada"
        ],
        "Emissão das Notas Fiscais - Serviço": [
            "A01: Mensalmente (todo dia 01)",
            "A02: Puxar a coluna GISSARA de empresa no sistema GISSARA",
            "A03: Adicionar relação de clientes alinhando uma planilha com a sala de cliente no SGP",
            "A04: Ir na aba Financeiro",
            "A05: Ir no botão notas fiscais",
            "A06: Conferir as notas no sistema SGP e no sistema IVA se possui alguma particularidade",
            "A07: Existe alguma particularidade?",
            "A08: SIM",
            "A09: Ir no botão 'notas fiscais' pela data emissão",
            "A10: Identificar a nota 'ligar'",
            "A11: Apertar no botão alterar as informações como disposição de data informando o mês atual",
            "A12: Apertar no botão 'salvar' do mês atual criando os boletos 'gerar'",
            "A13: Ir no boleto",
            "A14: Selecionar",
            "A15: Clicar no botão de 'gerar'",
            "A16: Ir na aba 'financeiro' clicando depois em 'notas fiscais'",
            "A17: Apertar no botão 'salvar'",
            "A18: Procurar a nota que foi emitida",
            "A19: É necessário enviar a nota pelo e-mail?",
            "A20: SIM",
            "A21: Apertar no botão",
            "A22: Selecionar o e-mail do cliente desmarcando a opção 'sem NF-e' e 'Enviar NF-e'",
            "A23: Apertar no botão 'Enviar NF-e'",
            "A24: Nota enviada",
            "A25: NÃO",
            "A26: Apertar no botão 'opções'",
            "A27: Selecionar a opção boleto e 'sem boleto'",
            "A28: Imprimir a nota",
            "A29: Avisar para solicitação de cliente pela solicitação do SGP"
        ],
        "Confirmação de Pagamento dos Boletos das Escolas": [
            "A01: Quando há solicitação pela representante comercial",
            "A02: Aguardar o envio do comprovante pela representante comercial",
            "A03: Conferir o comprovante valor, conta, data de pagamento",
            "A04: Qual foi a forma de pagamento? PIX",
            "A05: Abrir a conta do Sicredi",
            "A06: Ir na aba de 'fazer um pix' e depois em 'movimentações'",
            "A07: Procurar a data que se refere à data de pagamento",
            "A08: Selecionar a movimentação específica, clicando em cima dela",
            "A09: Conferir os dados do pagador como nome, instituição, data, hora e o valor BOLETO",
            "A10: Abrir a conta do Sicredi no computador",
            "A11: Apertar no botão 'Cobranças'",
            "A12: Apertar no botão 'Arquivos de retorno'",
            "A13: Observar o comprovante olhando a data de pagamento",
            "A14: Puxar retorno do dia posterior à data de pagamento",
            "A15: Abrir arquivo baixado no bloco de notas",
            "A16: Buscar nome apertando um Control + F",
            "A17: Entrar no SGP",
            "A18: Ir na aba de 'financeiro'",
            "A19: Identificar o boleto da baixa selecionando o boleto",
            "A20: Clicar no botão de recebimento",
            "A21: Adicionar informações adicionar ponto de recebimento, selecionar conta em que o cliente pagou, incluir forma de pagamento",
            "A22: Apertar no botão de 'receber'",
            "A23: Pagamento confirmado"
        ],
        "Geração de Boletos dos Clientes (Geral)": [
            "A01: Quando há solicitação de geração de boletos",
            "A02: Ir na OS referente à geração de boletos no SGP",
            "A03: Copiar as informações da OS, como valor e a que se refere aquele boleto",
            "A04: Entrar na aba 'Financeiro' no OMIE",
            "A05: Clicar em 'Cadastrar título avulso', gerando um boleto referente à data utilizada",
            "A06: Selecionar o contrato referente à geração do boleto",
            "A07: Verificar o banco de utilização do cliente para ser feito o boleto",
            "A08: Clicar na aba 'portador'",
            "A09: Selecionar banco para pagamento de acordo com a utilização do cliente",
            "A10: Preencher informações de gerenciamento, como demonstrativo, valor e data de vencimento",
            "A11: Clicar em 'Gerar título'",
            "A12: Avisar a solicitante via mensagem pelo WhatsApp",
            "A13: Emissão de boleto finalizada"
        ],
        "Manutenção da Planilha": [
            "A01: Após a confirmação do recebimento do boleto",
            "A02: Entrar na pasta FINANCEIRO CENTRALNET",
            "A03: Entrar na pasta do ano e depois na do mês referente",
            "A04: Entrar na pasta de funcionários",
            "A05: Abrir documentos, a planilha de adição do plano de saúde e relatório gerado pelo site do hapvida",
            "A06: Conferir os documentos olhando nome do funcionário, valor do funcionário, taxa de contribuição sindical e taxa de plano",
            "A07: Os valores batem?",
            "A08: Adicionar os valores que faltam na planilha",
            "A09: Salvar planilha no caminho: OneDrive - FINANCEIRO CENTRAL NET - pasta do ano - pasta do mês - pasta de funcionários",
            "A10: Abrir e-mail corporativo",
            "A11: Criar o e-mail direcionando ao do supervisor do RH, preenchendo com o assunto e anexando a planilha",
            "A12: Planilha enviada"
        ],
        "Lançamentos Provisões Anuais": [
            "A01: Anualmente (em Dezembro)",
            "A02: Entrar no OMIE no computador, pelo navegador Google Chrome",
            "A03: Ir na aba 'Finanças'",
            "A04: Ir na aba 'Contas a pagar'",
            "A05: Ir na aba 'Exibir todas'",
            "A06: Ir na aba 'Previsão de pagamento'",
            "A07: Ir no 'filtro' para filtrar o período relacionado",
            "A08: Selecionar o mês que deve ser filtrado",
            "A09: Clicar em 'exportar planilha', baixando automaticamente no computador",
            "A10: Ir em cada pagamento verificando se ele é fixo ou não",
            "A11: Ir na aba 'Finanças' no OMIE",
            "A12: Apertar em 'Incluir'",
            "A13: Inserir dados da provisão, como razão social ou nome fantasia, data de pagamento e valor",
            "A14: Adicionar as provisões do próximo ano",
            "A15: Apertar no botão 'Salvar'",
            "A16: Lançamento e provisões anuais concluídos"
        ],
        "Emissão das Notas Fiscais - Vendas": [
            "A01: Quando o supervisor comercial solicita",
            "A02: Entrar no SGP logando com login e senha",
            "A03: Ir na aba de relatórios",
            "A04: Ir na aba de atendimentos",
            "A05: Ir na aba de ocorrências",
            "A06: Ir na aba administrativas",
            "A07: Preencher com login e senha",
            "A08: Ir na aba nota fiscal",
            "A09: Atualizar com NF-e emitida",
            "A10: Gerar chave de acesso",
            "A11: Informar no campo chave de acesso",
            "A12: Inserir status PRONTO",
            "A13: Enviar para financeiro supervisor financeiro",
            "A14: Cliente já enviou endereço? SIM",
            "A15: Se não enviar para OM da Central SGP RECEPTOR",
            "A16: Atualizar SIM",
            "A17: Há um desconto a ser inserido na nota? NÃO",
            "A18: Inserir desconto no campo desconto",
            "A19: Atualizar informando desconto",
            "A20: Enviar para SGP financeiro supervisor financeiro",
            "A21: Enviar para financeiro",
            "A22: Cliente confirma recebimento da NF? SIM",
            "A23: Emissão de nota fiscal concluída"
        ],
        "OS de Reclamação de Fatura (BOLETO NÃO EXCLUÍDO)": [
            "A01: Quando o supervisor do RH solicita",
            "A02: Entrar no SDP através do navegador de Internet",
            "A03: Logar no SDP com Login e Senha",
            "A04: Ir na aba de relatórios - de atendimentos ocorrências",
            "A05: Preencher o status e o setor como. Aberto e Financeiro",
            "A06: Ir na OS de reclamação de fatura",
            "A07: Ir na aba de documentos",
            "A08: Baixar comprovante que retira no site do Sicredi ou no aplicativo Sicredi",
            "A09: Abrir a conta do banco referente ao comprovante",
            "A10: Entrar na conta do banco referente ao boleto",
            "A11: Ir na aba de cobranças",
            "A12: Ir na seção consulta de títulos",
            "A13: Adicionar informações Data de vencimento e nos campos em aberto completo",
            "A14: Clicar em pesquisar Houve pagamento?",
            "A15: Anexar a supervisão do RH que o pagamento não foi realizado",
            "A16: Baixar boleto antigo Cancelado com a vencimento do atual",
            "A17: Estornar o boletos Preenchendo o status como finalizado",
            "A18: Ir na OS",
            "A19: Anexar a supervisão do RH que o pagamento foi realizado",
            "A20: OS de Reclamação de fatura finalizada"
        ],
        "OS de Reclamação de Fatura": [
            "A01: Quando o supervisor do RH solicita",
            "A02: Entrar no SDP através do navegador de Internet",
            "A03: Logar no SDP com Login e Senha",
            "A04: Ir na aba de relatórios - atendimentos - ocorrências",
            "A05: Preencher o status e o setor como. Aberto e Financeiro respectivamente",
            "A06: Ir na OS de reclamação de fatura",
            "A07: Ir na aba de documentos",
            "A08: Baixar comprovante que retira no site do Sicredi ou no aplicativo Sicredi",
            "A09: Abrir a conta do banco referente ao comprovante",
            "A10: Ir na aba de cobranças",
            "A11: Ir na seção Arquivos de retorno",
            "A12: Puxar retorno Do fechamento do dia de pagamento",
            "A13: Salvar o arquivo Em formato OFX",
            "A14: Renomear o nome Do cliente no padrão: NNNN+ NNNNN+ Mês e Ano + PF",
            "A15: Procurar na ficha O cliente pagou na data definida?",
            "A16: Ir na aba Do financeiro",
            "A17: Baixar o boleto Da baixa",
            "A18: Selecionar o boleto De recebimento",
            "A19: Clicar no botão De recebimento",
            "A20: Adicionar informações Nome do recebedor e forma de pagamento (transferência bancária)",
            "A21: Alterar valor Do boleto atualizando para o valor de acordo com os juros",
            "A22: Salvar título Do SX para 'encerrado'",
            "A23: Atualizar o título No DS. para 'encerrado'",
            "A24: Anexar a supervisão Do RH que o pagamento foi realizado",
            "A25: OS de Reclamação de fatura finalizada"
        ],
        "Controle PAG": [
            "A01: Diariamente",
            "A02: Entrar no site do PagSeguro",
            "A03: Logar no site do PagSegura com Login e Senha",
            "A04: Ir na aba de extratos e relatórios",
            "A05: Apertar o botão na parte de relatórios de venda indo no dia desejado",
            "A06: Apertar em 'Aplicar' selecionando o CSV",
            "A07: Exportar planilha clicando no botão 'Exportar'",
            "A08: Clicar em ver 'arquivos exportados'",
            "A09: Conferir data selecionada verificando se é do dia atual",
            "A10: Selecionar o dia",
            "A11: Baixar planilha abrindo a planilha no formato de Excel",
            "A12: Editar formato da planilha, apagando o status, código e ID da transação",
            "A13: Salvar planilha com devidas alterações",
            "A14: Entrar no site do PagSeguro",
            "A15: Logar no site do PagSeguro com Login e Senha",
            "A16: Ir na aba de extratos e relatórios",
            "A17: Apertar o botão na parte de 'Extrato de transações de venda', indo no dia desejado",
            "A18: Preencher o status buscando por todas as transações aprovadas",
            "A19: Apertar em 'aplicar' selecionando o CSV",
            "A20: Exportar planilha clicando no botão exportar",
            "A21: Clicar em 'ver arquivos exportados'",
            "A22: Conferir data selecionada verificando se é do dia atual",
            "A23: Selecionar o dia",
            "A24: Baixar planilha abrindo a planilha no formato de Excel",
            "A25: Copiar código de venda que está na planilha",
            "A26: Colar na planilha de modelo do dia",
            "A27: Entrar no SGP",
            "A28: Ir na aba de relatórios - atendimento - ocorrencia",
            "A29: Selecionar o numero da ocorrencia",
            "A30: Clicar em consultar aguardando o SGP buscar as ocorrencias",
            "A31: Conferir o dia se é o dia atual ou não",
            "A32: Abrir as ocorrencias em guias separadas",
            "A33: Conferir ocorrencias o código de venda, valor de pagamento e o cartão de crédito",
            "A34: Os valores batem?",
            "A35: Caso não: Contatar o supervisor do operacional, aguardando os dados corretos",
            "A36: Caso sim: Entrar no SGP",
            "A37: Ir na aba da ocorrencia abrindo a aba do Financeiro",
            "A38: Selecionar o título",
            "A39: Clicar em 'receber'",
            "A40: Preencher as informações com o ponto de recebimento (escritorio) e a forma de pagamento (cartão de credito)",
            "A41: Alterar valor",
            "A42: Dar baixa no titulo",
            "A43: Entrar no SGP",
            "A44: Ir na OS de cartão",
            "A45: Preencher statur da OS para encerrado",
            "A46: Recebimento realizado"
        ]
    }
}

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
