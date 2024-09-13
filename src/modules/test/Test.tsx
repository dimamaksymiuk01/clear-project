'use client';

import { usePersonStore } from '@/store';

export const Test = () => {
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);

  return (
    <main>
      <label>
        First name
        <input
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>Hello: {firstName}</p>
    </main>
  );
};
