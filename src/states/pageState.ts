import React from 'react';
import Page from '#/page';

interface Props {
  pages: Map<string, Page>;
}

interface State {
  pages: Map<string, Page>;
}

/**
 * PageState
 * @extends React.Component
 */
class PageState extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pages: props.pages,
    };
    PageState.addPage = PageState.addPage.bind(this);
    PageState.removePageById = PageState.removePageById.bind(this);
    PageState.updatePage = PageState.updatePage.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      pages: this.props.pages,
    });
  }

  componentWillUnmount(): void {
    this.setState({
      pages: new Map<string, Page>(),
    });
  }

  get pages(): Map<string, Page> {
    return this.state.pages;
  }

  set pages(value: Map<string, Page>) {
    this.setState({
      pages: value,
    });
  }

  /**
   * Add a page to the state
   * @param page The page to add
   */
  static addPage: (
    page: Page
  ) => (pages: Map<string, Page>) => void = (
      page: Page,
    ) => (pages: Map<string, Page>) => {
      pages.set(page.id, page);
    };

  /**
   * Remove a page from the state
   * @param id The id of the page to remove
   */
  static removePageById: (
    id: string
  ) => (pages: Map<string, Page>) => void = (
      id: string,
    ) => (pages: Map<string, Page>) => {
      pages.delete(id);
    };

  /**
   * Update a page in the state
   * @param page The page to update
   */
  static updatePage: (
    page: Page
  ) => (pages: Map<string, Page>) => void = (
      page: Page,
    ) => (pages: Map<string, Page>) => {
      pages.set(page.id, page);
    };
}

export default PageState;
