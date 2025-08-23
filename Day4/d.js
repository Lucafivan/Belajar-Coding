let no = 1;

document.getElementById("formData").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let kota = document.getElementById("kota").value;

    let tabel = document.getElementById("tableData").getElementsByTagName("tbody")[0];
    let row = tabel.insertRow();

    row.innerHTML = `
    <td>${no}</td>
    <td>${nama}</td>
    <td>${email}</td>
    <td>${kota}</td>
    <td><button class="aksi-btn" onclick="hapusRow(this)">Hapus</button></td>
    `;

    no++;

    document.getElementById("formData").reset();
});

function hapusRow(btn) {
    let row =btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}