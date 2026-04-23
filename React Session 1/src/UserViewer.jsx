import { useState, useEffect } from "react";

function UserViewer() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setUser(null); 

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (!cancelled) setUser(data);
      });

    return () => {
      cancelled = true; 
    };
  }, [userId]); 

  return (
    <div>
      <h2>Exercise 3 - useEffect Dependency</h2>

      <div>
        {[1, 2, 3, 4, 5].map(id => (
          <button
            key={id}
            onClick={() => setUserId(id)}
          >
            User {id}
          </button>
        ))}
      </div>

      <br />

      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserViewer;