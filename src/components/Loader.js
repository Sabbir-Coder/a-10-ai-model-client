export const updateModelLoader = async ({ params }) => {
  const token = localStorage.getItem("accessToken"); // or from context
  const res = await fetch(`http://localhost:3000/models/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Response("Unauthorized", { status: res.status });
  }

  return res.json();
};