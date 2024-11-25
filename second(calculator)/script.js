// ვიღებთ ყველა ღილაკს button კლასით და display ელემენტს
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

// ვუმატებთ click event-ს თითოეულ ღილაკს
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // თუ დავაჭირეთ AC ღილაკს - ეკრანს ვანულებთ
        if (this.textContent === "AC") {
            display.textContent = "0";
        } 
        // DEL ღილაკზე დაჭერისას ვშლით ბოლო სიმბოლოს
        else if (this.textContent === "DEL") {
            if (display.textContent.length > 1) {
                display.textContent = display.textContent.slice(0, -1);
            } else {
                display.textContent = "0";
            }
        } 
        // = ღილაკზე დაჭერისას ვითვლით შედეგს
        else if (this.textContent === "=") {
            try {
                // ვცვლით × და ÷ სიმბოლოებს * და / -ით რომ eval-მა გაიგოს
                const expression = display.textContent
                    .replaceAll("×", "*")
                    .replaceAll("÷", "/");
                display.textContent = eval(expression);
            } catch {
                // თუ გამოთვლისას მოხდა error, ვაჩვენებთ შეტყობინებას
                display.textContent = "Error";
            }
        } 
        // თუ ეკრანზე მხოლოდ 0-ია, ვცვლით ახალი რიცხვით
        else if (display.textContent === "0") {
            display.textContent = this.textContent;
        } 
        // სხვა შემთხვევაში ვამატებთ ახალ სიმბოლოს
        else {
            display.textContent += this.textContent;
        }
    });
});