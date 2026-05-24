

const convertButton =
    document.getElementById("convertButton");

if(convertButton) {

    convertButton.addEventListener("click", () => {

        const points =
            document.getElementById("pointsInput").value;

        const result =
            document.getElementById("result");

        if(points === "" || points <= 0) {

            result.innerHTML =
                "Digite uma quantidade válida.";

            return;
        }

        const credits = points / 100;

        result.innerHTML =
            `Você possui R$ ${credits.toFixed(2)} em créditos.`;

    });

}