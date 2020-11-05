import React from 'react';
import PropTypes from 'prop-types';
import DetailedSortableListGroups from './DetailedSortableListGroups';

class DetailedView extends React.Component {
  static propTypes = {
    reportId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    topReportId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    updateReport: PropTypes.func,
    groups: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    report: PropTypes.shape({}),
  };

  static defaultProps = {
    reportId: '',
    topReportId: '',
    updateReport: () => {},
    groups: [],
    report: {},

  };

  render() {
    const {
      groups,
      report,
      reportId,
      updateReport,
      topReportId,
    } = this.props;
    return (
      <>
        <DetailedSortableListGroups
          groupsIds={groups}
          report={report}
          updateReport={updateReport}
          reportId={reportId}
          topReportId={topReportId}
        />
      </>
    );
  }
}

export default DetailedView;

// - used "DetailedSortableListGroups" inside "DetailedView" and passed props (
//   groupsIds={groups}
//   report={report}
//   updateReport={updateReport}
//   reportId={reportId}
//   topReportId={topReportId}
//   )
// - 
// ***************************************************************************************************
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import css from './DetailedView.css';
import Group from '../Group/Group';
import GroupDetailedView from '../Group/GroupDetailedView';

const SortableItem = SortableElement(({ value, reportId, topReportId, toggleAccordion }) => (
  <ListGroupItem className={css.containerItem}>
    <Group id={value} reportId={reportId} topReportId={topReportId} toggleAccordion={toggleAccordion}>
      <GroupDetailedView />
    </Group>
  </ListGroupItem>
));

export class SortableListWrapper extends React.Component {
  static propTypes = {
    groupsIds: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    reportId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    topReportId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    updateReport: PropTypes.func,
  };

  static defaultProps = {
    groupsIds: [],
    reportId: '',
    topReportId: '',
    updateReport: () => {},
  };

  // stateModel {
  //   groups: [{id, isCollapsed}]
  // }

  toggleAccordion = (id) => {
    console.log('parent toggle', id);
    
    // const {
    //   group: { isCollapsed },
    //   prefs: { collapseGroupsByDefault },
    // } = this.props;
    // const {
    //   wasManuallyCollapsed,
    // } = this.state;

    // let isCurrentlyCollapsed = !!isCollapsed || collapseGroupsByDefault;

    // event.preventDefault();

    // if (!wasManuallyCollapsed) {
    //   this.setState({ wasManuallyCollapsed: true });
    // } else {
    //   isCurrentlyCollapsed = isCollapsed;
    // }

    // if (isCurrentlyCollapsed) {
    //   this.expandGroup(event);
    // } else {
    //   this.collapseGroup(event);
    // }
  };

  render() {
    const props = {
      ...this.props,
      toggleAccordion: this.toggleAccordion,
    };
    return (
      <SortableList { ...props } />
    );
  }
}

const SortableList = SortableContainer(({
  items,
  reportId,
  topReportId,
  updateReport,
  toggleAccordion,
}) => (
  <ListGroup flush className={css.container}>
    {items.map((value, index) => (
      <SortableItem
        key={`item-${value}`}
        index={index}
        value={value}
        reportId={reportId}
        topReportId={topReportId}
        updateReport={updateReport}
        toggleAccordion={toggleAccordion}
      />
    ))}
  </ListGroup>

));

class DetailedSortableListGroups extends React.Component {
  static propTypes = {
    groupsIds: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    reportId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    topReportId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    updateReport: PropTypes.func,
  };

  static defaultProps = {
    groupsIds: [],
    reportId: '',
    topReportId: '',
    updateReport: () => {},
  };

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const newOrderGroups = arrayMove(this.props.groupsIds, oldIndex, newIndex);
    const newReport = Object.assign({}, this.props.report, { groups: newOrderGroups });
    this.props.updateReport(newReport);
    this.listRef.current.classList.remove(css.draggingList);
  };

  onSortStart = () => {
    this.listRef.current.classList.add(css.draggingList);
  }

  shouldCancelStart = (e) => {
    const { target } = e;
    const closestBtn = target.closest('button');
    return !(target.classList.contains('dragBtn')
      || (closestBtn && closestBtn.classList.contains('dragBtn')));
  }

  render() {
    const {
      groupsIds,
      reportId,
      topReportId,
      group,
    } = this.props;
    // console.log("group", group);
    
    return (
      <>
        <div ref={this.listRef}>
          <SortableListWrapper
            items={groupsIds}
            onSortEnd={this.onSortEnd}
            onSortStart={this.onSortStart}
            shouldCancelStart={this.shouldCancelStart}
            lockAxis="y"
            helperClass={css.draggingItem}
            lockToContainerEdges
            reportId={reportId}
            topReportId={topReportId}
          />
          {/* <SortableList
            items={groupsIds}
            onSortEnd={this.onSortEnd}
            onSortStart={this.onSortStart}
            shouldCancelStart={this.shouldCancelStart}
            lockAxis="y"
            helperClass={css.draggingItem}
            lockToContainerEdges
            reportId={reportId}
            topReportId={topReportId}
          /> */}
        </div>
      </>
    );
  }
}

