window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



document.querySelectorAll('.add-to-cart-btn').forEach(item => {
     item.addEventListener("click", () => {
          alert("أضيف المنتج إلى عربة الشراء")
     })
});

/*
--------------page product---------------
*/
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
     item.addEventListener('change', () => {
          document.querySelectorAll('.size-option').forEach(i => (
               i.classList.remove('active')
          ));
          item.parentNode.parentNode.classList.add('active')
     })
});

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
     item.addEventListener('change', () => {
          document.querySelectorAll('.color-option').forEach(i => (
               i.classList.remove('active')
          ));
          item.parentNode.parentNode.classList.add('active')
     })
});
//حساب سعر اجمالي المنتج





document.getElementById("copyright").innerHTML = "جميع الحقوق ةمحفوظة سنة" + new Date().getFullYear();


