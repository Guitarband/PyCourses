import "../styles/contact.css";
import Footer from "../components/Footer.jsx";

const Contact = () => {
    const SubmitContact = async (event) => {
        event.preventDefault();

        // Get the form element and the current datetime
        const form = event.target;
        const currentDate = new Date();
        const options = { timeZoneName: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', month: 'numeric', day: 'numeric' };
        const timeString = currentDate.toLocaleString('en-US', options);

        try {
            // Send a post request to an Azure Function that sends an email to the user
            const response = await fetch("https://contactformreceiver.azurewebsites.net/api/sendEmail?", {
                method: 'POST',
                body: JSON.stringify({
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value,
                    time: timeString,
                }),
            });

            // If the response is ok, alert the user that the message was sent successfully
            if (response.ok) {
                console.log("Success:", response);
                const result = await response.json();
                alert("Message sent successfully!");
                console.log("Success:", result);
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }


    }

    return (
      <>
          <section className={"contact"}>
              <div id={"contactForm"}>
                  <h2>Contact us via this form</h2>
                  <form onSubmit={SubmitContact} method={'POST'}>
                      <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" name="name" placeholder={"FirstName LastName"} required/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" name="email" placeholder={"firstname@gmail.com"} required/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea id="message" name="message" rows="4"
                                    placeholder={"I wanted to reach out in regards to..."} required></textarea>
                      </div>
                      <div className="form-group">
                          <button type="submit">Send Message</button>
                      </div>
                  </form>
              </div>
              <div className="divider"></div>
              <div className={"socials"}>
                  <h2>Or reach out to us directly!</h2>
                  <p>Email us at: <b>helpdesk.pycourses@gmail.com</b></p>
              </div>
          </section>
          <Footer />
      </>
    )
}

export default Contact;