import React, { Component } from "react";
import isValid, { PATTERNS } from "../../03-interview-qs";

export default class Form extends Component {
  constructor(props) {
    super(props);
    const { data, userName } = this.props;
    this.state = {
      tab: "general",
      data: {
        ...data,
        createdBy: data.createdBy ? data.createdBy : userName
      },
      isFormValid: false,
      isModalShown: false,
      isSecurityGroupOpen: false
    };
  }

  componentDidMount() {
    this.validate();
  }

  change = e => {
    const { data } = this.state;
    const { type, name, value, checked } = e.target;
    const diff = { [name]: type === "check" ? checked : value };
    const newData = { data: { ...data, ...diff } };
    this.setState(newData, this.validate);
  };
  save = () => {
    this.props.saveHandler(this.state.data);
    this.props.closeHandler();
  };
  delete = () => {
    this.props.deleteHandler();
    this.props.closeHandler();
  };
  toggle = tab => {
    this.setState({ tab });
  };
  validate = () => {
    const valid = this.form && this.form.reportValidity();
    this.setState({
      isFormValid: valid
    });
  };

  closeSelect = () => {
    this.setState({
      isSecurityGroupOpen: false
    });
  };
  toggleSelect = state => {
    this.setState({
      isSecurityGroupOpen: state
    });
  };
  toggleConfirmModal() {
    const { isModalShown } = this.state;
    this.setState({
      isModalShown: !this.state.isModalShown
    });
  }
  toggleAllModal() {
    const { closeHandler } = this.props;
    this.toggleConfirmModal();
    closeHandler();
  }
  render() {
    const {
      tab,
      data,
      isSecurityGroupOpen,
      isFormValid,
      isModalShown
    } = this.state;
    const { closeHandler } = this.props;
    const tabs = {
      general: "general",
      radar_data: "radar_data",
      keywords: "keywords"
    };
    const optional = (
      <Badge color="info">
        <FaAsterisk /> Optional
      </Badge>
    );
    const required = (
      <Badge color="danger">
        <FaAsterisk /> Required
      </Badge>
    );

    const check = <Facheck className="text-success" />;

    const infoText = "some Text here";

    const info = (
      <Badge color="warning" className={css.info}>
        <FaExclamationTriangle />
        {infoText}
      </Badge>
    );
    const validationPattern = PATTERNS.containsText;
    return (
      <>
        <Form
          innerRef={form => {
            this.form = form;
          }}
          onClick={() => this.closeSelect()}
        >
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: tab === tabs.general })}
                onClick={this.toggle("general")}
              >
                General
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: tab === tabs.rada_data })}
                onClick={this.toggle("radar_data")}
              >
                Radar Data
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={tab} className={css.tabContent}>
            <TabPane tabId="general">
              <Container>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>
                        Name:
                        {isValid(data.name, validationPattern)
                          ? check
                          : required}
                      </Label>
                      <Input
                        bsSize="sm"
                        type="text"
                        name="name"
                        value={data.name}
                        onChane={this.change}
                        onInvalid={e => e.preventDefault()}
                        pattern={validationPattern}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="radar_data" />
          </TabContent>
          <Button
            size="sm"
            color="primary"
            onClick={() => this.save()}
            disabled={!isFormValid}
            id="report-form-save"
          >
            save
          </Button>
        </Form>
      </>
    );
  }
}
