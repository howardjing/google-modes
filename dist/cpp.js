(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^static_assert(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z_]+(?![a-zA-Z¡-￿_0-9])|[A-Z]+_[A-Z_]*(?![a-zA-Z¡-￿_0-9]))/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^class(?![a-zA-Z¡-￿_0-9])/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:\.\.\.)?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?!\>)/, /^(?:\.\.\.|\(|\=|\>|\,)/, /^(?:\*|\&\&|\&)/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 12, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[5], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[40], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[51], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], -1,
   3, "type", e[34], -1,
   3, "type", e[35], -1,
   3, "keyword", e[33], -1,
   3, "atom", e[50], -1,
   3, "meta", e[17], -1,
   1, 134, -1,
   3, "number", e[23], -1,
   2, 141, -1, {"name":"string","token":"string"},
   2, 146, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[52], -1,
   3, "operator", e[53], -1,
   2, 147, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[1], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[47], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[48], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[37], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[25], -1,
   3, "keyword", e[26], -1,
   3, "keyword", e[54], -1,
   3, "keyword", e[27], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[49], -1,
   3, "keyword", e[38], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 147, 9, {"name":"comment","token":"comment"},
   0, -1],
  [/^[ \t]*/, 11],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [1, 153, -1,
   1, 170, -1,
   3, "keyword", e[0], 13,
   3, "keyword", e[1], 17,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 29,
   3, "keyword", e[4], 44,
   1, 185, -1,
   2, 198, -1, {"name":"Template"},
   [7, "constructorAhead"], 50,
   3, "keyword", e[5], 53,
   3, "keyword", e[6], 57,
   3, "keyword", e[7], 58,
   3, "keyword", e[8], 59,
   3, "keyword", e[9], 83,
   3, "keyword", e[10], 88,
   2, 207, -1, {"name":"Block"},
   3, "keyword", e[11], 92,
   3, "keyword", e[12], 94,
   3, "keyword", e[13], 98,
   3, "keyword", e[14], 102,
   3, "keyword", e[15], 108,
   3, "keyword", e[16], 109,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 211]], 108,
   3, "meta", e[17], 112,
   2, 212, 116, {"name":"DeclType"},
   ";", -1,
   1, 229, 132],
  [1, 9, 14],
  [2, 234, 15, {"name":"ArgList"}],
  [1, 9, 16],
  [";", -1],
  [1, 9, 18],
  [1, 239, 19,
   0, 19],
  [1, 9, 20],
  [3, "operator", "=", 21,
   2, 242, -1, {"name":"NamespaceBlock"}],
  [1, 9, 22],
  [1, 134, 23],
  [1, 9, 24],
  [";", -1],
  [1, 9, 26],
  [1, 229, 27],
  [1, 9, 28],
  [";", -1],
  [1, 9, 30],
  [2, 207, 31, {"name":"Block"}],
  [1, 9, 32],
  [3, "keyword", e[18], 33,
   0, -1],
  [1, 9, 34],
  ["(", 35],
  [1, 9, 36],
  [1, 246, 37],
  [1, 9, 38],
  [1, 259, 39,
   0, 39],
  [1, 9, 40],
  [")", 41],
  [1, 9, 42],
  [2, 207, 43, {"name":"Block"}],
  [1, 9, 32],
  [1, 9, 45],
  ["{", 46],
  [1, 9, 47],
  [2, 141, 48, {"name":"string","token":"string"}],
  [1, 9, 49],
  ["}", -1],
  [1, 239, 51],
  [1, 9, 52],
  [2, 271, -1, {"name":"FunctionDef"}],
  [1, 9, 54],
  [3, "type def", e[19], 55,
   0, 55],
  [1, 9, 56],
  [2, 304, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 60],
  [1, 9, 61],
  [1, 9, 62],
  ["(", 63],
  [2, 322, 64, {"name":"CondExpr"}],
  [2, 12, 65, {"name":"Statement"}],
  [1, 9, 66],
  [1, 9, 67],
  [1, 9, 68],
  [2, 12, 69, {"name":"Statement"}],
  [2, 12, -1, {"name":"Statement"}],
  [3, "keyword", e[7], 70],
  [1, 9, 71],
  [1, 9, 72],
  [1, 229, 73,
   0, 73],
  [2, 322, 74, {"name":"CondExpr"}],
  [1, 9, 75],
  [1, 9, 76],
  [";", 77],
  [";", -1],
  [1, 9, 78],
  [1, 229, 79,
   0, 79],
  [1, 9, 80],
  [")", 81],
  [1, 9, 82],
  [2, 12, -1, {"name":"Statement"}],
  [1, 9, 84],
  [2, 322, 85, {"name":"CondExpr"}],
  [1, 9, 86],
  [2, 12, 87, {"name":"Statement"}],
  [2, 327, -1, {"name":"Alternative"}],
  [1, 9, 89],
  [2, 322, 90, {"name":"CondExpr"}],
  [1, 9, 91],
  [2, 207, -1, {"name":"Block"}],
  [1, 9, 93],
  [";", -1],
  [1, 9, 95],
  [e[19], 96],
  [1, 9, 97],
  [";", -1],
  [1, 9, 99],
  [1, 229, 100,
   0, 100],
  [1, 9, 101],
  [";", -1],
  [1, 9, 103],
  [1, 239, 104,
   0, 104],
  [1, 9, 105],
  [2, 331, 106, {"name":"BlockOf"},
   0, 106],
  [1, 9, 107],
  [";", -1],
  [1, 9, 110],
  [1, 9, 111],
  [":", -1],
  [1, 229, 108],
  [1, 9, 113],
  [2, 234, 114, {"name":"ArgList"},
   0, 114],
  [1, 9, 115],
  [/^\;?/, -1],
  [1, 9, 117],
  [1, 259, 118],
  [1, 9, 119],
  [3, "meta", e[17], 120,
   [5, 341], 121,
   1, 345, 122,
   0, 122],
  [1, 9, 123],
  [2, 271, -1, {"name":"FunctionDef"}],
  [1, 9, 124],
  [2, 234, 125, {"name":"ArgList"},
   0, 125],
  [",", 126,
   ";", -1],
  [1, 9, 127],
  [1, 9, 128],
  [/^\;?/, -1],
  [1, 239, 129],
  [1, 9, 130],
  [1, 345, 131,
   0, 131],
  [1, 9, 124],
  [1, 9, 133],
  [";", -1],
  [0, 135,
   3, "type", e[20], -1,
   2, 348, 140, {"name":"unqualifiedVariableName","token":"variable"}],
  [1, 349, 136],
  [0, 135,
   3, "type qualified", e[20], 137,
   2, 354, 137, {"name":"qualifiedVariableName","token":"qualified"}],
  [2, 355, 138, {"name":"TemplateArgs"},
   0, -1],
  [/^(?=\:\:)/, 139,
   0, -1],
  [1, 134, -1],
  [2, 355, -1, {"name":"TemplateArgs"},
   0, -1],
  [/^R\"(?:(?!\().)*\(/, 142,
   /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 143],
  [[0, [7, "rawStringContinues"], /^[^]/], 142,
   "\"", -1],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 144],
  ["\\", 145,
   [0, /^(?!\")/, /^[^]/], 144,
   "\"", -1],
  [/^[^]/, 144],
  [3, "keyword", e[21], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
  [/^\/\*\*(?!\/)/, 148,
   "/*", 152,
   /^\/\/.*/, -1],
  [0, 149,
   2, 360, 148, {"name":"doccomment.braced"},
   0, 150],
  [e[45], 151],
  [2, 368, 150, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 149,
   0, 148],
  [[0, /^(?!\*\/)/, /^[^]/], 152,
   "*/", -1],
  [3, "keyword", e[22], 155,
   [0, [5, 376], "["], 156],
  [0, 153,
   0, -1],
  [1, 9, 157],
  [1, 9, 158],
  ["(", 159],
  ["[", 160],
  [1, 9, 161],
  [1, 9, 162],
  [3, "number", e[23], 163],
  [1, 380, 164],
  [1, 9, 165],
  [1, 9, 166],
  [")", 167],
  ["]", 168],
  [1, 9, 154],
  [1, 9, 169],
  ["]", 167],
  [3, "keyword", e[24], 171,
   3, "keyword", e[14], 171],
  [1, 9, 172],
  [1, 153, 173,
   0, 173],
  [1, 9, 174],
  [3, "type def", e[19], 175],
  [1, 9, 176],
  [":", 177,
   0, 183],
  [1, 9, 178],
  [3, "keyword", e[25], 179,
   0, 179],
  [1, 9, 180],
  [3, "keyword", e[26], 181,
   0, 181],
  [1, 9, 182],
  [1, 246, 183],
  [1, 9, 184],
  [";", -1,
   2, 402, -1, {"name":"ClassBody"}],
  [3, "keyword", e[27], 186],
  [1, 9, 187],
  [3, "keyword", e[21], 188,
   3, "keyword", e[1], 189,
   0, 189],
  [1, 9, 190],
  [1, 9, 191],
  [1, 246, 192],
  [1, 134, 192],
  [1, 9, 193],
  [3, "operator", "=", 194,
   0, 196],
  [1, 9, 195],
  [1, 246, 196],
  [1, 9, 197],
  [";", -1],
  [3, "keyword", e[28], 199,
   0, 199],
  [1, 9, 200],
  [3, "keyword", e[29], 201],
  [1, 9, 202],
  [2, 406, 203, {"name":"TemplateParams"}],
  [1, 9, 204],
  [1, 9, 205],
  [1, 9, 206],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 208],
  [1, 9, 209],
  [2, 12, 210, {"name":"Statement"},
   "}", -1],
  [1, 9, 209],
  [e[41], 211,
   /^\:(?!\:)/, -1],
  [0, 213,
   0, 214,
   3, "keyword", e[30], 225,
   [5, 411], 226],
  [3, "keyword", e[31], 215,
   3, "keyword", e[32], 215,
   3, "keyword", e[33], 215],
  [3, "type", e[34], 216],
  [1, 9, 217],
  [1, 9, 218],
  [0, 213,
   3, "keyword", e[30], 219,
   0, 220,
   1, 416, 219],
  [0, 214,
   3, "type", e[35], 219,
   0, 219],
  [1, 9, 221],
  [3, "type", e[34], 222],
  [1, 421, 223,
   0, -1],
  [0, 220,
   1, 9, 224,
   0, 219],
  [1, 9, 221],
  [3, "type", e[35], 219],
  [1, 9, 227],
  [1, 416, 225],
  [1, 421, 228,
   0, -1],
  [1, 9, 227],
  [1, 428, 230,
   1, 445, 231],
  [1, 9, 229],
  [1, 9, 232],
  [1, 476, 233,
   0, -1],
  [1, 9, 232],
  ["(", 235],
  [1, 9, 236],
  [1, 493, 237],
  [1, 9, 238],
  [")", -1],
  [0, 240,
   3, "def", e[36], -1],
  [1, 499, 241],
  [0, 240,
   3, "qualified def", e[36], -1],
  ["{", 243],
  [1, 9, 244],
  [2, 12, 245, {"name":"Statement"},
   "}", -1],
  [1, 9, 244],
  [3, "keyword", e[21], 247,
   0, 249],
  [1, 9, 248],
  [1, 246, -1],
  [3, "keyword", e[31], 250,
   3, "keyword", e[32], 250,
   3, "keyword", e[33], 250,
   3, "keyword", e[14], 251,
   0, 251],
  [1, 9, 249],
  [1, 9, 252],
  [3, "keyword", e[30], 253,
   0, 254,
   1, 416, 253],
  [1, 9, 255],
  [3, "type", e[34], 256],
  [1, 421, 257,
   0, -1],
  [0, 254,
   1, 9, 258,
   0, 253],
  [1, 9, 255],
  [3, "type", e[35], 253],
  [0, 260,
   "(", 267],
  [e[58], 261,
   1, 239, 262],
  [1, 9, 260],
  [1, 9, 263],
  ["[", 264,
   0, -1],
  [1, 9, 265],
  ["]", 266],
  [1, 9, 263],
  [1, 9, 268],
  [1, 259, 269],
  [1, 9, 270],
  [")", -1],
  [2, 504, 272, {"name":"ParamList"}],
  [1, 9, 273],
  [3, "keyword", e[33], 274,
   /^(?:\&|\&\&)?/, 275],
  [1, 9, 273],
  [1, 9, 276],
  [3, "keyword", e[37], 277,
   3, "keyword", e[2], 278,
   0, 289],
  [1, 9, 279],
  [1, 9, 280],
  ["(", 281,
   0, 289],
  ["(", 282],
  [1, 9, 283],
  [1, 9, 284],
  [1, 229, 285],
  [1, 509, 286],
  [1, 9, 287],
  [1, 9, 288],
  [")", 289],
  [")", 289],
  [1, 9, 290],
  [1, 153, 291,
   0, 291],
  [1, 9, 292],
  ["->", 293,
   0, 295],
  [1, 9, 294],
  [1, 246, 295],
  [1, 9, 296],
  [3, "keyword", e[38], 297,
   2, 515, 298, {"name":"InitializerList"},
   0, 298],
  [1, 9, 296],
  [1, 9, 299],
  [";", -1,
   2, 207, -1, {"name":"Block"},
   3, "operator", "=", 300],
  [1, 9, 301],
  [3, "keyword", e[15], 302,
   3, "keyword", e[39], 302],
  [1, 9, 303],
  [";", -1],
  ["{", 305],
  [1, 9, 306],
  [1, 518, 307,
   0, 320],
  [1, 9, 308],
  [3, "operator", "=", 309,
   0, 310],
  [1, 9, 311],
  [1, 9, 312],
  [1, 229, 310],
  [",", 313,
   0, 320],
  [1, 9, 314],
  [1, 518, 315,
   0, 316],
  [1, 9, 317],
  [1, 9, 312],
  [3, "operator", "=", 318,
   0, 316],
  [1, 9, 319],
  [1, 229, 316],
  [1, 9, 321],
  ["}", -1],
  ["(", 323],
  [1, 9, 324],
  [1, 229, 325,
   0, 325],
  [1, 9, 326],
  [")", -1],
  [1, 9, 328],
  [3, "keyword", e[40], 329,
   0, -1],
  [1, 9, 330],
  [2, 12, -1, {"name":"Statement"}],
  ["{", 332],
  [1, 9, 333],
  [1, 521, 334,
   0, 339],
  [1, 9, 335],
  [";", 336,
   0, 339],
  [1, 9, 337],
  [1, 521, 338,
   0, 338],
  [1, 9, 335],
  [1, 9, 340],
  ["}", -1],
  ["(", 342],
  [1, 9, 343],
  [")", -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[33], -1,
   3, "type", e[34], -1,
   3, "keyword", e[30], -1,
   [5, 411], 344],
  [1, 416, -1],
  [3, "operator", "=", 346,
   2, 532, -1, {"name":"BlockOf"},
   2, 234, -1, {"name":"ArgList"}],
  [1, 9, 347],
  [1, 229, -1],
  [3, "callee", e[55], -1,
   e[19], -1],
  ["::", -1,
   [5, 542], 350],
  [3, "variable qualifier", e[19], 351],
  [2, 355, 352, {"name":"TemplateArgs"},
   0, 352],
  [1, 9, 353],
  ["::", -1],
  [2, 348, -1, {"name":"unqualifiedVariableName","token":"variable"}],
  ["<", 356],
  [1, 9, 357],
  [1, 546, 358],
  [1, 9, 359],
  [">", -1],
  ["{", 361],
  [3, "tag", e[42], 362,
   3, "tag", e[43], 363,
   2, 578, 367, {"name":"doccomment.type","token":"type"}],
  [e[41], 362,
   "{", 364,
   0, 363],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 363,
   0, 367],
  [2, 578, 365, {"name":"doccomment.type","token":"type"}],
  ["}", 366],
  [e[41], 366,
   3, "def", e[44], 363,
   0, 363],
  ["}", -1],
  [3, "tag", e[42], 369,
   3, "tag", e[43], 373],
  [e[41], 369,
   "{", 370,
   0, 373],
  [2, 578, 371, {"name":"doccomment.type","token":"type"}],
  ["}", 372],
  [e[41], 372,
   3, "def", e[44], 373,
   0, 373],
  [0, 374,
   2, 360, 373, {"name":"doccomment.braced"},
   0, -1],
  [e[45], 375],
  [0, 374,
   0, 373],
  ["[", 377],
  [1, 9, 378],
  [" ", 379,
   "[", -1],
  [1, 9, 378],
  [1, 579, 381,
   3, "meta", e[19], 382,
   0, -1],
  [1, 9, 380],
  [1, 9, 383],
  ["(", 384,
   0, 385],
  [1, 9, 386],
  [1, 9, 387],
  [1, 584, 388,
   ")", 385],
  [e[46], 389],
  [1, 9, 386],
  [1, 9, 390],
  [",", 391,
   0, -1],
  [1, 9, 392],
  [1, 579, 393,
   3, "meta", e[19], 394],
  [1, 9, 392],
  [1, 9, 395],
  ["(", 396,
   0, 397],
  [1, 9, 398],
  [1, 9, 399],
  [1, 584, 400,
   ")", 397],
  [e[46], 401],
  [1, 9, 398],
  [1, 9, 390],
  ["{", 403],
  [1, 9, 404],
  [2, 594, 405, {"name":"ClassItem"},
   "}", -1],
  [1, 9, 404],
  ["<", 407],
  [1, 9, 408],
  [1, 605, 409],
  [1, 9, 410],
  [">", -1],
  [/^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 412],
  [1, 416, 413],
  [1, 9, 414],
  [1, 421, 415,
   /^[a-zA-Z¡-￿_]/, -1],
  [1, 9, 414],
  [3, "keyword", e[21], 417,
   0, 418],
  [1, 9, 418],
  [0, 419,
   3, "type", e[19], -1],
  [1, 631, 420],
  [0, 419,
   3, "type qualified", e[19], -1],
  [2, 355, -1, {"name":"TemplateArgs"},
   "::", 422,
   1, 153, -1,
   "[", 424,
   /^[\*\&]/, -1,
   3, "keyword", e[33], -1],
  [1, 9, 423],
  [3, "type qualified", e[19], -1],
  [1, 9, 425],
  [3, "number", e[23], 426,
   0, 426],
  [1, 9, 427],
  ["]", -1],
  [3, "keyword", e[39], 429,
   3, "keyword", e[47], 433,
   2, 146, -1, {"name":"prefixOp","token":"operator"}],
  [1, 9, 430],
  ["[", 431,
   0, -1],
  [1, 9, 432],
  ["]", -1],
  [1, 9, 434],
  ["[", 435,
   0, 436],
  [1, 9, 437],
  [1, 9, 438],
  ["]", 436],
  ["(", 439,
   0, 440],
  [1, 9, 441],
  [1, 9, 442],
  [1, 229, 443],
  [1, 153, -1,
   0, -1],
  [1, 9, 444],
  [")", 440],
  [3, "keyword", e[48], -1,
   [0, [5, 636], "["], 446,
   3, "keyword", e[49], 452,
   2, 640, 464, {"name":"ParenExpr"},
   3, "atom", e[50], -1,
   3, "number", e[23], -1,
   2, 141, -1, {"name":"string","token":"string"},
   2, 532, -1, {"name":"BlockOf"},
   3, "keyword", e[51], 466,
   1, 134, -1],
  [1, 9, 447],
  [1, 645, 448],
  [1, 9, 449],
  ["]", 450],
  [1, 9, 451],
  [2, 271, -1, {"name":"FunctionDef"},
   2, 207, -1, {"name":"Block"}],
  [1, 9, 453],
  ["<", 454],
  [1, 9, 455],
  [1, 246, 456],
  [1, 9, 457],
  [">", 458],
  [1, 9, 459],
  ["(", 460],
  [1, 9, 461],
  [1, 229, 462],
  [1, 9, 463],
  [")", -1],
  [1, 9, 465],
  [1, 229, -1,
   0, -1],
  [1, 9, 467],
  ["(", 468,
   e[46], 469],
  [1, 9, 470],
  [1, 9, 471],
  [1, 246, 472],
  [1, 229, 473],
  [1, 9, 474],
  [1, 9, 475],
  [")", 473],
  [3, "meta", e[17], -1],
  [2, 532, -1, {"name":"BlockOf"},
   2, 234, 477, {"name":"ArgList"},
   2, 234, -1, {"name":"ArgList"},
   "[", 479,
   3, "operator", e[52], -1,
   /^(?:\-\>|(?!\.\.)\.)/, 483,
   3, "operator", e[53], 485,
   "?", 487],
  [1, 9, 478],
  [2, 207, -1, {"name":"Block"},
   0, -1],
  [1, 9, 480],
  [1, 229, 481],
  [1, 9, 482],
  ["]", -1],
  [1, 9, 484],
  [2, 655, -1, {"name":"fieldName","token":"property"}],
  [1, 9, 486],
  [1, 229, -1],
  [1, 9, 488],
  [1, 229, 489],
  [1, 9, 490],
  [":", 491],
  [1, 9, 492],
  [1, 229, -1],
  [1, 229, 494,
   0, -1],
  [1, 9, 495],
  [",", 496,
   0, -1],
  [1, 9, 497],
  [1, 229, 498],
  [1, 9, 495],
  ["::", -1,
   [5, 656], 500],
  [3, "qualifier def", e[19], 501],
  [2, 355, 502, {"name":"TemplateArgs"},
   0, 502],
  [1, 9, 503],
  ["::", -1],
  ["(", 505],
  [1, 9, 506],
  [1, 660, 507],
  [1, 9, 508],
  [")", -1],
  [1, 246, 510,
   0, -1],
  [1, 9, 511],
  [",", 512,
   0, -1],
  [1, 9, 513],
  [1, 246, 514],
  [1, 9, 511],
  [":", 516],
  [1, 9, 517],
  [1, 674, -1],
  [3, "keyword", e[54], 519,
   3, "def property", e[19], -1],
  [3, "operator", "->*", -1,
   ",", -1,
   3, "operator", e[53], -1,
   2, 146, -1, {"name":"prefixOp","token":"operator"},
   /^(?:\(\)|\[\])/, -1,
   3, "keyword", e[47], 520,
   3, "keyword", e[39], 520],
  [/^(?:\[\])?/, -1],
  [1, 246, 522],
  [1, 9, 523],
  [2, 655, 524, {"name":"fieldName","token":"property"},
   0, 524],
  [1, 9, 525],
  [":", 526,
   "[", 527,
   0, -1],
  [1, 9, 528],
  [1, 9, 529],
  [3, "number", e[23], -1],
  [3, "number", e[23], 530,
   0, 530],
  [1, 9, 531],
  ["]", -1],
  ["{", 533],
  [1, 9, 534],
  [1, 229, 535,
   0, 540],
  [1, 9, 536],
  [",", 537,
   0, 540],
  [1, 9, 538],
  [1, 229, 539,
   0, 539],
  [1, 9, 536],
  [1, 9, 541],
  ["}", -1],
  [3, "variable qualifier", e[19], 543],
  [1, 680, 544,
   0, 544],
  [1, 9, 545],
  ["::", -1],
  [3, "keyword", e[29], 547,
   0, 548,
   0, 549,
   0, -1],
  [1, 9, 550],
  [1, 9, 551],
  [3, "keyword", e[31], 552,
   3, "keyword", e[32], 552,
   [5, 685], 553,
   1, 688, 554],
  [2, 355, 548, {"name":"TemplateArgs"}],
  [3, "keyword", e[24], 555,
   3, "keyword", e[21], 555],
  [1, 9, 549],
  [1, 246, 556],
  [1, 9, 557],
  [1, 9, 558],
  [1, 9, 559],
  [e[46], 560],
  [1, 246, 560],
  [2, 504, 554, {"name":"ParamList"},
   1, 345, 554,
   0, 554],
  [1, 9, 561],
  [",", 562,
   0, -1],
  [1, 9, 563],
  [3, "keyword", e[29], 564,
   0, 565,
   0, 566],
  [1, 9, 567],
  [1, 9, 568],
  [3, "keyword", e[31], 569,
   3, "keyword", e[32], 569,
   [5, 694], 570,
   1, 688, 571],
  [2, 355, 565, {"name":"TemplateArgs"}],
  [3, "keyword", e[24], 572,
   3, "keyword", e[21], 572],
  [1, 9, 566],
  [1, 246, 573],
  [1, 9, 574],
  [1, 9, 575],
  [1, 9, 576],
  [e[46], 577],
  [1, 246, 577],
  [2, 504, 571, {"name":"ParamList"},
   1, 345, 571,
   0, 571],
  [1, 9, 561],
  [1, 697, -1],
  ["::", -1,
   [5, 701], 580],
  [3, "meta", e[19], 581],
  [2, 355, 582, {"name":"TemplateArgs"},
   0, 582],
  [1, 9, 583],
  ["::", -1],
  [3, "number", e[23], -1,
   2, 141, -1, {"name":"string","token":"string"},
   e[19], -1,
   3, "operator", e[53], -1,
   ",", -1,
   "(", 585,
   "[", 588,
   "{", 591],
  [1, 9, 586],
  [1, 584, 587,
   ")", -1],
  [1, 9, 586],
  [1, 9, 589],
  [1, 584, 590,
   "]", -1],
  [1, 9, 589],
  [1, 9, 592],
  [1, 584, 593,
   "}", -1],
  [1, 9, 592],
  [3, "keyword", e[26], 595,
   2, 198, -1, {"name":"Template"},
   1, 185, -1,
   3, "keyword", e[0], 597,
   3, "meta", e[17], 601,
   1, 170, -1,
   2, 705, -1, {"name":"ObjectMember"}],
  [1, 9, 596],
  [":", -1],
  [1, 9, 598],
  [2, 234, 599, {"name":"ArgList"}],
  [1, 9, 600],
  [";", -1],
  [1, 9, 602],
  [2, 234, 603, {"name":"ArgList"},
   0, 603],
  [1, 9, 604],
  [/^\;?/, -1],
  [1, 723, 606,
   0, 607,
   0, -1],
  [1, 9, 608],
  [3, "keyword", e[31], 609,
   3, "keyword", e[32], 609,
   1, 246, 610],
  [",", 611,
   0, -1],
  [1, 9, 607],
  [1, 9, 612],
  [1, 9, 613],
  [e[46], 614],
  [1, 723, 615,
   0, 616],
  [1, 9, 617],
  [1, 9, 608],
  [3, "keyword", e[31], 618,
   3, "keyword", e[32], 618,
   1, 246, 619],
  [1, 239, 620],
  [1, 9, 616],
  [1, 9, 621],
  [1, 9, 622],
  [e[46], 623],
  [3, "operator", "=", 624,
   0, 606],
  [1, 9, 625],
  [1, 9, 626],
  [1, 239, 627],
  [1, 688, 606],
  [1, 9, 628],
  [3, "operator", "=", 629,
   0, 615],
  [1, 9, 630],
  [1, 688, 615],
  ["::", -1,
   [5, 734], 632],
  [3, "type qualifier", e[19], 633],
  [2, 355, 634, {"name":"TemplateArgs"},
   0, 634],
  [1, 9, 635],
  ["::", -1],
  ["[", 637],
  [1, 9, 638],
  [e[41], 639,
   /^(?:\&|\=|this|\])/, -1],
  [1, 9, 638],
  ["(", 641],
  [1, 9, 642],
  [1, 229, 643,
   0, 643],
  [1, 9, 644],
  [")", -1],
  ["&", 646,
   "=", 647,
   3, "keyword", e[48], 647,
   0, -1],
  [1, 9, 648],
  [1, 9, 649],
  [1, 134, 647,
   0, 647],
  [",", 650,
   0, -1],
  [1, 9, 651],
  ["&", 652,
   "=", 653,
   3, "keyword", e[48], 653],
  [1, 9, 654],
  [1, 9, 649],
  [1, 134, 653,
   0, 653],
  [3, "callee", e[55], -1,
   e[19], -1],
  [3, "qualifier def", e[19], 657],
  [1, 680, 658,
   0, 658],
  [1, 9, 659],
  ["::", -1],
  [1, 246, 661,
   0, -1],
  [1, 9, 662],
  [1, 259, 663,
   0, 664],
  [1, 9, 665],
  [1, 9, 666],
  [2, 504, 664, {"name":"ParamList"},
   0, 664],
  [",", 667,
   0, -1],
  [1, 9, 668],
  [1, 246, 669],
  [1, 9, 670],
  [1, 259, 671,
   0, 672],
  [1, 9, 673],
  [1, 9, 666],
  [2, 504, 672, {"name":"ParamList"},
   0, 672],
  [1, 738, 675,
   0, -1],
  [1, 9, 676],
  [",", 677,
   0, -1],
  [1, 9, 678],
  [1, 738, 679],
  [1, 9, 676],
  ["<", 681],
  [1, 9, 682],
  [e[56], 683,
   ">", -1],
  [1, 680, 684,
   2, 141, 684, {"name":"string","token":"string"},
   /^[^]/, 684],
  [1, 9, 682],
  [1, 246, 686],
  [1, 9, 687],
  [e[57], -1],
  [1, 428, 689,
   1, 445, 690],
  [1, 9, 688],
  [1, 9, 691],
  [e[56], 692,
   0, -1],
  [1, 476, 693],
  [1, 9, 691],
  [1, 246, 695],
  [1, 9, 696],
  [e[57], -1],
  [/^(?!\}|\*\/)/, 698,
   0, -1],
  ["{", 699,
   /^[^]/, 697],
  [1, 697, 700],
  [/^\}?/, 697],
  [3, "meta", e[19], 702],
  [1, 680, 703,
   0, 703],
  [1, 9, 704],
  ["::", -1],
  [3, "keyword", e[31], 706,
   3, "keyword", e[32], 706,
   3, "keyword", e[33], 706,
   3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 709,
   1, 246, 707],
  [1, 9, 705],
  [1, 9, 708],
  [1, 749, 709],
  [1, 9, 710],
  [2, 271, -1, {"name":"FunctionDef"},
   1, 345, 711,
   ":", 712,
   "[", 713,
   0, 711,
   3, "meta", e[17], 714],
  [1, 9, 715],
  [1, 9, 716],
  [1, 9, 717],
  [1, 9, 718],
  [";", -1],
  [3, "number", e[23], 711],
  [3, "number", e[23], 719,
   0, 719],
  [2, 234, 720, {"name":"ArgList"},
   0, 720],
  [1, 9, 721],
  [1, 9, 722],
  ["]", 711],
  [/^\;?/, -1],
  [3, "keyword", e[29], 724,
   0, 726],
  [1, 9, 725],
  [2, 355, 726, {"name":"TemplateArgs"}],
  [1, 9, 727],
  [3, "keyword", e[24], 728,
   3, "keyword", e[21], 728],
  [1, 9, 729],
  [3, "type def", e[19], 730],
  [1, 9, 731],
  [3, "operator", "=", 732,
   0, -1],
  [1, 9, 733],
  [1, 134, -1,
   3, "number", e[23], -1],
  [3, "type qualifier", e[19], 735],
  [1, 680, 736,
   0, 736],
  [1, 9, 737],
  ["::", -1],
  [2, 655, 739, {"name":"fieldName","token":"property"}],
  [1, 9, 740],
  ["(", 741,
   "{", 742],
  [1, 9, 743],
  [1, 9, 744],
  [1, 493, 745],
  [1, 493, 746],
  [1, 9, 747],
  [1, 9, 748],
  [")", -1],
  ["}", -1],
  [0, 750,
   "(", 757],
  [e[58], 751,
   1, 518, 752],
  [1, 9, 750],
  [1, 9, 753],
  ["[", 754,
   0, -1],
  [1, 9, 755],
  ["]", 756],
  [1, 9, 753],
  [1, 9, 758],
  [1, 749, 759],
  [1, 9, 760],
  [")", -1]
];
var start = 0;
var token = 5;


