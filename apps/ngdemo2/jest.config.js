module.exports = {
  name: 'ngdemo2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngdemo2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
