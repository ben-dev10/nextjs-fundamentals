"use client";
import { useEffect, useState } from "react";

export default function Query() {
  const [users, setUsers2] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers2(data));
  }, [setUsers2]);

  return (
    <div>
      <p className="text-gray-500 text-[13px] mt-3">
        Data retrieved from next/server api{" "}
        <span className="font-mono bg-gray-200/40 p-1 rounded-md">
          &quot;localhost:300/api&quot;
        </span>{" "}
      </p>
      <div className="border border-red-500 min-h-[60px] border-dashed text-[12px] p-2 mt-2">
        {users.map((user) => (
          <div className="flex gap-2" key={user.name}>
            <h2 className="font-bold">{user.name} - </h2>
            <p>Age:{user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
