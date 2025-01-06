function toggleDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function() {
	AOS.init(
		{
			duration: 400, // время анимации
		}
	);
});
