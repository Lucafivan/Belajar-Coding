let data = JSON.parse(localStorage.getItem("data")) || [];
let no = 1;

function renderTable() {
    const tbody = document.querySelector('#tableData tbody')
    tbody.innerHTML = "";
    data.forEach((item, index) => {
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td>${item.email}</td>
        <td>${item.kota}</td>
        <td>
            <button class="aksi-btn edit-btn" onclick="editData(${index})">Edit</button>
            <button class="aksi-btn delete-btn" onclick="hapusData(${index})">Hapus</button>
        </td>
        `;
        tbody.appendChild(row);
    });
}

document.getElementById("formData").addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const kota = document.getElementById("kota").value;
    const editIndex = document.getElementById("editIndex").value;

    if (editIndex === "") {
        data.push({nama, email, kota});
    } else {
        data[editIndex] = {nama, email, kota};
        document.getElementById("submitBtn").textContent = "Tambah Data";
        document.getElementById("editIndex").value = "";
    }

    localStorage.setItem("data", JSON.stringify(data));
    renderTable();
    document.getElementById("formData").reset();
});

function editData(index) {
    const item = data[index];
    document.getElementById("nama").value = item.nama;
    document.getElementById("email").value = item.email;
    document.getElementById("kota").value = item.kota;
    document.getElementById("editIndex").value = index;
    document.getElementById("submitBtn").textContent = "Update Data";
}

function hapusData(index) {
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    renderTable();
}

renderTable();
