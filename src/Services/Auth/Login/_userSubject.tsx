const userSubject = {
  curentUserSubject: {
    value: JSON.parse(localStorage.getItem('token') || '{}'),
  },
};

const userSubjectBehavior = {
  curentUserValue(): string {
    return userSubject.curentUserSubject.value;
  },
  createUserSubject(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
    userSubject.curentUserSubject.value = token;
  },
  removeUserSubject(): void {
    localStorage.removeItem('token');
    userSubject.curentUserSubject.value = null;
  },
};

export default userSubjectBehavior;
