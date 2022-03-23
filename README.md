# :beer: API-PUB
<h3>🚀 Projeto de conclusão módulo 4 - Resilia</h3>

 # Sobre o projeto
<p> Desenvolvimento de uma API com o tema PUB, onde você consegue utilizar o CRUD(criar, atualizar, pesquisar e excluir registros da bebida).
 </p>
 
 <li> Ferramentas Utilizadas</li><br>
<p style="display: inline_block">
   <img align="center" width='50px' height='50px' src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'>
   <img align="center" width='100px' height='50px' style="background-color: #FFF; margin: 5px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/382px-SQLite370.svg.png'>
   <img align="center" width='50px' height='50px' style="margin: 5px" src='https://cdn.freelogovectors.net/wp-content/uploads/2020/12/postman-logo.png'>
</p>
<br/>

# Como utilizar :hammer:

```
O primeiro passo é clonar o repositório e para realizar basta copiar o link abaixo, colar e executar no terminal:
https://github.com/Milena2712/API_Resilia_PUB.git

Logo em seguida entre na pasta, utilizando o comando:
cd API_Resilia_PUB

Depois que entrar na pasta, utilize o comando seguinte para instalar as dependencias:
npm install

Para executar a aplicação basta executar o comando abaixo em seu terminal e iniciar a aplicação:
npm start

```

**🚨 observação:** <p> A porta por padrão utilizada é 3000, caso esteja ocupada é necessário trocar</p> 

# ✈️: Rotas

	GET - Buscar todas as bebidas http://localhost:3000/bebidasBuscar
	GET - Buscar apenas um funcionário por ID http://localhost:3000/bebidasBuscar/:id
	POST - Salvar/Criar uma bebida no banco http://localhost:3000/bebidasSalvar
	PUT - Atualizar um registro http://localhost:3000/atualizar/:id
	DELETE - Deletar um registro http://localhost:3000/deletar/:id
  
  **🚨 observações:** <li> O campo ID é preenchido com o número de acordo com a bebida escolhida para buscar, atualizar ou deletar</li> 
  <li> O campo tipo deve ter mais que 3 caracteres</li> 
  <li> Nenhum dos campos pode ficar em branco</li> 
  
  <h2>RESPONSE:</h2>
  
  ```
  [
     {
        "id": 27,
        "nome": "Stella",
        "tipo": "cerveja",
        "valor": 4.99
    },
    
    {
        "id": 28,
        "nome": "Fanta Uva",
        "tipo": "refrigerante",
        "valor": 9.99
  ]
  
  ```
  
  # Colaboradores 🖥️ 🇧🇷
 <p>Apesar da API Rest ser criada por cada colaborador realizar separadamente sua parte, o trabalho foi organizado em grupo</p>
 <li> Matheus Camba (https://github.com/MatheusCamba) </li> 
 <li> Hugo Parada (https://github.com/haparada9)</li>
 <li> Arcenio Souza (https://github.com/ArcenioSouza)</li> 
 <li> Gicelle Sena (https://github.com/Gicelle-sena)</li> 
