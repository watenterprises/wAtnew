import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { gsap } from "gsap";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    id: "",
    title: "",
    subtitle: "",
    image: "",
    tags: "",
    summary: "",
    problem: "",
    approach: "",
    result: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetchProjects();

    // Smooth fade-in animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProjects(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: form.title,
      subtitle: form.subtitle,
      image: form.image,
      tags: form.tags.split(",").map((t) => t.trim()),
      summary: form.summary,
      problem: form.problem,
      approach: form.approach,
      result: form.result,
    };

    if (isEditing) {
      await updateDoc(doc(db, "projects", form.id), payload);
      alert("✅ Project updated!");
    } else {
      await addDoc(collection(db, "projects"), payload);
      alert("✅ Project added!");
    }

    setForm({
      id: "",
      title: "",
      subtitle: "",
      image: "",
      tags: "",
      summary: "",
      problem: "",
      approach: "",
      result: "",
    });
    setIsEditing(false);
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({
      id: project.id,
      title: project.title,
      subtitle: project.subtitle,
      image: project.image,
      tags: project.tags.join(", "),
      summary: project.summary,
      problem: project.problem,
      approach: project.approach,
      result: project.result,
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteDoc(doc(db, "projects", id));
      alert("🗑️ Project deleted!");
      fetchProjects();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white px-6 py-10 flex flex-col items-center"
      style={{
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(180deg, #000, #0a0a0a)",
      }}
    >
      {/* Header */}
      <h1 className="text-4xl font-light text-center mb-10">
        {isEditing ? "✏️ Edit Project" : "➕ Add New Project"}
      </h1>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 mb-14 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-lg space-y-4"
      >
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
          required
        />
        <input
          placeholder="Subtitle"
          value={form.subtitle}
          onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
          className="w-full p-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
          required
        />
        <input
          placeholder="Image URL (Paste Cloudinary/Imgur link)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full p-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
          required
        />
        <input
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
          className="w-full p-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
        />
        <textarea
          placeholder="Summary"
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          className="w-full p-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
          rows="2"
        />
        <textarea
          placeholder="Problem"
          value={form.problem}
          onChange={(e) => setForm({ ...form, problem: e.target.value })}
          className="w-full p-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
          rows="2"
        />
        <textarea
          placeholder="Approach"
          value={form.approach}
          onChange={(e) => setForm({ ...form, approach: e.target.value })}
          className="w-full p-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
          rows="2"
        />
        <textarea
          placeholder="Result"
          value={form.result}
          onChange={(e) => setForm({ ...form, result: e.target.value })}
          className="w-full p-3 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition"
          rows="2"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold text-white bg-[#0072b0] hover:scale-[1.03] transition-all duration-200 shadow-xl"
        >
          {isEditing ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* Project List */}
      <div className="w-full max-w-4xl space-y-4">
        <h2 className="text-2xl font-light mb-4 text-center">📂 Existing Projects</h2>
        {projects.map((p) => (
          <div
            key={p.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-5 hover:scale-[1.01] transition-all duration-200 backdrop-blur-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={p.image}
                alt={p.title}
                className="w-16 h-16 object-cover rounded-lg border border-white/10"
              />
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.subtitle}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-3 md:mt-0">
              <button
                onClick={() => handleEdit(p)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
