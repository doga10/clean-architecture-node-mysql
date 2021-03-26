# Clean Architecture Node MySQL

###> Arquitetura de pastas
* tests: pasta dedicada para os testes da aplicação
* src
    * data:
      * usecases: pasta onde fica a logica da aplicação. Por exemplo o cadastro de usuário, la precisa validar se o email ja existe caso exista não cadastrar.
      * protocols: pasta onde fica as interfaces utilizadas no use case de data
    
    * domain: 
      * entities: pasta onde fica as entidades da aplicação
      * usecases: pasta onde fica os casos de uso que o software vai realizar. Por exemplo um cadastro de usuário
    
    * infra: pasta onde fica concentrada as bibliotecas externas, por exemplo banco de dados, sistema de fila como RabbitMQ, Kafka e etc, libs de conexão HTTP dentre outras coisas.
    
    * main:
      * adapters: pasta onde fica os adaptadores. por exemplo um adaptador para padronizar o retorno da aplicação e padronizar o request da aplicação
      * config: pasta onde fica toda as configuração da aplicação, tais como, middlewares globais, rotas, framework node utilizadado e etc.
      * decorators: pasta onde fica os interceptor da sua aplicação. Por exemplo um tracker de error, tracker de log dentre outros
      * factories: pasta onde fica o agrupamento de todos as outras pastas como data, domain, presentation e validation
      * middlewares: pasta onde fica os middlewares globais. por exemplo o cors, body-parser e etc...
      * routes: pasta onde fica todas as rotas da aplicação
    
    * presentation: 
      * errors: pasta de helpers para vacilitar os errors da aplicação
      * controllers: pasta responsável pelo uso do caso de use do dominio e quando precisa utiliza a camada de validação para validar os dados passados
      * helpers/http: pasta responsável pelo padrão de retorno dos endpoints
      * middlewares: pasta responsável por guardar os middlewares personalizados da aplicação. Por exemplo o middleware de auth 
      * protocols: pasta onde fica todas as interface utilizadas na pasta de presentation
        
    * validation: 
      * protocols: pasta onde fica as interfaces utilizadas na pasta de validation 
      * validators: pasta responsável pela a logica de validação, por exemplo, validar um campo de email, validar quantidade de caracteres de um atributo e etc.
