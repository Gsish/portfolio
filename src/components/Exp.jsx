export default function Expertise() {
  return (
    <section className="bg-black text-green-300 px-4 py-10 font-mono">
      <h2 className="text-3xl font-bold border-b border-green-500 mb-10 text-center">Areas of Expertise</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Languages",
            items: ["Golang", "Python", "C++", "Java"],
          },
          {
            title: "Frameworks",
            items: ["Django", "FastAPI", "Gin"],
          },
          {
            title: "Tools",
            items: ["Postman", "Cursor"],
          },
          {
            title: "GenAI",
            items: ["LangChain", "OpenAI", "Mistral", "Gemini"],
          },
          {
            title: "Deployment",
            items: ["AWS", "Nginx", "Docker", "Vercel", "Render"],
          },
          {
            title: "Databases",
            items: ["MongoDB"],
          },
        ].map((section) => (
          <div
            key={section.title}
            className="bg-[#0a0a0a] border border-green-700 p-4 rounded-lg hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-green-400 text-lg mb-2">{section.title}</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
