function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun();

let mondayWork = function(activity = "go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(par1 = "*"){
  return function (par2 = "a hard worker"){
    return `You are ${par1}${par2}${par1}!`
  }
}

wrapAdjective("||")("a dedicated programmer");