export default DetailedSortableListGroups;

// - "DetailedSortableListGroups" has the props and pass it to "SortableListWrapper"
// - "SortableListWrapper" now has its own props and we add the toggleAccordion to it 
// const props = {
//   ...this.props,
//   toggleAccordion: this.toggleAccordion,
// };
// return (
//   <SortableList { ...props } />
// );
// - now pass props to "SortableContainer" then to "SortableElement" as above
// - then to "Group" then to "DetailedView" which has all the logic below

// ****************************************************************************************************

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import {
 Button, Collapse, Modal, ModalHeader, ModalBody, UncontrolledTooltip,
} from 'reactstrap';
import EditGroup from 'react-icons/lib/fa/edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import CommentList from '../CommentList';
import Metadata from '../Metadata';
import RadarDetailedViewList from '../RadarList/RadarDetailedViewList';
import TLFGroup from '../TLFGroup/TLFGroup';
import { GROUP_TYPE } from '../../services/constants';
import css from './GroupDetailedView.css';
import { querySelectors } from '../../redux/modules/query';
import PrefsType from '../../types/PrefsType';

function mapStateToProps(store, props) {
  return {
    radarIds: querySelectors.getListRadarsIdsByQueryId(store, props.group.sharedReportId),
  };
}

export class GroupDetailedView extends React.Component {
  static propTypes = {
    group: PropTypes.shape({
      dri: PropTypes.string,
      epm: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      radarProblem: PropTypes.string,
      radars: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      releaseDate: PropTypes.string,
      sharedReportId: PropTypes.string,
      type: PropTypes.string,
      isCollapsed: PropTypes.bool,
    }),
    topReportId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    reportId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    radarIds: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    prefs: PropTypes.shape(PrefsType),
    updateGroup: PropTypes.func,
    deleteGroup: PropTypes.func,
    collapseGroup: PropTypes.func,
    expandGroup: PropTypes.func,
    toggleAccordion: PropTypes.func,
  };

