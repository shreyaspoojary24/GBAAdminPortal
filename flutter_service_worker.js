'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f0c0ce745bb6d20dc456a77994d94341",
"index.html": "0e29f4c7a4338bf4bf4ba416afb69741",
"/": "0e29f4c7a4338bf4bf4ba416afb69741",
"main.dart.js": "b4e5f1af65b6427ca8bc54d81e250d43",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/config": "03a45dc7ed9212d5389c0e37f860d64c",
".git/objects/0c/33993796b947fc6e68da5cf2c2d96de2b1736d": "933772831d80a1ba2e2f318144201786",
".git/objects/3e/623bc73bc1c84532cb7ad7b696bf923520ec26": "330650bb8cb4e97d0e64e3d42abd3c3b",
".git/objects/57/3e93a94bc17b96d90f1c5cad33eca23daf8d54": "1a1584c10d1b3a7899a058800ef8ed07",
".git/objects/57/17ba04d53966d9584f5b53494da5ead6066944": "a3993d87e0a7dc923092273f7ec94cba",
".git/objects/03/7b507980b7688e5c8f0a33fe47c59c2c2735cd": "0faa6bb9f92d3b81f0d9c4daecd1f5e5",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/9b/1e240b93e5232c8e2a505626e259bad68fcdf0": "85ee9c7835acda0364b1adc901d22701",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/35/a3ca0d2005cdb48018180470476cefcea20f88": "455dabb84b16037691285f6b245b701b",
".git/objects/3d/6edea37215449429fc988ba677a87527c60640": "b94738bf66433ce1758f686cad8164db",
".git/objects/67/4cb35f2b14912e16e7b253fbac18c769e7ce03": "2384770a206015d2f6129d81d05f46d8",
".git/objects/67/92e88068b21723b284e6580979e77304f19359": "2c89c5277ae07b54bd33a7dc3885a96d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/5e9bfb0cff1f4aff65d5c4b1c956761ca4fcde": "c4f8e62365d3bcc3b5f825fddd7e072f",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/5a/a7a657716fe103d653399225556246f1d1f119": "018cf1b512604e0bc528bc53bdbb962f",
".git/objects/5f/d896a54ada171ec114ff190c9490e161772139": "1700166f4ec014385fcec3a2d8ec2521",
".git/objects/05/6b5b88157b9e261798a3990bbb2eff5a842a62": "3dbe3709ed6f18aefeb9f28556dc9543",
".git/objects/9d/b156cba4a0eff736866e24850c750598739550": "e5eae70e4323ac38a102a3dafac90fad",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d6/32b09643726c013f762b6ef3b42bd046deff56": "2e184c5c22a9bee4c15bac6b46f171e3",
".git/objects/ab/bfcd6b21915853656559fb0372c6c28219ea7e": "1b657d4a0c2dbc973bb2b4b14b426571",
".git/objects/e5/504c236106e2fc61cebba4d09a20d07ad2f0dd": "3d26718dcecbba990c0581a73d6d25a1",
".git/objects/f4/3f4b2e73b433108c0101474c389bc1ea68ad65": "0a6645235b295219ba09ba2f0ffae198",
".git/objects/eb/5ffe149a9c6c96de296472c49a015975d00766": "b7e327e1b84c549efcfa321acda9985d",
".git/objects/f5/a62d4bc74189b549f487f3be9a681f06a2c553": "53f51b0db5c9be286520afd879a8609c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/7c/ecfe7e00f1f9e5c77a784053e7925d8cf08bf6": "510c3c00a77b9bf5a7857f03109e0c74",
".git/objects/16/4ef12c9934fd730b86fcbae2c78e0c07b12529": "b0ba89cc7dae166bf7d4a53123b1f985",
".git/objects/28/adb58b427e39e3cfedb0736e65534ced4d8a44": "70db826c23ce53f240a1c9e9bca4f143",
".git/objects/17/26831309de90038ee3a56e0cfefed1e4380f81": "5a3477fd1b6c8a6b7477f294abdc5f52",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d19eaae20bc0dbe74618e084092898edacd40b": "36484262abea2334bc7cf461b98aa01c",
".git/objects/7e/3e3fcccea7c1c0bf6e3b50df9ee0691a8a8a14": "6716af5afd0a26f9a551f755895ecd41",
".git/objects/81/7f74add7ce7ffa4e6e1317ada79a8efd32b205": "c32ae4dd30718f669663898bd0c1ad16",
".git/objects/2f/5fd5998b0bb56acd46985530da5dee0fdab0e5": "543dfef738bde05fd88b1bd4c6f588bc",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/6d9c31555ae3adfef3ad9669eb7102570ec9e9": "3ffc16c4c646ef756deec75e8203436d",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/96/e1429de138e29f619b0a907f30d0abbda25f48": "c52618332c8768fac5bb5fb90d698c8c",
".git/objects/54/ddd96fb94ec507634cafb02774c78f6d10a431": "b1763b5c7ff1668eaafbc20df93f22c5",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/06/b3332f31161220b53435b8931b261705c243b3": "cd3e5da100e954339eab2585ce2e1943",
".git/objects/55/ce1833b719bf56d637394d54554770e5230210": "63df6fe02fc44fda9acbca633c6fd32c",
".git/objects/0f/f5f57a5fa719a37dd6415d15a22e039fc6027b": "113ccc4b1c9a0f0e313c8438fc4aaf06",
".git/objects/0a/92ea27d915b6b7c9c385b3a418b40b57ecdbb9": "f8305569b846d61c4c946c8d2e6eb8f4",
".git/objects/0a/b5f1fd0787d065a785665117144d6876a33471": "468c22564a8e5b1f11163f210505bbde",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/ec807aff8489e25609bd5ca428c6b373bdd598": "b8501b29fc97b3df0c7e3ea69cadd56a",
".git/objects/b8/a126189730546f1f4e385d49a48d1295a391d7": "a596e48905f9bf0063e97d0ee485d277",
".git/objects/b1/44b6a2dba8f2a0e7662e0e7b00b4c442eec34f": "a260551d3be8973e30f36de2a511d873",
".git/objects/dc/1a47d167c1641d80bc66075f12368200ef654d": "b306e2078972df01bb3aa155fcd1c41b",
".git/objects/a9/13461adc75b0e168ce36f612ab294c1a009316": "3ddda57d456349c543898960b0fc1b50",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/3af2021bbebdd01963bc1f16d5c608db5dbb94": "80c571edec979ac2202efcc29e601d7f",
".git/objects/a1/a0b70e7dac5a158bb014e1f2c2a65555bcc3e6": "b91ae72bc09fbc161cced6ae49a3c30e",
".git/objects/ef/45d93a8921786af8fb949308dadcec731405b1": "bc3a7b0c4b183f89a93bed11696c0dc2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/e37fe375ffdc3e0d735ed4f8a88734b2882fad": "4464e651db173ce0c409e6b08abf345c",
".git/objects/e8/962f91992cd0fc24698f3823fda8999eea3b42": "de35156b3fdf8af87384e251e437bf39",
".git/objects/fa/3ac2abe0f7e05072ad8bdcca9311cd5e70f1dc": "0ef0433773741f0fe93566207e8eae61",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f1/9235ac014a810b30780573295ee343dba0d51b": "5e73eb18bd3d27e603a9584399a84707",
".git/objects/e7/ab2e98c5d2401ba1baac5d363dec9e614b2bef": "d24b111dcbe5bd614bc0822313a5cec6",
".git/objects/e0/420964f63e404079942c7c3816e877a795760e": "da1ba8c0f00ff0d99dc90c2946a203a3",
".git/objects/e0/89bb65fb2c1e040f442aa84ec45802dc329862": "160e31bdf420f16465754032843d81ea",
".git/objects/46/97f41ed503d3a81597cfbc6b7c73370e4833d7": "092c17ba7c33164a3c7429daebf7dd04",
".git/objects/46/76882476a25c8dc6cde50a83299a4d0e7ca0a0": "23d74356b64e7abbbe611ee3e5c57b15",
".git/objects/77/513fd200a7fc1b32a3bda419c65d73bc1a1ca8": "d8ed7a6426b52d891b98a5dfb102f431",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/215d6c573a7ab6959bf42c6460415ae55fa1c4": "8a313635d145db0a0cc455b6391cb289",
".git/objects/4a/b63bdecf95f1e49437b3501b3130b939a18fc5": "fb5cd9e6267acb967353ed60ced0f584",
".git/objects/23/807cc490206d7e5d01ce23caae77eb2e74609c": "8c2f0dd840e180752440d611d09b40b7",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/08ce9af49603abcfec53d79af6062aa9b64e65": "b55dc57c4715f9dcf36862781cb4c8fe",
".git/objects/71/5b4022b57734527306ef47536cce72ba3b3f27": "c273d9fdccd69c72921f792c28123d7c",
".git/objects/40/66e73b98bbc83da09b21b383a45957354dff02": "afc75ecda09edb859884fd7fcfe73d55",
".git/objects/2b/f4deba9e68e3e1d16659c54bfef85677cdfa75": "024a2dd8a319594d93c40097935aefe9",
".git/objects/2b/df4118a284f18bf210dc89cb6d3ee30de529c3": "954e65c3df8e47bc310d9dba9017158d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4229d519eeffe414ba9616d720081365",
".git/logs/refs/heads/main": "3df89ac4d9082436357149dc967d3c4d",
".git/logs/refs/remotes/origin/main": "3ea6f838c4721ec9eff7fe2eff9b3372",
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
".git/refs/heads/main": "155364995cb6db499570cc6a196f6ae0",
".git/refs/remotes/origin/main": "155364995cb6db499570cc6a196f6ae0",
".git/index": "c499bb74050e9d24bb4e9c2a90e9752a",
".git/COMMIT_EDITMSG": "5daa3cfedabf6fe00c41d6e00c5099ef",
"assets/AssetManifest.json": "9b0558030b6ba4567f48f132b76172b7",
"assets/NOTICES": "3055c4778ba8ed5b955df5fe438b11aa",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "9f386f6f715e5034fb608a60c4d0e346",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6d0d84b8ed8c164a9eef0d396dfff8a5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "da78ea377063edd4091cbcb6c86fab75",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "45a104b6a741b94074f56e6d6631a30d",
"assets/fonts/MaterialIcons-Regular.otf": "1dd7b1feb15e7e32345680cd30e6c151",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Clip_path_group.png": "3b6a68d13bccbda07712c135f39d44e1",
"assets/assets/images/Vector.png": "c57f5f97b0a2f3dd17071995a01b91d4",
"assets/assets/images/employee-is-unable-to-find-sensitive-data.png": "10f9f189a7b8b18f8d8b4b66ff3d0342",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/ABG-LOGO.png": "2ff441b636f211ad04f1828a7404715b",
"assets/assets/images/a42731e1bcbd3766d9ecad5608fa9e95.png": "7d26686bcb3dc1285b1cc4f752abc3f8",
"assets/assets/images/report.png": "e3d941db9fff230149270bb461cb9e39",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
