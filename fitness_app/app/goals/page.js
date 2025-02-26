'use client';

import {
  useEffect,
  useState,
} from 'react';

export default function Goals() {
  const [form, setForm] = useState({ goalName: '', targetValue: '' });
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch goals when the component mounts
  useEffect(() => {
    const fetchGoals = async () => {
      setLoading(true);
      const userId = localStorage.getItem('userId'); // Ensure you're fetching userId
      if (!userId) {
        console.error('No userId found in localStorage');
        return;
      }

      try {
        const res = await fetch(`/api/goals?userId=${userId}`);
        if (!res.ok) throw new Error('Failed to fetch goals');
        const data = await res.json();
        setGoals(data);
      } catch (error) {
        console.error('Error fetching goals:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGoals();
  }, []);

  // Handle form submission to add a new goal
  const addGoal = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    console.log('userId before submit:', userId);

    if (!userId) {
      console.log('No userId found in localStorage');
      return; // Prevent submission if no userId
    }

    try {
      const res = await fetch('/api/goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId, // Pass userId here
          ...form,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to add goal');
      }

      const data = await res.json();
      console.log('Goal created:', data); // Log the created goal

      // Update goals state to show newly created goal
      setGoals((prevGoals) => [...prevGoals, data]);
      setForm({ goalName: '', targetValue: '' });
    } catch (error) {
      console.log('Error adding goal:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Set Fitness Goals</h1>

      {/* Goal form */}
      <form onSubmit={addGoal} className="bg-white p-4 rounded shadow mb-6">
        <input
          type="text"
          placeholder="Goal Name"
          value={form.goalName}
          onChange={(e) => setForm({ ...form, goalName: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Target Value"
          value={form.targetValue}
          onChange={(e) => setForm({ ...form, targetValue: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded w-full"
        >
          Set Goal
        </button>
      </form>

      {/* Goals list */}
      <div>
        <h2 className="text-xl font-bold mb-2">Your Goals</h2>
        {loading ? (
          <p>Loading goals...</p>
        ) : (
          <ul className="list-disc pl-4">
            {goals.map((goal, index) => (
              <li key={index} className="mb-2">
                {goal.goalName}: {goal.currentValue}/{goal.targetValue}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
