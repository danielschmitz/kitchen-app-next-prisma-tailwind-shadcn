```
└── 📁products
    └── actions.tsx
    └── DeleteDialog.tsx
    └── 📁edit
        └── 📁[id]
            └── page.tsx
    └── layout.tsx
    └── loading.tsx
    └── 📁new
        └── page.tsx
    └── page.tsx
    └── productform.tsx
    └── README.md
```

A parte CRUD de Products usa react hook form juntamente com Form do shadcn

Separei todo o acesso ao banco em actions.tsx, que é um server component, assim o client component chama ele mais facil. O actions não está global a app porque ele tem redirects específicos de preducts

Todo componente client que precisa acessar algo do server precisa estar separado, é a melhor tecnica no next 14, separar pequenos compoenntes client que acessam o server

o productform usa o form do shadcn e do react hook form e a validacao com zod

tanto new quanto edit chamam o productform

categories/edit e categories/del e products/edit possuem o slug [id] e a interface PageParams que pode ser gobal, tipo um PageParamsWithId.

