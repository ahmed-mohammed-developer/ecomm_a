window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import './sass/style.scss'
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

document.querySelectorAll('.quantity').forEach(item => {
     item.addEventListener('change', () => {
          const newQuantity = item.value;
          const parent = item.closest('[data-product-info]');
          const pricePar = parent.getAttribute('data-product-price');
          const totalPriced = newQuantity * pricePar
          parent.querySelector('.total-price-for-product').innerHTML = totalPriced + "SR";
          calTotalPrice()
     })
})
/////////////////////////////////

document.querySelectorAll('[data-remov-form-card]').forEach(item => {
     item.addEventListener('click', () => {
          item.closest('[data-product-info]').remove()
          calTotalPrice()
     })
})


function calTotalPrice(){
     let totelAllProduct = 0;
     document.querySelectorAll('[data-product-info]').forEach(prodact => {
          const priceUnite = prodact.getAttribute('data-product-price');
          const qunanity = prodact.querySelector('.quantity').value
          const totalForProduct = priceUnite * qunanity

          totelAllProduct = totelAllProduct + totalForProduct;


     })
     document.getElementById('total-price-for-all-product').innerHTML = totelAllProduct + "SR"
};

//تحديد مدن الدولة
const citiesByCountry = {
     sa: ['جدة','الرياض','ابها','جازان'],
     uae: ['الشارقة','عجمان'],
     ku: ['كويت','الفريج'],
     bh: ['المنامة','العيزن']
}
document.querySelectorAll('select[name="country"]').forEach(item => {
     item.addEventListener('change', () => {
          const country = item.value
          const cities = citiesByCountry[country]
          document.querySelectorAll('#paymentcities option').forEach(option => option.remove())
          const fristOption = document.createElement('option')
          const optionText = document.createTextNode('إختر المدينة')
          fristOption.appendChild(optionText)
          fristOption.setAttribute('value', '')
          fristOption.setAttribute('disabled', 'true')
          fristOption.setAttribute('selected', 'true')
          const city_options = document.getElementById('paymentcities')
          city_options.appendChild(fristOption)
          cities.forEach(city => {
               const newOpation = document.createElement('option')
               const optionText = document.createTextNode(city)
               newOpation.appendChild(optionText)
               newOpation.setAttribute('value', city)
               city_options.appendChild(newOpation)

          })
     })
});

//إظهار وإخفاء حقول البطاقة الإئتمانية
document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item => {
     item.addEventListener('change', () => {
         const paymentMethod = item.value;
 
         const creditCardInputs = document.querySelectorAll('#credit_card_info input');
 
         if(paymentMethod === 'on_delivery') {
             creditCardInputs.forEach(input => {
                 input.style.display='none'
             })
         } else {
             creditCardInputs.forEach(input => {
                 input.style.display='block'
             })
         }
     })
 })



document.getElementById("copyright").innerHTML = "جميع الحقوق ةمحفوظة سنة" + new Date().getFullYear();


