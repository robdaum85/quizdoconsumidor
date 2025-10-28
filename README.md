# 🧩 Quiz do Consumidor — Expo Favela 2025

> Projeto educativo interativo desenvolvido para a **Secretaria Estadual de Defesa do Consumidor (SEDCON RJ)**, apresentado durante a **Expo Favela Innovation 2025**, no Rio de Janeiro.  
> O objetivo: transformar o **Código de Defesa do Consumidor (CDC)** em uma experiência divertida, acessível e mensurável — mesmo **sem internet ou backend**.

---

## 🏁 Contexto

Durante a Expo Favela 2025, a SEDCON buscava uma forma lúdica e rápida de ensinar o público sobre seus direitos enquanto coletava contatos e percepções reais de consumidores.  
O desafio: criar uma ferramenta **offline-first**, com **baixo custo**, **visual atraente**, e **métrica de impacto** para relatórios institucionais.

O resultado foi o **Quiz do Consumidor**, uma aplicação estática, gamificada e responsiva, desenvolvida em poucos dias e utilizada em totens, tablets e celulares durante todo o evento.

---

## ⚙️ Stack Técnica

| Camada | Tecnologia |
|--------|-------------|
| **Front-end** | HTML5 + CSS3 + JavaScript puro |
| **Design System** | Custom tokens estilo Tailwind (variáveis CSS e dark theme) |
| **Coleta de dados** | Google Forms (envio de nome/telefone) + `.txt` local offline |
| **Métricas** | Google Analytics 4 (GA4) com eventos personalizados |
| **Hospedagem** | Arquivos estáticos (Vercel / modo kiosk local) |
| **Banco de perguntas** | Array `BANK` com 32 perguntas baseadas no CDC |
| **Controle de sessão** | LocalStorage + lógica de “anti-repetição” de perguntas |

---

## 🧠 Lógica do Jogo

1. O jogador inicia a partida (`quiz_start`).
2. São sorteadas **5 perguntas** aleatórias entre 32.
3. Cada pergunta possui **feedback visual imediato** e **pontuação dinâmica**.
4. Ao final, o jogador insere **nome e telefone**, enviados ao **Google Forms** (com fallback `.txt` offline).
5. A pontuação é exibida com efeitos visuais e opção de **“Jogar novamente”** (`quiz_restart`).

🎨 **Extras**
- Modo **dark**, cores institucionais (verde SEDCON, amarelo PROCON, vermelho CDC);
- Suporte a **tema, som e mute**;
- Layout **mobile-first** otimizado para totem e tablets;
- Mensagens educativas após cada resposta.

---


## 🔍 Insights e impacto

### 🔴 Maiores erros observados
- “Venda casada” e “taxas adicionais” (média de erro: 68%)
- “LGPD e compartilhamento de dados” (64%)
- “Frete grátis enganoso” (61%)

### 🟢 Maiores acertos
- “Propaganda enganosa e oferta não cumprida” (87%)
- “Direito de arrependimento em 7 dias” (84%)
- “Cobrança vexatória é proibida” (81%)

💡 Esses resultados inspiraram a criação de **séries educativas** (“Errei no Quiz”) com vídeos curtos explicando cada tema com base nas estatísticas reais de erro.

---

## 🧩 Estrutura do Projeto

quiz-consumidor/
├── index.html
├── style.css
├── app.js
├── assets/
│ ├── logo-sedcon.png
│ ├── logo-procon.png
│ ├── icon.ico
│ └── sounds/
├── data/
│ ├── BANK.js # perguntas e respostas (CDC)
│ ├── pick.js # sorteio sem repetição
│ └── results.txt # fallback offline
└── README.md


---

## 🧮 Eventos monitorados (GA4)

| Evento | Descrição |
|--------|------------|
| `quiz_start` | Início da partida |
| `answer_click` | Clique em alternativa |
| `answer_result` | Resultado da resposta (acerto/erro) |
| `quiz_finish` | Conclusão do quiz |
| `play_again_click` | Rejogar |
| `mute_toggle` / `theme_change` | Interações de UI |

Esses eventos permitem gerar métricas como:
- Taxa de conclusão (`quiz_finish / quiz_start`);
- Média de respostas por jogador;
- Replays por sessão.

---

## 🚀 Próximos passos

- [ ] Versão 4.0 com **banco de respostas local (IndexedDB)**;
- [ ] Dashboard interno de **erros e acertos por tema**;
- [ ] Modo **online público** para escolas e campanhas;
- [ ] Exportação automática para planilha do Procon RJ;
- [ ] Tradução simplificada para **termos populares (botão "Entendi Melhor")**;
- [ ] Relatórios automáticos de **alcance e aprendizado**.

---

## 🧩 Lições aprendidas

- **Interatividade converte** — mesmo um quiz simples cria engajamento profundo.
- **Dados offline são valiosos** — com boas rotinas de exportação, é possível medir impacto real.
- **UX importa mais que framework** — performance e clareza venceram qualquer complexidade.
- **Gamificação funciona** — aprendizado + diversão = engajamento e memorização.

---

## 💬 Créditos

**Desenvolvimento e UX:** Robson Junior  
**Cliente:** Secretaria Estadual de Defesa do Consumidor (SEDCON RJ)  
**Evento:** Expo Favela Innovation 2025 — Rio de Janeiro  
**Parcerias:** Procon RJ / Governo do Estado do RJ

---

## 🧠 Licença

MIT License © 2025  
Este projeto é livre para uso educacional, replicação e aprimoramento, desde que mantidos os créditos e referências à equipe técnica e à SEDCON RJ.

---

> _“Se é possível ensinar direitos em 90 segundos, imagine o impacto disso em uma geração inteira.”_  
> — Robson Junior

Seguimos ao encontro do mais forte!

