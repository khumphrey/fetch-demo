document.getElementById('maker')
	.addEventListener('click', (e) => {
		const [name, type, imgUrl] = document.getElementsByTagName('input')
		const data = JSON.stringify({name: name.value, type: type.value, imgUrl: imgUrl.value})
		console.log('!!!!', data)
		fetch("/babes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: data
		})
		.then(console.log)
		.catch(console.error)
	})
document.getElementById('fetchem')
  .addEventListener('click', (e) => {
    fetch("/babes")
      .then(response => response.json())
      .then(babyNameArr => {
        const list = document.getElementById('best-list');
        babyNameArr.forEach(baby => {
          const li = document.createElement("li");
          li.append(`${baby.name}-${baby.type} `);
          const img = document.createElement("img");
          img.src = baby.imgUrl;
          li.append(img);
          list.append(li);
        })
      })
  })