import PropTypes from 'prop-types';

import { isObject } from 'lodash';

import {
    FAIL,
    LOADING,
    PROCESSING,
    SUCCESS,
} from './constants';


export const STATUS_DEFAULT = {
    loading: false,
    processing: false,
    success: false,
    fail: false,
};

export const STATUS = {
    LOADING: {
        ...STATUS_DEFAULT,
        loading: true,
    },
    PROCESSING: {
        ...STATUS_DEFAULT,
        processing: true,
    },
    SUCCESS: {
        ...STATUS_DEFAULT,
        success: true,
    },
    FAIL: {
        ...STATUS_DEFAULT,
        fail: true,
    },
    DEFAULT: STATUS_DEFAULT,
};

export const getStatus = (statusConstant) => {
    if (isObject(statusConstant)) {
        return statusConstant;
    }

    switch (statusConstant) {
        case LOADING:
            return STATUS.LOADING;

        case PROCESSING:
            return STATUS.PROCESSING;

        case SUCCESS:
            return STATUS.SUCCESS;

        case FAIL:
            return STATUS.FAIL;

        default:
            return STATUS_DEFAULT;
    }
};

export const StatusShape = PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    processing: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    fail: PropTypes.bool.isRequired,
});

export default STATUS_DEFAULT;
