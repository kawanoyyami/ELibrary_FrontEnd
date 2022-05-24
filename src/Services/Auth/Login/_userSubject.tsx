const userSubject = {
  currentUserSubject: {
    value: JSON.parse(localStorage.getItem('token') || '{}'),
  },
};
const userSubjectBehavior = {
  currentUserValue(): string {
    return userSubject.currentUserSubject.value;
  },
  createUserSubject(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
    userSubject.currentUserSubject.value = token;
  },
  removeUserSubject(): void {
    localStorage.removeItem('token');
    userSubject.currentUserSubject.value = null;
  },
};

export default userSubjectBehavior;
