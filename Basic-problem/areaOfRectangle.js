const areaOfRectangle = (data) => {
  const { l, w } = data;
  return l * w;
};

console.log(areaOfRectangle({ l: 20, w: 25 }));
