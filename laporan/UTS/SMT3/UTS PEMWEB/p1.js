const dataMahasiswa = [];

document.querySelector('#formMahasiswa').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.querySelector('#nama').value;
  const nim = document.querySelector('#nim').value;
  const semester = document.querySelector('#semester').value;
  const prodi = document.querySelector('#prodi').value;
  const email = document.querySelector('#email').value;

  // Simpan ke array
  const mahasiswa = { nama, nim, semester, prodi, email };
  dataMahasiswa.push(mahasiswa);

  // Tampilkan di console
  console.log("Data terkirim:", mahasiswa);
  console.log("Total data:", dataMahasiswa.length);

  // Update tabel
  const tabel = document.querySelector('#tabelData');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${dataMahasiswa.length}</td>
    <td>${nama}</td>
    <td>(${prodi}: Semester ${semester})</td>
  `;
  tabel.appendChild(row);

  // Reset form
  this.reset();
});