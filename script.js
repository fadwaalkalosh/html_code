// رسالة ترحيب عند دخول الموقع
window.onload = function () {
    alert("مرحبًا بكم في DN DN Sweet! 🍬✨");
};

// تنبيه زر عرض المنتجات
let productBtn = document.querySelector("button");

productBtn.addEventListener("click", function () {
    alert("سيتم نقلك الآن لصفحة عرض المنتجات 🍰");
});

// تغيير صورة الشعار تلقائيًا
 
// حركة العنوان
let title = document.querySelector("h1");

title.style.transition = "0.6s";
setInterval(() => {
    title.style.transform = "scale(1.1)";
    setTimeout(() => { title.style.transform = "scale(1)"; }, 300);
}, 2000);

// التحقق من الروابط
function checkLinks() {
    let links = document.querySelectorAll("a");

    links.forEach(link => {
        if (!link.href || link.href === "#") {
            console.warn("⚠️ رابط غير صالح:", link);
        }
    });
}

checkLinks();

// تأثير ظهور الصفحة
document.body.style.opacity = 0;
document.body.style.transition = "opacity 1.5s";

setTimeout(() => { document.body.style.opacity = 1 }, 200);