var cpp = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function getScope(context, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1) { return cx } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}
function isLocalType(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
  return false
}

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    var scope = getScope(state.context, scopes), name = stream.current();
    if (scope) {
      if (!scope.locals) { scope.locals = []; }
      if (once && scope.locals.indexOf(name) > -1)
        { return "variable-2" }
      scope.locals.push(name);
      if (state.context.name != "funcName") { return "def local" }
    }
  } else if (varRE.test(type) && !/qualified/.test(type) &&
             isLocal(state.context, stream.current())) {
    type = type.replace(varRE, "$1variable-2$2");
  }
  return type
}

var typeRE = /(^|\s)type($|\s)/;

function markTypeLocals(type, scopes, stream, state) {
  if (type == "type def") {
    var scope = getScope(state.context, scopes);
    if (scope) {
      if (!scope.localTypes) { scope.localTypes = []; }
      scope.localTypes.push(stream.current());
    }
  } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
             isLocalType(state.context, stream.current())) {
    type += " local";
  }
  return type
}

function hasSubStatement(context) {
  var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
  return m && m[1]
}

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}",
  ArrayInitializer: "}", NamespaceBlock: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
};

function baseIndent(cx, config) {
  for (var startLine = cx.startLine;; cx = cx.parent) {
    if (cx.name == "CondExpr")
      { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
    if (!cx.parent || cx.parent.startLine != startLine)
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function findIndent(cx, textAfter, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  var closed = textAfter && textAfter.charAt(0) == brack;
  if (brack && config.align !== false && aligned(cx))
    { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

  if (brack && (cx.name == "Block" || cx.name == "NamespaceBlock" || cx.name == "ClassBody" ||
                cx.name == "AnnotationTypeBody" || cx.name == "BlockOf" || cx.name == "EnumBody")) {
    var parent = cx.parent;
    if (parent && parent.name == "Statement" && parent.parent &&
        parent.parent.name == "Statement" && hasSubStatement(parent.parent))
      { parent = parent.parent; }
    var base$1 = statementIndent(parent, config);

    if (closed || cx.name == "NamespaceBlock") { return base$1 }
    if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
    if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
    return base$1 + config.indentUnit
  }

  var base = baseIndent(cx, config.tabSize);
  if (brack) {
    if (closed && brack != ")") { return base }
    return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "EnumConstant" ||
             cx.name == "AnnotationTypeItem") {
    if (hasSubStatement(cx)) { return base + config.indentUnit; }
    return base + 2 * config.indentUnit
  } else if (cx.name == "Alternative") {
    base = baseIndent(cx.parent, config.tabSize);
    if (!textAfter || /^else\b/.test(textAfter)) { return base }
    return base + config.indentUnit
  } else if (cx.name == "ArrowRest") {
    return base + config.indentUnit
  } else if (cx.name == "InitializerList") {
    return base + 2
  } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
    return base + 2 * config.indentUnit
  } else {
    return findIndent(cx.parent, textAfter, config)
  }
}

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
        cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem" ||
        cx.parent && bracketed[cx.parent.name])
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
}

function constructorAhead(line, pos) {
  var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
  return match && match[1] == match[2]
}

function localConstructorAhead(line, pos, cx) {
  var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
  if (!ahead) { return false }
  while (cx.name != "Statement") { cx = cx.parent; }
  var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
  return className ? className[1] == ahead[1] : false
}

var rawStringOpen = /R"(.*?)\(/g;

function rawStringContinues(line, pos, cx) {
  rawStringOpen.lastIndex = cx.startPos;
  var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
  return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
}

var scopes = ["Block", "FunctionDef"];
var typeScopes = ["Template"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
    });
    this.conf = conf;
  }

  if ( superclass ) CppMode.__proto__ = superclass;
  CppMode.prototype = Object.create( superclass && superclass.prototype );
  CppMode.prototype.constructor = CppMode;

  CppMode.prototype.token = function token$$1 (stream, state) {
    return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
  };

  CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  };

  return CppMode;
}(CodeMirror.GrammarMode));

CppMode.prototype.electricInput = /^\s*(?:case .*?:|(?:public|private|protected|default):|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.blockCommentContinue = " * ";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
