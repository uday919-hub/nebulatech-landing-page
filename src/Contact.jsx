const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form action="YOUR_FORM_LINK" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Name"
            className="w-full p-3 bg-zinc-900 rounded" />

          <input type="email" name="email" placeholder="Email"
            className="w-full p-3 bg-zinc-900 rounded" />

          <textarea name="message" placeholder="Message"
            className="w-full p-3 bg-zinc-900 rounded" />

          <button className="bg-white text-black px-6 py-3 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
