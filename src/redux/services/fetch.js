export default async (action) => {
    const res = await fetch(action.url)
    if (res.status === 200) {
        return res.json()
    }
    throw new Error(`Error while fetching ${action.url} with HTTP ${res.status}`)
}