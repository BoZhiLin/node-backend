'use strict';
module.exports = (sequelize, DataTypes) => {
  const MonthlyReportDetail = sequelize.define('monthly_report_details', {
    monthly_report_id: DataTypes.INTEGER,
    account: DataTypes.STRING,
    advertising_campaign: DataTypes.STRING,
    advertising_group: DataTypes.STRING,
    search_keyword: DataTypes.STRING,
    exposure: DataTypes.INTEGER,
    click: DataTypes.INTEGER,
    ctr: DataTypes.DOUBLE,
    average_cost_click: DataTypes.DOUBLE,
    cost: DataTypes.DOUBLE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  MonthlyReportDetail.associate = function(models) {
    // associations can be defined here
  };
  MonthlyReportDetail.prototype.useInstance = function () {
    console.log('This is for new instance way');
  };
  MonthlyReportDetail.useStatic = function () {
    console.log('This is for static way');
  }
  return MonthlyReportDetail;
};