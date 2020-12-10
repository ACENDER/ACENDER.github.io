/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2012/10/01/Month/ONE_201210/index.html","4db842e760cf58ed09c079cd17d94993"],["2012/11/01/Month/ONE_201211/index.html","3f7b4ded36e0dbd71f499cc94be039be"],["2012/12/01/Month/ONE_201212/index.html","dafc353203f7940f413a8173d188bf2a"],["2013/01/01/Month/ONE_201301/index.html","c16f35420656f11951c5a264282db96b"],["2013/02/01/Month/ONE_201302/index.html","e27228ec173ce95e0e5d78632e101118"],["2013/03/01/Month/ONE_201303/index.html","77597b1d4bf20d2b3c252f7825bcd4ad"],["2013/04/01/Month/ONE_201304/index.html","3bf1737f6f4ca71e69bf639d05db6d40"],["2013/05/01/Month/ONE_201305/index.html","cfe481ad533ba3aec4bce05eda4f469c"],["2013/06/01/Month/ONE_201306/index.html","016cc16e815dd5105b55872c503d4853"],["2013/07/01/Month/ONE_201307/index.html","49b74eac0d62793a860fe2361a5effab"],["2013/08/01/Month/ONE_201308/index.html","5d9a9f5a244fc25762d6af13e549001a"],["2013/09/01/Month/ONE_201309/index.html","446cee2418891b8254ebe510b4c2c0ce"],["2013/10/01/Month/ONE_201310/index.html","0e99884954758b5fe1f0394accae9833"],["2013/11/01/Month/ONE_201311/index.html","f5604f01fa25d36b69b87df44cf2e10a"],["2013/12/01/Month/ONE_201312/index.html","e1dbac148238442ec2b1ba7091edf563"],["2014/01/01/Month/ONE_201401/index.html","42a0b4136684aac7727f274a2bc0af38"],["2014/02/01/Month/ONE_201402/index.html","910ffe32227cf14176ec26a63c1a8c16"],["2014/03/01/Month/ONE_201403/index.html","eefb3369b464560c9b5655ea6fc0b6f5"],["2014/04/01/Month/ONE_201404/index.html","cdcf11abd536831e1fead9a21d28ba95"],["2014/05/01/Month/ONE_201405/index.html","f71462c8685ddf89075a41ba393201d1"],["2014/06/01/Month/ONE_201406/index.html","b453cf38e33c6b2d79deebef34e48ec6"],["2014/07/01/Month/ONE_201407/index.html","0ba125351a5a031348253e2093e9f959"],["2014/08/01/Month/ONE_201408/index.html","c957b5b856775486ed49220ec03583cd"],["2014/09/01/Month/ONE_201409/index.html","fd0b6dc8a29251c01a34e376b36c0576"],["2014/10/01/Month/ONE_201410/index.html","ccf68365312bd048f0def12500f979c0"],["2014/11/01/Month/ONE_201411/index.html","925710aa8040fea8c9cdd5d755e69beb"],["2014/12/01/Month/ONE_201412/index.html","c4eba51b309731eff2b571ec40682371"],["2015/01/01/Month/ONE_201501/index.html","c325a53b1be13957d6228dc7c5d0bd06"],["2015/02/01/Month/ONE_201502/index.html","658ec720562428adade8210cbded83ec"],["2015/03/01/Month/ONE_201503/index.html","11ae378248aed39cac59cce29230a78e"],["2015/04/01/Month/ONE_201504/index.html","c4f99a18539252fb79edd342fc8aaa99"],["2015/05/01/Month/ONE_201505/index.html","faee792a5046037fe79f00b73c5410aa"],["2015/06/01/Month/ONE_201506/index.html","59d3f1db9f200cf10fb676017f02c5bd"],["2015/07/01/Month/ONE_201507/index.html","ae86cce179909f07d0561f07e6dcdab5"],["2015/08/01/Month/ONE_201508/index.html","5f3adbfd4e42da4407a107bc46806d8b"],["2015/09/01/Month/ONE_201509/index.html","d35f3fcbd7be8e205a707ced744db43b"],["2015/10/01/Month/ONE_201510/index.html","5396d3c18ea7a30b2c5afd4c89049e13"],["2015/11/01/Month/ONE_201511/index.html","3703a837a1b6303807ef2623a91492b6"],["2015/12/01/Month/ONE_201512/index.html","53181826101500737f84ffe77603c0b9"],["2016/01/01/Month/ONE_201601/index.html","835de70b68287bf96562bb4ab46d0edf"],["2016/02/01/Month/ONE_201602/index.html","174bfdd200ab822ab60dbd5525d94b3e"],["2016/03/01/Month/ONE_201603/index.html","421c2087024198a5ba17456a1c73c010"],["2016/04/01/Month/ONE_201604/index.html","81ef12b7065d8e1196fd5b075243c128"],["2016/05/01/Month/ONE_201605/index.html","215acf4c9256a57cb185b7d6891a5d1b"],["2016/06/01/Month/ONE_201606/index.html","a05b46bb525b7ff7518de0b0338085f3"],["2016/07/01/Month/ONE_201607/index.html","06322cca0fe08b9f3f51e5fe90fec28a"],["2016/08/01/Month/ONE_201608/index.html","f73df36cef6fc9db8f036294249ef3bb"],["2016/09/01/Month/ONE_201609/index.html","5771f51a00471ee6c4aaa3fae0698a17"],["2016/10/01/Month/ONE_201610/index.html","60ee69b9a09fccff07404364885ae537"],["2016/11/01/Month/ONE_201611/index.html","6c8d5c169558671bc9f46aecef1fb86f"],["2016/12/01/Month/ONE_201612/index.html","6ba90db46607be726e57529d9e6350c3"],["2017/01/01/Month/ONE_201701/index.html","b3050a6721b056207bf4a7eed309d20e"],["2017/02/01/Month/ONE_201702/index.html","7caabe443c7a6bdb02abc99e5616ef22"],["2017/03/01/Month/ONE_201703/index.html","7847fe1f046914057d4969e46f5ef2f6"],["2017/04/01/Month/ONE_201704/index.html","cd4ae6d8e1bc168565c5a8c95f26d10f"],["2017/05/01/Month/ONE_201705/index.html","2bb7e2c0618d59c537e79e078bbc1b38"],["2017/06/01/Month/ONE_201706/index.html","04b752436bb97aca17791db900539a22"],["2017/07/01/Month/ONE_201707/index.html","e5a01d95440496dd401aa3dac9f0afbe"],["2017/08/01/Month/ONE_201708/index.html","63552f30b8c277bb59a094a0a10b3347"],["2017/09/01/Month/ONE_201709/index.html","2f02f4ce9c097718044f86c0c38f1e1d"],["2017/10/01/Month/ONE_201710/index.html","d493e8d234dc7bebcb648bde04e918bb"],["2017/11/01/Month/ONE_201711/index.html","1d973221965c050893349708e651f4a8"],["2017/12/01/Month/ONE_201712/index.html","92d8f607b06c8836bdce9f99072f05cb"],["2018/01/01/Month/ONE_201801/index.html","0cd7e3d4c4ee88d546e8388e32411628"],["2018/02/01/Month/ONE_201802/index.html","eb62b4229f1a4333849d6d12f3dfcb51"],["2018/03/01/Month/ONE_201803/index.html","d8e4d5de55a7fa22c68c9aa3a1522de8"],["2018/04/01/Month/ONE_201804/index.html","1cb9b1a7b61230e6c3934a7e40237e55"],["2018/05/01/Month/ONE_201805/index.html","80dde51eccb5328e4e64fe8a1f727896"],["2018/06/01/Month/ONE_201806/index.html","02bd222ce8b2c8c9a06814f04d869824"],["2018/07/01/Month/ONE_201807/index.html","3fe63c9c2670d556f684afda53ff16df"],["2018/08/01/Month/ONE_201808/index.html","a4dce8590a96cc0415aff50acb5483c9"],["2018/09/01/Month/ONE_201809/index.html","ee3c68c2dc8d6adc8b025545b5c3501b"],["2018/10/01/Month/ONE_201810/index.html","0a2e5c2b2bf8991ee3c438a7bc360c02"],["2018/11/01/Month/ONE_201811/index.html","41c00c0bc591101b3af731433607638f"],["2018/12/01/Month/ONE_201812/index.html","9d7d5fac0ee27dfcaa64aa03ab84522d"],["2019/01/01/Month/ONE_201901/index.html","2c888acb12c3be9ba2f94e23fc7bf2b4"],["2019/02/01/Month/ONE_201902/index.html","420130ffc28d906a72230c4aec1b8b12"],["2019/03/01/Month/ONE_201903/index.html","0c1ba63913ae04ee66e2b9a1f08cb237"],["2019/04/01/Month/ONE_201904/index.html","117ee801337d929d3c277f0b8dff5165"],["2019/05/01/Month/ONE_201905/index.html","64b379062a5fba1c27ed180461966403"],["2019/06/01/Month/ONE_201906/index.html","83762ba7ecc48b5fd4e7c5d849c33c3b"],["2019/07/01/Month/ONE_201907/index.html","2888f0769c1787518bc69b000009857f"],["2019/08/01/Month/ONE_201908/index.html","2b9b35262c985ce237229ae12a01360c"],["2019/09/01/Month/ONE_201909/index.html","aed5612e38a3bfd0dcdaabc16fc71e38"],["2019/10/01/Month/ONE_201910/index.html","9d71f203d291bcd885eb6e7b4cd92482"],["2019/11/01/Month/ONE_201911/index.html","dab202ae030728be9b2369e57d100ccf"],["2019/12/01/Month/ONE_201912/index.html","5d421d672c9eb5f5d37b773abefdde2b"],["2020/01/01/Month/ONE_202001/index.html","2aca86a383d5333b3a3f4181c65f310b"],["2020/02/01/Month/ONE_202002/index.html","6334b934f657304f2b2684ceefac9496"],["2020/03/01/Month/ONE_202003/index.html","7d74954e010c3f5389c573775935843c"],["2020/04/01/Month/ONE_202004/index.html","a27d46fc6c326d5447aea5784b66aaa3"],["2020/05/01/Month/ONE_202005/index.html","d34e790aa7efdad06c974bc735bf7976"],["2020/06/01/Month/ONE_202006/index.html","afd5d7ba9ae5910425e2264bbbf5d298"],["2020/07/01/Month/ONE_202007/index.html","333075e28f34d933e840e91e99c9b9f8"],["2020/08/01/Month/ONE_202008/index.html","95b8ae7fbecee2fb048e55f0be1e0b00"],["2020/08/07/Flink/20200807/index.html","aa8bdc96fb9af2dc5fd5f0a89f20047d"],["2020/08/07/Tool/myTools/index.html","1caeabe55a709d403914638b1159c3dc"],["2020/08/11/Flink/20200811/index.html","8316cbd6b76922df09bdd1e619e0aa05"],["2020/08/19/Spark/spark1/index.html","788cd16824d0e460ba43679c7ed0c34b"],["2020/08/28/DB/20200828/index.html","d8b24c708316c8e60186f9975b9bf474"],["2020/09/01/Month/ONE_202009/index.html","4a98032e99031e8ffd297f467775c116"],["2020/10/01/Month/ONE_202010/index.html","2fc5f41da4c95bd59093dc6146306c28"],["2020/11/01/Month/ONE_202011/index.html","f6c8d06b7ea9260dc77c2e16547bfeac"],["2020/12/01/Month/ONE_202012/index.html","010528f5dd36268bb231b6473dbb0b9d"],["about/index.html","17d7d0fed2b7a5740c80fdf8474af011"],["archives/2012/10/index.html","8dc155633225bfbf9fb9aa487e22efa4"],["archives/2012/11/index.html","58eaa1b906bbd27829584b606e2e430b"],["archives/2012/12/index.html","669fd6f66b261788c7441ac4f17006a5"],["archives/2012/index.html","b4baed80801daf1950b44e6c4f9a83b0"],["archives/2013/01/index.html","488b4c455732ece5d61b3cec1015c61b"],["archives/2013/02/index.html","236d8d497a614cb6b9c484dea4cd377e"],["archives/2013/03/index.html","1270a1ef9ca849345f358c310ef66371"],["archives/2013/04/index.html","8c9441725558fc1a2fc183630664077d"],["archives/2013/05/index.html","aef67c8afd9b32b6dc176b7acc7eb690"],["archives/2013/06/index.html","925d2fa7958ca99970d936d06a28427e"],["archives/2013/07/index.html","1ee47356efc0ecf352adb22b13bff861"],["archives/2013/08/index.html","a06dbfa57afd85d1ccb45703196f97c9"],["archives/2013/09/index.html","3f41a686f4970618a1e70e5cf5725542"],["archives/2013/10/index.html","076fe827161fd295c5c291064cc5008f"],["archives/2013/11/index.html","364a83caeb31f40495db7bfa1bea4531"],["archives/2013/12/index.html","15201d8b9578c2a1c90ae81137335802"],["archives/2013/index.html","d4a40c25f2c315eb1b8c5c50c66ad46f"],["archives/2013/page/2/index.html","86d0bd03eb9c222c985655d7c8bc12da"],["archives/2014/01/index.html","065cad74601d52f596a77bb929b05504"],["archives/2014/02/index.html","773412f00a5b8c1852cafc3d744d98db"],["archives/2014/03/index.html","21a8386e9953fb5594e13919af7cb6be"],["archives/2014/04/index.html","7d3db6343ee77ae6a114e64c92be1f6e"],["archives/2014/05/index.html","9ee8f65552d22c48853e25445035def9"],["archives/2014/06/index.html","914f3f7338724b5d01f4c8753cc57028"],["archives/2014/07/index.html","28a806aa66a67e7c7b4d5a6d49ff182c"],["archives/2014/08/index.html","5c3c9fad1cac91dd5735c4f87035b3d1"],["archives/2014/09/index.html","343455ac5585e09c674bbe539d89a532"],["archives/2014/10/index.html","4692dbf209052677d133ccc5e61d8ee7"],["archives/2014/11/index.html","edda01662dfd8209b24e74aed912e149"],["archives/2014/12/index.html","c17157609ca4a36dc5d79d52bb9386c8"],["archives/2014/index.html","3d1f2230738a9c721a9954b9d2f8b162"],["archives/2014/page/2/index.html","6c5b4a82521198f778384ee2c6aca62f"],["archives/2015/01/index.html","c1b620a10dab6a6d4207f73011c8990e"],["archives/2015/02/index.html","2d5754533eb162a807349bb55da8960d"],["archives/2015/03/index.html","3e6b1c0d20a50495b9bfd54369513d70"],["archives/2015/04/index.html","876c6bb871871fd0a0825e81c8dcf65e"],["archives/2015/05/index.html","13ebb11bd169598ceeb8f22408c4fe92"],["archives/2015/06/index.html","a7c70f8c3f275c4c971f614f2d50bd43"],["archives/2015/07/index.html","3d6b131b53e6b17b0abb1fe9e355754f"],["archives/2015/08/index.html","86ad94eac6382bdaace86c6a27f62d14"],["archives/2015/09/index.html","6853caa9a64318e5515af50e3ad12faa"],["archives/2015/10/index.html","02bbbb02f340ee151771c220211de383"],["archives/2015/11/index.html","a22db176f3b7ec65fde2911dc6cbea16"],["archives/2015/12/index.html","23cc3554907a51a128720361f606cd0a"],["archives/2015/index.html","1423eebd3ba61a2e6c3c7542add7f55f"],["archives/2015/page/2/index.html","b160d7b0e82fec5fc4f0e1a3c63bab34"],["archives/2016/01/index.html","e83e6560a69dfc115b327fae1edd99de"],["archives/2016/02/index.html","41fbd2a71aae4cc96c0a17430d82960a"],["archives/2016/03/index.html","237d311314ae44fefe34750193773946"],["archives/2016/04/index.html","f4bca375041d8b325a26a01431e24f6a"],["archives/2016/05/index.html","0af464fa293d13b66c04f92c4c999b21"],["archives/2016/06/index.html","f6a8b35b4b228ded0a684228a6faadd1"],["archives/2016/07/index.html","8ad6abe3349ff239f906cdc68b8e8607"],["archives/2016/08/index.html","aef86247c90ebd00fb8a9ed174a3df1a"],["archives/2016/09/index.html","3814ab469a611e4c6b7d92bb53f8be19"],["archives/2016/10/index.html","69f91cf55c7ba44d60b4287fc1618917"],["archives/2016/11/index.html","0bd341ce01352c6cacc9e32160c4adb3"],["archives/2016/12/index.html","c3772acf49b6c766ec1325b998e38920"],["archives/2016/index.html","d4e51d2111bf38fc5ca9e6d5ccc3a692"],["archives/2016/page/2/index.html","9dd52f35dcb53affd979dc61aeac300b"],["archives/2017/01/index.html","608177b6efea9f6e080d4601e174a639"],["archives/2017/02/index.html","ec86b88dde1f7f66dcaa31e77bc67217"],["archives/2017/03/index.html","a9d14d99cb0a38679e9a6d3e30e92d22"],["archives/2017/04/index.html","f8e2bd8c71afdc92c275969a6f5c4344"],["archives/2017/05/index.html","2d51a44aa37c21f816fb0a038fb7c3fe"],["archives/2017/06/index.html","e5ad1cdf1aa3bcab9ed02b65d1d3f39b"],["archives/2017/07/index.html","36d441b1fc8b4aed74d33e1d7af20d99"],["archives/2017/08/index.html","12d7f6824a450401fca4cc75c59583f9"],["archives/2017/09/index.html","c48ed6c193db7f418f4188df19628b0e"],["archives/2017/10/index.html","41479fdef437fe403974608ed485d19c"],["archives/2017/11/index.html","18f2cbf9f60b914f811bb7a8d72737f8"],["archives/2017/12/index.html","52a6b6d31456d9a8ae6bb49fd24f470e"],["archives/2017/index.html","c30cc161b51baccd4da94c6898211bdc"],["archives/2017/page/2/index.html","3c207020462860a2094509736c6cece3"],["archives/2018/01/index.html","49afbe279af8e5c226df90440cc7529f"],["archives/2018/02/index.html","92dfe2a8d5397261b51a7ae1a721ea70"],["archives/2018/03/index.html","ffc90124bf9c87d272f673468f54660e"],["archives/2018/04/index.html","eefb66b6c4070eafd6f4671f2e14289d"],["archives/2018/05/index.html","ec33bd1f9fd1f4d82fbe798f471a1312"],["archives/2018/06/index.html","bf7d538c195ff289248a4fa6067d6f39"],["archives/2018/07/index.html","b6f8890fc141feb68b15c545613ff64b"],["archives/2018/08/index.html","8a07a8e2f13c32c4360c585f5e24dc5f"],["archives/2018/09/index.html","289ffa82c0512fe3ee8397339a0dc551"],["archives/2018/10/index.html","f64768adb70cda78f657a3e8c85fa8fb"],["archives/2018/11/index.html","c52654cefd3b366f00b016252ab723ec"],["archives/2018/12/index.html","bb21603dbd496189a54fe9ef1fc3727a"],["archives/2018/index.html","b34bbccfa3b32ca55e5694d6d9c2240e"],["archives/2018/page/2/index.html","dbe2da1bc1f660fe0d5bb8790a3e3614"],["archives/2019/01/index.html","2d9d67a57b6a72a83a0f80bea29d1e23"],["archives/2019/02/index.html","a78c1e942db414512f8d0cf76ef33a2e"],["archives/2019/03/index.html","324537b9958154b4e6d395cc2d34aa7a"],["archives/2019/04/index.html","4edc632bd3bf079ffd83698c48a03082"],["archives/2019/05/index.html","c95722527dc852000f950264e2156a24"],["archives/2019/06/index.html","f77bcdb6afd6a52bcbbfab4440671b8f"],["archives/2019/07/index.html","9a864e465f89edff908f014bbac4c7b4"],["archives/2019/08/index.html","9056ff11af0a00d71d2240c719bc2580"],["archives/2019/09/index.html","7fbc74838558a0fde6a213100800c57b"],["archives/2019/10/index.html","3e10af5fd3db4480de141845c9c79ed5"],["archives/2019/11/index.html","95440e4347296b65db77546c36460c96"],["archives/2019/12/index.html","1f2dd69b1abab5c72f3ab4ed0c17ea9d"],["archives/2019/index.html","17ff0f5e772c65b92dd7a8b66de082a1"],["archives/2019/page/2/index.html","42ca5ff76423e4ccd7e9280d55412b5f"],["archives/2020/01/index.html","3715500a3c1469014eed8153afb8f903"],["archives/2020/02/index.html","5672c528989dd5d0ee35526961575b08"],["archives/2020/03/index.html","13430d49402a171ba193fdcbf7555ee1"],["archives/2020/04/index.html","e17e3f05fdbde1e08ba66adbead67e79"],["archives/2020/05/index.html","9405b966dad44d8ed62625a2e103a9d8"],["archives/2020/06/index.html","a8cce689e1cc717b180dc9caf452c69c"],["archives/2020/07/index.html","3dd223b38df2930f28275aba6a358aa1"],["archives/2020/08/index.html","173256b746cd6db3d9d50518806fc9ae"],["archives/2020/09/index.html","c61d3752288f3a6976c1650566767197"],["archives/2020/10/index.html","459ffe5a515ad40591f2cfdac319427e"],["archives/2020/11/index.html","e767ce62180c686a7658aef72bac1fef"],["archives/2020/12/index.html","e87566a0d0381e4a1ab8913d378e71da"],["archives/2020/index.html","24ae79c1e38b3c4f3dbe143fcd365c6b"],["archives/2020/page/2/index.html","5fa887740167b314a41b4952176f70d6"],["archives/index.html","b6afb1f195d62c422958af6cc38473bc"],["archives/page/10/index.html","f345385b1e8e05951a4744bd86e8d039"],["archives/page/11/index.html","e6b63974d4e67269bbfef27fb659888f"],["archives/page/2/index.html","82d724555e9b6d88b9acc3de2b8be438"],["archives/page/3/index.html","9a947fe25e939fdc08423eae6ae4a3c1"],["archives/page/4/index.html","f0285d584a408a37f55fdfddccac53f2"],["archives/page/5/index.html","2a00ad5cc0d12248cd49f5b5c9bc31db"],["archives/page/6/index.html","26159ccb898fdff4096a0f05018aa349"],["archives/page/7/index.html","3f412d3ff40f7195cdad395788050eaa"],["archives/page/8/index.html","c0214d29c1f8044290bab39cbf3715ff"],["archives/page/9/index.html","683f5a3e400e72131b2d3c33f889af6f"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["books/index.html","e1b066d2658c25f2607cf877042bfa1d"],["categories/index.html","5c9336d5a49ec745efba2949cef5f915"],["categories/学习记录/index.html","905377b73fe37b6f6a2874df3988bb46"],["categories/推荐/index.html","2074c93900d98d7e8e4454eb96f5cdff"],["css/custom.css","ae882915f1aa2ba025bc95f66162a696"],["css/footer.css","c948bdc28ddf90d5cb813adeccc1b569"],["css/index.css","3e9d290c4bf8adbc56e725fb7c0e83d8"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/atlas/index.html","ab75bcd129090de0f2f9b7dd364b2a2c"],["gallery/index.html","2d6f40d01beba18de63550d16e91a355"],["gallery/wallpaper/index.html","5089d21cf5fc4864098b30e480812e85"],["games/index.html","7db21d4d4c37ee2f62ad4fd5976544de"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/Apache-Flink.png","7c990d784de0092b70216c7f44377fb1"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/archive_img-.jpg","f047efc31c67b91549779f81c9d181f7"],["img/archive_img.jpg","390a1e6a908606ecd04d845fcd65f8ef"],["img/avatar.png","a4a07fc6585f6c85450dd09d81ebd58f"],["img/avatar_1.png","11ed55438c640a4ab043f9c22d4db8d9"],["img/board.jpg","1c0603042ad4c0b694bae831974d648b"],["img/category_img.jpg","6befa9eab4b5c137323e7ceb880ea826"],["img/chenxiaotao.jpg","4f5bea77d8cc731d1e7434d2af959813"],["img/default_cover.png","69cf4869175a2d1df117e3fa6e75d48a"],["img/default_top_img.jpg","32ccfe19e020ab7597e6f871f1750460"],["img/error_404.png","825f14df7d0ee8a173adc5b0c63710f3"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend.jpg","d31dc1da29e43890050ee8badea486ce"],["img/friend_404.gif","656d389385b01bc5a8f08215d97530cd"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/index_img.jpg","bf0dedc8b1efa96bace221f1fd445f0d"],["img/index_img_0.jpg","e916691d1051940fdcc64e55c6e7e221"],["img/index_img_1.jpg","41a37008505a7306ae3ec418e2d880b5"],["img/index_img_2.jpg","3457c6f641f84c31931db06f9e7d5bae"],["img/loading - 副本.gif","2b03451fd8e1882905ee4cbc30131263"],["img/loading.gif","656d389385b01bc5a8f08215d97530cd"],["img/movies_img.jpg","5fe292d506d6bffb56a1f22aef9c3ae0"],["img/music.jpg","5e9ff061cd37024360328ca5a197033c"],["img/myself.jpg","3f6e6152b2b7b99688b7c4840b546a0c"],["img/myself_2.jpg","80f6261c39ec9020c2ec925b8e7130d2"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/spark-logo.png","7b2e4a413b0bb5526767a68298047279"],["img/tag_img.jpg","2d8782cead9cc02d5db1774840601dd1"],["img/wechat.jpg","f23c2ffd8287d72bfd1e25d47c9cc3c0"],["index.html","21a2828d5fde746f179229c8abe22a54"],["js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","0176913a28754a766910352489a24a69"],["js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["link/index.html","266c0ed42a8dfbfdb1a1208a2eaececc"],["messageboard/index.html","dfb4859af2e31e48d051ebbf6dcd2f3b"],["movies/index.html","d1af3c828f8a5c5bcc1195eb46112b34"],["music/index.html","e4715e30f04afccc484460cb7749ebef"],["page/10/index.html","e890105548689c15ef6c5d904fa87a75"],["page/11/index.html","176533fa0516fd70b57b64356232ff49"],["page/2/index.html","681ee48a69262845b0586c4a955223f5"],["page/3/index.html","d509cfb02f375e242d59acc548f799f4"],["page/4/index.html","54247ca3e29c284a52be97aa603f6992"],["page/5/index.html","06a25d326d33bdba05bcad993b58c2ce"],["page/6/index.html","e211ca28e28c99fbd9f86fc18a94de73"],["page/7/index.html","254d56b5ccb87c0e257e6a3db1524711"],["page/8/index.html","ee31e23e7b589537285aa3bb023a6e55"],["page/9/index.html","78c85ffd565964ca024c61c715bd27d9"],["tags/Apache/index.html","a0c4c91ce68b66e073f7ea3b0a5cdc4b"],["tags/Flink/index.html","ef9fc8a3db0e650cb8a61a4f6878a7a6"],["tags/MySQL/index.html","2faf6a0caa5d05c3078b31da772edb7a"],["tags/ONE/index.html","8a222173e1a25d67ded525bfca7c0abb"],["tags/ONE/page/10/index.html","c6f1abdf7fdb84476226d0a87491be99"],["tags/ONE/page/2/index.html","64712539a91c4e0e6c42c09cedac9316"],["tags/ONE/page/3/index.html","dc31f8e354319ee7ea31d31802c1f0f7"],["tags/ONE/page/4/index.html","a6e196066f3cefcfcf2c7019696abfba"],["tags/ONE/page/5/index.html","f37326235c19aa5ec2fc8b4dc6d62875"],["tags/ONE/page/6/index.html","b39c38af4b7b15ccb28c4c7c752a61ed"],["tags/ONE/page/7/index.html","4a5fbc5af6951def550d1ec326b9c7d6"],["tags/ONE/page/8/index.html","ec7675cc3009392585a1ceab5afe6356"],["tags/ONE/page/9/index.html","9387cab1dd488c737d9c3982730f60f1"],["tags/Spark/index.html","6896d23b92f11037adbd0ee857272439"],["tags/Zeppelin/index.html","099f6ea70d90a6bed196f3de6ed0315a"],["tags/index.html","2576ad58b13bdabd92d182a777d12dd8"],["tags/一个/index.html","54f08d0671130147be506db896fb3f49"],["tags/一个/page/10/index.html","c3c8d47b196d6202f1d8a4f966dab313"],["tags/一个/page/2/index.html","5af456a984c2d826a6874cbdb21a4046"],["tags/一个/page/3/index.html","09fcee5da195d8dd7d8c0669e9ba75fc"],["tags/一个/page/4/index.html","8162e6e158be9513d1c9486a2ed05256"],["tags/一个/page/5/index.html","a03bc845e6d232a78533f2e52f9368ec"],["tags/一个/page/6/index.html","1a749005301ebc82a9c7b01a2cdd192d"],["tags/一个/page/7/index.html","aa4dbbc4c3d4988d9f1b3ed9eaabe12b"],["tags/一个/page/8/index.html","8e58bb455d58e583bd6c388459d54a37"],["tags/一个/page/9/index.html","a5a5a507a26f9d7d44c2b9fb1c4a83da"],["tags/优化/index.html","897e15c1ec8e00aabdcb93af592130fc"],["tags/插件/index.html","063a3983a4ffe881b5537aae2efc5596"],["tags/数据库/index.html","3aee1a872dbc2755de84171363fb65c5"],["tags/机器学习/index.html","c73c0b793246802384214b3adce67490"],["tags/架构/index.html","2a33d7e94ba984c3e9cdac9b63efb791"],["tags/软件/index.html","c5b6402d7b0979ac6d528e48291d741f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







