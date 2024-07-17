import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrCheckbox, IgrCheckboxModule, IgrChip, IgrChipModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesList, useGetCurrentlyAttendingList, useGetPopularLecturersList } from '../hooks/learning-app-hooks';
import styles from './dashboard.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrCheckboxModule.register();
IgrChipModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRatingModule.register();
IgrRippleModule.register();

export default function Dashboard() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const { learningAppCurrentlyAttending } = useGetCurrentlyAttendingList();
  const { learningAppCategories } = useGetCategoriesList();
  const { learningAppPopularLecturers, setLearningAppPopularLecturers: setLearningAppPopularLecturers } = useGetPopularLecturersList();

  return (
    <>
      <div className={classes("row-layout dashboard-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("column-layout group_1")}>
            <h6 className={classes("content")}>
              <span>Continue learning</span>
            </h6>
            <div className={classes("row-layout group_2")}>
              {learningAppCurrentlyAttending?.map((item) => (
                <IgrCard className={classes("card")} key={uuid()}>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src={item.Image} className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>{item.Course}</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}></span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton size="large" clicked={() => navigate(`/courses`)} className={classes("button")}>
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>play_circle_filled</span>
                        </span>
                        <span key={uuid()}>Continue</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat" className={classes("icon-button")}>
                        <span className={classes("material-icons icon")} key={uuid()}>
                          <span key={uuid()}>check_circle_outline</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              ))}
            </div>
          </div>
          <div className={classes("column-layout group_3")}>
            <h6 className={classes("content")}>
              <span>Explore new categories</span>
            </h6>
            <div className={classes("row-layout group_4")}>
              {learningAppCategories?.map((item) => (
                <div className={classes("column-layout group_5")} key={uuid()}>
                  <img src={item.Image} className={classes("image_1")} />
                  <p className={classes("typography__subtitle-1 content")}>
                    <span>{item.Category}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className={classes("column-layout group_1")}>
            <div className={classes("row-layout group_6")}>
              <h6 className={classes("content")}>
                <span>Popular lecturers</span>
              </h6>
              <IgrButton variant="flat" size="large" className={classes("button_1")}>
                <span key={uuid()}>See all</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
            <IgrList className={classes("list")}>
              {learningAppPopularLecturers?.map((item) => (
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_7")} key={uuid()}>
                      <div className={classes("row-layout group_8")}>
                        <IgrAvatar src={item.Avatar} size="medium" shape="circle" className={classes("avatar")}></IgrAvatar>
                        <div className={classes("column-layout group_9")}>
                          <p className={classes("typography__subtitle-2 content")}>
                            <span>{item.Lecturer}</span>
                          </p>
                          <p className={classes("typography__body-2 content_2")}>
                            <span>{item.Role}</span>
                          </p>
                        </div>
                        <div className={classes("row-layout rating-2")}>
                          <IgrRating value={item.Rating} size="medium" change={(_c, e) => { item.Rating = e.detail; setLearningAppPopularLecturers([...learningAppPopularLecturers]); }} className={classes("user-input")}></IgrRating>
                        </div>
                        <div className={classes("row-layout group_10")}>
                          <IgrChip size="large" className={classes("chip")}>
                            <span key={uuid()}>{item.Tag}</span>
                          </IgrChip>
                        </div>
                      </div>
                      <div className={classes("row-layout group_11")}>
                        <IgrButton variant="outlined" size="large" className={classes("button_2")}>
                          <span key={uuid()}>See courses</span>
                          <IgrRipple key={uuid()}></IgrRipple>
                        </IgrButton>
                      </div>
                    </div>
                  </div>
                </IgrListItem>
              ))}
            </IgrList>
          </div>
        </div>
        <div className={classes("column-layout side-panel")}>
          <div className={classes("column-layout group_12")}>
            <div className={classes("row-layout group_13")}>
              <img src="/src/assets/Avatar9.png" className={classes("image_2")} />
            </div>
            <div className={classes("column-layout group_14")}>
              <h5 className={classes("content")}>
                <span>Alan Carter</span>
              </h5>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Level 3</span>
              </p>
            </div>
          </div>
          <div className={classes("column-layout group_15")}>
            <div className={classes("column-layout group_16")}>
              <div className={classes("row-layout group_17")}>
                <img src="/src/assets/ranking.svg" className={classes("image_3")} />
                <div className={classes("column-layout group_18")}>
                  <div className={classes("row-layout group_19")}>
                    <h6 className={classes("h6")}>
                      <span>24</span>
                    </h6>
                    <h6 className={classes("content_2")}>
                      <span>/ 90</span>
                    </h6>
                  </div>
                  <p className={classes("typography__overline content")}>
                    <span>Ranking</span>
                  </p>
                </div>
              </div>
              <div className={classes("row-layout group_17")}>
                <img src="/src/assets/courses.svg" className={classes("image_3")} />
                <div className={classes("column-layout group_18")}>
                  <div className={classes("row-layout group_19")}>
                    <h6 className={classes("h6")}>
                      <span>4</span>
                    </h6>
                  </div>
                  <p className={classes("typography__overline content")}>
                    <span>COURSES</span>
                  </p>
                </div>
              </div>
              <div className={classes("row-layout group_17")}>
                <img src="/src/assets/tasks.svg" className={classes("image_3")} />
                <div className={classes("column-layout group_20")}>
                  <div className={classes("row-layout group_19")}>
                    <h6 className={classes("h6")}>
                      <span>6</span>
                    </h6>
                    <h6 className={classes("content_2")}>
                      <span>/ 12</span>
                    </h6>
                  </div>
                  <p className={classes("typography__overline content")}>
                    <span>ASSIGNMENTS</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("column-layout group_21")}>
            <p className={classes("typography__subtitle-2 text")}>
              <span>Today's tasks</span>
            </p>
            <div className={classes("row-layout group_22")}>
              <div className={classes("column-layout group_23")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Build cards in Figma</span>
                </p>
                <p className={classes("typography__caption text_2")}>
                  <span>Due: Tomorrow</span>
                </p>
              </div>
              <IgrCheckbox className={classes("user-input")}></IgrCheckbox>
            </div>
            <div className={classes("row-layout group_24")}>
              <div className={classes("column-layout group_23")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Flexbox exercise</span>
                </p>
                <p className={classes("typography__caption text_2")}>
                  <span>Due: Sept 5th</span>
                </p>
              </div>
              <IgrCheckbox className={classes("user-input")}></IgrCheckbox>
            </div>
            <div className={classes("row-layout group_25")}>
              <div className={classes("column-layout group_23")}>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Build basic site structure</span>
                </p>
                <p className={classes("typography__caption text_2")}>
                  <span>Due: Sept 5th</span>
                </p>
              </div>
              <IgrCheckbox className={classes("user-input")}></IgrCheckbox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
