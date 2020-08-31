/*
 * Extends JQuery interface with support for Bootstrap features.
 */
interface JQuery<TElement = HTMLElement> {
  /**
   * Activates Bootstrap's JavaScript modal plugin on matched element(s).
   *
   * @see https://getbootstrap.com/docs/4.0/components/modal/
   */
  modal: (options?: BootstrapModalOptions) => JQuery<TElement>;
}

/**
 * @see https://getbootstrap.com/docs/4.0/components/modal/#options
 */
interface BootstrapModalOptions {
  backdrop?: boolean;
  keyboard?: boolean;
  focus?: boolean;
  show?: boolean;
}
