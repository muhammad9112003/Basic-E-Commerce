import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact mt-5" id="contact">
        <div class="container p-4  fs-4 ">
          <div class="card p-4 rounded form text-center mx-auto">
            <h2 class="text-center mb-1">Give us your opinion freely</h2>
            <hr className=" mx-auto" />
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  full name
                </label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="name"
                  placeholder=" full name in native alphabet"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="age" class="form-label">
                  age
                </label>
                <input
                  type="number"
                  class="form-control shadow-none"
                  id="age"
                  placeholder=" enter your age"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">
                  phone
                </label>
                <input
                  type="tel"
                  class="form-control shadow-none"
                  id="phone"
                  placeholder=" enter phone number"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">
                  email
                </label>
                <input
                  type="email"
                  class="form-control shadow-none"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="feedback" class="form-label">
                  your opinion
                </label>
                <textarea
                  class="form-control shadow-none border-1"
                  id="feedback"
                  rows="4"
                  placeholder="Share your opinion with us"
                  required
                ></textarea>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-dark w-25 fs-5 fw-bolder  text-danger"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
