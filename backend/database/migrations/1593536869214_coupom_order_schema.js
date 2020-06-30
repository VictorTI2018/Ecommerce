'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoupomOrderSchema extends Schema {
  up () {
    this.create('coupom_order', (table) => {
      table.increments()
      table.integer('coupom_id').unsigned()
      table.integer('order_id').unsigned()
      table.decimal('discount', 12, 2).defaultTo(0.0)
      table.timestamps()
      table.foreign('coupom_id').references('id').inTable('coupoms').onDelete('CASCADE')
      table.foreign('order_id').references('id').inTable('orders').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('coupom_order')
  }
}

module.exports = CoupomOrderSchema
