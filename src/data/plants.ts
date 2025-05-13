type Plant = {
  name: string;
  image: string;
  description: string;
  water: string;
  light: string;
  environment: string;
  botanicalName?: string;
  type?: string;
  soil?: string;
  tips?: string[];
  pests?: {
    name: string;
    type: string;
    symptoms: string;
    solution: string;
  }[];
};
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9\s-]/g, "") 
    .replace(/\s+/g, "-") 
    .replace(/-+/g, "-") 
    .replace(/^-+|-+$/g, ""); 
}
export const plants: Record<string, Plant> = {
  "aloe-vera": {
    name: "Aloe Vera",
    image: "https://m.media-amazon.com/images/I/81XWpVvk5AL._AC_UF1000,1000_QL80_.jpg",
    description: "Aloe Vera, özellikle cilt bakımında kullanılan, suyu depolayabilen etli bir bitkidir. Hem iç hem de dış kullanım için birçok faydası bulunmaktadır.",
    water: "Toprak tamamen kuruyunca sulayın",
    light: "Doğrudan güneş ışığı",
    environment: "Sıcak ve güneşli",
    botanicalName: "Aloe vera",
    soil: "İyi drene olmuş, kumlu toprak",
    tips: [
      "Aloe Vera'yı doğrudan güneş ışığı alacak şekilde yerleştirin.",
      "Toprağın tamamen kurumasını bekleyin, fazla sulama kök çürüğüne yol açabilir.",
      "Düşük nem seviyelerinde iyi gelişir, odada rahatça yetiştirilebilir."
    ],
    pests: [
      {
        name: "Kırmızı Örümcek",
        type: "Zararlı",
        symptoms: "Yapraklarda sararma ve dökülme",
        solution: "Biyolojik mücadele ve kükürtlü ilaçlar"
      },
      {
        name: "Kök Çürüklüğü",
        type: "Hastalık",
        symptoms: "Köklerde çürüme, bitkinin zayıflaması",
        solution: "Toprağın iyi drene olması ve uygun fungisitler"
      }
    ]
  },
  "orkide": {
    name: "Orkide",
    image: "https://cdn.cicekmarket.com/cicek-resim/l/cm717.jpg",
    description: "Orkide, hem iç hem dış mekanda popüler olan zarif çiçekler üreten bir bitkidir. Yaklaşık 25.000 türüyle dünyanın en büyük çiçekli bitki ailesidir.",
    water: "Her 1-2 haftada bir sulama",
    light: "Dolaylı güneş ışığı",
    environment: "Ilıman ortam",
    botanicalName: "Orchidaceae",
    type: "Çiçekli bitki",
    tips: [
      "Orkidenizi doğrudan güneş ışığından koruyun.",
      "Toprağın üst kısmı kuruduğunda sulama yapın.",
      "Yüksek nem seviyeleri orkide için faydalıdır."
    ],
    pests: [
      {
        name: "Örümcek Akarları",
        type: "İnsansız",
        symptoms: "Yapraklarda ince ağlar; yaprakların sararması",
        solution: "Yüksek nem ile bitkiyi sulamak ve yaprakları su ile yıkamak."
      },
      {
        name: "Kök Çürüklüğü",
        type: "Hastalık",
        symptoms: "Köklerin çürümesi; bitkinin zayıflaması",
        solution: "Toprağın iyi drene olduğundan emin olun."
      }
    ]
  },
  "monstera": {
  name: "Monstera",
  image: "https://ideacdn.net/idea/lo/88/myassets/products/248/2fe0d9b8-3d48-4ea8-bd2a-0d772044e5d1.JPG?revision=1705945055",
  description: "Monstera, tropikal ormanlarda yetişen popüler bir iç mekan bitkisidir. Geniş, keskin yapraklarıyla ünlüdür. İç mekan dekorasyonunda sıkça tercih edilir.",
  water: "Her hafta 1 kez sulama",
  light: "Orta dolaylı güneş ışığı",
  environment: "Tropikal, nemli ortam",
  botanicalName: "Monstera Deliciosa",
  type: "Çiçekli bitki",
  tips: [
    "Monstera'yı bol dolaylı güneş ışığında tutun.",
    "Toprağın iyi drene olduğundan emin olun.",
    "Yüksek nem seviyeleri Monstera için önemlidir."
  ],
  pests: [
    {
      name: "Kırmızı Örümcekler",
      type: "İnsansız",
      symptoms: "Yapraklarda ince ağlar, yaprakların sararması",
      solution: "Yüksek nem ile bitkiyi sulamak ve yaprakları su ile yıkamak."
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerin çürümesi; bitkinin zayıflaması",
      solution: "Toprağın iyi drene olduğundan emin olun."
    }
  ]
},
  "kaucuk-bitkisi": {
  name: "Kaucuk Bitkisi",
  image: "https://cdn.myikas.com/images/1bd9ce94-24d0-4dd9-a116-9f46a272aad2/0225b52f-a18b-448d-a633-ffe7aaa54776/3840/ek-gorseller-eticaret-gorseller-kopyasi-18.webp",
  description: "Kaucuk, popüler bir iç mekan bitkisidir ve büyük, parlak yapraklarıyla tanınır. Hindistan ve Güneydoğu Asya kökenlidir. Hızlı büyür ve dikkat çekici görünür.",
  water: "Toprak kurudukça sulama",
  light: "Parlak dolaylı ışık",
  environment: "Ilıman, nemli ortam",
  botanicalName: "Ficus elastica",
  type: "Çiçekli bitki",
  tips: [
    "Kaucuk bitkisini doğrudan güneş ışığından uzak tutun.",
    "Toprağın üst kısmı kuruduğunda sulama yapın.",
    "Yüksek nem seviyeleri için su püskürtme kullanın."
  ],
  pests: [
    {
      name: "Kırmızı Örümcekler",
      type: "İnsansız",
      symptoms: "Yapraklarda ince ağlar, yaprakların sararması",
      solution: "Yüksek nem ile bitkiyi sulamak ve yaprakları su ile yıkamak."
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerin çürümesi; bitkinin zayıflaması",
      solution: "Toprağın iyi drene olduğundan emin olun."
    }
  ]
},
"deve-tabani": {
  name: "Deve Tabanı",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmepjhvr1K0G5YVBlafrTmfQ4ZmU5KmboKBw&s",
  description: "Deve tabanı, iç mekan bitkileri arasında popüler olan ve bakımı oldukça kolay bir bitkidir. Sıcak iklimlere uyum sağlar ve az su ile hayatta kalabilir.",
  water: "Toprak tamamen kuruduktan sonra sulama yapılmalıdır",
  light: "Ilıman ışık",
  environment: "Sıcak, nemli ortam",
  botanicalName: "Sansevieria trifasciata",
  soil: "İyi drene olan, hafif kumlu toprak",
  tips: [
    "Ilıman ışıkta yetiştirin, doğrudan güneş ışığına maruz bırakmayın.",
    "Toprağın kurumasını bekleyerek sulama yapın, aşırı sulamaktan kaçının.",
    "Bazen yapraklarını silerek temiz tutun."
  ],
  pests: [
    {
      name: "Kırmızı Örümcek",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve dökülme",
      solution: "Biyolojik mücadele ve kükürtlü ilaçlar"
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerde çürümüş kısımlar ve bitkinin zayıflaması",
      solution: "Toprağın iyi drene olması ve uygun fungisitler"
    }
  ]
},
"yucca": {
  name: "Yucca",
  image: "https://cdn.myikas.com/images/1bd9ce94-24d0-4dd9-a116-9f46a272aad2/6b60bd20-480d-4a0d-86a0-8eb9069ed75d/image_3840.webp",
  description: "Yucca, sert iklimlere dayanıklı bir bitkidir. Yaprakları dik ve uzun olup, dekoratif amaçlarla iç mekanlarda da tercih edilmektedir.",
  water: "Toprak kurudukça sulama yapılmalıdır",
  light: "Ilıman ışık",
  environment: "Ilıman iklimler",
  botanicalName: "Yucca filamentosa",
  soil: "İyi drene olan, hafif kumlu toprak",
  tips: [
    "Ilıman ışıkta yetiştirin, doğrudan güneş ışığına maruz bırakmayın.",
    "Aşırı sulamaktan kaçının, toprak tamamen kuruduktan sonra sulama yapın.",
    "Bazen yapraklarını silerek temiz tutun."
  ],
  pests: [
    {
      name: "Kırmızı Örümcek",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve dökülme",
      solution: "Biyolojik mücadele ve kükürtlü ilaçlar"
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerde çürümüş kısımlar ve bitkinin zayıflaması",
      solution: "Toprağın iyi drene olması ve uygun fungisitler"
    }
  ]
},
"sukkulent": {
  name: "Sukkulent",
  image: "https://static.ticimax.cloud/36217/uploads/urunresimleri/buyuk/sukulent--49cd-.jpeg",
  description: "Sukkulentler, suyu depolayabilen etli yapraklarıyla bilinen bitkilerdir. Çöl iklimine uygun yapıları sayesinde, az suyla uzun süre hayatta kalabilirler.",
  water: "Az sulama, toprağın tamamen kurumasına izin verin",
  light: "Doğrudan güneş ışığı",
  environment: "Ilıman ve kuru iklimler",
  botanicalName: "Succulent",
  soil: "İyi drene olan, kumlu toprak",
  tips: [
    "Sukkulentleri doğrudan güneş ışığında tutun.",
    "Toprağın kuru olduğundan emin olduktan sonra sulayın.",
    "Çok fazla su vererek kök çürümesine neden olmaktan kaçının."
  ],
  pests: [
    {
      name: "Beyaz Sinek",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve yapışkan madde",
      solution: "Neem yağı ile biyolojik mücadele"
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerde çürüme, bitkinin zayıflaması",
      solution: "Toprağın iyi drene olması ve uygun fungisitler"
    }
  ]
},
"yelken-cicegi": {
  name: "Yelken Çiçeği",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGZEAMSvQmMCZg3PIxz9OZkySBgMHetbhYw&s",
  description: "Yelken Çiçeği, renkli yapraklarıyla tanınan, iç mekanlarda yetiştirilebilen dayanıklı bir bitkidir. Özellikle dekoratif amaçlı tercih edilir.",
  water: "Toprağın hafif nemli kalması, fazla sulamaktan kaçınılmalıdır",
  light: "Aydınlık ama doğrudan güneş ışığı almayan ortam",
  environment: "Sıcak, nemli ve güneşli ortamlar",
  botanicalName: "Rhoeo spathacea",
  soil: "İyi drene olan, humuslu topraklar",
  tips: [
    "Yelken Çiçeği'ni doğrudan güneş ışığından koruyun, ancak aydınlık bir ortamda yetiştirin.",
    "Toprağın sürekli nemli kalmasına dikkat edin, fakat su birikintisi oluşmamalıdır.",
    "Büyüme döneminde düzenli olarak organik gübre uygulayın."
  ],
  pests: [
    {
      name: "Kırmızı Örümcek",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve dökülme",
      solution: "Biyolojik mücadele ve kükürtlü ilaçlar"
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerde çürüme, bitkinin zayıflaması",
      solution: "Toprağın iyi drene olması ve uygun fungisitler"
    }
  ]
},
"menekse": {
  name: "Menekşe",
  image: "https://static.ticimax.cloud/62546/uploads/urunresimleri/buyuk/menekse-afrika-ithal-bb-fd0.jpg",
  description: "Afrika menekşesi olarak da bilinen bu bitki, küçük ve renkli çiçekleriyle popülerdir. Tanzanya ve Kenya'ya özgüdür ve iç mekanlarda bakımı kolay bir bitkidir.",
  water: "Toprağın üstü kurudukça sulama",
  light: "Parlak dolaylı ışık",
  environment: "Ilıman, nemli ortam",
  botanicalName: "Saintpaulia",
  type: "Çiçekli bitki",
  tips: [
    "Direkt güneş ışığından kaçının; dolaylı ışık idealdir.",
    "Toprağı nemli tutun ama aşırı sulamaktan kaçının.",
    "Nemli bir ortamda daha iyi gelişir; haftada bir yapraklara su püskürtebilirsiniz."
  ],
  pests: [
    {
      name: "Unlu Bitler",
      type: "Zararlı",
      symptoms: "Yapraklarda beyaz pamuksu oluşumlar",
      solution: "Islak bir bezle yaprakları temizleyin."
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerin çürümesi; bitkinin solması",
      solution: "Aşırı sulamadan kaçının ve drenajı kontrol edin."
    }
  ]
},
"kaktus": {
  name: "Kaktüs",
  image: "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/62546/uploads/urunresimleri/buyuk/kaktus-saksi-4lu-set-sari-0124-lt-2956-bc8-b6.jpg",
  description: "Kaktüsler, çöl iklimlerine özgü, suyu depolayabilen bitkilerdir. Hem dekoratif hem de dayanıklıdırlar.",
  water: "Az su, sadece toprak tamamen kuruduğunda",
  light: "Doğrudan güneş ışığı",
  environment: "Sıcak ve kurak iklim",
  botanicalName: "Cactaceae",
  soil: "İyi drene olan, kumlu toprak",
  tips: [
    "Kaktüsleri doğrudan güneş ışığında tutun.",
    "Toprağın tamamen kuruduğunda sulama yapın.",
    "Fazla su birikintisinden kaçının."
  ],
  pests: [
    {
      name: "Kaktüs Piresi",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve tüylenme",
      solution: "Biyolojik mücadele ve uygun ilaçlar"
    },
    {
      name: "Kaktüs Çürüklüğü",
      type: "Hastalık",
      symptoms: "Bitkinin çürümeye başlaması",
      solution: "Drenajı iyi olan toprak kullanımı"
    }
  ]
},
"susen": {
  name: "Süsen",
  image: "https://ideacdn.net/shop/ir/87/myassets/products/862/iris-fidesi-louisiana-black-gamecock-1.jpg?revision=1697143329",
  description: "Süsenler, zarif çiçekleri ile bilinen, farklı renklerde çeşitleri bulunan bir bitki türüdür. Hem bahçe süs bitkisi olarak hem de kesme çiçek olarak kullanılır.",
  water: "Orta derecede sulama, su birikintisi olmamalı",
  light: "Doğrudan güneş ışığı",
  environment: "Serin iklimler, güneşli alanlar",
  botanicalName: "Iris germanica",
  soil: "Geçirimliliği yüksek, humuslu toprak",
  tips: [
    "Toprağın iyi drene olduğundan emin olun.",
    "Süsenleri doğrudan güneş ışığına maruz bırakın.",
    "Yaz aylarında sulamayı azaltın, kışın sulama yapmayın."
  ],
  pests: [
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerin çürüyüp hastalıklı hale gelmesi",
      solution: "Drenajı iyi toprak kullanımı, fungisitler"
    },
    {
      name: "Örümcek Akarı",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve beneklenme",
      solution: "Akar ilaçları kullanımı"
    }
  ]
},
"bonsai": {
  name: "Bonsai",
  image: "https://ideacdn.net/idea/gs/40/myassets/products/054/ruz1285.png?revision=1697143329",
  description: "Bonsai, minyatür ağaçların yetiştirilmesi sanatıdır. Farklı türleri olan bonsailer, özenle bakım yapılır ve estetik olarak şık görünmeleri sağlanır.",
  water: "Orta derecede sulama, toprak nemli olmalı",
  light: "Aydınlık ama doğrudan güneş ışığı almayan ortam",
  environment: "Ilıman, nemli iklimler",
  botanicalName: "Ficus retusa",
  soil: "İyi drene olan, hafif asidik toprak",
  tips: [
    "Bonsaiyi düzenli olarak budayın.",
    "Yavaş büyüyen bir tür seçin ve küçük kaplarda yetiştirin.",
    "Toprağın iyi drene olduğundan emin olun."
  ],
  pests: [
    {
      name: "Küf",
      type: "Hastalık",
      symptoms: "Köklerde çürümeler, sararmalar",
      solution: "İyi havalandırma sağlamak ve fungisitler"
    },
    {
      name: "Bonsai Akarı",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve yapışkanlık",
      solution: "Biyolojik mücadele ve akar ilaçları"
    }
  ]
},
"pasa-kilici": {
  name: "Paşa Kılıcı",
  image: "https://sarifrezya.com/cdn/shop/files/IMG_7670-scaled-1-1-scaled-1.jpg?v=1719758699",
  description: "Paşa Kılıcı, özellikle evde yetiştirilmesi kolay olan, az bakım gerektiren bir bitkidir. Sağlık açısından da faydalı olup, havayı temizleme özelliğine sahiptir.",
  water: "Az sulama, toprağın tamamen kuruması beklenmeli",
  light: "Dolaylı ışık, doğrudan güneş ışığından uzak tutulmalı",
  environment: "Sıcak iklimler ve düşük nem",
  botanicalName: "Sansevieria trifasciata",
  soil: "İyi drene olan, kumlu toprak",
  tips: [
    "Paşa Kılıcı fazla suyu sevmez, toprak tamamen kuruduğunda sulayın.",
    "Yüksek nemden kaçının, doğrudan güneş ışığından uzak tutun.",
    "Yavaş büyüyen bir bitki olduğu için aşırı gübre kullanmaktan kaçının."
  ],
  pests: [
    {
      name: "Küf",
      type: "Hastalık",
      symptoms: "Yapraklarda kahverengi lekeler",
      solution: "İyi hava sirkülasyonu sağlamak ve antifungal ilaçlar"
    },
    {
      name: "Örümcek Akarı",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve ince iplikler",
      solution: "İlaçla mücadele ve nem arttırma"
    }
  ]
},


