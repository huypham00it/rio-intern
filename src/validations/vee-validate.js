import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

extend("required", required);

extend("email", email);

extend("min", min);

extend("firstnameRequired", (value) => {
  if (value) {
    if (value.indexOf(" ") >= 0) {
      return "Firstname cannot contain white space characters";
    }

    return true;
  }
  return "Firstname is required";
});

extend("lastnameRequired", (value) => {
  if (value) {
    if (value.indexOf(" ") >= 0) {
      return "Lastname cannot contain white space characters";
    }

    return true;
  }
  return "Lastname is required";
});

extend("passwordRequired", (value) => {
  if (value) {
    if (value.indexOf(" ") >= 0) {
      return "Password cannot contain white space characters";
    } else if (value.length < 6) {
      return "Password has at least 6 characters";
    }

    return true;
  }

  return "Password is required";
});

extend("confirmPasswordRequired", (value) => {
  if (value) {
    if (value.indexOf(" ") >= 0) {
      return "Password cannot contain white space characters";
    } else if (value.length < 6) {
      return "Password has at least 6 characters";
    }

    return true;
  }

  return "Confirm password is required";
});

extend("emailRequired", (value) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (value) {
    if (value.indexOf(" ") >= 0) {
      return "{_field_} cannot contain white space characters";
    } else if (!regex.test(value)) {
      return "Email is not valid";
    }
    return true;
  }
  return "Email is required";
});

extend(
  "onlyUsernameRequired",
  (value) => {
    if (value) {
      if (value.indexOf(" ") >= 0) {
        return "Username cannot contain white space characters";
      } else if (value.length < 8) {
        return "Password has at least 8 characters";
      }

      return true;
    }
    return "Username is required";
  },
  {
    immediate: true,
  }
);

extend("usernameRequired", (value) => {
  if (value) {
    if (value.indexOf(" ") >= 0) {
      return "Username / Email cannot contain white space characters";
    } else if (value.length < 8) {
      return "Username / Email has at least 8 characters";
    } else if (value.indexOf("@") >= 0) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!regex.test(value)) {
        return "Email is not valid";
      }
    }

    return true;
  }
  return "Username / Email is required";
});

extend("passwordRequired", (value) => {
  if (value) {
    if (value.indexOf(" ") >= 0) {
      return "Password cannot contain white space characters";
    } else if (value.length < 6) {
      return "Password has at least 6 characters";
    }

    return true;
  }

  return "Password is required";
});
