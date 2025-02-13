let isCelsiusToFahrenheit = true; // Mode default

function convert() {
    let temperature = document.getElementById("temperature").value;
    if (temperature === "") {
        alert("Masukkan nilai suhu!");
        return;
    }

    let result, calculation, explanation, tempInfo;
    if (isCelsiusToFahrenheit) {
        // Celsius ke Fahrenheit
        result = (temperature * 9/5) + 32;
        calculation = `${temperature}°C × (9/5) + 32 = ${result.toFixed(2)}°F`;
        explanation = `
            <h4>Cara Perhitungan:</h4>
            <p>1. Gunakan rumus konversi: <b>°F = (°C × 9/5) + 32</b></p>
            <p>2. Masukkan nilai Celsius: <b>(${temperature} × 9/5) + 32</b></p>
            <p>3. Kalikan ${temperature} dengan 9/5 = ${(temperature * 9/5).toFixed(2)}</p>
            <p>4. Tambahkan 32: ${(temperature * 9/5).toFixed(2)} + 32 = <b>${result.toFixed(2)}°F</b></p>
        `;
        tempInfo = `
            <h4>Kenapa Menggunakan Fahrenheit?</h4>
            <p>Skala Fahrenheit digunakan terutama di Amerika Serikat dan beberapa negara lain.</p>
            <p>Fahrenheit lebih cocok untuk cuaca sehari-hari karena memiliki rentang angka yang lebih luas untuk suhu udara.</p>
            <p>Contoh: 0°F sangat dingin (sekitar -18°C) dan 100°F sangat panas (sekitar 37°C), sesuai dengan pengalaman manusia.</p>
        `;
    } else {
        // Fahrenheit ke Celsius
        result = (temperature - 32) * 5/9;
        calculation = `(${temperature}°F - 32) × (5/9) = ${result.toFixed(2)}°C`;
        explanation = `
            <h4>Cara Perhitungan:</h4>
            <p>1. Gunakan rumus konversi: <b>°C = (°F - 32) × 5/9</b></p>
            <p>2. Masukkan nilai Fahrenheit: <b>(${temperature} - 32) × 5/9</b></p>
            <p>3. Kurangkan ${temperature} dengan 32 = ${(temperature - 32).toFixed(2)}</p>
            <p>4. Kalikan hasilnya dengan 5/9 = ${(result).toFixed(2)}</p>
            <p>5. Hasil akhirnya: <b>${result.toFixed(2)}°C</b></p>
        `;
        tempInfo = `
            <h4>Kenapa Menggunakan Celsius?</h4>
            <p>Skala Celsius digunakan di hampir seluruh dunia dalam sistem metrik.</p>
            <p>Skala ini lebih mudah digunakan karena berbasis pada titik beku (0°C) dan titik didih air (100°C).</p>
            <p>Contoh: 20°C adalah suhu ruangan normal, 30°C cukup panas, dan 0°C adalah titik beku.</p>
        `;
    }

    document.getElementById("result").textContent = `${result.toFixed(2)}`;
    document.getElementById("calculation").textContent = calculation;
    document.getElementById("temperature").value = result.toFixed(2);
    document.getElementById("detailedExplanation").innerHTML = explanation;
    document.getElementById("tempExplanation").innerHTML = tempInfo;
}

function reverseMode() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

    let label = document.getElementById("tempLabel");
    if (isCelsiusToFahrenheit) {
        label.textContent = "Celsius (°C):";
    } else {
        label.textContent = "Fahrenheit (°F):";
    }

    convert(); // Langsung konversi ulang dengan nilai yang ada
}

function reset() {
    document.getElementById("temperature").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("calculation").textContent = "";
    document.getElementById("detailedExplanation").innerHTML = "";
    document.getElementById("tempExplanation").innerHTML = "";
}
