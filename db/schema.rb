# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160911100544) do

  create_table "bill_books", force: true do |t|
    t.string   "bill_book_no"
    t.string   "bill_no"
    t.string   "bill_amount"
    t.integer  "customer_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "bill_books", ["customer_id"], name: "index_bill_books_on_customer_id", using: :btree

  create_table "billing_details", force: true do |t|
    t.string   "bill_book_no"
    t.string   "bill_slip_no"
    t.integer  "payment_detail_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "bill_amount"
  end

  add_index "billing_details", ["payment_detail_id"], name: "index_billing_details_on_payment_detail_id", using: :btree

  create_table "customers", force: true do |t|
    t.date     "date"
    t.string   "connection_id"
    t.string   "name"
    t.string   "mobile_no"
    t.string   "email"
    t.string   "telephone_no"
    t.date     "date_of_birth"
    t.text     "billing_address"
    t.string   "pin_no"
    t.string   "nationality"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "installation_address"
    t.string   "installation_pin_no"
    t.string   "installation_telephone_no"
    t.string   "installation_mobile_no"
    t.string   "installation_email"
    t.string   "net_plan"
    t.string   "address_proof"
    t.string   "address_proof_type"
    t.string   "identity_proof"
    t.string   "identity_proof_type"
    t.string   "identity_proof_no"
  end

  create_table "net_plans", force: true do |t|
    t.integer  "customer_id"
    t.string   "price"
    t.string   "speed"
    t.string   "bandwidth"
    t.string   "fup"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "net_plans", ["customer_id"], name: "index_net_plans_on_customer_id", using: :btree

  create_table "payment_details", force: true do |t|
    t.integer  "customer_id"
    t.string   "plan_cost"
    t.string   "plan_tax"
    t.string   "monthly_payment_cost"
    t.string   "no_of_months_paid"
    t.string   "installation_charge"
    t.string   "company_material_use"
    t.string   "company_material_cost"
    t.string   "total_amount"
    t.string   "pending_amount"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "payment_details", ["customer_id"], name: "index_payment_details_on_customer_id", using: :btree

  create_table "users", force: true do |t|
    t.boolean  "admin"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
