---
layout: post
title:  "Configurando um ambiente local para desenvolver com Jekyll no Ubuntu Server 24.04"
date:   2026-05-16 21:42:04 +0000
categories: jekyll update
---

Neste post mostro como configurar um ambiente local funcional para desenvolver com Jekyll no Ubuntu Server 24.04, incluindo instalação do Ruby, Bundler, correção de problemas de compatibilidade com SASS e atualização do tema minima.

Apesar de o Jekyll ser a ferramenta oficial do GitHub Pages, colocar um ambiente local para funcionar de maneira estável pode ser mais complicado do que parece — principalmente por causa das diferenças entre versões suportadas pelo GitHub Pages e as Gems mais recentes disponíveis atualmente.

Depois de vários testes, reinstalações e erros de compatibilidade, consegui montar um ambiente simples, funcional e previsível usando o Jekyll 3.10.0.

A ideia é que você consiga subir um ambiente funcional rapidamente e evitar os mesmos perrengues.


# Por que usar Jekyll?

O Jekyll é um gerador de sites estáticos escrito em Ruby e integrado nativamente ao GitHub Pages. Isso significa que você pode:

* escrever posts em Markdown;
* versionar tudo no Git;
* hospedar gratuitamente no GitHub Pages;
* manter um blog extremamente leve e rápido;
* evitar dependência de banco de dados ou painéis administrativos.

Além disso, o fluxo de desenvolvimento local é simples depois que o ambiente está configurado corretamente.


# Ambiente utilizado

A configuração abaixo foi testada em:

* **Sistema operacional:** Ubuntu Server 24.04
* **CPU:** 1 vCPU
* **RAM:** 2 GB
* **Disco:** 15 GB

Esse ambiente foi suficiente para desenvolver e testar o blog localmente sem problemas.


# Instalação do Ruby e dependências

A documentação oficial do Jekyll foi a principal referência:

[Documentação oficial do Jekyll](https://jekyllrb.com/docs/?utm_source=chatgpt.com)

Primeiro atualize os pacotes do sistema e instale o Ruby junto das dependências necessárias:

```bash
sudo apt-get update && sudo apt-get install ruby-full build-essential zlib1g-dev
```


# Configurando o diretório de Gems

Um detalhe importante é evitar instalar Gems como root.

Configure um diretório de Gems no seu usuário adicionando as variáveis abaixo ao `~/.bashrc`:

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Isso evita diversos problemas de permissão durante a instalação e atualização de Gems.


# Instalando Bundler e Jekyll

Instale primeiro o Bundler:

```bash
gem install bundler
```

Aqui está o principal ponto deste tutorial.

> As versões mais recentes do Jekyll podem apresentar problemas de compatibilidade com o tema `minima` e com o SASS. Depois de vários testes, a versão `3.10.0` foi a que funcionou de forma mais estável no Ubuntu Server 24.04.

Esse problema é conhecido pela comunidade e pode ser acompanhado na issue oficial do tema Minima:

[Issue #836 do tema Minima no GitHub](https://github.com/jekyll/minima/issues/836?utm_source=chatgpt.com)

As falhas normalmente aparecem durante o `bundle install` ou ao executar o servidor local com `bundle exec jekyll serve`, principalmente por incompatibilidade entre Gems e versões suportadas pelo GitHub Pages.

Para evitar esses problemas, instale explicitamente a versão 3.10.0 do Jekyll:

```bash
gem install jekyll -v 3.10.0
```

Isso ajudou a evitar:

* erros relacionados ao SASS;
* incompatibilidade com versões do tema `minima`;
* falhas durante o `bundle exec jekyll serve`;
* diferenças entre o ambiente local e o GitHub Pages.

O ambiente ficou muito mais previsível e estável para desenvolvimento local.


# Criando o projeto

Agora crie um novo site Jekyll:

```bash
jekyll new myblog
```

Entre no diretório:

```bash
cd myblog
```


# Executando o servidor local

Suba o ambiente local com:

```bash
bundle exec jekyll serve --host=0.0.0.0
```

Depois disso, basta acessar:

```text
http://IP_DA_VM:4000
```

Se estiver usando uma máquina virtual, lembre-se de liberar a porta 4000 no firewall e garantir que a rede da VM permita acesso externo.


# Atualizando o tema Minima

Outro detalhe importante é que o Jekyll 3.10.0 normalmente instala uma versão antiga do tema `minima`.

Para atualizar para uma versão mais recente, edite o arquivo `Gemfile` e substitua:

```diff
- gem "minima", "~> 2.0"
+ gem "minima", "~> 2.5.1"
```

Depois execute:

```bash
bundle install && bundle update
```

E reinicie o servidor:

```bash
bundle exec jekyll serve --host=0.0.0.0
```


# Problemas que essa configuração evitou

Esses foram alguns dos erros que encontrei usando versões mais recentes do Jekyll:

* incompatibilidade com SASS;
* problemas ao carregar o tema `minima`;
* Gems instaladas em diretórios protegidos;
* erros de permissão;
* diferenças entre versões suportadas pelo GitHub Pages e versões locais.

Fixar a versão do Jekyll resolveu o ambiente de maneira muito mais previsível.


# Considerações finais

Apesar de o Jekyll parecer simples à primeira vista, a configuração inicial pode ser frustrante dependendo da versão do Ruby, do Ubuntu e das Gems utilizadas.

Depois que o ambiente está funcionando, porém, a experiência fica excelente:

* escrita rápida em Markdown;
* integração natural com GitHub;
* deploy simples;
* ambiente extremamente leve;
* controle total sobre o conteúdo e o tema.

Esse setup foi o primeiro que consegui deixar realmente estável no Ubuntu Server 24.04. Espero que ele economize algumas horas de troubleshooting para quem estiver começando.
