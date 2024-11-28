import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);

  const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+[]{}|;:',.<>?/`~",
    similar: "l1IoO0",
  };

  const generatePassword = () => {
    let charPool = "";

    if (includeUppercase) charPool += characters.uppercase;
    if (includeLowercase) charPool += characters.lowercase;
    if (includeNumbers) charPool += characters.numbers;
    if (includeSymbols) charPool += characters.symbols;

    if (excludeSimilar) {
      charPool = charPool
        .split("")
        .filter((char) => !characters.similar.includes(char))
        .join("");
    }

    if (!charPool) {
      setPassword("Select at least one character type!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      generatedPassword += charPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  const getPasswordStrength = () => {
    if (length < 12) return "Weak";
    if (length >= 12 && length < 20) return "Medium";
    if (length >= 20) return "Strong";
  };

  return (
    <div className="text-white bg-black h-full w-full">
      <div className="px-4 py-10 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          Password Generator
        </h1>

        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl">
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              value={password}
              readOnly
              className="bg-gray-700 text-white py-3 px-6 rounded-lg text-lg font-semibold focus:outline-none w-full"
            />
            <button
              onClick={copyToClipboard}
              className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white py-2 px-6 rounded-lg shadow-lg transition ease-in-out"
            >
              Copy Password
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span>Password Length: {length}</span>
            <input
              type="range"
              min="8"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-2/3 bg-gray-700 accent-blue-500 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="form-checkbox text-teal-500 bg-gray-700"
              />
              Include Uppercase Letters
            </label>

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                className="form-checkbox text-teal-500 bg-gray-700"
              />
              Include Lowercase Letters
            </label>

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="form-checkbox text-teal-500 bg-gray-700"
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="form-checkbox text-teal-500 bg-gray-700"
              />
              Include Symbols
            </label>

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={excludeSimilar}
                onChange={() => setExcludeSimilar(!excludeSimilar)}
                className="form-checkbox text-teal-500 bg-gray-700"
              />
              Exclude Similar Characters
            </label>
          </div>

          <div className="flex justify-between items-center">
            <span>Password Strength: {getPasswordStrength()}</span>
            <button
              onClick={generatePassword}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-6 rounded-lg shadow-lg transition ease-in-out"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
