module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      clientnum: {
        type: Sequelize.INTEGER
      },
      attrition_flag: {
        type: Sequelize.STRING
      },
      customer_age: {
        type: Sequelize.INTEGER
      },
      gender: {
          type: Sequelize.STRING
      },
      dependent_count: {
          type: Sequelize.INTEGER
      },
      education_level: {
          type: Sequelize.STRING
      },
      marital_status: {
          type: Sequelize.STRING
      },
      income_category: {
          type: Sequelize.INTEGER
      },
      card_category: {
          type: Sequelize.STRING
      },
      months_on_book: {
          type: Sequelize.INTEGER
      },
      total_relationship_count: {
          type: Sequelize.INTEGER
      },
      months_inactive_12_mon: {
          type: Sequelize.INTEGER
      },
      contacts_count_12_mon: {
          type: Sequelize.INTEGER
      },
      credit_limit: {
          type: Sequelize.INTEGER
      },
      total_revolving_bal: {
          type: Sequelize.INTEGER
      },
      avg_open_to_buy: {
          type: Sequelize.INTEGER
      },
      total_amt_chng_q4_q1: {
          type: Sequelize.INTEGER
      },
      total_trans_amt: {
          type: Sequelize.INTEGER
      },
      total_trans_ct: {
          type: Sequelize.INTEGER
      },
      total_ct_chng_q4_q1: {
          type: Sequelize.INTEGER
      },
      avg_utiization_ratio: {
          type: Sequelize.INTEGER
      },
      naive_bayes_classifier_attrition_flag_card_category_contacts_1: {
          type: Sequelize.INTEGER
      },
      naive_bayes_classifier_attrition_flag_card_category_contacts_2: {
          type: Sequelize.INTEGER
      }
    });
  
    return Cliente;
  };