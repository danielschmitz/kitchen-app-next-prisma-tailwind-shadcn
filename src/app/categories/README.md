```
└── 📁categories
    └── 📁del
        └── 📁[id]
            └── page.tsx
    └── 📁edit
        └── 📁[id]
            └── form.tsx
            └── page.tsx
    └── layout.tsx
    └── loading.tsx
    └── 📁new
        └── error.tsx
        └── page.tsx
    └── page.tsx
    └── README.md
```

- error.tsx controla as mensagens de erro, assim como loading.tsx a mensagem de loading
- cartegories se assemelha ao remix, mas os metodos loader e action podem ter qualquer nome
- edit.tsx tem um form que é "use client" para usar o useFormState e montar o form
- form.tsx que usa useFormState para saber o estado do formulario e o page.tsx pode retornar os erros
- form.tsx tambem usa o useFormStatus para controlar o loading do botao de submit

- error.tsx do delete verifica de categoria pode ser deletada, caso tenha produtos

A dinamica do edit é assim. Page.tsx é use server e adiciona um client que pode chamar o server

- componente1: server mode, inclui um componente client mode
- componente2: client mode, adicionado pelo server, e pode chamar um método do server
