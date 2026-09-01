async function predictPrice() {


const areaInput = document.getElementById("area");
const result = document.getElementById("result");

const area = areaInput.value;

if (area === "") {
    result.innerText = "Please enter the house area.";
    return;
}

result.innerText = "Predicting...";

try {

    const response = await fetch(
        "https://ml-models-api-arkn.onrender.com/predict",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                area: Number(area)
            })
        }
    );

    const data = await response.json();

    result.innerText =
        "Predicted Price: ₹" +
        Math.round(data.predicted_price);

} catch (error) {

    result.innerText =
        "Error: Could not connect to the ML server.";

    console.error(error);
}


}
