document.getElementById('fetch-btn').addEventListener('click', async () => {
  const res = await fetch('/api/hello');
  const data = await res.json();
  document.getElementById('response-text').textContent = data.message;
});
