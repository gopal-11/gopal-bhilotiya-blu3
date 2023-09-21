// backend/controllers/NumberController.js

let numbers = [];

// @desc Get all elements of numbers array
// @route GET /api/numbers
const getAllNumbers = (req, res) => {
  try {
    res.json({ outputArray: numbers });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// @desc add element to numbers array
// @route POST /api/numbers
const addNumber = (req, res) => {
  try {
    const { value } = req.body;
    let result = parseInt(value);

    // Logic to find wether number is divisible by 3, 5 or 15
    const modThree = result % 3 === 0;
    const modFive = result % 5 === 0;
    if (modThree && modFive) {
      result = 'fizzBuzz';
    } else {
      if (modThree) result = 'fizz';
      if (modFive) result = 'Buzz';
    }

    numbers.push(result);

    res.json({ outputArray: numbers, value });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllNumbers, addNumber };
