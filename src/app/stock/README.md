

ideia inicial é fazer um data table

o formulario pra incluir stock  posusi um campo chamado product com um combo com pesquisa (Combo de pesquisa ainda nao foi feito)

O Data Table se divide em 2 componentes, um com colunas e outro é o datatable


```
└── 📁stock
    └── actions.tsx
    └── DataColumnsStock.tsx
    └── DataTableStock.tsx
    └── layout.tsx
    └── 📁new
        └── page.tsx
    └── page.tsx
    └── README.md
    └── StockForm.tsx
```


```mermaid
flowchart TD
    A(["stock/page.tsx"])
    B["stock/DataColumnsStock"]
    D(["stock/actions.tsx"])
    C["stock/DataTableStock"]
    subgraph 'use server'
      A
      D
      subgraph "'use client'"
      B
      C
      end
    end
    A-->C
    A-->B
    B-->D
  
```

