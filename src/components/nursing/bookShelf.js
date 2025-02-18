import { motion } from "framer-motion";
import { useState } from "react";

const books = [
  { color: "red", text: "Book 1" },
  { color: "blue", text: "Book 2" },
  { color: "green", text: "Book 3" },
  { color: "orange", text: "Book 4" },
  { color: "purple", text: "Book 5" }
];

const BookShelf = () => {
  const [activeBook, setActiveBook] = useState(0);
  return (
    <div className="flex gap-4 p-4 justify-start">
      {books.map((book, index) => (
        <motion.div
          key={index}
          className="w-24 h-32 flex items-center justify-center text-white font-bold rounded-lg cursor-pointer"
          style={{ backgroundColor: book.color }}
          initial={{ width: 60 }}
          animate={{ width: activeBook === index ? 120 : 60, scale: activeBook === index ? 1.2 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveBook(index)}
        >
          {activeBook === index ? book.text : ""}
        </motion.div>
      ))}
    </div>
  );
}

export default BookShelf