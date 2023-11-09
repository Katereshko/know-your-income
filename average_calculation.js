const averageSalary = document.querySelector('#monthly_average');

function calculateAverage(e){
    e.preventDefault();

    const one = Number(document.querySelector("#one_month_ago").value);
    const two = Number(document.querySelector("#two_month_ago").value);
    const three = Number(document.querySelector("#three_month_ago").value);
    const four = Number(document.querySelector("#four_month_ago").value);
    const five = Number(document.querySelector("#five_month_ago").value);
    const six = Number(document.querySelector("#six_month_ago").value);
    const seven = Number(document.querySelector("#seven_month_ago").value);
    const eight = Number(document.querySelector("#eight_month_ago").value);
    const nine = Number(document.querySelector("#nine_month_ago").value);
    const ten = Number(document.querySelector("#ten_month_ago").value);
    const eleven = Number(document.querySelector("#eleven_month_ago").value);
    const twelve = Number(document.querySelector("#twelve_month_ago").value);

    if (one == "" || two == "" || three == "" || four == "" || five == "" || six == "" || seven == "" || eight == "" || nine == "" || ten == "" || eleven == "" || twelve == ""){
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Заполните все поля! Расчет может быть некорректен!',
        })
    }

    const averageMonthlySalary = (one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve) / 12;
    
    averageSalary.textContent = averageMonthlySalary.toFixed(2);
    
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', calculateAverage);