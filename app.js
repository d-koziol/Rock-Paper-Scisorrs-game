function getComputerChoice() {
    const weapons = ["Rock", "Paper", "Scissors"];
    return weapons[Math.floor(Math.random() * weapons.length)];
}
console.log(getComputerChoice());





