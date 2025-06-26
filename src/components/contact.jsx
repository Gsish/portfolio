export default function Contact() {
  return (
    <section id="contact" className="text-green-300 font-mono text-center pt-20 px-4 pl-30">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Email:</span>{' '}
          <a href="mailto:sonawaneniranja28@gmail.com" className="hover:text-green-500">
            sonawaneniranja28@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold">Phone:</span>{' '}
          <a href="tel:+919075554643" className="hover:text-green-500">
            +91-9075554643
          </a>
        </p>

        <p>
          <span className="font-semibold">GitHub:</span>{' '}
          <a href="https://github.com/Gsish" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 underline">
            github.com/Gsish
          </a>
        </p>

        <p>
          <span className="font-semibold">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/niranjan-sonawane-59079728a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 underline"
          >
            niranjan-sonawane
          </a>
        </p>
      </div>
    </section>
  );
}
