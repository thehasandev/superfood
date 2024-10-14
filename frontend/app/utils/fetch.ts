const base_url = `https://backend-bay-kappa-25.vercel.app/api/v1`;

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
