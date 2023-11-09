const btn = document.querySelector('#btn');
btn.addEventListener('click', calculatePayment);

const holidayPaymentIndicate = document.querySelector('#holidayPaymentIndicate');

function calculatePayment(e){
    e.preventDefault();

    const rateForMonth = document.querySelector("#rateForMonth").value;
    const holidayDays = document.querySelector("#holidayDays").value;

    if (rateForMonth === "" || holidayDays === "" || holidayDays < 1){
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введите два верных значения! Расчет может быть некорректен!',
        })
    }

    let holidayPayment = rateForMonth / 29.3 * holidayDays;
    holidayPaymentIndicate.textContent = holidayPayment.toFixed(2);
}


