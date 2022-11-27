let data = []
const submitData = () => {
     let nama = document.getElementById('input-nama').value
     let phone = document.getElementById('input-nomor').value
     let email = document.getElementById('input-email').value
     let pesan = document.getElementById('input-pesan').value

     let dataContact = {
          nama,
          phone,
          email,
          pesan
     }
     data.push(dataContact)
     console.log(dataContact);
}
submitData()