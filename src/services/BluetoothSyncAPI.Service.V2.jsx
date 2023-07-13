export function fetchContacts() {
  const url = "https://randomuser.me/api/?results=1000";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => {
      throw new Error("Failed to sync data");
    });
}
