import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';
import isAlpha from 'validator/lib/isAlpha';

// const checkContactNumber = (num) => {
//   return num.length === 0 || /^[6-9]\d{9}$/.test(num)
//     ? ''
//     : 'Invalid phone number';
// };

const checkName = (name) => {
  return isAlpha(name, ['en-US'], { ignore: ' ' })
    ? ''
    : 'Name should contain aphabets and spaces only';
};

export const validator = (details, requiredFields) => {
  let errorObj = {};

  requiredFields.map((field) => {
    // Name should contain only alphabets
    if (field === 'verifierName' || field === 'businessContactName') {
      errorObj[field] = details[field]
        ? checkName(details[field])
        : 'Field is required';
    }

    // email is correct or not
    else if (field === 'email' && !isEmail(details[field])) {
      errorObj[field] = details[field] ? 'Invalid email' : 'Field is required';
    }

    // Password is correct or not
    // else if (field === 'newPassword' || field === 'confirmPassword') {
    //   errorObj[field] = details[field]
    //     ? /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(
    //         details[field]
    //       )
    //       ? ''
    //       : 'Minimum 6 characters. Password must have 1 uppercase and 1 special character.'
    //     : 'Field is required';
    // }

    // // Password is correct or not
    // else if (field === 'password') {
    //   errorObj[field] = details[field]
    //     ? /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(
    //         details[field]
    //       )
    //       ? ''
    //       : 'Invalid password'
    //     : 'Field is required';
    // }

    // PinCode is correct or not
    else if (field === 'pincode') {
      if (!isNumeric(details[field], { no_symbols: true })) {
        errorObj[field] = details[field]
          ? 'Invalid Pin Code'
          : 'Field is required';
      } else {
        errorObj[field] = /^\d{4}$|^\d{6}$/.test(details[field])
          ? ''
          : 'Invalid pin code';
      }
    }
    // else if (field === 'phoneNumber') {
    //   errorObj[field] =
    //     details[field] !== ''
    //       ? checkContactNumber(details.phoneNumber)
    //       : 'Field is required';
    // }
    else if (field === 'panNumber') {
      errorObj[field] =
        details[field] !== ''
          ? /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(details[field])
            ? ''
            : 'Invalid pan number'
          : 'Field is required';
    } else {
      errorObj[field] = details[field] ? '' : 'Field is required';
    }

    return errorObj;
  });

  // since below fields are not required so we have check them separately only when they are available

  // if (details?.phoneNumber) {
  //   errorObj.phoneNumber = checkContactNumber(details.phoneNumber);
  // }

  if (details?.email) {
    errorObj.email = isEmail(details.email) ? '' : 'Invalid email';
  }

  if (details?.pincode) {
    errorObj.pincode = /^\d{4}$|^\d{6}$/.test(details.pincode)
      ? ''
      : 'Invalid pin code';
  }

  if (details?.panNumber) {
    errorObj.panNumber =
      (details?.panNumber && details?.panNumber?.length === 0) ||
      /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(details.panNumber)
        ? ''
        : 'Invalid pan number';
  } else {
    errorObj.aadhaarNumber = '';
  }

  if (details?.aadhaarNumber) {
    errorObj.aadhaarNumber =
      (details?.aadhaarNumber && details?.aadhaarNumber?.length === 0) ||
      /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(details.aadhaarNumber)
        ? ''
        : 'Invalid aadhaar number (12-digits)';
  } else {
    errorObj.aadhaarNumber = '';
  }

  const flag = Object.values(errorObj).every((x) => x === '' || x === null);

  if (flag) {
    return true;
  } else {
    return errorObj;
  }
};
