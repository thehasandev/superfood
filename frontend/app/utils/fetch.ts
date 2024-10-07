const base_url = `http://localhost:8000/api/v1`;

export async function getData(url: string) {
  try {
    const res = await fetch(`${base_url}/${url}`);
    if (!res.ok) throw new Error("Could not get data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
