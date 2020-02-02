'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  Post.prototype.useInstance = function () {
    console.log('This is for new instance way');
  };
  Post.useStatic = function () {
    console.log('This is for static way');
  }
  return Post;
};