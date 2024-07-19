const OTPRegulator = () => {
    const OTPInputs = document.querySelectorAll(".otp-wrapper input");

    OTPInputs.forEach(current => {
        current.addEventListener("click", () => {
            current.focus();
        });
        
        current.addEventListener("input", event => {
            if (event.target.value.length === 1) {
                const nextInput = event.target.nextElementSibling;

                if (nextInput) {
                    nextInput.focus();
                }
            }

            if (event.target.value.length > 1) {
                event.target.value = event.target.value.slice(0, 1);
            }
        });

        current.addEventListener("keydown", event => {
            if (event.key === "Backspace" && event.target.value.length === 0) {
                const previousInput = event.target.previousElementSibling;

                if (previousInput) {
                    previousInput.focus();
                }
            }
        });
    });
};

export default OTPRegulator;