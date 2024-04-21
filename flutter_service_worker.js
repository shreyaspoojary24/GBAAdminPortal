'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f0c0ce745bb6d20dc456a77994d94341",
"index.html": "96a946d40708b7959faa1d8b24cff66f",
"/": "96a946d40708b7959faa1d8b24cff66f",
"main.dart.js": "5cac275dacce0554299be9a18aa3f5ab",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/config": "e5838104736ea87a361ec963c021f9f6",
".git/objects/61/cc5beec938aebc88e231d91af70500eaf7575b": "e019cb17687bcb1de50cec1811273c8d",
".git/objects/59/c44afa0458b939002864527682128d0ddb43f9": "286578e65c6e10b4e3259270b9816d0a",
".git/objects/68/798ce34886f70affdf3a858cbffd761d02dba5": "74313b39fc9ab8c2d44c1a08ed3a5ce1",
".git/objects/32/3e71f57f8463701766d9a4494d56a751f9de37": "cfc18c449a71571bff3b11653d3d0963",
".git/objects/35/aef683560a5a9640bda430ef8866913b3558a4": "517805dca11b4485e3c5335dcc2ce590",
".git/objects/69/c1fddab4994f063390e94b04393fc5546ddf2b": "151a78611607694009b9688497db2b6a",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/69/d85d35abbf3db966524be2a2b0c86fb962f6e1": "62d6c24bfecb4e2d5f57af6374e6c345",
".git/objects/0b/25937ca2a98c5d6aaf63878e74e3cae9118ddb": "15c5ba978e3925e829cc3779bd477aa6",
".git/objects/60/d4ebeea57cedd5ef2bfa34c6f995adb699cbf7": "d9bbf34e64d00263ad1eb7fb07c295ad",
".git/objects/ac/05f61c3fcf184dac07701f69e2c393ac088129": "071011da90d83e3838ff2b24c673521f",
".git/objects/f4/68b325f7b75b5677d2b9f05d145e04744e0f26": "d25fc8f5f435ef224a6cf8550820b62d",
".git/objects/c7/e40cffd967a853c2d7c17787795eb062340ca0": "98c8e6137ea278a99a4effacbf361fba",
".git/objects/c9/7d1588c33196ea21a8e913e3c36b997f2b46ee": "3e57c29d6936b9dc4e59e7ad3c1786cb",
".git/objects/fb/2de65e539284045bb5dad6612dd3dd62b1b106": "076d3815c88e886ed1e0a172ee7b426c",
".git/objects/27/1f014f242e4a3ed600b45abd4cc964cabb88f2": "e48f912ed724c2d43d129b173a33ae28",
".git/objects/27/0e02387664c235965c9c7d935dd1ee84a5916e": "4968388a517993c1b015a9cc02b20c6c",
".git/objects/pack/pack-75b17fd4485203d20d3a26be0da8f668027ce411.pack": "58bf34e9c6b732dcfba22d47e318f595",
".git/objects/pack/pack-75b17fd4485203d20d3a26be0da8f668027ce411.idx": "08bef3cfcecc01ad9a20bc18080b98e6",
".git/objects/29/2727d46d1b959ba3fe3f441a6cb5cbdf2fa670": "1d89fa6358d7be7932500f0935824270",
".git/objects/87/c7b676b798c714cbb0b2026ffb913f125283dc": "43506891a030e95ad18ca7403b31c8a4",
".git/objects/4c/023a054827ddcaf6c89160e8580577d0649a99": "d42691c88382b7fc17830ad86b695936",
".git/objects/4c/462a3ac880d272274b4aa7c0010417740539c6": "9eeef464104c6a261b03dccad85b1e25",
".git/objects/6e/49f8faa59b1e11b08117f0d556202f4d81e38f": "0f0b4bccdeac91d50ebb2d0737d3fcc4",
".git/objects/36/2ca8c5575ba1336fed8f102739eb32b78164f3": "b35ca9f70a70b85b59d393e47002d2f2",
".git/objects/65/f1423a7be1deaadb6f43f38d20a8d0620a9d06": "20ea64ed5ae6295d847e936ef75bf4df",
".git/objects/3a/68cf7294bbcca45e8c3865299c48ef1c7309e3": "65805950c6a32bdcf46fe040ea9fe06c",
".git/objects/55/da036b81dc7782dc74673804f218411b70ab7d": "8f9b7d0dcd6b79a7b5bbb6761a477865",
".git/objects/97/857636f6a65143b09d4c80688a5c61e98fc286": "f0d31ea4d157534773ddfd9e000bd7c5",
".git/objects/63/f3441d038d50be0b29263bf8bc151f044ea337": "c9c028e24ea1ec98dc1de99e163d35b5",
".git/objects/63/cf9a5e8ccf33e9db529b23cae12c6cef036769": "ee2cdd9e3ec894b51f5ce41ebf63a0c8",
".git/objects/d3/bd70883d8a82c80cdf86b2b504e09fb65f8ba9": "224f5ee251b63660322d33ae9295f3b1",
".git/objects/a0/bd032be7fb6c9e298a5006a4279781392e6475": "73ce0fa33e2c046c727e13ae94410874",
".git/objects/a7/1dec5816a1eac9e9c7daf791414f40d25a5e11": "2224aa3dba73fea030fde1ef8e06d263",
".git/objects/aa/a8322e0fbf3046ad1eb608779b1bf068632c10": "1330763ad7a6dee6bba5ca7614972e86",
".git/objects/aa/b8a8452e88973ed5d1fe756a7d8bd132748f02": "80d050964f1f58671e18ba54e071ef60",
".git/objects/db/5850d6471d4cba231c12565d8c05c1ade259bc": "c20ec8b5fa7db4ec333bc272173ae80e",
".git/objects/a8/7f871d38418dffa3a5e3775348836969cf7500": "34f28202d74324a8b7753ccbc77d1837",
".git/objects/de/e88dec36eea9ca699c7c3b8a97843439deda20": "c7e472c8ceb4365245c9b1535aec9fd9",
".git/objects/c3/f7b4307ff9003d75bd7dde08ce464a19129536": "a9018aacbe5e7b94773e147b864c9f45",
".git/objects/c3/9b3b1fc7d1c8d48340773bae1033afe8111364": "b429c64cacaae4f78221dc867e7fec44",
".git/objects/ea/f5014a0d11111281d0590aabd7e2b490724741": "2d731044104ee0658badd9166b76869e",
".git/objects/f9/f3b3675b6a3f9962a2316a5a0934500704c781": "704d2ac3c3ca18504428510dc8905dfe",
".git/objects/2c/d0b0508b56e877f2cacecee97e8348674159db": "831a2eebb71633c9eef655aba6cdbcd7",
".git/objects/78/e2e470f12a8ccd7ddc092b0ca63c75bfe81014": "15824a2cc84536f511304b90cfcf4d5a",
".git/objects/7f/e21eb9fe7c3b8c3b814dd443608455ee959ec4": "abc86a4693982555957f7710b9367689",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a6e85d1f6c8707c48e0541066da6a63",
".git/logs/refs/heads/main": "17399ffc99f1f145b9a7ad25d9e60ed0",
".git/logs/refs/remotes/origin/main": "87ca01842f1f437cabac798cb1f49e9e",
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
".git/refs/heads/main": "bcface149794e00718fe3812d00c7b9e",
".git/refs/remotes/origin/main": "bcface149794e00718fe3812d00c7b9e",
".git/index": "ec6b3a0b09eeb08eac3a29e106e31a74",
".git/COMMIT_EDITMSG": "436940cf5399533f68458fc29383ea46",
".git/FETCH_HEAD": "4fc41a3ad2813a8ad914438d937ccd49",
"assets/AssetManifest.json": "6be6ba0ca3d49d5105461b7dabcd75a9",
"assets/NOTICES": "f9d7ba79adf155e7352d266247e12bbf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "6ccf8ab45aefd62539a6fb0fa881084b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0af5df238ac5af25989cb5461ee0cf77",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "da78ea377063edd4091cbcb6c86fab75",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2b4bb460f0913df172b7838afc45aed3",
"assets/fonts/MaterialIcons-Regular.otf": "e0905e0bbdbb08ab69f7573f7042ef66",
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
