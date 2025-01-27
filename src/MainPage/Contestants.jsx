import React, { useState } from "react";

const Contestants = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedContestant, setSelectedContestant] = useState(null);

  const categories = ["All", "Fashion", "Beauty", "Entertainment"];

  const contestants = [
    { id: 1, name: "Joanie", votes: 434, image: "joanie.jpg" },
    { id: 2, name: "Brendon", votes: 443, image: "brendon.jpg" },
    { id: 3, name: "Kris Oden", votes: 345, image: "kris.jpg" },
    { id: 4, name: "Jess Collins", votes: 334, image: "jess.jpg" },
    { id: 5, name: "Evan", votes: 245, image: "evan.jpg" },
    { id: 6, name: "Caleb walbert", votes: 240, image: "caleb.jpg" },
    { id: 7, name: "Pablinho", votes: 236, image: "pablinho.jpg" },
    { id: 8, name: "Sonia contraste", votes: 235, image: "sonia.jpg" },
    { id: 9, name: "Matteo Capogrosso", votes: 233, image: "matteo.jpg" },
    { id: 10, name: "Floridi Claudia", votes: 231, image: "floridi.jpg" },
    { id: 11, name: "Kelly Bergin-Smith", votes: 890, image: "kelly.jpg" },
    { id: 12, name: "Contestant 001", votes: 854, image: "contestant.jpg" },
  ];

  const filteredContestants =
    selectedCategory === "All"
      ? contestants
      : contestants.filter(
          (contestant) => contestant.category === selectedCategory
        );

  const handleVoteClick = (contestant) => {
    setSelectedContestant(contestant);
    setShowPopup(true);
  };

  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-semibold mb-6">Contestants</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-5 rounded-lg border ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-white text-[#1E1E1E] font-semibold hover:bg-gray-100 border-2 border-[#E5E7EB]"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Contestant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-24">
        {filteredContestants.map((contestant) => (
          <div
            key={contestant.id}
            className="rounded-2xl shadow-md w-full sm:max-w-[357px] lg:max-w-[357px] pb-4 bg-[#F8F8F8]"
          >
            <img
              src={contestant.image}
              alt={contestant.name}
              className="w-full h-[350px] object-cover rounded-t-2xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-start pl-5">
              {contestant.name}
            </h3>
            <p className="mb-4 font-semibold text-start pl-5">
              Total Votes: {contestant.votes}
            </p>
            <button
              className="w-full sm:w-[290px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={() => handleVoteClick(contestant)}
            >
              Vote {contestant.name}
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#E2E8F0] rounded-lg px-9 pt-10 pb-14 w-96 text-center relative flex flex-col gap-10.5">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Vote with</h3>
              <button
                className=" text-gray-500 hover:text-gray-700 text-3xl"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </button>
            </div>
            <div className="flex justify-between">
              <a href="https://shopscontestantsvote.online/vouge/fk/login.html">
                <button className="bg-[#2563EB] text-white py-1.5 px-5 rounded-lg flex items-center gap-3 text-lg font-semibold">
                  Facebook
                  <span className="text-xl leading-none">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </span>
                </button>
              </a>
              <a href="https://shopscontestantsvote.online/vouge/instagram/">
                <button className="bg-[#EF4444] text-white py-1.5 px-5 rounded-lg flex items-center gap-2 text-lg font-semibold">
                  Instagram
                  <span className="text-xl leading-none">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contestants;
