"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Link_1 = require("../characters/Link");
var Bokoblin_1 = require("../characters/Bokoblin");
var Ganon_1 = require("../characters/Ganon");
var figlet = require('figlet');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getInput(prompt) {
    return new Promise(function (resolve) {
        rl.question(prompt, function (input) {
            resolve(input.trim().toLowerCase());
        });
    });
}
var battle = 1;
var j = 0;
var maxStage = 10;
console.log();
console.log(figlet.textSync("Zelda", {
    font: "Alligator",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
}));
console.log();
console.log("Bienvenue dans le jeu Zelda!!");
console.log("Bonjour Link, tu vas devoir affronter le démon Ganon et son armée pour sauver Hyrule\n");
function battleLoop() {
    return __awaiter(this, void 0, void 0, function () {
        var input, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(battle <= maxStage && Link_1.default.hp > 0)) return [3 /*break*/, 8];
                    console.log('========== FIGHT ' + (j + 1) + ' ==========');
                    if (!(battle < maxStage)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    if (!(Link_1.default.hp > 0 && Bokoblin_1.default.hp > 0)) return [3 /*break*/, 3];
                    console.log("\x1b[91mBokoblins\x1b[0m");
                    console.log("HP : " + "I".repeat(Bokoblin_1.default.hp) + "_".repeat(Bokoblin_1.default.hp_max - Bokoblin_1.default.hp) + ' ' + Bokoblin_1.default.hp + '/' + Bokoblin_1.default.hp_max);
                    console.log();
                    console.log("\u001B[92mLink\u001B[0m");
                    console.log("HP : " + "I".repeat(Link_1.default.hp) + "_".repeat(Link_1.default.hp_max - Link_1.default.hp) + ' ' + Link_1.default.hp + '/' + Link_1.default.hp_max);
                    console.log();
                    console.log("--------------\x1b[93mOptions\x1b[0m--------------");
                    return [4 /*yield*/, getInput('Attack (press a) Or Heal (press h)? ')];
                case 2:
                    input = _a.sent();
                    if (input === 'attack' || input === 'a') {
                        Bokoblin_1.default.hp -= Link_1.default.str;
                    }
                    else if (input === 'heal' || input === 'h') {
                        Link_1.default.hp += (Link_1.default.hp_max / 2);
                    }
                    if (Link_1.default.hp > Link_1.default.hp_max) {
                        Link_1.default.hp = Link_1.default.hp_max;
                    }
                    Link_1.default.hp -= Bokoblin_1.default.str;
                    if (Link_1.default.hp <= 0) {
                        console.log(figlet.textSync("Game Over !!", {
                            font: "Calvin S",
                            horizontalLayout: "default",
                            verticalLayout: "default",
                            width: 50,
                            whitespaceBreak: true,
                        }));
                        rl.close();
                        return [2 /*return*/];
                    }
                    else if (Bokoblin_1.default.hp <= 0) {
                        console.log("Bien joué!!");
                        console.log("Combat suivant \n");
                    }
                    return [3 /*break*/, 1];
                case 3:
                    Bokoblin_1.default.hp = Bokoblin_1.default.hp_max;
                    j++;
                    return [3 /*break*/, 7];
                case 4:
                    if (!(battle === maxStage)) return [3 /*break*/, 7];
                    _a.label = 5;
                case 5:
                    if (!(Link_1.default.hp > 0 && Ganon_1.default.hp > 0)) return [3 /*break*/, 7];
                    console.log("\x1b[91mGanon\x1b[0m");
                    console.log("HP : " + "I".repeat(Ganon_1.default.hp) + "_".repeat(Ganon_1.default.hp_max - Ganon_1.default.hp) + ' ' + Ganon_1.default.hp + '/' + Ganon_1.default.hp_max);
                    console.log();
                    console.log("\u001B[92mLink\u001B[0m");
                    console.log("HP : " + "I".repeat(Link_1.default.hp) + "_".repeat(Link_1.default.hp_max - Link_1.default.hp) + ' ' + Link_1.default.hp + '/' + Link_1.default.hp_max);
                    console.log();
                    console.log("--------------Options--------------");
                    return [4 /*yield*/, getInput('Attack (press a) Or Heal (press h)? ')];
                case 6:
                    input = _a.sent();
                    if (input === 'attack' || input === 'a') {
                        Ganon_1.default.hp -= Link_1.default.str;
                    }
                    else if (input === 'heal' || input === 'h') {
                        Link_1.default.hp += (Link_1.default.hp_max / 2);
                    }
                    if (Link_1.default.hp > Link_1.default.hp_max) {
                        Link_1.default.hp = Link_1.default.hp_max;
                    }
                    Link_1.default.hp -= Ganon_1.default.str;
                    console.log("Link = " + Link_1.default.hp);
                    console.log("Ganon = " + Ganon_1.default.hp);
                    console.log();
                    if (Link_1.default.hp <= 0) {
                        console.log(figlet.textSync("Game Over !!", {
                            font: "Calvin S",
                            horizontalLayout: "default",
                            verticalLayout: "default",
                            width: 50,
                            whitespaceBreak: true,
                        }));
                        rl.close();
                        return [2 /*return*/];
                    }
                    if (Ganon_1.default.hp <= 0) {
                        console.log(figlet.textSync("Felicitation Link !!", {
                            font: "ANSI Shadow",
                            horizontalLayout: "default",
                            verticalLayout: "default",
                            width: 100,
                            whitespaceBreak: true,
                        }));
                    }
                    return [3 /*break*/, 5];
                case 7:
                    battle++;
                    return [3 /*break*/, 0];
                case 8:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
battleLoop();
