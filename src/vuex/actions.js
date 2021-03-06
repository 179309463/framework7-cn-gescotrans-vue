// actions.js
import {
    SET_USER_NAME,
    SET_USER_PASS,
    SET_USER_CODE,
    SET_USER_ROLE,
    SET_LOAD_STATES,
    SET_SCHEDULE,
    SET_CUSTOMERS_LIST,
    SET_SERVICES_LIST,
    SET_SUPPLIERS_LIST,
    SET_CUSTOMER,
    SET_SERVICE,
    SET_SUPPLIER,
    SET_CARGO_NOTE_DATE,
    SET_LICENSE_PLATES_LIST,
    SET_LICENSE_PLATE,
    SET_DRIVERS_LIST,
    SET_DRIVER,
} from './mutations';

export default {
    setUserName({commit}, userName) {
        commit(SET_USER_NAME, userName);
    },
    setUserPass({commit}, userPass) {
        commit(SET_USER_PASS, userPass);
    },
    setUserCode({commit}, userCode) {
        commit(SET_USER_CODE, userCode);
    },
    setUserRole({commit}, userRole) {
        commit(SET_USER_ROLE, userRole);
    },
    setLoadStates({commit}, loadStates) {
        commit(SET_LOAD_STATES, loadStates);
    },
    setSchedule({commit}, data) {
        commit(SET_SCHEDULE, data);
    },
    setCustomersList({commit}, customersList) {
        commit(SET_CUSTOMERS_LIST, customersList);
    },
    setServicesList({commit}, servicesList) {
        commit(SET_SERVICES_LIST, servicesList);
    },
    setSuppliersList({commit}, suppliersList) {
        commit(SET_SUPPLIERS_LIST, suppliersList);
    },
    setCustomer({commit}, customer) {
        commit(SET_CUSTOMER, customer);
    },
    setService({commit}, service) {
        commit(SET_SERVICE, service);
    },
    setSupplier({commit}, supplier) {
        commit(SET_SUPPLIER, supplier);
    },
    setCargoNoteDate({commit}, cargo_note_date) {
        commit(SET_CARGO_NOTE_DATE, cargo_note_date);
    },
    setLicensePlatesList({commit}, license_plates_list) {
        commit(SET_LICENSE_PLATES_LIST, license_plates_list);
    },
    setLicensePlate({commit}, license_plate) {
        commit(SET_LICENSE_PLATE, license_plate);
    },
    setDriversList({commit}, drivers_list) {
        commit(SET_DRIVERS_LIST, drivers_list);
    },
    setDriver({commit}, driver) {
        commit(SET_DRIVER, driver);
    },
};
