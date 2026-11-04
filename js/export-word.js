/* ============ EKSPOR KE MICROSOFT WORD (F4) ============ */
function downloadWord(mode){
  if(!state.soal.length){ alert('Generate soal terlebih dahulu.'); return; }
  var mapel=ATP[el('iMapel').value].nama, kelas=el('iKelas').value;
  var sem=el('iSemester').value==='1'?'Ganjil':'Genap';
  var madrasah=el('iMadrasah').value, guru=el('iGuru').value||'........................';
  var tahun=el('iTahun').value;

  var head='<div style="text-align:center"><h2 style="margin:0">KISI-KISI & NASKAH SOAL ASESMEN</h2>'+
    '<p style="margin:2pt 0">Mata Pelajaran: <b>'+mapel+'</b> · Kelas '+kelas+' · Semester '+sem+'</p>'+
    '<p style="margin:2pt 0">'+madrasah+' · Tahun Pelajaran '+tahun+'</p>'+
    '<p style="margin:2pt 0">Guru Penyusun: '+guru+'</p><hr></div>';

  var kisiH='<h3>1. KISI-KISI SOAL</h3><table border="1" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:9pt">'+
    '<tr style="background:#1a5c2e;color:#fff"><th>No</th><th>Tujuan Pembelajaran</th><th>Materi Pokok</th><th>IKTP</th><th>Indikator Asesmen</th><th>Level Kognitif</th><th>Karakteristik</th><th>Bentuk Soal</th><th>No Soal</th></tr>';
  state.kisi.forEach(function(r){
    kisiH+='<tr><td>'+r.no+'</td><td>'+r.tp+'</td><td>'+r.materi+'</td><td>'+r.iktp+'</td><td>'+r.indAsesmen+'</td><td>'+r.level+'</td><td>'+r.kar+'</td><td>'+r.bentuk+'</td><td>'+r.noSoal+'</td></tr>';
  });
  kisiH+='</table>';

  var soalH='<h3>2. NASKAH SOAL</h3>';
  state.soal.forEach(function(s){
    soalH+='<p><b>'+s.no+'.</b> '+s.teks+'</p>';
    if(s.opsi){ s.opsi.forEach(function(o,i){ soalH+='<p style="margin-left:20pt">'+String.fromCharCode(65+i)+'. '+o+'</p>'; }); }
  });

  var kunciH='<h3>3. KUNCI JAWABAN & PEDOMAN PENSKORAN</h3>';
  state.soal.forEach(function(s){
    kunciH+='<p><b>No. '+s.no+'</b> — Kunci: <b>'+s.kunci+'</b></p>';
  });
  kunciH+='<p><i>Pedoman Penskoran Essay: Skor 4 = lengkap & tepat; 3 = cukup; 2 = kurang; 1 = tidak tepat.</i></p>';

  var body='';
  if(mode==='kisi') body=head+kisiH;
  else if(mode==='soal') body=head+soalH+kunciH;
  else body=head+kisiH+soalH+kunciH;

  var html='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">'+
    '<head><meta charset="utf-8"><title>Soal Asesmen</title>'+
    '<style>@page{size:21.5cm 33.0cm;margin:2cm 2cm 2cm 2.5cm}body{font-family:"Times New Roman",serif;font-size:11pt;line-height:1.5}'+
    'table td,table th{border:1px solid #000;padding:4pt;vertical-align:top}h3{color:#1a5c2e}</style></head><body>'+body+'</body></html>';

  var blob=new Blob(['\ufeff',html],{type:'application/msword'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url; a.download='Soal Asesmen '+mapel+' Kelas '+kelas+' ('+sem+').doc';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
