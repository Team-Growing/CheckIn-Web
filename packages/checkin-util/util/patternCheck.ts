class PatternCheck {
  public idCheck(item: string): boolean {
    if (/^[a-z]+[a-z0-9]{4,20}$/g.test(item)) {
      return true;
    }
    return false;
  }

  public pwCheck(item: string): boolean {
    if (/^[a-zA-Z0-9]{7,20}$/.test(item)) {
      return true;
    }
    return false;
  }

  public emailCheck(item: string): boolean {
    if (
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        item
      )
    ) {
      return true;
    }
    return false;
  }

  public phoneCheck(item: string): boolean {
    if (/^\d{2,3}\d{3,4}\d{4}$/.test(item)) {
      return true;
    }
    return false;
  }
}

export default new PatternCheck();
