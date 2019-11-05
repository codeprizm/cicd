module.exports = {
  name: 'lib3',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lib3',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
