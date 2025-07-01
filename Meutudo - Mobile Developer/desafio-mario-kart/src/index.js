const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
}

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock() {
  let random = Math.random()
  let result

  switch (true) {
    case random < 0.33:
      result = "RETA"
      break
    case random < 0.66:
      result = "CURVA"
      break
    default:
      result = "CONFRONTO"
      break
  }

  return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)

}

async function playRanceEngine(character1, character2) {

  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁  Rodada ${round} iniciada! 🏁\n`)

    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)

    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    let testSkill1 = 0
    let testSkill2 = 0

    if (block === "RETA") {
      testSkill1 = diceResult1 + character1.VELOCIDADE
      testSkill2 = diceResult2 + character2.VELOCIDADE
      await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE)
      await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE)
    }
    if (block === "CURVA") {
      testSkill1 = diceResult1 + character1.MANOBRABILIDADE
      testSkill2 = diceResult2 + character2.MANOBRABILIDADE

      await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
      await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER
      let powerResult2 = diceResult2 + character2.PODER

      console.log(`${character1.NOME} confrontou com ${character2.NOME} 💥`)
      await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER)
      await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER)

      character1.PONTOS -= powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0

      character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0

      console.log(powerResult2 === powerResult1 ? "Confronto empatado! " : powerResult1 > powerResult2 ? `${character1.NOME} venceu o confronto!` : `${character2.NOME} venceu o confronto!`)
    }

    if(testSkill1> testSkill2) {
      character1.PONTOS += 1
      console.log(`${character1.NOME} venceu a rodada! 🏆`)
      character1.PONTOS++
    } else if (testSkill2 > testSkill1) {
      character2.PONTOS += 1
      console.log(`${character2.NOME} venceu a rodada! 🏆`)
      character2.PONTOS++
    } else {
      console.log("Empate! 🤝")
    }
  }



}

async function declareWinner(character1, character2){
  console.log(`Resultado final:`)
  console.log(`${character1.NOME} - Pontos: ${character1.PONTOS}`)
  console.log(`${character2.NOME} - Pontos: ${character2.PONTOS}`)

  if(character1.PONTOS > character2.PONTOS) {
    console.log(`\n${character1.NOME} é o grande vencedor! 🏆`)
  } else if(character2.PONTOS > character1.PONTOS) {
    console.log(`\n${character2.NOME} é o grande vencedor! 🏆`)
  } else {
    console.log(`\nO jogo terminou em empate! 🤝`)
  }
}

(async function main() {
  console.log(`🏁  Iniciando o jogo de ${player1.NOME} e ${player2.NOME}! 🏎️`)

  await playRanceEngine(player1, player2)
  await declareWinner(player1, player2)
})()

