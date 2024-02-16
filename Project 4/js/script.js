const startBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const deleteBtn = document.querySelector(".reset");
const archiveBtn = document.querySelector(".archivebtn");
const archive = document.querySelector(".archive");
const modalCloseBtn = document.querySelector(".close");
const modal = document.querySelector(".modal-shadow");
const infoBtn = document.querySelector(".fa-question");
const time = document.querySelector(".time");
const stopWatch = document.querySelector(".stopwatch");
const ulList = document.querySelector(".saved-times");
const errorInfo = document.querySelector(".error");

let seconds = 0;
let minutes = 0;
let count;
let countNumber = 1;

const archiveSaved = [];

//Zmiana kolorów

const brushIco = document.querySelector(".fa-paintbrush");
const colorPanel = document.querySelector(".wrapper__info__panel__colors");
const colorBlue = document.querySelector(".color-blue");
const colorRed = document.querySelector(".color-red");
const colorGreen = document.querySelector(".color-green");

const root = document.documentElement;

//funkcje

const startHandle = () => {
	clearInterval(count);

	count = setInterval(() => {
		if (seconds <= 9) {
			time.textContent = `${minutes}:0${seconds}`;
			seconds++;
		} else if (seconds >= 9 && seconds <= 59) {
			time.textContent = `${minutes}:${seconds}`;
			seconds++;
		} else {
			minutes++;
			time.textContent = `${minutes}:00`;
			seconds = 0;
		}
	}, 1000);
};

const pauseHandle = () => {
	clearInterval(count);
};

const stopHandle = () => {
	clearInterval(count);
	stopWatch.style.visibility = "visible";
	stopWatch.innerHTML = `Twój ostatni czas: ${time.textContent}`;
	archiveSaved.push(time.textContent);
	archiveMem();
	time.textContent = `0:00`;
	minutes = 0;
	seconds = 0;
};

const clearHandle = () => {
	minutes = 0;
	seconds = 0;
	countNumber = 1;
	stopWatch.innerHTML = ``;
	archiveSaved.splice(0, archiveSaved.length);
	while (ulList.hasChildNodes()) {
		ulList.removeChild(ulList.firstChild);
	}
};

const showArchive = () => {
	if (archiveSaved.length !== 0) {
		archive.classList.toggle("show");
		errorInfo.textContent = "";
	} else {
		archive.classList.remove("show");
		errorInfo.textContent = "Brak danych!";
	}
};

const archiveMem = () => {
	const listEl = document.createElement("li");
	archiveSaved.forEach((mem) => {
		listEl.innerHTML = `<span>Pomiar numer ${countNumber} - </span>${mem}`;
		ulList.append(listEl);
	});
	countNumber++;
};

const showModal = () => {
	modal.classList.toggle("show");
};

//Funcke zmiany kolorów
const showColorPanel = () => {
	colorPanel.classList.toggle("show-flex");
};

//listenery główne
startBtn.addEventListener("click", startHandle);
pauseBtn.addEventListener("click", pauseHandle);
stopBtn.addEventListener("click", stopHandle);
deleteBtn.addEventListener("click", clearHandle);
archiveBtn.addEventListener("click", showArchive);
infoBtn.addEventListener("click", showModal);
modalCloseBtn.addEventListener("click", showModal);

//Zmiana kolorów listenery
brushIco.addEventListener("click", showColorPanel);
colorBlue.addEventListener("click", () => {
	root.style.setProperty("--theme-color", "royalblue");
});
colorRed.addEventListener("click", () => {
	root.style.setProperty("--theme-color", "tomato");
});
colorGreen.addEventListener("click", () => {
	root.style.setProperty("--theme-color", "lime");
});
