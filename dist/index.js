function toggleDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function() {
	AOS.init(
		{
			offset: 200, // ваш сдвиг
			duration: 400, // продолжительность анимации
		}
	);
});

// window.addEventListener('scroll', function() {
// 	const map = document.querySelector('.map div');
// 	const scrollY = window.scrollY;
// 	const scaleValue = 1 - scrollY / 1000; // Можете настроить делитель для скорости
// 	map.style.transform = `scale3d(${Math.max(scaleValue, 0.5)},${Math.max(scaleValue, 0.5)},${Math.max(scaleValue, 0.5)})`; // Минимальный уровень масштабирования 0.5
// });

window.addEventListener('scroll', function() {
    const map = document.querySelector('.map div');
    const scrollPosition = window.scrollY;

    // Приближаем карту при прокрутке вниз
    let scale = 1 + scrollPosition * 0.001; // Вы можете настроить коэффициент
    scale = Math.min(scale, 1.5); // Ограничиваем максимальный масштаб

    // Применяем масштабирование
    map.style.transform = `scale3d(${scale}, ${scale}, 1)`;
});
