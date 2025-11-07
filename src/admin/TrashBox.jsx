import { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";
import { differenceInDays } from "date-fns";
import { gsap } from "gsap";

export default function TrashBox() {
  const [trash, setTrash] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetchTrash();

    // Smooth fade-in animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const fetchTrash = async () => {
    const q = query(collection(db, "projects"), where("deleted", "==", true));
    const snapshot = await getDocs(q);
    const list = snapshot.docs
      .map((d) => ({ id: d.id, ...d.data() }))
      .filter((p) => {
        if (!p.deletedAt) return false;
        const days = differenceInDays(new Date(), p.deletedAt.toDate());
        return days <= 30; // Show only projects deleted within last 30 days
      });
    setTrash(list);
  };

  const handleRestore = async (id) => {
    await updateDoc(doc(db, "projects", id), {
      deleted: false,
      deletedAt: null
    });
    alert("✅ Project restored successfully!");
    setTrash(trash.filter((p) => p.id !== id));
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
        🗑️ Trash (Last 30 Days)
      </h1>

      {/* Trash List */}
      <div className="w-full max-w-4xl space-y-4">
        {trash.length === 0 ? (
          <p className="text-center text-gray-400">No deleted projects found.</p>
        ) : (
          trash.map((p) => (
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
                  {p.deletedAt && (
                    <p className="text-xs text-gray-500 mt-1">
                      Deleted on: {p.deletedAt.toDate().toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-2 mt-3 md:mt-0">
                <button
                  onClick={() => handleRestore(p.id)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
                >
                  Restore
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
