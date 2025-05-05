let users = [];

export async function GET() {
  return Response.json(users);
}

export async function POST(req) {
  const newUser = await req.json();
  users.push({ id: users.length + 1, ...newUser });
  return Response.json(newUser);
}

export async function PUT(req) {
  const { id, ...updatedData } = await req.json();
  users = users.map((user) =>
    user.id === id ? { ...user, ...updatedData } : user
  );
  return Response.json({ message: "User updated" });
}

export async function DELETE(req) {
  const { id } = await req.json();
  users = users.filter((user) => user.id !== id);
  return Response.json({ message: "User deleted" });
}
