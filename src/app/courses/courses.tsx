import { IgrAccordion, IgrAccordionModule, IgrAvatar, IgrAvatarModule, IgrChip, IgrChipModule, IgrExpansionPanel, IgrExpansionPanelModule, IgrList, IgrListItem, IgrListModule, IgrRating, IgrRatingModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import { useGetAllCoursesList } from '../hooks/learning-app-hooks';
import styles from './courses.module.css';
import createClassTransformer from '../style-utils';

IgrAccordionModule.register();
IgrAvatarModule.register();
IgrChipModule.register();
IgrExpansionPanelModule.register();
IgrListModule.register();
IgrRatingModule.register();

export default function Courses() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<number | undefined>(4);
  const { learningAppAllCourses, setLearningAppAllCourses: setLearningAppAllCourses } = useGetAllCoursesList();

  return (
    <>
      <div className={classes("row-layout courses-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <h6 className={classes("content")}>
              <span>Courses</span>
            </h6>
            <IgrList className={classes("list")}>
              {learningAppAllCourses?.map((item) => (
                <IgrListItem key={uuid()}>
                  <div key={uuid()}>
                    <div className={classes("row-layout group_2")} key={uuid()}>
                      <img src={item.Image} className={classes("image")} />
                      <div className={classes("column-layout group_3")}>
                        <p className={classes("typography__subtitle-2 content")}>
                          <span>{item.Course}</span>
                        </p>
                        <p className={classes("typography__caption text")}>
                          <span>{item.Intro}</span>
                        </p>
                        <div className={classes("row-layout group_4")}>
                          <IgrRating value={item.Rating} size="small" change={(_c, e) => { item.Rating = e.detail; setLearningAppAllCourses([...learningAppAllCourses]); }} className={classes("rating")}></IgrRating>
                          <IgrChip size="large" className={classes("chip")}>
                            <span key={uuid()}>{item.Level}</span>
                          </IgrChip>
                          <IgrChip size="large" className={classes("chip")}>
                            <span key={uuid()}>{item.Tag}</span>
                          </IgrChip>
                        </div>
                      </div>
                    </div>
                  </div>
                </IgrListItem>
              ))}
            </IgrList>
          </div>
        </div>
        <div className={classes("row-layout group_5")}>
          <div className={classes("column-layout group_6")}>
            <div className={classes("row-layout group_7")}>
              <img src="/src/assets/course1.svg" className={classes("image_1")} />
              <div className={classes("column-layout group_8")}>
                <h5 className={classes("h5")}>
                  <span>Web Development Basics</span>
                </h5>
                <div className={classes("row-layout group_9")}>
                  <IgrRating size="medium" value={value} change={(_c, e) => setValue(e.detail)} className={classes("rating")}></IgrRating>
                  <IgrChip size="large" className={classes("chip")}>
                    <span key={uuid()}>Beginner</span>
                  </IgrChip>
                  <IgrChip size="large" className={classes("chip")}>
                    <span key={uuid()}>Front-end</span>
                  </IgrChip>
                </div>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__body-2 text")}>
                    <span>HTML, CSS, and JavaScript: The basics of web development. If you’re looking to get started on front-end development, this course is for you. You'll find it particularly useful if you're coming from some other area of software development. </span>
                  </p>
                  <p className={classes("typography__body-2 text")}>
                    <span>We will then dive deep into each technology, exploring concepts like forms and controls in HTML, OOP in JavaScript, and the most important CSS patterns to make your web pages look good.</span>
                  </p>
                </div>
                <div className={classes("row-layout group_11")}>
                  <IgrAvatar src="/src/assets/Avatar14.png" size="medium" shape="circle" className={classes("avatar avatar_1")}></IgrAvatar>
                  <div className={classes("column-layout group_12")}>
                    <p className={classes("typography__subtitle-2 content")}>
                      <span>Susy Berenson</span>
                    </p>
                    <p className={classes("typography__body-2 text_1")}>
                      <span>Senior Full-Stack Dev.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes("row-layout group_13")}>
              <h6 className={classes("content")}>
                <span>Course Content</span>
              </h6>
              <div className={classes("row-layout group_14")}>
                <span className={classes("material-icons icon")}>
                  <span key={uuid()}>book</span>
                </span>
                <p className={classes("typography__body-1 text_2")}>
                  <span>40 lectures</span>
                </p>
                <span className={classes("material-icons icon")}>
                  <span key={uuid()}>access_time</span>
                </span>
                <p className={classes("typography__body-1 content")}>
                  <span>8 hours</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_15")}>
              <IgrAccordion singleExpand="true" className={classes("accordion")}>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_1")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Welcome to Web Development Basics</div>
                      <span slot="end" className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_2")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Downloadable Course Resources</div>
                      <span slot="end" className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_3")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Setup and Software Requirements</div>
                      <span slot="end" className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Quick Introduction</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_4")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Getting to Know HTML Tags</div>
                      <span slot="end" className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_5")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Viewing HTML Tags in Page Source</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_6")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Components and Structure of a Website</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_7")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Adding Tag Attributes</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Basics of HTML Elements</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_8")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Setting Up a Basic HTML Page</div>
                      <span slot="end" className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_9")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Creating Links and Formatting Text</div>
                      <span slot="end" className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>check_circle</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_10")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Adding Basic Page Content</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_11")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Browser Favicon</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Creating an HTML Page</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_12")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>CSS Basics - Part 1</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_13")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>CSS Basics - Part 2</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_14")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Getting Started with External CSS</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_15")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Common CSS Properties</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_16")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Setting Colors with CSS</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Basic Styling with CSS</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_17")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Adding Paragraphs</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_18")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Creating Line Breaks</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_19")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Working with Headings</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_20")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Good Practices</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Paragraph and Heading Tags</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_21")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Inserting Images With the &lt;img&gt; Tag</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_22")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Image Attributes</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_23")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Image Formatting</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Working With Images</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_24")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Creating an Unordered List</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_25")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Unordered List Sub-Levels</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_26")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Creating an Ordered List</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_27")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Formating Lists</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Ordered and Unordered Lists</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_28")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Basics of HTML Tables &amp; Examples</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_29")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Creating a Basic HTML Table</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_30")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Creating a Basic HTML Table</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_31")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Additional Table Formatting</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Creating HTML Tables</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_32")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Introduction to Forms</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_33")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Creating HTML Input Text Controls</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_34")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Creating HTML Form Labels</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_35")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Adding an HTML Form Button to Submit Form Data</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Creating Forms</span>
                </IgrExpansionPanel>
                <IgrExpansionPanel key={uuid()}>
                  <IgrList className={classes("list_1")} key={uuid()}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_36")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Static vs. Dynamic Webpages</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_37")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>JavaScript Basics: Fundamental Syntax</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_38")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Using Alerts and Prompts</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_39")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Events</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_1_40")}>
                          <span className={classes("material-icons icon_1")} key={uuid()}>
                            <span key={uuid()}>play_circle_outline</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Testing JavaScript</div>
                      <span slot="end" className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>playlist_play</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                  <span slot="title" key={uuid()}>Introduction to JavaScript</span>
                </IgrExpansionPanel>
              </IgrAccordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
