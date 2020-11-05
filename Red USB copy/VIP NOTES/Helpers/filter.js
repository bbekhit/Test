import React, { Component } from "react";

export default class filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      hash: {}
    };
    this.allkeys = [
      "name",
      "createdBy",
      "team",
      "type",
      "id",
      "archived",
      "securityGroup"
    ];
    this.timeout = null;
  }
  async componentDidMount() {
    const { onChange } = this.props;
    this.parseSearch();
    onChange(await this.getResult());
  }
  async componentDidUpdate() {
    const { onChange } = this.props;
    if (this.props.favoriteList !== prevProps.favoriteList) {
      this.setNewFavoriteList(this.props.favoriteList);
    }
    if (this.props.reports !== prevProps.reports) {
      await this.setHash();
      onChange(await this.getResult());
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  parseSearch() {
    const { search } = this.props.location;
    const searchParams = new URLSearchParams(search);
    if (!search) {
      return;
    }

    const params = {
      cat: searchParams.get("cat"),
      team: searchParams.get("team"),
      createdBy: searchParams.get("createdBy"),
      type: searchParams.get("type")
    };

    Object.keys(params).map(param => {
      if (param && params[param]) {
        const filters = this.getFilters(params[param], param);
        this.setState({ filters });
      }
      return null;
    });
  }
  async getResult() {
    const { hash, filters } = this.state;
    const { reports } = this.props;
    if (R.isEmpty(hash)) {
      await this.setHash();
    }
    if (R.isEmpty(filters)) {
      return reports;
    }
    const newHash = this.state.hash;
    const match = Object.keys(filters).map(i => {
      const res = newHash[i][filters[i]];
      if (!res) {
        newHash[i][filters[i]] = [];
        this.setState({ hash: newHash });
        return [];
      }
      return res;
    });
    return match
      .reduce((acm, val) => R.intersection(acm, val))
      .sort()
      .map(i => reports[i])
      .filter(report => report);
  }
  async setHash() {
    const { reports, profile, favoriteList } = this.props;
    const hash = {};
    const user = `${profile.firstName} ${profile.lastName}`;

    reports.forEach((report, i) => {
      this.allkeys.forEach(filter => {
        const value = reports[i][filter] || "none";
        if (i === 0) hash[filter] = {};
        if (hash[filter][value]) {
          hash[filter][value].push(i);
        } else {
          hash[filter][value] = [i];
        }
      });
    });
    hash.cat = {
      "my-reports": hash.createdBy[user],
      "my-favorites": favoriteList.map(id =>
        hash.id[id] ? hash.id[id][0] : []
      ),
      archive: hash.archived.true
    };
    await this.setState({ hash });
  }
  getFilters = (value, key) => {
    const { filters } = this.state;
    if (key === "search") {
      filters[key] = value.toLowerCase();
      return filters;
    }
    if (value === "all") {
      delete filters[key];
    } else {
      filters[key] = value;
    }
    return filters;
  };
  addSearchToHash = value => {
    const { hash } = this.hash;
    const keys = ["targetRelease", "createdBy", "team", "name"];
    if (hash.search && hash.search[value]) {
      return;
    }
    const searchHash = keys.map(key => hash[key]);
    const match = [];
    searchHash.forEach((v, i) => {
      match.push(
        Object.keys(v).reduce((acm, val) => {
          if (val.toLowerCase().includes) {
            return acm.concat(searchHash[i][val]);
          }
          return acm;
        }, [])
      );
    });
    hash.search = {
      [value]: R.uniq(match.reduce((acm, val) => acm.concat(val)))
    };
    this.state({ hash });
  };

  async change(evt, key) {
    const { onChange, reports } = this.props;
    const { value } = evt.target;
    const filters = this.getfilters(value, key);
    if (key === "search") {
      this.addSearchToHash(value.toLowerCase());
    }
    await this.setState({ filters });
    this.addQueryParams();
    onChange(!R.isEmpty(filters) ? await this.getResult() : report);
  }

  search = (e, key) => {
    const debounceDelay = 300;
    const { value } = e.target;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(
      () => this.change({ target: { value: value.trim() } }, key),
      debounceDelay
    );
  };
  addQueryParams() {
    const { filters } = this.state;
    const params = new URLSearchParams();
    Object.keys(filters).map(filter => {
      if (filter !== "search") {
        params.set(filter, filters[filter]);
      }
      return params;
    });
    this.props.history.push({ search: `?${params}` });
  }

  setNewFavoriteList(newList) {
    const { hash } = this.state;
    hash.cat["my-favorites"] = newList.map(id => hash.id[id][0]);
  }
  getOptionsForSelect = key => {
    const { hash } = this.state;
    const CAT = {
      "my-favorites": "My Favorites",
      "my-reports": "My Reports",
      archive: "Archived Reports"
    };
    if (hash[key]) {
      return Object.keys(hash[key])
        .sort((a, b) => {
          if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
          } else if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        })
        .map((val, i) => {
          if (val !== "none") {
            return (
              <option value={val} key={i}>
                {key === "cat" ? CAT[val] || val : val}
              </option>
            );
          }
          return null;
        });
    }
    return null;
  };
  render() {
    return (
      <div>
        <FormGroup>
          <Label
            className={classnames({
              [css.label]: true,
              [css.selected]: filter.cat
            })}
          >
            Category
          </Label>
          <Input
            type="select"
            bsSize="sm"
            value={filters.cat}
            onChange={e => this.change(e, "cat")}
          >
            <option value="all">All Reports</option>
            {this.getOptionsForSelect}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label
            className={classnames({
              [css.label]: true,
              [css.selected]: filters.createdBy
            })}
          >
            Creators
          </Label>
          <Input
            type="select"
            bsSize="sm"
            value={filters.createdBy}
            onChange={e => this.change(e, "createdBy")}
          >
            <option value="all">All Creators</option>
            {this.getOptionsForSelect}
          </Input>
        </FormGroup>
      </div>
    );
  }
}
