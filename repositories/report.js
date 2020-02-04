const entity = require('../models');
const { QueryTypes } = require('sequelize');

module.exports = class ReportRepository {
    constructor() {
        this.entity = entity.Post;
    }

    index() {
        const sql = `
            SELECT account,
                advertising_campaign,
                advertising_group,search_keyword,
                sum(exposure) as sum_exposure,
                sum(click) as sum_click,
                sum(cost) as sum_cost,
                count(1) as counts
            FROM monthly_report_details
            WHERE monthly_report_id = ${1}
            GROUP BY account, advertising_campaign, advertising_group, search_keyword
            ORDER BY account ASC
        `;

        return this.entity.sequelize.query(sql, { type: QueryTypes.SELECT });
    }
}
