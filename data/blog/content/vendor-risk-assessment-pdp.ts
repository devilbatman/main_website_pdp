export const content = `
<p>Dalam rantai pasok digital saat ini, data perusahaan Anda jarang berdiam di satu tempat. Anda mungkin menggunakan layanan <em>cloud hosting</em> dari penyedia multinasional, perangkat lunak HR berbasis SaaS untuk mengelola penggajian karyawan, atau menyewa agensi <em>marketing</em> untuk menjalankan kampanye *email*.</p>

<p>Berdasarkan UU PDP, Anda sebagai <strong>Pengendali Data</strong> tetap bertanggung jawab secara hukum atas data tersebut, bahkan ketika data itu bocor dari server milik vendor (<strong>Pemroses Data</strong>) Anda. Oleh karena itu, <em>Vendor Risk Assessment</em> (Audit Risiko Pihak Ketiga) menjadi kewajiban mutlak.</p>

<h2>Risiko Terbesar Ada di Pihak Ketiga</h2>

<p>Banyak dari insiden kebocoran data skala besar dalam beberapa tahun terakhir tidak dimulai dari peretasan pada sistem utama perusahaan, melainkan melalui kerentanan pada vendor lapis kedua atau ketiga. Jika sebuah *startup fintech* menjaga keamanan servernya seperti benteng, namun mengirimkan data nasabah ke agensi penagihan (<em>collection agency</em>) yang menyimpan data tersebut dalam Excel yang tidak terenkripsi, maka risiko kebocoran tetap maksimal.</p>

<h2>Apa yang Harus Dinilai dari Sebuah Vendor?</h2>

<p>Sebelum menandatangani kontrak atau memperpanjang kerja sama dengan pihak ketiga yang memproses data pribadi, perusahaan harus melakukan uji tuntas (<em>due diligence</em>) yang mencakup:</p>

<ul>
  <li><strong>Keamanan Teknis:</strong> Apakah vendor memiliki sertifikasi standar keamanan seperti ISO 27001? Apakah mereka mengenkripsi data saat transit dan saat disimpan (<em>at rest</em>)?</li>
  <li><strong>Lokasi Penyimpanan Data:</strong> Jika vendor menyimpan data di luar wilayah Indonesia, apakah negara tersebut memiliki tingkat pelindungan data yang setara atau lebih tinggi dari UU PDP? Ini memicu aturan tentang transfer data lintas batas (<em>cross-border data transfer</em>).</li>
  <li><strong>Hak Audit:</strong> Apakah vendor bersedia diaudit secara berkala oleh tim Anda atau pihak ketiga independen?</li>
  <li><strong>Sub-pemroses (Sub-processors):</strong> Apakah vendor Anda mensubkontrakkan layanannya kepada pihak lain? (Misalnya: vendor SaaS yang menggunakan AWS sebagai infrastruktur di belakangnya). Anda berhak tahu siapa saja di dalam rantai tersebut.</li>
</ul>

<h2>Data Processing Agreement (DPA)</h2>

<p>Hasil dari <em>Vendor Risk Assessment</em> harus bermuara pada penandatanganan <em>Data Processing Agreement</em> (DPA) atau Perjanjian Pemrosesan Data. Kontrak ini secara tegas mengikat vendor untuk memproses data <em>hanya</em> sesuai dengan instruksi Anda, melarang mereka menggunakan data tersebut untuk kepentingan mereka sendiri, dan mewajibkan mereka melapor ke Anda (biasanya dalam 1x24 atau 2x24 jam) jika terjadi insiden kebocoran.</p>

<h2>Kesimpulan</h2>

<p>Perusahaan tidak bisa lagi berasumsi bahwa vendor sudah "secara otomatis aman". <em>Vendor Risk Assessment</em> mengubah asumsi tersebut menjadi kepastian yang dapat diverifikasi, memastikan bahwa standar privasi Anda tidak menurun saat data meninggalkan batas jaringan internal Anda.</p>
`;
