const BASE_URL = "https://dog.ceo/api/breeds/image/random";//"https://thatcopy.pw/dogapi/rest/";

const getDogs = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e.message));

    return data;
}

const loadImgDog = async () => {
    const dogImg = document.getElementById("dog-img");
    const dogImgLink = document.getElementById("dog-img-link");

    let dog = await getDogs();

    dogImg.src = dog.message;
    dogImgLink.innerHTML = dog.message;
    dogImgLink.href = dog.message;
}

const dogBtn = document.getElementById("dog-change");
dogBtn.addEventListener("click", loadImgDog);

loadImgDog();
