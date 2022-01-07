// start fungsi navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
//end fungsi navbar

// let prevScrollpo = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollpos = window.pageYOffset;
//     if (prevScrollpo > currentScrollpos) {
//         document.getElementById("navbar").style.top = "o";
//     } else(
//         document.getElementById("navbar").style.top = "-50px"
//     )


// }
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
};
document.getElementById("see").addEventListener("click", function () {

    var ini = document.getElementById("ini");
    if (ini.style.display === "block") {
        ini.style.opacity = "1";
        document.getElementById("see").innerHTML = "all";

    } else {
        ini.style.opacity = "0";
        document.getElementById("see").innerHTML = "a little";

    }
})