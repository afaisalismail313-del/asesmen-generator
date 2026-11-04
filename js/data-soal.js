/* ============================================================
   LEVEL KOGNITIF & TEMPLATE SOAL PER BENTUK
   ============================================================ */
var LEVEL_KOGNITIF = {
  mudah:  ["C1 Mengingat","C2 Memahami"],
  sedang: ["C3 Mengaplikasikan","C4 Menganalisis"],
  sukar:  ["C5 Mengevaluasi","C6 Menciptakan"]
};

/* ---------- TEMPLATE ESSAY ---------- */
var TPL_ESSAY = {
  mudah:[
    "Jelaskan pengertian dan konsep dasar {k} berdasarkan materi yang telah dipelajari!",
    "Sebutkan dan uraikan secara singkat komponen-komponen utama dalam {k}!",
    "Uraikan apa yang kamu ketahui tentang {k} beserta contohnya!",
    "Identifikasi ciri-ciri/karakteristik utama dari {k}!"
  ],
  sedang:[
    "Berdasarkan materi {k}, analisislah hubungan antara konsep tersebut dengan kehidupan sehari-hari!",
    "Bandingkan karakteristik {k} dan jelaskan perbedaannya dengan memberikan contoh konkret!",
    "Terapkan konsep {k} untuk menyelesaikan permasalahan berikut dan jelaskan langkah-langkahnya!",
    "Jelaskan proses/tahapan yang terdapat dalam {k} dan berikan masing-masing satu contoh!"
  ],
  sukar:[
    "Evaluasilah efektivitas penerapan {k} dalam konteks kehidupan nyata, sertakan argumentasi logis!",
    "Rancanglah sebuah solusi/gagasan berbasis {k} untuk mengatasi permasalahan di lingkungan madrasah!",
    "Kritisilah pernyataan berikut terkait {k}, kemudian berikan pandanganmu disertai bukti yang relevan!",
    "Buatlah kesimpulan komprehensif tentang {k} dan rekomendasikan tindak lanjut yang dapat dilakukan!"
  ]
};

/* ---------- TEMPLATE PG BIASA ---------- */
var TPL_PG = {
  mudah:[
    "Pernyataan yang paling tepat tentang {k} adalah ...",
    "Berikut ini yang termasuk pengertian {k} adalah ...",
    "Komponen utama yang terdapat dalam {k} adalah ..."
  ],
  sedang:[
    "Perhatikan pernyataan berikut! Yang merupakan penerapan {k} dalam kehidupan sehari-hari adalah ...",
    "Dari beberapa karakteristik berikut, yang paling tepat menggambarkan {k} adalah ...",
    "Hubungan yang benar antarunsur dalam {k} ditunjukkan oleh pernyataan ..."
  ],
  sukar:[
    "Berdasarkan analisis terhadap {k}, simpulan yang paling tepat adalah ...",
    "Jika dikaitkan dengan permasalahan nyata, penerapan {k} yang paling efektif adalah ...",
    "Evaluasi berikut yang paling tepat terhadap penerapan {k} adalah ..."
  ]
};

/* ---------- TEMPLATE PG KOMPLEKS (jawaban > 1) ---------- */
var TPL_PGK = {
  mudah:[
    "Pernyataan-pernyataan berikut yang benar tentang {k} adalah ... (pilih lebih dari satu)",
    "Yang termasuk komponen/ciri dari {k} adalah ... (pilih lebih dari satu)"
  ],
  sedang:[
    "Dari pernyataan berikut, yang merupakan penerapan {k} adalah ... (pilih lebih dari satu)",
    "Karakteristik yang tepat menggambarkan {k} ditunjukkan oleh ... (pilih lebih dari satu)"
  ],
  sukar:[
    "Berdasarkan analisis {k}, pernyataan yang paling valid adalah ... (pilih lebih dari satu)",
    "Rekomendasi/solusi yang tepat berbasis {k} ditunjukkan oleh ... (pilih lebih dari satu)"
  ]
};

/* ---------- TEMPLATE BENAR-SALAH ---------- */
var TPL_BS = {
  mudah:[
    "Pernyataan: {k} merupakan konsep yang penting dalam materi ini.",
    "Pernyataan: {k} memiliki komponen-komponen yang saling berkaitan."
  ],
  sedang:[
    "Pernyataan: Penerapan {k} selalu memberikan dampak positif tanpa pengecualian.",
    "Pernyataan: Semua karakteristik {k} berlaku sama pada setiap kondisi."
  ],
  sukar:[
    "Pernyataan: Evaluasi terhadap {k} menunjukkan bahwa konsep ini tidak relevan dengan kehidupan nyata.",
    "Pernyataan: Berdasarkan analisis mendalam, {k} terbukti menjadi solusi paling efektif untuk semua permasalahan."
  ]
};

/* ---------- PENGACAU (DISTRACTOR) UMUM ---------- */
var DISTRACTOR = [
  "Pernyataan tersebut tidak sesuai dengan konsep yang dipelajari",
  "Merupakan kebalikan dari prinsip yang benar",
  "Hanya berlaku pada kondisi tertentu saja",
  "Bukan merupakan bagian dari materi ini",
  "Merupakan pengertian dari konsep lain yang berbeda"
];
