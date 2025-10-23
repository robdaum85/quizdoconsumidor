
---

### 🔐 Segurança e Privacidade
- Não há **coleta de dados pessoais** (nome é local).
- Nenhuma comunicação com APIs externas (**exceto Google Analytics**, se ativo).
- `localStorage` guarda apenas: **ranking** e **tema** selecionado.

---

### 🧩 Dependências
- **Zero** bibliotecas externas (JavaScript puro).
- Compatível com **Chrome/Edge ≥ 95** e **Android WebView ≥ 11**.

---

### 🧰 Manutenção e Atualizações

| Tipo                 | Ação                                                         |
|---------------------|---------------------------------------------------------------|
| **Perguntas**       | Adicionar novos objetos no array `BANK[]`.                    |
| **Cores**           | Editar variáveis no `:root` do CSS.                           |
| **Nº de perguntas** | Alterar `CONFIG.N`.                                           |
| **Tempo de jogo**   | Alterar `CONFIG.TIME`.                                        |
| **Ranking local**   | Funções `addBoard()` e `renderBoard()` (persistência local).  |

---

### 🧮 Métricas (Google Analytics)
Eventos básicos (se `gtag.js` estiver ativo):
- `start_game`
- `win`
- `game_over`
- `reset`
- `theme_change`

> **Observação:** Em ambientes 100% offline, recomenda-se desabilitar o GA.

---

## 📘 2️⃣ Manual Rápido de Uso (Equipe de Campo)

### 🎯 Objetivo
Permitir que o operador use o quiz **sem internet**, garantindo a entrega de **brindes** conforme o desempenho.

### 🔌 Inicialização
1. Ligar o **Totem Digital Loginter** (Android 11, 43").  
2. Conectar-se à rede **uma única vez** para abrir o jogo no navegador.  
3. Tocar em **“Adicionar à tela inicial”** → cria o **ícone PWA**.  
4. A partir daí, o jogo funciona **offline**.

### 🕹️ Uso básico
1. Tocar no ícone **Quiz do Consumidor**.  
2. Digitar o **nome** do participante.  
3. Pressionar **INICIAR**.  
4. O jogador tem **60 s** e **3 vidas** para responder **5 perguntas**.  
5. Ao final, o sistema exibe o tipo de **brinde** e atualiza o **ranking local**.

### 🏆 Regras de premiação

| Desempenho | Prêmio           |
|------------|------------------|
| 5 acertos  | Melhor Prêmio    |
| 3–4 acertos| Prêmio Médio     |
| 0 acertos  | “CDC Comentado”  |

### 🔧 Controles de staff

| Botão          | Função                                             |
|----------------|-----------------------------------------------------|
| **Reset**      | Reinicia o quiz (limpa a sessão atual)              |
| **Som 🔊/🔇**   | Ativa/desativa os efeitos sonoros                   |
| **Tema**       | Alterna Padrão / Alto Contraste / Daltônico         |
| **Limpar Ranking** | Zera a tabela local de pontuações              |

### 🧠 Dicas de operação
- Após cada jogador, toque em **“JOGAR NOVAMENTE”**.  
- Se travar, **feche e reabra** o app (não precisa de internet).  
- O **ranking é local** e **não sincroniza** entre totens.  
- Use **tela cheia** para ocultar a barra de endereços do navegador.

### 📄 Auditoria / Logs
- Pontuações: `localStorage['procon_board']`.  
- Exportar via DevTools → Application → Local Storage.  
- Código-fonte: **https://github.com/robdaum85/quizdoconsumidor**.

---