"elma": {
  name: "Elma",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFdnYDOw4-IN-BAMKoTyvvrc-G-SfJVloV1X-57Z5mLmcbeVi1ytraEdSrMyg2pTxqsk&usqp=CAU",
  description: "Elma, dünya çapında yaygın olarak yetiştirilen ve tüketilen bir meyvedir. Vitamin ve mineral bakımından zengin olan bu meyve, ticari ve bireysel tarım için ideal bir üründür.",
  water: "Düzenli, kök çürümesini önleyecek şekilde",
  light: "Güneşli ortam",
  environment: "Ilıman",
  botanicalName: "Malus domestica",
  soil: "Verimli, drenajı iyi toprak",
  tips: [
    "Her yıl kış döneminde budama yaparak ağacı şekillendirin.",
    "Ağır donlardan korunması için kış aylarında koruyucu önlemler alın.",
    "Çiçeklenme döneminde düzenli gübreleme yapın."
  ],
  pests: [
    {
      name: "Elma İç Kurdu",
      type: "Zararlı",
      symptoms: "Meyvelerde delikler ve iç kısmında kurtçuklar",
      solution: "Düzenli ilaçlama ve tuzak kullanımı"
    },
    {
      name: "Karaleke",
      type: "Hastalık",
      symptoms: "Yapraklarda ve meyvelerde siyah lekeler",
      solution: "Bakırlı ilaçlarla düzenli ilaçlama"
    }
  ]
},
"pancar": {
  name: "Pancar",
  image: "https://ideacdn.net/shop/ir/87/myassets/products/678/pancar-tohumu-detroit-dark-red-2.jpg?revision=1726669547",
  description: "Pancar, hem şeker üretimi hem de yaprakları ve kökleri sebze olarak tüketilmek üzere yetiştirilen bir bitkidir. Besin değeri yüksek olan bu bitki, tarım açısından önemli bir yere sahiptir.",
  water: "Düzenli, toprak nemini koruyacak şekilde",
  light: "Güneşli ortam",
  environment: "Serin",
  botanicalName: "Beta vulgaris",
  soil: "Organik maddece zengin, iyi drene edilmiş toprak",
  tips: [
    "Toprağın pH değerini 6-7 arasında tutmaya özen gösterin.",
    "Yabancı otlarla düzenli mücadele edin.",
    "Ekim sonrası ilk haftalarda yeterli nem sağlayın."
  ],
  pests: [
    {
      name: "Pancar Kurdu",
      type: "Zararlı",
      symptoms: "Yapraklarda delinmeler ve kuruma",
      solution: "Düzenli ilaçlama ve biyolojik mücadele"
    },
    {
      name: "Külleme",
      type: "Hastalık",
      symptoms: "Yapraklarda beyaz tozlu bir görünüm",
      solution: "Kükürtlü ilaçlarla ilaçlama"
    }
  ]
},
"lahana": {
  name: "Lahana",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSOTycDgLLmIGYwAqqk6LZv2Tkn7OzWBW4w&s",
  description: "Lahana, vitamin ve mineral açısından zengin bir sebzedir. Genellikle serin iklimlerde yetiştirilir ve birçok farklı çeşidi bulunmaktadır.",
  water: "Düzenli, toprağın nemli kalmasını sağlayacak şekilde",
  light: "Güneşli ortam",
  environment: "Serin",
  botanicalName: "Brassica oleracea",
  soil: "Organik madde açısından zengin, nemli toprak",
  tips: [
    "Ekimden önce toprağı iyice hazırlayın ve organik gübre ekleyin.",
    "Düzenli yabancı ot temizliği yapın.",
    "Başların oluşmaya başladığı dönemde su ihtiyacını karşılamaya özen gösterin."
  ],
  pests: [
    {
      name: "Lahana Kurdu",
      type: "Zararlı",
      symptoms: "Yapraklarda delikler ve zarar görmüş başlar",
      solution: "Biyolojik mücadele ve düzenli ilaçlama"
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Bitkinin solması ve köklerde çürüme",
      solution: "Drenajı iyi olan toprak kullanımı ve hastalıklı bitkilerin yok edilmesi"
    }
  ]
},
"kirmizi-biber": {
  name: "Kırmızı Biber",
  image: "https://ideacdn.net/idea/fe/18/myassets/products/207/adsiz-tasarim-1.jpg?revision=1724866378",
  description: "Kırmızı biber, hem taze hem de kurutulmuş olarak tüketilen, sağlık açısından faydalı bir sebzedir. Lezzet ve aroma bakımından mutfakların vazgeçilmezidir.",
  water: "Düzenli, nemli ama su birikintisiz toprak",
  light: "Güneşli ortam",
  environment: "Sıcak ve güneşli",
  botanicalName: "Capsicum annuum",
  soil: "Organik maddece zengin, hafif asidik toprak",
  tips: [
    "Biber fidelerini iyi hazırlanmış, güneş alan bir toprağa dikin.",
    "Çiçeklenme döneminde bitkiye düzenli olarak potasyum içeren gübre uygulayın.",
    "Yabancı otlardan temizleyerek bitkinin gelişimini destekleyin."
  ],
  pests: [
    {
      name: "Kırmızı Örümcek",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve dökülme",
      solution: "Biyolojik mücadele ve kükürtlü ilaçlar"
    },
    {
      name: "Solgunluk Hastalığı",
      type: "Hastalık",
      symptoms: "Bitkinin aniden solması ve kuruması",
      solution: "Drenajı iyi olan toprak kullanımı ve uygun fungisitler"
    }
  ]
},
"havuc": {
  name: "Havuç",
  image: "https://m.media-amazon.com/images/I/61zlp9XRTqL._AC_UF1000,1000_QL80_.jpg",
  description: "Havuç, kök sebze olarak tüketilen, sağlıklı bir besin kaynağıdır. A vitamini yönünden zengin olan havuç, hem taze hem de işlenmiş şekilde tüketilebilir.",
  water: "Düzenli, yüzey nemli kalacak şekilde",
  light: "Güneşli ortam",
  environment: "Ilıman",
  botanicalName: "Daucus carota",
  soil: "Gevşek, kumlu, drenajı iyi toprak",
  tips: [
    "Ekim öncesinde toprak derinlemesine işlenmeli ve taşlardan arındırılmalıdır.",
    "Toprağın eşit şekilde nemli tutulması için düzenli sulama yapılmalıdır.",
    "Yabancı otlar temizlenmeli ve toprak havalandırılmalıdır."
  ],
  pests: [
    {
      name: "Havuç Sineği",
      type: "Zararlı",
      symptoms: "Köklerde küçük delikler ve renk değişimi",
      solution: "Ekim sırasını değiştirme ve uygun insektisit kullanımı"
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerde kahverengileşme ve çürüme",
      solution: "Drenajı iyi olan toprak kullanımı ve düzenli toprak dezenfeksiyonu"
    }
  ]
},
"maydanoz": {
  name: "Maydanoz",
  image: "https://i.pinimg.com/736x/c4/9f/6c/c49f6cff5980ae6607eefb531999882c.jpg",
  description: "Maydanoz, yaprakları yemeklerde kullanılan, vitamin ve mineral yönünden zengin bir bitkidir. Hem ev bahçelerinde hem de ticari tarımda yaygın olarak yetiştirilir.",
  water: "Düzenli, toprak kurudukça sulama",
  light: "Güneşli veya yarı gölgeli alan",
  environment: "Ilıman veya serin iklim",
  botanicalName: "Petroselinum crispum",
  soil: "Organik maddece zengin, drenajı iyi toprak",
  tips: [
    "Güneşli veya kısmen gölgeli bir alanda yetiştirin.",
    "Fideler büyüdükçe düzenli olarak sulama yapın.",
    "Hasat sırasında bitkinin kök kısmını zarar vermeden yaprakları toplayın."
  ],
  pests: [
    {
      name: "Yaprak Bitleri",
      type: "Zararlı",
      symptoms: "Yapraklarda kıvrılma ve renk değişimi",
      solution: "Doğal böcek ilaçları veya düzenli su püskürtme"
    },
    {
      name: "Külleme",
      type: "Hastalık",
      symptoms: "Yapraklarda beyaz tozlu bir görünüm",
      solution: "Toprak nemini kontrol ederek uygun ilaç kullanımı"
    }
  ]
},
"salatalik": {
  name: "Salatalık",
  image: "https://i.lezzet.com.tr/images-800x600/b4b99e69-903f-4977-9855-48c2544e0ed3-dec853c0-ef20-468e-ae1e-2a94cdc926cc",
  description: "Salatalık, hem taze tüketim hem de turşu yapımı için kullanılan popüler bir sebzedir. Kolay yetiştirilen bir bitki olup, genellikle yaz aylarında bolca ürün verir.",
  water: "Düzenli ve sık sulama, özellikle büyüme döneminde",
  light: "Güneşli ortam",
  environment: "Ilıman ve sıcak iklim",
  botanicalName: "Cucumis sativus",
  soil: "Organik maddece zengin, hafif asidik toprak",
  tips: [
    "Salatalık bitkisini güneş alan bir yerde yetiştirin.",
    "Toprağı sürekli nemli tutarak düzenli sulama yapın.",
    "Daha iyi hava sirkülasyonu için bitkiler arasında yeterli mesafe bırakın."
  ],
  pests: [
    {
      name: "Yaprak Bitleri",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve yapışkanlık",
      solution: "Doğal böcek ilaçları kullanımı"
    },
    {
      name: "Mildiyö",
      type: "Hastalık",
      symptoms: "Yapraklarda sarı lekeler ve kuruma",
      solution: "Fungusit ilaçlar ve uygun sulama"
    }
  ]
},
"patlican": {
  name: "Patlıcan",
  image: "https://ideacdn.net/idea/ip/66/myassets/blogs/6049e2e24ca70e00326a295e-patlicanin-meyve-yapisi-min.png?revision=1626337836",
  description: "Patlıcan, sıcak iklim sebzelerinden biri olup, dünya mutfağında geniş bir kullanım alanına sahiptir. Genellikle yazlık sebze olarak yetiştirilir ve yüksek verim sağlar.",
  water: "Düzenli, toprağı sürekli nemli tutacak şekilde",
  light: "Güneşli ortam",
  environment: "Sıcak ve nemli iklim",
  botanicalName: "Solanum melongena",
  soil: "İyi drenajlı, organik maddece zengin toprak",
  tips: [
    "Bitkileri güneş ışığını bolca alabilecek şekilde yerleştirin.",
    "Toprağın kurumasına izin vermeden düzenli sulama yapın.",
    "Yabani ot kontrolü için malçlama yöntemini kullanın."
  ],
  pests: [
    {
      name: "Kırmızı Örümcek",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve örümcek ağları",
      solution: "Doğal böcek ilaçları ve nem kontrolü"
    },
    {
      name: "Solgunluk Hastalığı",
      type: "Hastalık",
      symptoms: "Bitki yapraklarında solma ve dökülme",
      solution: "Hastalıklı bitkilerin uzaklaştırılması ve toprak dezenfeksiyonu"
    }
  ]
},
"nane": {
  name: "Nane",
  image: "https://i.nefisyemektarifleri.com/2023/06/22/nanenin-faydalari-neye-iyi-gelir-az-bilinen-mucizevi-etkileri.jpg",
  description: "Nane, mutfaklarda yaygın olarak kullanılan aromatik bir bitkidir. Kolay yetiştirilebilir ve sağlık açısından birçok faydası vardır. Hem açık alanda hem de saksıda rahatlıkla yetiştirilebilir.",
  water: "Düzenli, toprak nemini koruyacak şekilde",
  light: "Yarı gölge",
  environment: "Ilıman ve nemli iklim",
  botanicalName: "Mentha spp.",
  soil: "Humuslu, nem tutabilen toprak",
  tips: [
    "Nanenin hızlı büyümesi için düzenli sulama yapın.",
    "Bitkiyi aşırı güneşten koruyarak yarı gölge bir alanda yetiştirin.",
    "Yaprakların sağlıklı kalması için düzenli olarak uç budama yapın."
  ],
  pests: [
    {
      name: "Yaprak Bitleri",
      type: "Zararlı",
      symptoms: "Yapraklarda yapışkanlık ve renk solması",
      solution: "Doğal böcek ilaçları veya neem yağı kullanımı"
    },
    {
      name: "Küf Hastalığı",
      type: "Hastalık",
      symptoms: "Yapraklarda beyazımsı küf tabakası",
      solution: "Havalandırmayı artırma ve mantar ilaçları kullanımı"
    }
  ]
},
"patates": {
  name: "Patates",
  image: "https://i.lezzet.com.tr/images-xxlarge-secondary/patates-yetistiriciligi-evde-patates-ne-zaman-ve-nasil-ekilir-6e0af123-e61a-4e40-980a-e263b79b52d8.jpg",
  description: "Patates, dünya çapında yaygın olarak yetiştirilen, besin değeri yüksek bir sebzedir. Sağlıklı bir bitki yetiştirmek için doğru toprak, sulama ve bakım gereklidir.",
  water: "Düzenli, ancak fazla suya dikkat edin",
  light: "Güneşli alanlar",
  environment: "Serin, ılıman iklim",
  botanicalName: "Solanum tuberosum",
  soil: "Hafif, kumlu toprak",
  tips: [
    "Patatesler için toprağın iyi havalanmasını sağlamak için aralıklarla toprak gevşetme işlemi yapın.",
    "Aşırı su birikimini önlemek için drenajlı toprak kullanın.",
    "Patateslerin büyüme sürecinde yeterli ışık ve düzenli gübreleme yapın."
  ],
  pests: [
    {
      name: "Patates Böceği",
      type: "Zararlı",
      symptoms: "Yapraklarda sararma ve delikler",
      solution: "Kimyasal ilaçlar veya biyolojik mücadele"
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerin çürümesi ve bitkinin solması",
      solution: "Fazla su verilmemesi ve uygun toprak koşulları"
    }
  ]
},
"turp": {
  name: "Turp",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrRQutsEnKzZ4Q8DAiw6klw4-rP1wmUzsJyT0JZuUVv4xUv7XUL30_nWYmyTEPq9ILQk&usqp=CAU",
  description: "Turp, hızlı büyüyen, besin değeri yüksek ve kolayca yetiştirilebilen bir sebzedir. Sağlıklı bir turp yetiştirmek için doğru bakım gereklidir.",
  water: "Düzenli sulama, ancak fazla su birikiminden kaçınılmalıdır",
  light: "Güneşli alanlar",
  environment: "Serin iklim",
  botanicalName: "Raphanus sativus",
  soil: "Hafif, kumlu toprak",
  tips: [
    "Turpları doğrudan toprağa ekin ve yeterli alanda büyümelerini sağlayın.",
    "Düzenli sulama yapın, ancak suyun birikmesine izin vermeyin.",
    "Toprağın gevşetilmesi ve havalandırılması, sağlıklı büyümeyi destekler."
  ],
  pests: [
    {
      name: "Turp Kelebeği",
      type: "Zararlı",
      symptoms: "Yapraklarda delikler ve bozulmalar",
      solution: "Bitkileri düzenli olarak kontrol edin ve ilaçlama yapın"
    },
    {
      name: "Kök Çürüklüğü",
      type: "Hastalık",
      symptoms: "Köklerin çürümesi ve bitkinin solması",
      solution: "Toprağın iyi drenaj yapmasını sağlayın ve fazla suyu önleyin"
    }
  ]
},
"domates": {
  name: "Domates",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bMTF2pdzbXPdstNZDcvqfpIE1eEitRLA0A&s",
  description: "Domates, dünya çapında en çok yetiştirilen ve tüketilen sebzelerden biridir. Sağlıklı büyümesi için sıcak iklimler ve güneşli alanlar gereklidir.",
  water: "Düzenli sulama, toprağın nemini koruyacak şekilde",
  light: "Tam güneş",
  environment: "Sıcak, güneşli",
  botanicalName: "Solanum lycopersicum",
  soil: "Verimli, iyi drene edilmiş toprak",
  tips: [
    "Toprağın iyi drene olduğundan emin olun, suyun birikmesini engelleyin.",
    "Domates bitkilerinin alt kısımlarını temiz tutarak hastalıkları engelleyin.",
    "Bitkilerin büyümesini desteklemek için düzenli gübreleme yapın."
  ],
  pests: [
    {
      name: "Domates Solgunluğu",
      type: "Hastalık",
      symptoms: "Yapraklarda solma ve sararma",
      solution: "Bakteriyel ilaçlar ve düzenli sulama"
    },
    {
      name: "Kırmızı Domates Kurtları",
      type: "Zararlı",
      symptoms: "Meyvelerde delikler ve kurtçuklar",
      solution: "Kimyasal ilaçlarla ilaçlama"
    }
  ]
},






};
