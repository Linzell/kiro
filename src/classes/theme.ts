interface ThemeInterface {
  PrimaryColor: string;
  SecondaryColor: string;
  TertiaryColor: string;
  TextColor: string;
  PositiveColor: string;
  NegativeColor: string;
  InfoColor: string;
  WarningColor: string;
}

/**
 * Theme class
 * @class Theme
 * @constructor
 * ```TS
 * constructor(
 * primaryColor: string,
 * secondaryColor: string,
 * tertiaryColor: string,
 * textColor: string,
 * positiveColor: string,
 * negativeColor: string,
 * infoColor: string,
 * warningColor: string,
 * )
 * ```
 */
class Theme {
  private themeInterface: ThemeInterface;

  constructor(
    primaryColor = '#1976D2',
    secondaryColor = '#ffffff',
    tertiaryColor = '#BFBFBF',
    textColor = '#1D1D1D',
    positiveColor = '#4CAF50',
    negativeColor = '#F44336',
    infoColor = '#2196F3',
    warningColor = '#FFC107',
  ) {
    this.themeInterface = {
      PrimaryColor: primaryColor,
      SecondaryColor: secondaryColor,
      TertiaryColor: tertiaryColor,
      TextColor: textColor,
      PositiveColor: positiveColor,
      NegativeColor: negativeColor,
      InfoColor: infoColor,
      WarningColor: warningColor,
    };
  }

  get primaryColor(): string {
    return this.themeInterface.PrimaryColor;
  }

  set primaryColor(primaryColor: string) {
    this.themeInterface.PrimaryColor = primaryColor;
  }

  get secondaryColor(): string {
    return this.themeInterface.SecondaryColor;
  }

  set secondaryColor(secondaryColor: string) {
    this.themeInterface.SecondaryColor = secondaryColor;
  }

  get tertiaryColor(): string {
    return this.themeInterface.TertiaryColor;
  }

  set tertiaryColor(tertiaryColor: string) {
    this.themeInterface.TertiaryColor = tertiaryColor;
  }

  get textColor(): string {
    return this.themeInterface.TextColor;
  }

  set textColor(textColor: string) {
    this.themeInterface.TextColor = textColor;
  }

  get positiveColor(): string {
    return this.themeInterface.PositiveColor;
  }

  set positiveColor(positiveColor: string) {
    this.themeInterface.PositiveColor = positiveColor;
  }

  get negativeColor(): string {
    return this.themeInterface.NegativeColor;
  }

  set negativeColor(negativeColor: string) {
    this.themeInterface.NegativeColor = negativeColor;
  }

  get infoColor(): string {
    return this.themeInterface.InfoColor;
  }

  set infoColor(infoColor: string) {
    this.themeInterface.InfoColor = infoColor;
  }

  get warningColor(): string {
    return this.themeInterface.WarningColor;
  }

  set warningColor(warningColor: string) {
    this.themeInterface.WarningColor = warningColor;
  }

  public initializeTheme(): void {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', this.primaryColor);
    root.style.setProperty('--secondary-color', this.secondaryColor);
    root.style.setProperty('--tertiary-color', this.tertiaryColor);
    root.style.setProperty('--text-color', this.textColor);
    root.style.setProperty('--positive-color', this.positiveColor);
    root.style.setProperty('--negative-color', this.negativeColor);
    root.style.setProperty('--info-color', this.infoColor);
    root.style.setProperty('--warning-color', this.warningColor);
  }

  // eslint-disable-next-line class-methods-use-this
  public getDefaultTheme(): Theme {
    return new Theme();
  }
}

export default Theme;
