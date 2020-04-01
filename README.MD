# STARTKIT_SEQUELIZE

É UM startkit que contem as configurações iniciais de um projeto utilizando o ORM sequelize.

## FEATURES PRONTAS

- CONEXÃO COM A BASE DE DADOS
- DIRETÓRIOS ESCALÁVEIS
- MUITOS PACOTES ESTALADOS
- PRÉ-CONFIGURAÇÃO PARA O TDD
- AUTENTICAÇÃO JWT

## INSTRUÇÕES PARA UTILIZAÇÃO

Faça a instalação das dependencias com

```sh
yarn
```

E agora mude as variáveis de ambientes.

## COMANDOS UTILIZADOS INICIALMENTE

```sh
// criação de migration
yarn sequelize migration:create --name=create-users
```

## SERVER LOCAL

Para inicializar o server execute

```sh
yarn start
```

Um server será aberto na rota http://localhost:3333/. Utilize ela para explorar esta API
