import './App.css';
function App() {
  return (
    <div className="ui">
      
      <div className='header'>
        <div  className='headLeft'>
          <img className='logo' alt='LoGo' src={require("./images/logo.png")}></img></div>
        <div className='headRight'>
              <img className='hRightItems' id='HIcon' src={require("./images/notifi.jfif")}></img>
              
              <div className='hRightItems' id='avatar'>
                  <img id='HIcon' className='avatarItems' src={require("./images/avatar.png")}></img>
                  <div  className='avatarItems'  id='aText'>
                    <h4 className='avatarText'>Nithin josh</h4>
                    <p className='avatarText'>Welcome!</p>
                  </div>
              </div>
              
              <img className='hRightItems' id='HIcon' src={require("./images/setting.jfif")}></img>
        </div>
        
      </div>

              {/* ----------------------------------- NavBar----------------------------------- */}
      
                <div id="topNav">
                    
                    <div style={{background:'#01B8F1',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} className="navItems" id="leads">
                            <img id='navIcon' src={require("./images/leads.png")}></img>
                              <div id='navItemText'>
                                <h4   className='navText'>Leads</h4>
                                <p className='navText'>12 leads are pending</p>
                              </div>
                          </div>
                          
                      < div className="navItems" id="accounts">
                        <img id='navIcon' src={require("./images/account.png")}></img>
                          <div id='navItemText'>
                            <h4 className='navText'>Accounts</h4>
                            <p className='navText'>10 active accounts</p>
                          </div>
                      </div>
                    
                      <div className="navItems" id="contact">
                        <img id='navIcon' src={require("./images/contact.png")}></img>
                          <div id='navItemText'>
                            <h4 className='navText'>Contacts</h4>
                            <p className='navText'>10 active users</p>
                          </div>
                      </div>
                  
                      <div className="navItems" id="tasks">
                        <img id='navIcon' src={require("./images/task.png")}></img>
                          <div id='navItemText'>
                            <h4 className='navText'>Tasks</h4>
                            <p className='navText'>25 taks are pending</p>
                          </div>
                      </div>

                </div>
                
                <div id='mainPage'>
        
                <div id='mainPageNav'>
                  
                  <button className='mainNav'>All leads</button><img id='cancelBtn1' src={require("./images/cancel.jfif")}></img>
                  <button className='otherNav'>Add new leads</button><img id='cancelBtn2' src={require("./images/cancel.jfif")}></img>
                  <button className='otherNav'>Edit lead - Aag</button><img id='cancelBtn2' src={require("./images/cancel.jfif")}></img>

                </div>

                <div id='mainPageHeader'>
                  
                    <div id='mainHLeft'>
                      <h2>All Leads</h2>
                      <p>from 20 September to 20 December 2021</p>
                    </div>

                    <div id='mainHRight'>
                            
                              <div className='mHRItems' id='searchItems'>
                                  <input id='searchBar' placeholder='Search a lead ..'></input>
                                  <img id='searchIcon' src={require('./images/search.png')}></img>
                              </div>

                              <div className='mHRItems'>
                                  <button id='optionBtn'>All Leads <img id='arrow' src={require("./images/arrow.png")}></img></button>
                                  
                              </div>
                          
                              <div className='mHRItems'>    
                                <img id='xtraIcon' src={require('./images/tri.png')}></img>
                              </div>

                              <div className='mHRItems'>    
                                <img id='xtraIcon' src={require('./images/shr.png')}></img>
                              </div>

                              <div className='mHRItems'>
                                <button id='addBtn'>
                                  <img id='addIcon' src={require('./images/addbtn.png')}></img><p>Add new</p>
                                </button>
                              </div>

                    </div>
                    <div>
                      
                    </div>

                </div>
    
                <div className='table'>
                
                        <div className='heading'></div>
                        <div className='heading'>Company details</div>
                        <div className='heading'>Project tag</div>
                        <div className='heading'>Contact person</div>
                        <div className='heading'>Status</div>
                        <div className='heading'>Follow-up date</div>
                        <div className='heading'>Action</div>
                </div>
                              <div className='tableRow'>
                              
                                      <div className='rows'>
                                        <div>
                                            <img id='tAvatar' className='avatarItems' src={require("./images/avatar.png")}></img>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                        <div id='des'>
                                            <h4>Try jobs private limited</h4>
                                            <p>Location: Coimbatore, Tamilnadu Created: 20 Dec 2021</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                            <div id='pTag'>
                                              <h4>CRM</h4>
                                            </div>
                                      </div>
                                      
                                      <div className='rows'>
                                        <div id='cntPer'>
                                          <h4>Ramcharan</h4>
                                          <p>Contact: 9800465478</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tStatus'>
                                            <div id='bcircle'></div>
                                            <h4>New</h4>
                                            <p>status key word</p>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tDate'>
                                              <h4>20 Jan 2022</h4>
                                              <p>4 days left</p>
                                            </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='actionIcon'>
                                            <img id='acIcon' className='action' src={require("./images/call.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/calendar.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/oDot.png")}></img>
                                          </div>
                                      </div>
                              </div>
                              
                              <div className='tableRow'>
                              
                                      <div className='rows'>
                                        <div>
                                            <img id='tAvatar' className='avatarItems' src={require("./images/avatar.png")}></img>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                        <div id='des'>
                                            <h4>Aagnia Technology private limited</h4>
                                            <p>Location: Coimbatore, Tamilnadu Created: 20 Dec 2021</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                            <div id='pTag'>
                                              <h4>Ecommerce</h4>
                                            </div>
                                      </div>
                                      
                                      <div className='rows'>
                                        <div id='cntPer'>
                                          <h4>Karthikeyan</h4>
                                          <p>Contact: 9800465478</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tStatus'>
                                            <div id='rcircle'></div>
                                            <h4>Hot</h4>
                                            <p>status key word</p>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tDate'>
                                              <h4>25 Jan 2022</h4>
                                              <p>4 days left</p>
                                            </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='actionIcon'>
                                            <img id='acIcon' className='action' src={require("./images/call.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/calendar.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/oDot.png")}></img>
                                          </div>
                                      </div>
                              </div>
                              
                              <div className='tableRow'>
                              
                                      <div className='rows'>
                                        <div>
                                            <img id='tAvatar' className='avatarItems' src={require("./images/avatar.png")}></img>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                        <div id='des'>
                                            <h4>Try jobs private limited</h4>
                                            <p>Location: Coimbatore, Tamilnadu Created: 20 Dec 2021</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                            <div id='pTag'>
                                              <h4>CRM</h4>
                                            </div>
                                      </div>
                                      
                                      <div className='rows'>
                                        <div id='cntPer'>
                                          <h4>Ramcharan</h4>
                                          <p>Contact: 9800465478</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tStatus'>
                                            <div id='graycircle'></div>
                                            <h4>Lost</h4>
                                            <p>status key word</p>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tDate'>
                                              <h4>20 Jan 2022</h4>
                                              <p>4 days left</p>
                                            </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='actionIcon'>
                                            <img id='acIcon' className='action' src={require("./images/call.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/calendar.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/oDot.png")}></img>
                                          </div>
                                      </div>
                              </div>

                              <div className='tableRow'>
                              
                                      <div className='rows'>
                                        <div>
                                            <img id='tAvatar' className='avatarItems' src={require("./images/avatar.png")}></img>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                        <div id='des'>
                                            <h4>Aagnia Technology private limited</h4>
                                            <p>Location: Coimbatore, Tamilnadu Created: 20 Dec 2021</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                            <div id='pTag'>
                                              <h4>Ecommerce</h4>
                                            </div>
                                      </div>
                                      
                                      <div className='rows'>
                                        <div id='cntPer'>
                                          <h4>Karthikeyan</h4>
                                          <p>Contact: 9800465478</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tStatus'>
                                            <div id='greencircle'></div>
                                            <h4>Won</h4>
                                            <p>status key word</p>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tDate'>
                                              <h4>25 Jan 2022</h4>
                                              <p>4 days left</p>
                                            </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='actionIcon'>
                                            <img id='acIcon' className='action' src={require("./images/call.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/calendar.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/oDot.png")}></img>
                                          </div>
                                      </div>
                              </div>

                              <div className='tableRow'>
                              
                                      <div className='rows'>
                                        <div>
                                            <img id='tAvatar' className='avatarItems' src={require("./images/avatar.png")}></img>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                        <div id='des'>
                                            <h4>Try jobs private limited</h4>
                                            <p>Location: Coimbatore, Tamilnadu Created: 20 Dec 2021</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                            <div id='pTag'>
                                              <h4>CRM</h4>
                                            </div>
                                      </div>
                                      
                                      <div className='rows'>
                                        <div id='cntPer'>
                                          <h4>Ramcharan</h4>
                                          <p>Contact: 9800465478</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tStatus'>
                                            <div id='bcircle'></div>
                                            <h4>New</h4>
                                            <p>status key word</p>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tDate'>
                                              <h4>20 Jan 2022</h4>
                                              <p>4 days left</p>
                                            </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='actionIcon'>
                                            <img id='acIcon' className='action' src={require("./images/call.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/calendar.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/oDot.png")}></img>
                                          </div>
                                      </div>
                              </div>

                              <div className='tableRow'>
                              
                                      <div className='rows'>
                                        <div>
                                            <img id='tAvatar' className='avatarItems' src={require("./images/avatar.png")}></img>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                        <div id='des'>
                                            <h4>Aagnia Technology private limited</h4>
                                            <p>Location: Coimbatore, Tamilnadu Created: 20 Dec 2021</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                            <div id='pTag'>
                                              <h4>Ecommerce</h4>
                                            </div>
                                      </div>
                                      
                                      <div className='rows'>
                                        <div id='cntPer'>
                                          <h4>Karthikeyan</h4>
                                          <p>Contact: 9800465478</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tStatus'>
                                            <div id='rcircle'></div>
                                            <h4>Hot</h4>
                                            <p>status key word</p>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tDate'>
                                              <h4>25 Jan 2022</h4>
                                              <p>4 days left</p>
                                            </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='actionIcon'>
                                            <img id='acIcon' className='action' src={require("./images/call.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/calendar.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/oDot.png")}></img>
                                          </div>
                                      </div>
                              </div>

                              <div className='tableRow'>
                              
                                      <div className='rows'>
                                        <div>
                                            <img id='tAvatar' className='avatarItems' src={require("./images/avatar.png")}></img>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                        <div id='des'>
                                            <h4>Try jobs private limited</h4>
                                            <p>Location: Coimbatore, Tamilnadu Created: 20 Dec 2021</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                            <div id='pTag'>
                                              <h4>CRM</h4>
                                            </div>
                                      </div>
                                      
                                      <div className='rows'>
                                        <div id='cntPer'>
                                          <h4>Ramcharan</h4>
                                          <p>Contact: 9800465478</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tStatus'>
                                            <div id='graycircle'></div>
                                            <h4>Lost</h4>
                                            <p>status key word</p>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tDate'>
                                              <h4>20 Jan 2022</h4>
                                              <p>4 days left</p>
                                            </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='actionIcon'>
                                            <img id='acIcon' className='action' src={require("./images/call.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/calendar.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/oDot.png")}></img>
                                          </div>
                                      </div>
                              </div>

                              <div className='tableRow'>
                              
                                      <div className='rows'>
                                        <div>
                                            <img id='tAvatar' className='avatarItems' src={require("./images/avatar.png")}></img>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                        <div id='des'>
                                            <h4>Aagnia Technology private limited</h4>
                                            <p>Location: Coimbatore, Tamilnadu Created: 20 Dec 2021</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                            <div id='pTag'>
                                              <h4>Ecommerce</h4>
                                            </div>
                                      </div>
                                      
                                      <div className='rows'>
                                        <div id='cntPer'>
                                          <h4>Karthikeyan</h4>
                                          <p>Contact: 9800465478</p>
                                        </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tStatus'>
                                            <div id='greencircle'></div>
                                            <h4>Won</h4>
                                            <p>status key word</p>
                                          </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='tDate'>
                                              <h4>25 Jan 2022</h4>
                                              <p>4 days left</p>
                                            </div>
                                      </div>

                                      <div className='rows'>
                                          <div id='actionIcon'>
                                            <img id='acIcon' className='action' src={require("./images/call.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/calendar.png")}></img>
                                            <img id='acIcon' className='action' src={require("./images/oDot.png")}></img>
                                          </div>
                                      </div>
                              </div>

                              <div id='loadBtn'>
                                <button>Load More</button>
                              </div>
              
               </div>

    </div>
  );
}

export default App;
