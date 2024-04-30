'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f0c0ce745bb6d20dc456a77994d94341",
"index.html": "7e34faf9dab884d3f62738be8d0f4d22",
"/": "7e34faf9dab884d3f62738be8d0f4d22",
"main.dart.js": "624c1a0c4842255c3e6cc816f4b5a522",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/config": "e5838104736ea87a361ec963c021f9f6",
".git/objects/61/cc5beec938aebc88e231d91af70500eaf7575b": "e019cb17687bcb1de50cec1811273c8d",
".git/objects/0d/986cb1fc286470ab8ae21df179137c11530183": "3e8865375d84eb58642b4a02f113d351",
".git/objects/95/d580f324ebb516d9200c7be62dee615daaa6d5": "2a28f7ee226d701889363bd769a5e444",
".git/objects/59/c44afa0458b939002864527682128d0ddb43f9": "286578e65c6e10b4e3259270b9816d0a",
".git/objects/3e/4ebabe00117f1d14f3b2498e675827210b05fa": "5176350375ab81006b7f8039abb66769",
".git/objects/68/798ce34886f70affdf3a858cbffd761d02dba5": "74313b39fc9ab8c2d44c1a08ed3a5ce1",
".git/objects/57/9a32294dbe823b6aa998acf7a27883d25d5506": "fe57126436daa83808f1914233515f91",
".git/objects/57/ffd9e8453eb196b6a0f1987fbee6d620d0e6a7": "c13f49a1ae72d4cfa6c7c596bc060fd8",
".git/objects/3b/816da29687d29a305233ee2934981346987346": "1dc6e50a55f256f28dc57cfc2a2f19be",
".git/objects/32/3e71f57f8463701766d9a4494d56a751f9de37": "cfc18c449a71571bff3b11653d3d0963",
".git/objects/35/aef683560a5a9640bda430ef8866913b3558a4": "517805dca11b4485e3c5335dcc2ce590",
".git/objects/69/c1fddab4994f063390e94b04393fc5546ddf2b": "151a78611607694009b9688497db2b6a",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/69/d85d35abbf3db966524be2a2b0c86fb962f6e1": "62d6c24bfecb4e2d5f57af6374e6c345",
".git/objects/67/1e143f2cc9a26003f6f42d6e4a813a333fadab": "8c14f72bfb5d88d2658d4ffa42000bb2",
".git/objects/0b/25937ca2a98c5d6aaf63878e74e3cae9118ddb": "15c5ba978e3925e829cc3779bd477aa6",
".git/objects/60/d4ebeea57cedd5ef2bfa34c6f995adb699cbf7": "d9bbf34e64d00263ad1eb7fb07c295ad",
".git/objects/05/38755401f08b55964f75eb6372a9f854ac1f5e": "52e866bc8cec0f33ebcf9dd572e63b6d",
".git/objects/9d/dbff252e3b10a9307a1a29c71273987d5ba2f5": "1ce2b8d27f6e66b9bd573ec6c648ea73",
".git/objects/02/57d5f3ebafce56c3669c79ee942e7d145a9fe7": "f6a8c60381a45da35b29f4729516ca53",
".git/objects/ac/05f61c3fcf184dac07701f69e2c393ac088129": "071011da90d83e3838ff2b24c673521f",
".git/objects/bb/9e202f0288f3da3c338777a4022a7e386e7146": "0e01e9a42411518a32615c62a9fadf88",
".git/objects/da/03f5ba8f27a393b6efd0ecaf37232a63065731": "227d0108e9f49805f5278f8b40712e8a",
".git/objects/a5/6277cafc85af9bc5cafd5a97c9ef0eb2324c0d": "771edfa2093c0efa808cf8f905d94cd3",
".git/objects/ae/2683de92a654ad7363bbba4cb497e67a9b8bdb": "be534c1fcc992c5a4d2c1ff3faf317b7",
".git/objects/f4/5f6f55ac6049f1497f9bab9f50bdc89629e83c": "78209aa01ee52ea9e4b2d97c1057f45e",
".git/objects/f4/68b325f7b75b5677d2b9f05d145e04744e0f26": "d25fc8f5f435ef224a6cf8550820b62d",
".git/objects/c7/e40cffd967a853c2d7c17787795eb062340ca0": "98c8e6137ea278a99a4effacbf361fba",
".git/objects/c7/25ec91b8fcad8978f6227c1e51ae747b93ba80": "07588496169690d0d73190d3c498f24f",
".git/objects/c0/958bcf57cd4ca6ef543bd1ab1302a150504291": "ba52fa418532c9891642823b3f4b85f3",
".git/objects/c9/7d1588c33196ea21a8e913e3c36b997f2b46ee": "3e57c29d6936b9dc4e59e7ad3c1786cb",
".git/objects/fd/975a1ea010207709260d21a4be36d7022d46ad": "9f907091945059eed2dc60c4e5b6e562",
".git/objects/fd/4d79d533c53414ad98e8e74d8f89b0efd9bf6f": "d0ff1ca2cb88f45688294138a1bcfa8a",
".git/objects/e4/e1553310453703033711e016692e16774bae25": "ea53af43599aed8e5b4ef8fca7022cdf",
".git/objects/fb/2de65e539284045bb5dad6612dd3dd62b1b106": "076d3815c88e886ed1e0a172ee7b426c",
".git/objects/c6/e9ce01953f25fab2cef8cae1952fbae5363013": "d63a15634c681e21ed5ee62f8c796a47",
".git/objects/4e/13c82283679a3ff6bcbda85f268cee442ebbba": "bb2605da37e416ffa79df51083222a77",
".git/objects/18/9ab6e38a2ef389f7ccaa1b1bf286960d5e0a30": "49c36ed5bf192a1fa0a240303819db78",
".git/objects/27/1f014f242e4a3ed600b45abd4cc964cabb88f2": "e48f912ed724c2d43d129b173a33ae28",
".git/objects/27/0e02387664c235965c9c7d935dd1ee84a5916e": "4968388a517993c1b015a9cc02b20c6c",
".git/objects/pack/pack-75b17fd4485203d20d3a26be0da8f668027ce411.pack": "58bf34e9c6b732dcfba22d47e318f595",
".git/objects/pack/pack-75b17fd4485203d20d3a26be0da8f668027ce411.idx": "08bef3cfcecc01ad9a20bc18080b98e6",
".git/objects/29/2727d46d1b959ba3fe3f441a6cb5cbdf2fa670": "1d89fa6358d7be7932500f0935824270",
".git/objects/29/9d644184547b045a75d4df09b6d67cdc2c096b": "ab19318a0c59fb065b2abff619236100",
".git/objects/45/638472f9ca6ad7cf023718f932c0e7dd39e7dc": "70bdc7702eec4e4eef308ed8f63670b3",
".git/objects/87/c7b676b798c714cbb0b2026ffb913f125283dc": "43506891a030e95ad18ca7403b31c8a4",
".git/objects/87/600342ac9961e9a188685cb7f469897c17e738": "ab9d04d83e4bf1f924c86fa985c44731",
".git/objects/80/f4dc92b988828bf5eeed9edabee64c34dc99fd": "ac7e5a2649d6ba9847b9c9622f99d530",
".git/objects/74/7dabf9e83586f45d10c1270b5b3d2daea11314": "7827a2e7f4960a38fecfac143a841411",
".git/objects/4c/023a054827ddcaf6c89160e8580577d0649a99": "d42691c88382b7fc17830ad86b695936",
".git/objects/4c/462a3ac880d272274b4aa7c0010417740539c6": "9eeef464104c6a261b03dccad85b1e25",
".git/objects/21/052fab18258d7eeae90388d13fd0253d7833c6": "f0b1f23a1d7bfe6fcd44a000d62cd61c",
".git/objects/2f/e32a4cad00cf715580edf365be89e9f543c41f": "a673e812b74903b1986019662603dc6a",
".git/objects/9f/2e2f3988158387425eb9d9cc49aa845ce2051e": "31e2db78d8677eb3a59eceeb429a3234",
".git/objects/6b/778bdd2acd04711dbfa6f7f78f3dc82e2e432d": "e33d945ef769a528682c79afe744dadc",
".git/objects/38/7524e88a280d33fb415d0f5c3d62ca57933eb3": "b3a7495de03c3ac524bbc5b50eed572a",
".git/objects/6e/49f8faa59b1e11b08117f0d556202f4d81e38f": "0f0b4bccdeac91d50ebb2d0737d3fcc4",
".git/objects/9a/8997b1727d5269588ea6d542163e0d7d368ec8": "6b4c99312b0330f9e54f43eb76fefe01",
".git/objects/36/2ca8c5575ba1336fed8f102739eb32b78164f3": "b35ca9f70a70b85b59d393e47002d2f2",
".git/objects/5c/f80fb26c7141946259ed501a4c6efd39a98e1d": "bdb2f99b82b32c21223e0f0c9717c208",
".git/objects/09/17b7a1d7d80184fec72a771ac154ad670f0dcb": "283073fe0428193b88349089133a6acb",
".git/objects/91/2de5ce3d867ec504f1da3f89fe9d53204823cb": "0fb56758031797c45ecd5fe3e7460e75",
".git/objects/65/f1423a7be1deaadb6f43f38d20a8d0620a9d06": "20ea64ed5ae6295d847e936ef75bf4df",
".git/objects/3a/68cf7294bbcca45e8c3865299c48ef1c7309e3": "65805950c6a32bdcf46fe040ea9fe06c",
".git/objects/55/da036b81dc7782dc74673804f218411b70ab7d": "8f9b7d0dcd6b79a7b5bbb6761a477865",
".git/objects/97/857636f6a65143b09d4c80688a5c61e98fc286": "f0d31ea4d157534773ddfd9e000bd7c5",
".git/objects/63/f3441d038d50be0b29263bf8bc151f044ea337": "c9c028e24ea1ec98dc1de99e163d35b5",
".git/objects/63/cf9a5e8ccf33e9db529b23cae12c6cef036769": "ee2cdd9e3ec894b51f5ce41ebf63a0c8",
".git/objects/0a/004dd01251aa3c4ee6cf3771ce768993cd215e": "eef9ec19cc1f556b21f4e35eebe238c8",
".git/objects/bf/7c5e059d000657d1e2afcdba2ae8dfbad7ae2a": "4eaf43129ab1ad7b9b13b1e1d102bbf5",
".git/objects/d3/bd70883d8a82c80cdf86b2b504e09fb65f8ba9": "224f5ee251b63660322d33ae9295f3b1",
".git/objects/a0/bd032be7fb6c9e298a5006a4279781392e6475": "73ce0fa33e2c046c727e13ae94410874",
".git/objects/a7/1dec5816a1eac9e9c7daf791414f40d25a5e11": "2224aa3dba73fea030fde1ef8e06d263",
".git/objects/b8/941b43b5eca5a87f32fdc87d690495619c3cb4": "dab8283c9aa53929e04147d24c260a44",
".git/objects/aa/a8322e0fbf3046ad1eb608779b1bf068632c10": "1330763ad7a6dee6bba5ca7614972e86",
".git/objects/aa/b8a8452e88973ed5d1fe756a7d8bd132748f02": "80d050964f1f58671e18ba54e071ef60",
".git/objects/db/5850d6471d4cba231c12565d8c05c1ade259bc": "c20ec8b5fa7db4ec333bc272173ae80e",
".git/objects/a8/7f871d38418dffa3a5e3775348836969cf7500": "34f28202d74324a8b7753ccbc77d1837",
".git/objects/de/e88dec36eea9ca699c7c3b8a97843439deda20": "c7e472c8ceb4365245c9b1535aec9fd9",
".git/objects/de/30b38fc64924b6e7329f6bd17bb49b25c9b8ba": "a64837de38ad8fa2bd5c214dfd77359b",
".git/objects/b9/29ba1fde95d16c36b75f7d52f9eb332c2e1cb5": "5241255cd5da2fb8433bb96280657f57",
".git/objects/a1/f236bda601c77e29ed46a69d68074856317982": "ac9502704fc0eeb964a20d92167d8e34",
".git/objects/c3/f7b4307ff9003d75bd7dde08ce464a19129536": "a9018aacbe5e7b94773e147b864c9f45",
".git/objects/c3/9b3b1fc7d1c8d48340773bae1033afe8111364": "b429c64cacaae4f78221dc867e7fec44",
".git/objects/ea/f5014a0d11111281d0590aabd7e2b490724741": "2d731044104ee0658badd9166b76869e",
".git/objects/ea/63937e0b77341683cead8d7f7189f685d72267": "7f11176de9c684a955d6e90c2ac59738",
".git/objects/cc/376ca76a837531a0cbb0a5a2de0adf9b41737d": "85ff0d532068a843df5d55a5b74f7e57",
".git/objects/e6/d84d16333b56233257a15b11bc8f2104a8c6a2": "714f2d8134f878a0c0758d99c637f4ab",
".git/objects/f9/f3b3675b6a3f9962a2316a5a0934500704c781": "704d2ac3c3ca18504428510dc8905dfe",
".git/objects/f9/1fa5272694f94bfe7b48910a192edfc28441f0": "fad5be2aabc4e47848fbf302ed38c68d",
".git/objects/f0/0496eb47a5f0991227bf5afc1d30e32c9044ca": "529c18ac1ae350c0b1dd750c13b83186",
".git/objects/e8/a1401b98575373f6c7c05ea19751e6e6f0913d": "9b17ac7dabb1276b1e7b0b83d3264d02",
".git/objects/c5/3034fdfcc43cddeb87159229af902ab99def53": "b903d9e9b7f7cc398094640484e8f45b",
".git/objects/c2/e40bf65de2622c35305ed102f8a88a85710733": "dfcd3a0639c81d8f1fc8d1bbd8e977b2",
".git/objects/e9/fa5761518eb9f0ecb2ebd6455bd65ad40c39ea": "bc846b7c54197d06801f7eed7c931eb6",
".git/objects/e9/2efe15a4a3fa811ae9ebc11eb485ba332c2cf9": "92c9059305da3260f43f418436756493",
".git/objects/f1/a803db9ed557270ac5f6313e39bc31a1485b6d": "bebb626ac0b70eb0fb352efe445db9f3",
".git/objects/f1/b39d3a6df21cadf4f2b4f6bd93a1ce8462b049": "a020a245a8be42d29430e3890fbfb6ac",
".git/objects/2c/d0b0508b56e877f2cacecee97e8348674159db": "831a2eebb71633c9eef655aba6cdbcd7",
".git/objects/2c/00c3a86571f040754e7aac43ef57991749a041": "999b78cff683e06cfbb600aca93f89af",
".git/objects/79/afb37708cfe503db6a93958b0e579b5cf0ec37": "d2427426ebddc4a56e33b4213e06cef7",
".git/objects/77/41238236f3fa61707323326d971ab46a2ef47b": "4c2e35f7e00383264e055d2b12dd5ae9",
".git/objects/48/d63272a0e8dd3379b23196fbc942b45a78c1e2": "c46be23a2a8be8a472b1297906498086",
".git/objects/48/137be7f198f144332ff3e1cbde73bf6728385b": "4ecf18fc801adc9605d7468b68894eb7",
".git/objects/70/2b9026b9faa9b9c868c9f7dcd79a5ab9e9f551": "0d3ed32c596eceb7209484b73acb9127",
".git/objects/84/0fc43dbaee7df0f9e8d94cd7a92c2a5fc5f69e": "cf154af07a83883dc66d6602a400ecf4",
".git/objects/4f/6745a2990d0061292c37573557a5a180f04ebd": "4e71bd44a97c79f0f2601c5dfaca21b8",
".git/objects/12/0fb146c33b22293938258a53536f24916d8398": "f0be9e03ed419857828418728b885a1c",
".git/objects/76/d9b796434d910b59f2035cfbcbb9b552ee9f23": "939b968a53f76eba6fd6211afad56c52",
".git/objects/76/c16db6d04739b41005646343a334f55db39c6d": "b1b8e23ae950518249e22bf1af077c7d",
".git/objects/47/a178f5d0d7ed2e759d9c127ed85f4b2629cd81": "bf1681f2ca756091788fb71148b2cb0e",
".git/objects/78/e2e470f12a8ccd7ddc092b0ca63c75bfe81014": "15824a2cc84536f511304b90cfcf4d5a",
".git/objects/7f/e21eb9fe7c3b8c3b814dd443608455ee959ec4": "abc86a4693982555957f7710b9367689",
".git/objects/22/46175cd830b5318ad6c4a286d95daa63739a95": "4fe15db71da507871e1710f7922cfe15",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "beb66a78155cff51fa13d812a2bc82db",
".git/logs/refs/heads/main": "0c8f056e48775d0ab0b3a39f625244f0",
".git/logs/refs/remotes/origin/main": "c3873a2eecb817a3b62af00e3d352163",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5433a4296b2e962b0db68f663ce0a545",
".git/refs/remotes/origin/main": "5433a4296b2e962b0db68f663ce0a545",
".git/index": "5c879906284b059ce9144a5916186a32",
".git/COMMIT_EDITMSG": "9e51e01fa1cc3256e7863d2ed6143a22",
".git/FETCH_HEAD": "4fc41a3ad2813a8ad914438d937ccd49",
"assets/AssetManifest.json": "47149c8fe5c46a9c582eb7dddca33f0a",
"assets/NOTICES": "6d3f0d4afb6c422512e18ac6dc206829",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "64454a1c12ff5862d147afc4e6458714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0af5df238ac5af25989cb5461ee0cf77",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "da78ea377063edd4091cbcb6c86fab75",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b89e06a32d66ff56e468ff64e5ac7dfc",
"assets/fonts/MaterialIcons-Regular.otf": "fb57d64a3fffc599c09803aae588d5f8",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/no-data-found.svg": "1e76ec09c05a5aa36cceba8b788ad254",
"assets/assets/images/Clip_path_group.png": "3b6a68d13bccbda07712c135f39d44e1",
"assets/assets/images/Vector.png": "c57f5f97b0a2f3dd17071995a01b91d4",
"assets/assets/images/employee-is-unable-to-find-sensitive-data.png": "10f9f189a7b8b18f8d8b4b66ff3d0342",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/emptylist.png": "5d72fbb9b22a8a986efc6634c26fac19",
"assets/assets/images/Pie_chart-pana_1.png": "b6f7fa1025f3c86d124828af9f49507a",
"assets/assets/images/ABG-LOGO.png": "2ff441b636f211ad04f1828a7404715b",
"assets/assets/images/a42731e1bcbd3766d9ecad5608fa9e95.png": "7d26686bcb3dc1285b1cc4f752abc3f8",
"assets/assets/images/report.png": "e3d941db9fff230149270bb461cb9e39",
"assets/assets/images/error_image.png": "0f37ab5620c78dc5acd8473c5410fc7c",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/LoaderAnimation.json": "4d88a19754726eabef579b5d07a6e689",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
