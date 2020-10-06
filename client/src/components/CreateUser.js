export default function CreateUser() {
  // 1.
// let req = new Request(this);
  // let request = req.body

  // 2.
  // let formData = new FormData();

  const url = 'http://localhost:3001/api/users/';

  fetch(url, {
    method: 'POST',
    // body: formData,
    // request,
    contentType: 'multipart/form-data'
  })
    .then((res) => {
              if (res.ok()) {
                return res.json();
            } else {
                throw new Error('Bad HTTP !');
            }
        })
    .then(function (jsonData) {
            console.log(jsonData);
            document.getElementById('results').innerText =
            JSON.stringify(jsonData);
        });
 
}