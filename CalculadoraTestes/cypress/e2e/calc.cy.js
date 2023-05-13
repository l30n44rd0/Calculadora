/// <reference types='cypress'/>

describe('template spec', () => {

    beforeEach(()=>{
      cy.visit('http://127.0.0.1:5500/index.html')
    })
  
    it('teste 10+3', ()=>{
      cy.get('#number-1').click()
      cy.get('#number-0').click()
      cy.get('#soma').click()
      cy.get('#number-3').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", '13')
    })
  
    //soma
    it('teste 8+0', ()=>{
      cy.get('#number-8').click()
      cy.get('#soma').click()
      cy.get('#number-0').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "8")
    })
    it('teste 8+0 = 8', ()=>{
      cy.get('#number-8').click()
      cy.get('#soma').click()
      cy.get('#number-0').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "8")
    })
  
    it('teste 400+600', ()=>{
      cy.get('#number-4').click()
      cy.get('#number-0').click()
      cy.get('#number-0').click()
      cy.get('#soma').click()
      cy.get('#number-6').click()
      cy.get('#number-0').click()
      cy.get('#number-0').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "1000")
    })
  
    it('teste 0 + (-3)', ()=>{
      cy.get('#number-0').click()
      cy.get('#soma').click()
      cy.get('#abre-parenteses').click()
      cy.get('#subtracao').click()
      cy.get('#number-3').click()
      cy.get('#fecha-parenteses').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "-3")
    })
  
    it('teste 0 + 0', ()=>{
      cy.get('#number-0').click()
      cy.get('#soma').click()
      cy.get('#number-0').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "0")
    })
  
    it('teste 1.5 + 1', ()=>{
      cy.get('#number-1').click()
      cy.get('#ponto').click()
      cy.get('#number-5').click()
      cy.get('#soma').click()
      cy.get('#number-1').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "2.5")
    })
  
    it('teste 5 + (-5)', ()=>{
      cy.get('#number-5').click()
      cy.get('#soma').click()
      cy.get('#abre-parenteses').click()
      cy.get('#subtracao').click()
      cy.get('#number-5').click()
      cy.get('#fecha-parenteses').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "0")
    })
  
  
  //------------------------------------------------------------------------------------
  
    //subtração
    it('teste 5-3', ()=> {
      cy.get('#number-5').click()
      cy.get('#subtracao').click()
      cy.get('#number-3').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "2")
    })
  
    it('teste 5-3', ()=> {
      cy.get('#number-5').click()
      cy.get('#subtracao').click()
      cy.get('#number-3').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "2")
    })
    it('teste 0 -(-4)', ()=> {
      cy.get('#number-0').click()
      cy.get('#subtracao').click()
      cy.get('#abre-parenteses').click()
      cy.get('#subtracao').click()
      cy.get('#number-4').click()
      cy.get('#fecha-parenteses').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "4")
    })
    it('teste 0.5-1.5', ()=> {
      cy.get('#number-0').click()
      cy.get('#ponto').click()
      cy.get('#number-5').click()
      cy.get('#subtracao').click()
      cy.get('#number-1').click()
      cy.get('#ponto').click()
      cy.get('#number-5').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "-1")
    })
    it('teste -5-5', ()=> {
      cy.get('#subtracao').click()
      cy.get('#number-5').click()
      cy.get('#subtracao').click()
      cy.get('#abre-parenteses').click()
      cy.get('#subtracao').click()
      cy.get('#number-5').click()
      cy.get('#fecha-parenteses').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "-10")
    })
  
  //------------------------------------------------------------------------------------
    
    //multiplicação
    it('teste 2 x 5', () => {
      cy.get('#number-2').click()
      cy.get('#multiplicar').click()
      cy.get('#number-5').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "10")
    })
  
    it('teste 0 x 9', () => {
      cy.get('#number-0').click()
      cy.get('#multiplicar').click()
      cy.get('#number-9').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "0")
    })
  
    it('teste 1.5 x 2', () => {
      cy.get('#number-1').click()
      cy.get('#ponto').click()
      cy.get('#number-5').click()
      cy.get('#multiplicar').click()
      cy.get('#number-2').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "3")
    })
  
    it('teste -2 x 5', () => {
      cy.get('#subtracao').click()
      cy.get('#number-2').click()
      cy.get('#multiplicar').click()
      cy.get('#number-5').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "-10")
    })
  
  //------------------------------------------------------------------------------------
  
  
    //divisão
    it('teste 10/5', () => {
      cy.get('#number-1').click()
      cy.get('#number-0').click()
      cy.get('#dividir')
      cy.get('#number-5').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "2")
    })
  
    it('teste 9/0', () => {
      cy.get('#number-9').click()
      cy.get('#dividir').click()
      cy.get('#number-0').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "1")
    })
  
    it('teste 1.5/1.5', () => {
      cy.get('#number-1').click()
      cy.get('#ponto').click()
      cy.get('#number-5').click()
      cy.get('#dividir').click()
      cy.get('#number-1').click()
      cy.get('#ponto').click()
      cy.get('#number-5').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "1")
    })
  
    it('teste -10/5', () => {
      cy.get('#subtracao').click()
      cy.get('#number-1').click()
      cy.get('#number-0').click()
      cy.get('#dividir').click()
      cy.get('#number-5').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "-2")
    })
  
  //------------------------------------------------------------------------------------
  
  
    //exponenciação
    it('teste 2 elevado a 3', () => {
      cy.get('#number-2').click()
      cy.get('#potenciacao').click()
      cy.get('#number-3').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "8")
    })
    it('teste 9 elevado a 0', () => {
      cy.get('#number-9').click()
      cy.get('#potenciacao').click()
      cy.get('#number-0').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "1")
    })
    it('teste 1.5 elevado a 1', () => {
      cy.get('#number-1').click()
      cy.get('#ponto').click()
      cy.get('#number-5').click()
      cy.get('#potenciacao').click()
      cy.get('#number-1').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "1.5")
    })
    it('teste 2 elevado a 4', () => {
      cy.get('#number-2').click()
      cy.get('#potenciacao').click()
      cy.get('#number-4').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "16")
    })
  
  
  //------------------------------------------------------------------------------------
  
  
    //fatorial
    it('teste 5!', () => {
      cy.get('#number-5').click()
      cy.get('#fatorial').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "120")
    })
  
    it('teste 0!', () => {
      cy.get('#number-0').click()
      cy.get('#fatorial').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "0")
    })
  
    it('teste 1!', () => {
      cy.get('#number-1').click()
      cy.get('#fatorial').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "1")
    })
  
  //------------------------------------------------------------------------------------
  
    
    //raiz quadrada
    it('teste raiz quadrada de 4', () => {
      cy.get('#number-4').click()
      cy.get('#raizQuadrada').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "2")
    })
  
    it('teste raiz quadrada de 0', () => {
      cy.get('#number-0').click()
      cy.get('#raizQuadrada').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "0")
    })
    
    it('teste raiz quadrada de 2.25', () => {
      cy.get('#number-2').click()
      cy.get('#ponto').click()
      cy.get('#number-2').click()
      cy.get('#number-5').click()
      cy.get('#raizQuadrada').click()
      cy.get('#equal-btn').click()
      cy.get('#previous-operation').should("have.text", "1.5")
    })
  
  //------------------------------------------------------------------------------------
  
  
    //é par?
    it('teste 5 é par', () => {
      cy.get('#number-5').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoPar').should("have.text", "Não")
    })
  
    it('teste 8 é par', () => {
      cy.get('#number-8').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoPar').should("have.text", "Sim")
    })
  
    it('teste 1 é par', () => {
      cy.get('#number-5=1').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoPar').should("have.text", "Não")
    })
  
    it('teste 0 é par', () => {
      cy.get('#number-0').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoPar').should("have.text", "Sim")
    })
  
  //------------------------------------------------------------------------------------
  
  
    //é ímpar?
    it('teste 4 é ímpar', () => {
      cy.get('#number-4').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoImpar').should("have.text", "Não")
    })
    it('teste 7 é ímpar', () => {
      cy.get('#number-4').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoImpar').should("have.text", "Sim")
    })
    it('teste -10 é ímpar', () => {
      cy.get('#subtracao').click()
      cy.get('#number-1').click()
      cy.get('#number-0').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoImpar').should("have.text", "Não")
    })
  
  //------------------------------------------------------------------------------------
  
  
    //é número primo?
    it('teste 7 é primo', () => {
      cy.get('#number-7').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoPrimo').should("have.text", "Sim")
    })
    it('teste -7 é primo', () => {
      cy.get('#subtracao').click()
      cy.get('#number-7').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoPrimo').should("have.text", "Não")
    })
    it('teste 0 é primo', () => {
      cy.get('#number-0').click()
      cy.get('#descobrirSeEParImparPrimo').click()
      cy.get('#equal-btn').click()
      cy.get('#espacoPrimo').should("have.text", "Não")
    })
  })