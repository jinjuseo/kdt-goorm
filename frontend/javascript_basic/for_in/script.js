const user = {
  name: "Han",
  province: "경기도",
  city: "성남시",
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
