export const checkEmailHandler = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

export const checkPasswordHandler = (password) => {
  // Check password requirements
  return password.length >= 8;
};

export const isMatchPassword = (password1, password2) => {
  return password1 === password2;
};
