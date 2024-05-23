import React from 'react';

export default function Ex10() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ex10</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 mb-4 w-full"
          type="text"
          placeholder="Enter username"
        />
        <input
          className="border p-2 mb-4 w-full"
          type="password"
          placeholder="Enter password"
        />

        {/* Radio Buttons */}
        <div className="mb-4">
          <div>
            <input
              type="radio"
              id="radio1"
              name="radio"
              className="mr-2"
            />
            <label htmlFor="radio1" className="mr-4">Radio selection 1</label>
          </div>
          <div>
            <input
              type="radio"
              id="radio2"
              name="radio"
              className="mr-2"
            />
            <label htmlFor="radio2" className="mr-4">Radio selection 2</label>
          </div>
          <div>
            <input
              type="radio"
              id="radio3"
              name="radio"
              className="mr-2"
            />
            <label htmlFor="radio3" className="mr-4">Radio selection 3</label>
          </div>
        </div>

        {/* Dropdown Menu */}
        <select className="bg-purple-500 text-white p-2 mb-4 w-full">
          <option>Dropdown option 1</option>
          <option>Dropdown option 2</option>
        </select>

        {/* Buttons */}
        <div>
          <button
            type="button"
            className="bg-transparent border border-gray-400 text-gray-700 p-2 mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-purple-500 text-white p-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
