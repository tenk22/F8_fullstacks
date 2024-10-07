const menu = [
  { id: 1, name: "Home", parentId: 0 },
  { id: 2, name: "About", parentId: 0 },
  { id: 3, name: "News", parentId: 0 },
  { id: 4, name: "Products", parentId: 0 },
  { id: 5, name: "Contact", parentId: 0 },
  { id: 6, name: "T-Shirt", parentId: 4 },
  { id: 7, name: "Jean", parentId: 4 },
  { id: 8, name: "Skirt", parentId: 4 },
];
function createMenu(menuData) {
  const ul = document.createElement("ul");
  ul.id = "main-menu";
  const mainMenus = menuData.filter((item) => item.parentId === 0);
  mainMenus.forEach((mainMenu) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = mainMenu.name;
    a.style.fontSize = "24px";
    li.appendChild(a);
    const subMenus = menuData.filter((item) => item.parentId === mainMenu.id);
    if (subMenus.length > 0) {
      const subUl = document.createElement("ul");
      subMenus.forEach((subMenu) => {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = "#";
        subA.textContent = subMenu.name;
        subA.style.fontSize = "20px";
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });
      li.appendChild(subUl);
    }
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}
createMenu(menu);
