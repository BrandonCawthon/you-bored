window.addEventListener('DOMContentLoaded', () => {
    let type = "";
    let participants = "";

    document.getElementById('type').addEventListener('change', () => {
        type = document.getElementById('type').value;
    });

    document.getElementById('participants').addEventListener('change', () => {
        participants = document.getElementById('participants').value;
    });

    document.getElementById("refresh").addEventListener('click', () => {
        const result = document.getElementById("result");
        const url = `https://www.boredapi.com/api/activity?type=${type}&participants=${participants}`;

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                result.innerHTML = `
                    <h2>Activity: ${data.activity}</h2>
                    <h4>Type: ${data.type}</h4>
                    <h4>Participants: ${data.participants}</h4>
                `;
            });
    });
});


