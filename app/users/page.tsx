interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <table className="ts acc ach">
        <thead>
          <tr>
            <th className="p-2 border bg-orange-300">Name</th>
            <th className="p-2 border bg-orange-200">Email</th>
            <th className="p-2 border bg-orange-100">Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
