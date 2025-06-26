export default function Projects() {
  const projectList = [
    {
      title: "🧠 AI-Based Business Helper & Stock Market Analyzer",
      description:
        "An intelligent platform that provides data-driven insights by analyzing market trends, financial performance, and real-time metrics. Built to support strategic decision-making with live data and visual analytics.",
      features: [
        "Market Trend Analysis using AI",
        "Financial Performance Insights",
        "Real-Time Data Monitoring",
        "Interactive Graphs and Visual Reports",
      ],
    },
    {
      title: "🤖 Hybrid AI (Offline & Online)",
      description:
        "A decentralized AI system that integrates multiple models collaboratively, enhances accuracy through adaptive prompting, and works without an internet connection for security-critical applications.",
      features: [
        "Multi-Model Collaboration for Better Responses",
        "Decentralized AI Agents (Privacy-First)",
        "Adaptive Prompt Refinement",
        "Offline & Real-Time Data Processing",
      ],
    },
    {
      title: "🎧 Music Recommendation System (ML-Based)",
      description:
        "A personalized engine that recommends songs based on musical features and user inputs. Designed for high scalability with feature engineering, genre filtering, and PCA for performance.",
      features: [
        "Feature-Based Song Similarity (tempo, loudness, energy, key)",
        "User Input: Song + Artist Based Suggestions",
        "PCA for Dimensionality Reduction",
        "One-Hot Genre Encoding & 8.4GB Dataset Support",
      ],
    },
  ];

  return (
    <section className="min-h-screen px-4 py-12 bg-black text-green-300 font-mono ">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 border-b border-green-500 pb-4">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-[#0b0b0b] border border-green-700 rounded-lg p-6 shadow-md hover:shadow-green-600/30 transition-all"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-2">
              {project.title}
            </h2>
            <p className="text-sm mb-4 text-green-200">{project.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-green-100">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
