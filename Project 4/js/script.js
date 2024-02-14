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

let seconds = 0;
let minutes = 0;
let count;
let countNumber = 1;

const archiveSaved = [];

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
	stopWatch.innerHTML = ``;
};

const showArchive = () => {
	archive.classList.toggle("show");
};

const archiveMem = () => {
	const ulList = document.querySelector(".saved-times");
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

startBtn.addEventListener("click", startHandle);
pauseBtn.addEventListener("click", pauseHandle);
stopBtn.addEventListener("click", stopHandle);
deleteBtn.addEventListener("click", clearHandle);
archiveBtn.addEventListener("click", showArchive);
infoBtn.addEventListener("click", showModal);
modalCloseBtn.addEventListener("click", showModal);
