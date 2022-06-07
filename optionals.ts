function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra || ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "extra cheese");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmails(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}
