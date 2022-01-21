const huiswerkMaken = (vak, callback) => {
  console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken.`);
  document.getElementById(
    "para1"
  ).innerHTML = `Ok, ok, ik ga nu mijn ${vak} huiswerk maken.`;
  callback();
};

const klaarMetHuiswerk = () => {
  setTimeout(() => {
    console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk.`);
    document.getElementById(
      "para2"
    ).innerHTML = `Kijk Paps/Mams, ik ben klaar met mijn huiswerk.`;
  }, 5000);
};

huiswerkMaken("Wiskunde", klaarMetHuiswerk);
