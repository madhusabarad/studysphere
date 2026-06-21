const data = [

    // NOTES
    { type: "Notes", subject: "Java", title: "Java Unit 1", link: "notes/java/unit1.pdf" },
    { type: "Notes", subject: "DBMS", title: "DBMS Unit 2", link: "notes/dbms/unit2.pdf" },

    // PYQS
    { type: "PYQ", subject: "Java", title: "Java 2022", link: "pyqs/java/2022.pdf" },
    { type: "PYQ", subject: "DBMS", title: "DBMS 2023", link: "pyqs/dbms/2023.pdf" }

];

const input = document.getElementById("searchInput");

if (input) {
    input.addEventListener("keyup", function () {

        const value = input.value.toLowerCase();

        let resultBox = document.getElementById("results");

        if (!resultBox) {
            resultBox = document.createElement("div");
            resultBox.id = "results";
            document.body.appendChild(resultBox);
        }

        resultBox.innerHTML = "";

        if (value === "") {
            resultBox.style.display = "none";
            return;
        }

        const results = data.filter(item =>
            item.title.toLowerCase().includes(value) ||
            item.subject.toLowerCase().includes(value) ||
            item.type.toLowerCase().includes(value)
        );

        resultBox.style.display = "block";

        if (results.length === 0) {
            resultBox.innerHTML = "<p>No results found</p>";
            return;
        }

        results.forEach(item => {
            const div = document.createElement("div");

            div.innerHTML = `
                <p><strong>${item.type}</strong> - ${item.title}</p>
                <a href="${item.link}" target="_blank">Open</a>
            `;

            resultBox.appendChild(div);
        });
    });
}