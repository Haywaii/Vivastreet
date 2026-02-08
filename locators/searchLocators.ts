export class searchLocators {
  static readonly SEARCH_BUTTON_HOMEPAGE = 'Search';
  static readonly CATEGORY_DROPDOWN_HOMEPAGE_SEARCHPAGE = '#vs-cat-dropdown-1';
  static readonly LOCATION_DROPDOWN_HOMEPAGE = '#vs_geo_dropdown_1';
  
  /** ELEMENT FOR ADVANCED SEARCH **/
  static readonly KEYWORD_INPUT_SEARCHPAGE = '#vs_search_keywords';
  static readonly LOCATION_DROPDOWN_SEARCHPAGE = '#geosearch_text';
  static readonly RADIUS_SELECT_SEARCHPAGE = '#vs_geo_radius';
  static readonly SEARCH_BUTTON_SEARCHPAGE = '#search-button';
  static readonly MIN_PRICE_INPUT_SEARCHPAGE = '#search_price_min';
  static readonly MAX_PRICE_INPUT_SEARCHPAGE = '#search_price_max';
  static readonly SORTBY_DROPDOWN_SEARCHPAGE = '#sort-by-select';
  static readonly TOOLBAR_SEARCHPAGE = '#toolbar';
  static readonly LIST_SEARCH_RESULTS = '#classified_table > ul li';
  static readonly VIP_RESULTS_CAROUSEL = "#vs_carousel";
  static readonly RESULTS_SUMMARY_TEST = '.results-summary'
  static readonly CATEGOY_DROPDOWN_ADVANCED_SEARCH = 'Category'

  /** ELEMENT FOR NO RESULT SEARCH  **/
  static readonly SEARCH_ALERT_CREATION_BUTTON = '#vs_no_results_alert_submit';
  static readonly NO_RESULT_MESSAGE = '.no-results-header';
}