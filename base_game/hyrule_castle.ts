import * as readline from 'readline';
import align from 'align-text';
import { Entity } from '../interfaces/characters.interfaces';

import Link from '../characters/Link';
import Bokoblin from '../characters/Bokoblin';
import Ganon from '../characters/Ganon';

const figlet = require('figlet');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, (input) => {
            resolve(input.trim().toLowerCase());
        });
    });
}

let battle = 1;
let j = 0;
let maxStage = 10;

console.log();
console.log(
    figlet.textSync("Zelda", {
        font: "Alligator",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    })
);

console.log();
console.log("Bienvenue dans le jeu Zelda!!");
console.log("Bonjour Link, tu vas devoir affronter le démon Ganon et son armée pour sauver Hyrule\n");

async function battleLoop() {
    while (battle <= maxStage && Link.hp > 0) {
        console.log('========== FIGHT ' + (j + 1) + ' ==========');

        if (battle < maxStage) {
            while (Link.hp > 0 && Bokoblin.hp > 0) {
                console.log("\x1b[91mBokoblins\x1b[0m");
                console.log("HP : " + "I".repeat(Bokoblin.hp) + "_".repeat(Bokoblin.hp_max - Bokoblin.hp) + ' ' + Bokoblin.hp + '/' + Bokoblin.hp_max);
                console.log();
                console.log(`\x1b[92mLink\x1b[0m`);
                console.log("HP : " + "I".repeat(Link.hp) + "_".repeat(Link.hp_max - Link.hp) + ' ' + Link.hp + '/' + Link.hp_max);

                console.log();
                console.log("--------------\x1b[93mOptions\x1b[0m--------------");

                let input: string = await getInput('Attack (press a) Or Heal (press h)? ');

                if (input === 'attack' || input === 'a') {
                    Bokoblin.hp -= Link.str;
                } else if (input === 'heal' || input === 'h') {
                    Link.hp += (Link.hp_max / 2);
                }

                if (Link.hp > Link.hp_max) {
                    Link.hp = Link.hp_max;
                }

                Link.hp -= Bokoblin.str;

                if (Link.hp <= 0) {
                    console.log(
                        figlet.textSync("Game Over !!", {
                            font: "Calvin S",
                            horizontalLayout: "default",
                            verticalLayout: "default",
                            width: 50,
                            whitespaceBreak: true,
                        })
                    );
                    rl.close();
                    return;
                } else if (Bokoblin.hp <= 0) {
                    console.log("Bien joué!!");
                    console.log("Combat suivant \n");
                }
            }
            Bokoblin.hp = Bokoblin.hp_max;
            j++;
        } else if (battle === maxStage) {
            while (Link.hp > 0 && Ganon.hp > 0) {
                console.log("\x1b[91mGanon\x1b[0m");
                console.log("HP : " + "I".repeat(Ganon.hp) + "_".repeat(Ganon.hp_max - Ganon.hp) + ' ' + Ganon.hp + '/' + Ganon.hp_max);
                console.log();
                console.log(`\x1b[92mLink\x1b[0m`);
                console.log("HP : " + "I".repeat(Link.hp) + "_".repeat(Link.hp_max - Link.hp) + ' ' + Link.hp + '/' + Link.hp_max);

                console.log();
                console.log("--------------Options--------------");

                let input: string = await getInput('Attack (press a) Or Heal (press h)? ');

                if (input === 'attack' || input === 'a') {
                    Ganon.hp -= Link.str;
                } else if (input === 'heal' || input === 'h') {
                    Link.hp += (Link.hp_max / 2);
                }

                if (Link.hp > Link.hp_max) {
                    Link.hp = Link.hp_max;
                }

                Link.hp -= Ganon.str;

                console.log("Link = " + Link.hp);
                console.log("Ganon = " + Ganon.hp);
                console.log();

                if (Link.hp <= 0) {
                    console.log(
                        figlet.textSync("Game Over !!", {
                            font: "Calvin S",
                            horizontalLayout: "default",
                            verticalLayout: "default",
                            width: 50,
                            whitespaceBreak: true,
                        })
                    );
                    rl.close();
                    return;
                }

                if (Ganon.hp <= 0) {
                    console.log(
                        figlet.textSync("Felicitation Link !!", {
                            font: "ANSI Shadow",
                            horizontalLayout: "default",
                            verticalLayout: "default",
                            width: 100,
                            whitespaceBreak: true,
                        })
                    );
                }
            }
        }
        battle++;
    }
    rl.close();
}

battleLoop();
