async function Main() {
  const vaiCorinthians = document.getElementsByClassName("vaiCorinthians")[0];
  const vaiCorinthiansis = document.getElementsByClassName(
    "vaiCorinthiansis"
  )[0];
  const url = await fetch("/api");
  const api = await url.json();

  url.status == 200 && Object.keys(api).length
    ? (vaiCorinthiansis.textContent = api.vaiCorinthians)
    : (vaiCorinthians.textContent = "Estamos atravessando um momento difícil.");
}

Main().catch((err) => {
  console.log(err);
  document.getElementsByClassName("vaiCorinthians")[0].textContent =
    "Estamos atravessando um momento difícil.";
});
