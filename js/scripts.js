document.addEventListener("DOMContentLoaded", function () {
    const joinForm = document.getElementById("join-form");

    if (!joinForm) {
        return;
    }

    joinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const entries = [];

        function valueOrFallback(value) {
            if (value === null || value === undefined) {
                return "Not provided";
            }

            const trimmed = String(value).trim();
            return trimmed === "" ? "Not provided" : trimmed;
        }

        function addEntry(label, value) {
            entries.push({
                label: label,
                value: valueOrFallback(value)
            });
        }

        function byId(id) {
            const element = document.getElementById(id);
            return element ? element.value : "";
        }

        addEntry("First Name", byId("first-name"));
        addEntry("Last Name", byId("last-name"));
        addEntry("Email", byId("email"));
        addEntry("Phone Number", byId("phone"));
        addEntry("Age", byId("age"));
        addEntry("Planned Weekly Gym Visits", byId("weekly-visits"));

        
    });
});