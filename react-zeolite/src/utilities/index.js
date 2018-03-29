//export const notFalsy = value => value != false;

const uniqueArray = array => {
  return array.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
};

const partition = (style, inlineStyles, classNames) => {
  if (!style) {
    return;
  }

  if (style instanceof Array) {
    style.forEach(style => {
      partition(style, inlineStyles, classNames);
    });
  } else if (typeof style === 'object')
    inlineStyles.push(style);
  else if (typeof style === 'string')
    classNames.push(style);
};

export const extractStyles = style => {
  var inlineStyles = [];
  var classNames = [];

  partition(style, inlineStyles, classNames);

  return {
    inlineStyle: Object.assign({}, ...inlineStyles),
    className: uniqueArray(classNames).join(' ')
  };
};