  static defaultProps = {
    group: {
      name: '',
      id: '',
      radars: [],
      isCollapsed: true,
    },
    topReportId: null,
    reportId: null,
    radarIds: [],
    prefs: {},
    updateGroup: () => {},
    deleteGroup: () => {},
    collapseGroup: () => {},
    expandGroup: () => {},
    toggleAccordion: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      wasManuallyCollapsed: false,
    };
  }

  // toggleAccordion = (event) => {
  //   const {
  //     group: { isCollapsed },
  //     prefs: { collapseGroupsByDefault },
  //   } = this.props;
  //   const {
  //     wasManuallyCollapsed,
  //   } = this.state;

  //   let isCurrentlyCollapsed = !!isCollapsed || collapseGroupsByDefault;

  //   event.preventDefault();

  //   if (!wasManuallyCollapsed) {
  //     this.setState({ wasManuallyCollapsed: true });
  //   } else {
  //     isCurrentlyCollapsed = isCollapsed;
  //   }

  //   if (isCurrentlyCollapsed) {
  //     this.expandGroup(event);
  //   } else {
  //     this.collapseGroup(event);
  //   }
  // };

  updateGroup = (group) => {
    const { updateGroup } = this.props;
    updateGroup(group);
  }

  deleteGroup = (groupId) => {
    const { deleteGroup, reportId } = this.props;
    deleteGroup(reportId, groupId);
  }

  collapseGroup = (event) => {
    const { group, collapseGroup } = this.props;
    event.preventDefault();
    collapseGroup(group);
  }

  expandGroup = (event) => {
    const { group, expandGroup } = this.props;
    event.preventDefault();
    expandGroup(group);
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  }

  getRadarsIds = () => {
    const { group, radarIds } = this.props;
    if (group.type === GROUP_TYPE.radarQuery) {
      return radarIds;
    }
    return group.radars;
  }

  render() {
    console.log('group render');
    
    const {
      group,
      prefs,
      reportId,
      topReportId,
      toggleAccordion,
    } = this.props;

    const {
      isModalOpen,
      wasManuallyCollapsed,
    } = this.state;

    const groupIsCurrentlyCollapsed = wasManuallyCollapsed ? !!group.isCollapsed : prefs.collapseGroupsByDefault;

    return (
      <>
        <div className={css.container}>
          <div className={css.toggle}>
            <Button
              outline
              color="secondary"
              size="sm"
              onClick={() => {}}
              className={`dragBtn ${css.dragBtn}`}
              id={`groupTooltip_${group.id}`}
            >
              <FontAwesomeIcon icon={faGripVertical} />
              <UncontrolledTooltip
                key={group.id}
                autohide={false}
                placement="top"
                target={`groupTooltip_${group.id}`}
              >
                  Drag to order
              </UncontrolledTooltip>
            </Button>
            <Button
              type="button"
              size="sm"
              outline
              className={css.button}
              style={{ borderColor: 'transparent' }}
              onClick={() => toggleAccordion(group.id)}
              aria-expanded={!groupIsCurrentlyCollapsed}
            >
              { groupIsCurrentlyCollapsed ? <FaCaretRight /> : <FaCaretDown />}
            </Button>
            {prefs.showGroupRisk && (
              <span className={`${css.groupRisk} riskMetadata`}>
                <Metadata hideLabel relatedTo={group.id} metadataType="risk" />
              </span>
            )}
            <div className={css.editButtonWrapper}>
              <h2 className={css.header}>{ group.name }</h2>
              {!group.autoGroup && (
                <div className={css.commentControls}>
                  <Button
                    onClick={this.toggleModal}
                    className={css.editBtn}
                    outline
                    color="secondary"
                    size="sm"
                    id={`editGroupTooltip_${group.id}`}
                  >
                    <div>
                      <EditGroup />
                      <UncontrolledTooltip
                        key={group.id}
                        autohide={false}
                        placement="top"
                        target={`editGroupTooltip_${group.id}`}
                      >
                        Edit group
                      </UncontrolledTooltip>
                    </div>
                  </Button>
                </div>
          )}
            </div>

            {prefs.showPhase && (
              <span className={css.groupPhase}>
                <Metadata hideLabel relatedTo={group.id} metadataType="phase" />
              </span>
            )}
          </div>

        </div>


        <Collapse isOpen={!groupIsCurrentlyCollapsed}>
          <CommentList parentId={group.id} type="group" topReportId={topReportId} />
          <RadarDetailedViewList ids={this.getRadarsIds()} reportId={reportId} topReportId={topReportId} />
        </Collapse>

        <Modal isOpen={isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Edit Group</ModalHeader>
          <ModalBody>
            <TLFGroup
              {...group}
              closeHandler={this.toggleModal}
              saveHandler={this.updateGroup}
              deleteHandler={this.deleteGroup}
            />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStateToProps)(GroupDetailedView);

// - hierarchy:
//  1- "DetailedView" 
//  2- "DetailedSortableListGroups"
//  3- "SortableListWrapper"
//  4- "SortableList"
//  5- "SortableItem"
//  6- "group"
//  7- "GroupDetailedView"

// ************************************************************************************************
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import {
 Button, Collapse, Modal, ModalHeader, ModalBody, UncontrolledTooltip,
} from 'reactstrap';
import EditGroup from 'react-icons/lib/fa/edit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import CommentList from '../CommentList';
import Metadata from '../Metadata';
import RadarDetailedViewList from '../RadarList/RadarDetailedViewList';
import TLFGroup from '../TLFGroup/TLFGroup';
import { GROUP_TYPE } from '../../services/constants';
import css from './GroupDetailedView.css';
import { querySelectors } from '../../redux/modules/query';
import PrefsType from '../../types/PrefsType';

function mapStateToProps(store, props) {
  return {
    radarIds: querySelectors.getListRadarsIdsByQueryId(store, props.group.sharedReportId),
  };
}

export class GroupDetailedView extends React.Component {
  static propTypes = {
    group: PropTypes.shape({
      dri: PropTypes.string,
      epm: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      radarProblem: PropTypes.string,
      radars: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      releaseDate: PropTypes.string,
      sharedReportId: PropTypes.string,
      type: PropTypes.string,
      isCollapsed: PropTypes.bool,
    }),
    topReportId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    reportId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    radarIds: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    prefs: PropTypes.shape(PrefsType),
    updateGroup: PropTypes.func,
    deleteGroup: PropTypes.func,
    collapseGroup: PropTypes.func,
    expandGroup: PropTypes.func,
    toggleAccordion: PropTypes.func,
  };

  static defaultProps = {
    group: {
      name: '',
      id: '',
      radars: [],
      isCollapsed: true,
    },
    topReportId: null,
    reportId: null,
    radarIds: [],
    prefs: {},
    updateGroup: () => {},
    deleteGroup: () => {},
    collapseGroup: () => {},
    expandGroup: () => {},
    toggleAccordion: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      wasManuallyCollapsed: false,
    };
  }

  // toggleAccordion = (event) => {
  //   const {
  //     group: { isCollapsed },
  //     prefs: { collapseGroupsByDefault },
  //   } = this.props;
  //   const {
  //     wasManuallyCollapsed,
  //   } = this.state;

  //   let isCurrentlyCollapsed = !!isCollapsed || collapseGroupsByDefault;

  //   event.preventDefault();

  //   if (!wasManuallyCollapsed) {
  //     this.setState({ wasManuallyCollapsed: true });
  //   } else {
  //     isCurrentlyCollapsed = isCollapsed;
  //   }

  //   if (isCurrentlyCollapsed) {
  //     this.expandGroup(event);
  //   } else {
  //     this.collapseGroup(event);
  //   }
  // };

  updateGroup = (group) => {
    const { updateGroup } = this.props;
    updateGroup(group);
  }

  deleteGroup = (groupId) => {
    const { deleteGroup, reportId } = this.props;
    deleteGroup(reportId, groupId);
  }

  collapseGroup = (event) => {
    const { group, collapseGroup } = this.props;
    event.preventDefault();
    collapseGroup(group);
  }

  expandGroup = (event) => {
    const { group, expandGroup } = this.props;
    event.preventDefault();
    expandGroup(group);
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  }

  getRadarsIds = () => {
    const { group, radarIds } = this.props;
    if (group.type === GROUP_TYPE.radarQuery) {
      return radarIds;
    }
    return group.radars;
  }

  render() {
    console.log('group render');
    
    const {
      group,
      prefs,
      reportId,
      topReportId,
      toggleAccordion,
    } = this.props;

    const {
      isModalOpen,
      wasManuallyCollapsed,
    } = this.state;

    const groupIsCurrentlyCollapsed = wasManuallyCollapsed ? !!group.isCollapsed : prefs.collapseGroupsByDefault;

    return (
      <>
        <div className={css.container}>
          <div className={css.toggle}>
            <Button
              outline
              color="secondary"
              size="sm"
              onClick={() => {}}
              className={`dragBtn ${css.dragBtn}`}
              id={`groupTooltip_${group.id}`}
            >
              <FontAwesomeIcon icon={faGripVertical} />
              <UncontrolledTooltip
                key={group.id}
                autohide={false}
                placement="top"
                target={`groupTooltip_${group.id}`}
              >
                  Drag to order
              </UncontrolledTooltip>
            </Button>
            <Button
              type="button"
              size="sm"
              outline
              className={css.button}
              style={{ borderColor: 'transparent' }}
              onClick={() => toggleAccordion(group.id)}
              aria-expanded={!groupIsCurrentlyCollapsed}
            >
              { groupIsCurrentlyCollapsed ? <FaCaretRight /> : <FaCaretDown />}
            </Button>
            {prefs.showGroupRisk && (
              <span className={`${css.groupRisk} riskMetadata`}>
                <Metadata hideLabel relatedTo={group.id} metadataType="risk" />
              </span>
            )}
            <div className={css.editButtonWrapper}>
              <h2 className={css.header}>{ group.name }</h2>
              {!group.autoGroup && (
                <div className={css.commentControls}>
                  <Button
                    onClick={this.toggleModal}
                    className={css.editBtn}
                    outline
                    color="secondary"
                    size="sm"
                    id={`editGroupTooltip_${group.id}`}
                  >
                    <div>
                      <EditGroup />
                      <UncontrolledTooltip
                        key={group.id}
                        autohide={false}
                        placement="top"
                        target={`editGroupTooltip_${group.id}`}
                      >
                        Edit group
                      </UncontrolledTooltip>
                    </div>
                  </Button>
                </div>
          )}
            </div>

            {prefs.showPhase && (
              <span className={css.groupPhase}>
                <Metadata hideLabel relatedTo={group.id} metadataType="phase" />
              </span>
            )}
          </div>

        </div>


        <Collapse isOpen={!groupIsCurrentlyCollapsed}>
          <CommentList parentId={group.id} type="group" topReportId={topReportId} />
          <RadarDetailedViewList ids={this.getRadarsIds()} reportId={reportId} topReportId={topReportId} />
        </Collapse>

        <Modal isOpen={isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Edit Group</ModalHeader>
          <ModalBody>
            <TLFGroup
              {...group}
              closeHandler={this.toggleModal}
              saveHandler={this.updateGroup}
              deleteHandler={this.deleteGroup}
            />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStateToProps)(GroupDetailedView);
