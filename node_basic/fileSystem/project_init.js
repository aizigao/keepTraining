/**
 * 来源
 * https://ke.qq.com/course/185893?taid=1129322995963429
 */
const fs = require('fs');

const projectData = {
  name: 'testProj',
  fileData: [
    {
      name: 'css',
      type: 'dir',
    },
    {
      name: 'js',
      type: 'dir',
    },
    {
      name: 'img',
      type: 'dir',
    },
    {
      name: 'index.html',
      type: 'file',
      context: '<html></html>',
    },
  ],
};

if (projectData.name) {
  fs.mkdirSync(projectData.name);
  const { fileData } = projectData;

  if (fileData && fileData.length) {
    fileData.forEach((f) => {
      const path = `${projectData.name}/${f.name}`;
      switch (f.type) {
        case 'dir':
          fs.mkdirSync(path);
          break;
        case 'file':
          fs.writeFileSync(path, f.context || '');
          break;
        default:
      }
    });
  }
}
