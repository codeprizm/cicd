module.exports = {
  name: 'ngdemo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngdemo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
