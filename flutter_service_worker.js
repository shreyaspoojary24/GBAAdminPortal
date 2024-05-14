'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f0c0ce745bb6d20dc456a77994d94341",
"index.html": "9b1fa182bc212e2a2487edbf5d909f35",
"/": "9b1fa182bc212e2a2487edbf5d909f35",
"main.dart.js": "3adfefa389a1d8fb7fd65b750af9dc4a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/config": "e5838104736ea87a361ec963c021f9f6",
".git/objects/61/703c148968db90c26a3d5a04a31116fc7ed25d": "9b710d8f1885bc7dfb25d17dc760dac0",
".git/objects/03/1a26742de9ddc9b699d693b5c1097a9b9a196c": "5fc351263fb5249fd9a7be113fcdcd93",
".git/objects/6a/0615562e8135f8351ce69c25ff58a08a936e48": "97f145a386091945e0b10bfa07f327c3",
".git/objects/3c/b302597cc9eabffd906a1f32d8563985a28d17": "11d28c160881e4eef83f3321dfeddd63",
".git/objects/0b/0b5dbb720165111ea0e8d24dc75a1bcbbe1532": "2b00ab9d08fbd578db271dd740669b36",
".git/objects/a4/a8824dea5d098965a645dad36346b4023aef7c": "55c1883f361c020e322a16dfaf35e991",
".git/objects/d9/8aa0ecebb74a7b580a99625b419a14cc396c19": "9d4f65937618680aa4be80934da737ea",
".git/objects/ab/da31b7600d39f5dbf1c6a10425fd164d469f67": "35fc642f3afbe2609f7b2917a9b70ac7",
".git/objects/ca/2177c1a6d09078fe2fd2e1f46d44753b28a602": "937c1729d7e4bcc15b70d650678b5b44",
".git/objects/c8/12a683a6d0fad7a173abecb450a759ef2d27c5": "4137e08ffff5a06669648b0c438777ae",
".git/objects/20/e1079f40244dddb1d6f266b610b4861ea0ce27": "255ca70db6074456b2c0ab573f9f38bc",
".git/objects/pack/pack-f38c7cf2cbd04163cadd8e0c75c85e523b5d6c60.pack": "d05bfd8647bb70bf3c65d93fe525a539",
".git/objects/pack/pack-f38c7cf2cbd04163cadd8e0c75c85e523b5d6c60.idx": "c0424beab2f11d4428ed1de2caa50ffd",
".git/objects/38/47cdc4489dd7432cc8e98bba89a529636070e4": "f3cd446b23ece674c680fef09ae3d0d7",
".git/objects/65/ccc0299efb19fec17bb95faf1000bb0181be55": "1d55487f188b8043ca70961ad2ebc736",
".git/objects/53/54c650413c25986f84a95efe24fc36795139a5": "eaae79ecb9f165caded6d44180238048",
".git/objects/5b/59ae25e0618e3efd4072d030d2e69d762e0beb": "89db62f40b310c55591ef0a9bf3ef325",
".git/objects/97/53baca328d2fe29e001a1e9be7c91be465636b": "19abc29db91a84a1cbd3a9b34e943452",
".git/objects/63/368212c18a8706f4c27eff643e280435644981": "9d95fce2bd44df77b8f4c26591c09949",
".git/objects/bf/a9ecb90a2ce967d1760b5bb327200f326377fa": "0b440fcea869d3854bc0b0b621195d6f",
".git/objects/a7/346d98d7fe56e85f42a3eb79a1415145f9d800": "09ee3c8292eede8b21487096e71ab531",
".git/objects/d2/81703ced58c07fc468fb540ee5eaaaa0097df1": "ad3e4602b039c897856ba5a1df76f6c1",
".git/objects/b7/93efa87cb80eb39737569db681c9d4a37d4579": "8be976096d2473db074600ed3183d60c",
".git/objects/de/6a23531e2cb36c2d456a1e4aff7f8f45adf384": "ee31fd352d5a80a8f1ad33d7c9144463",
".git/objects/8c/8c225cb25ab3e2ee2feb5a7c0551eb52069dde": "5eb618021169ffa1d0e44b1ac47ef023",
".git/objects/49/f7480bde760764344661e22beb70998c4cffe1": "f564c7b6a3d803728af982d1d0ec2f0d",
".git/objects/13/909ae311f3ae84a504c59ed1d0c171f912f92d": "de7d2eb30bdaf6d7a79c58607f997b27",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "073a4ff51d881c9c1ce1a0466e7980c0",
".git/logs/refs/heads/main": "073a4ff51d881c9c1ce1a0466e7980c0",
".git/logs/refs/remotes/origin/main": "452c7aca4da84abcf75c2c9711a84a95",
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
".git/refs/heads/main": "7ddea105aff1dd0829b6609a945d1abe",
".git/refs/remotes/origin/main": "7ddea105aff1dd0829b6609a945d1abe",
".git/index": "c4d440f9b8bf73b67b28f496b23f399f",
".git/COMMIT_EDITMSG": "b0bc5dfe17c9eccb5733f178ea525c18",
".git/FETCH_HEAD": "875fc4c8eb881af414e0492d7939ea6b",
"assets/AssetManifest.json": "92475ef832ca46f0d98b7a2427530a66",
"assets/NOTICES": "6d3f0d4afb6c422512e18ac6dc206829",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "d39303d2ced6698b34c7262ca7618199",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0af5df238ac5af25989cb5461ee0cf77",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "da78ea377063edd4091cbcb6c86fab75",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d65f7fe939c263902259c77e51f28a85",
"assets/fonts/MaterialIcons-Regular.otf": "60c7d37281697c8b815767837b02341f",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/no-data-found.svg": "1e76ec09c05a5aa36cceba8b788ad254",
"assets/assets/images/Clip_path_group.png": "3b6a68d13bccbda07712c135f39d44e1",
"assets/assets/images/Vector.png": "c57f5f97b0a2f3dd17071995a01b91d4",
"assets/assets/images/download.svg": "bb23fe9460c1da956300a2aa08871ca9",
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
