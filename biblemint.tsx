import React, { useState } from 'react';
import { ChevronRight, Book, Heart, Users, MapPin, User, Home, Target, Church, Volume2, Play, Pause, Search, Bell, Settings, Calendar, Award, Star, Map } from 'lucide-react';

const BibleMintApp = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [selectedPath, setSelectedPath] = useState('');
  const [selectedTab, setSelectedTab] = useState('home');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [selectedBibleVersion, setSelectedBibleVersion] = useState('NIV');
  const [showMapView, setShowMapView] = useState(false);

  // Login Screen
  if (currentScreen === 'login') {
    return (
      <div className="max-w-sm mx-auto bg-gradient-to-b from-amber-50 to-orange-100 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 py-12">
          <div className="w-24 h-24 bg-amber-800 rounded-full flex items-center justify-center mb-8">
            <Book className="w-12 h-12 text-amber-100" />
          </div>
          
          <h1 className="text-4xl font-bold text-amber-900 mb-4 text-center">BibleMint</h1>
          <p className="text-amber-700 text-center mb-12 text-lg leading-relaxed">
            Build lasting spiritual habits with 5-minute daily devotions
          </p>
          
          <div className="w-full space-y-4">
            <button 
              onClick={() => setCurrentScreen('pathSelection')}
              className="w-full bg-white border-2 border-amber-200 rounded-xl py-4 px-6 flex items-center justify-center space-x-3 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-6 h-6 bg-red-500 text-white rounded text-xs flex items-center justify-center font-bold">G</div>
              <span className="text-amber-800 font-medium">Continue with Google</span>
            </button>
            
            <div className="text-center">
              <p className="text-xs text-amber-600">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
        
        <div className="px-8 pb-8">
          <div className="bg-amber-200/50 rounded-xl p-4 text-center">
            <p className="text-amber-800 text-sm">
              "Let the word of Christ dwell in you richly" - Colossians 3:16
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Path Selection Screen
  if (currentScreen === 'pathSelection') {
    const paths = [
      {
        id: 'word',
        title: 'Word Path',
        subtitle: 'Deepen your understanding of Scripture',
        icon: Book,
        description: 'Daily Bible study, verse memorization, and theological insights',
        color: 'bg-blue-100 border-blue-200'
      },
      {
        id: 'prayer',
        title: 'Prayer Path', 
        subtitle: 'Strengthen your prayer life',
        icon: Heart,
        description: 'Guided prayers, meditation, and spiritual disciplines',
        color: 'bg-rose-100 border-rose-200'
      },
      {
        id: 'evangelism',
        title: 'Evangelism Path',
        subtitle: 'Share your faith with others',
        icon: Users,
        description: 'Witnessing techniques, community outreach, and discipleship',
        color: 'bg-green-100 border-green-200'
      }
    ];

    return (
      <div className="max-w-sm mx-auto bg-gradient-to-b from-amber-50 to-orange-100 min-h-screen">
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-2">Choose Your Faith Path</h2>
            <p className="text-amber-700">Select the spiritual journey that resonates with your heart</p>
          </div>
          
          <div className="space-y-4">
            {paths.map((path) => {
              const IconComponent = path.icon;
              return (
                <button
                  key={path.id}
                  onClick={() => {
                    setSelectedPath(path.id);
                    setCurrentScreen('main');
                  }}
                  className={`w-full p-6 rounded-xl border-2 ${path.color} hover:shadow-lg transition-all text-left`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-amber-100" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-amber-900 text-lg mb-1">{path.title}</h3>
                      <p className="text-amber-700 text-sm mb-2">{path.subtitle}</p>
                      <p className="text-amber-600 text-xs">{path.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Main App Screens
  const renderHomeScreen = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-amber-900">Good morning, John</h2>
            <p className="text-amber-700">Day 23 of your spiritual journey</p>
          </div>
          <div className="flex space-x-2">
            <Bell className="w-6 h-6 text-amber-800" />
            <Settings className="w-6 h-6 text-amber-800" />
          </div>
        </div>
        
        {/* Progress Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-amber-800 font-medium">Disciple Tier</span>
            <span className="text-amber-600 text-sm">Level 2/4</span>
          </div>
          <div className="w-full bg-amber-100 rounded-full h-2 mb-2">
            <div className="bg-amber-600 h-2 rounded-full w-3/5"></div>
          </div>
          <p className="text-amber-600 text-xs">Complete 5 more devotions to reach Builder tier</p>
        </div>
      </div>
      
      {/* Today's Devotion */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-amber-900 mb-4">Today's Word Snack</h3>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center">
              <Book className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h4 className="font-bold text-amber-900">Walking in Faith</h4>
              <p className="text-amber-600 text-sm">Hebrews 11:1</p>
            </div>
          </div>
          <p className="text-amber-700 text-sm mb-4">
            "Now faith is confidence in what we hope for and assurance about what we do not see."
          </p>
          <button className="w-full bg-amber-800 text-white py-3 rounded-xl font-medium hover:bg-amber-900 transition-colors">
            Start 5-min Devotion
          </button>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-amber-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 text-center">
              <Calendar className="w-8 h-8 text-amber-800 mx-auto mb-2" />
              <p className="text-amber-800 font-medium text-sm">Prayer Journal</p>
            </button>
            <button className="bg-white p-4 rounded-xl shadow-sm border border-amber-100 text-center">
              <Award className="w-8 h-8 text-amber-800 mx-auto mb-2" />
              <p className="text-amber-800 font-medium text-sm">View Badges</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBibleScreen = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6">
        <h2 className="text-xl font-bold text-amber-900 mb-4">Holy Bible</h2>
        
        {/* Version Selector */}
        <div className="flex space-x-2 mb-4">
          {['NIV', 'ESV'].map((version) => (
            <button
              key={version}
              onClick={() => setSelectedBibleVersion(version)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedBibleVersion === version
                  ? 'bg-amber-800 text-white'
                  : 'bg-white text-amber-800'
              }`}
            >
              {version}
            </button>
          ))}
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-amber-600" />
          <input
            type="text"
            placeholder="Search verses, chapters, or books..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-200 bg-white text-amber-800 placeholder-amber-500"
          />
        </div>
      </div>
      
      {/* Bible Books */}
      <div className="p-6">
        <div className="grid grid-cols-1 gap-3">
          {['Genesis', 'Exodus', 'Psalms', 'Proverbs', 'Matthew', 'John', 'Romans', 'Revelation'].map((book) => (
            <div key={book} className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Book className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <h4 className="font-medium text-amber-900">{book}</h4>
                  <p className="text-amber-600 text-sm">50 chapters</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setAudioPlaying(!audioPlaying)}
                  className="p-2 bg-amber-100 rounded-full"
                >
                  {audioPlaying ? 
                    <Pause className="w-4 h-4 text-amber-800" /> : 
                    <Play className="w-4 h-4 text-amber-800" />
                  }
                </button>
                <ChevronRight className="w-5 h-5 text-amber-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDevotionsScreen = () => (
    <div className="flex-1 overflow-y-auto">
      <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6">
        <h2 className="text-xl font-bold text-amber-900 mb-2">Daily Devotions</h2>
        <p className="text-amber-700">Your 5-minute spiritual moments</p>
      </div>
      
      <div className="p-6 space-y-4">
        {[
          { title: 'Walking in Faith', verse: 'Hebrews 11:1', completed: false, today: true },
          { title: 'Love Your Neighbor', verse: 'Mark 12:31', completed: true, today: false },
          { title: 'God\'s Grace', verse: 'Ephesians 2:8', completed: true, today: false }
        ].map((devotion, index) => (
          <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border ${devotion.today ? 'border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50' : 'border-amber-100'}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-bold text-amber-900">{devotion.title}</h4>
                  {devotion.today && <span className="bg-amber-800 text-white text-xs px-2 py-1 rounded-full">Today</span>}
                </div>
                <p className="text-amber-600 text-sm mb-3">{devotion.verse}</p>
                <button className={`px-4 py-2 rounded-full text-sm font-medium ${
                  devotion.completed 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-amber-800 text-white'
                }`}>
                  {devotion.completed ? 'Completed' : 'Start Devotion'}
                </button>
              </div>
              <div className="ml-4">
                {devotion.completed && <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMissionsScreen = () => {
    const faithMissions = [
      { title: 'Prayer Warrior', description: 'Pray for 7 consecutive days', progress: 5, total: 7, reward: '50 XP' },
      { title: 'Scripture Memory', description: 'Memorize 3 verses this week', progress: 1, total: 3, reward: 'Memory Badge' },
      { title: 'Worship Leader', description: 'Lead family devotions 3 times', progress: 2, total: 3, reward: 'Leadership Badge' },
      { title: 'Fasting & Prayer', description: 'Complete a 24-hour fast', progress: 0, total: 1, reward: 'Discipline Badge' }
    ];

    const otherMissions = [
      { title: 'Acts of Kindness', description: 'Perform 5 acts of service', progress: 3, total: 5, reward: 'Servant Badge' },
      { title: 'Share the Gospel', description: 'Share your testimony with 2 people', progress: 1, total: 2, reward: 'Evangelist Badge' },
      { title: 'Community Helper', description: 'Volunteer 10 hours this month', progress: 6, total: 10, reward: '100 XP' },
      { title: 'Encourager', description: 'Send 5 encouraging messages', progress: 4, total: 5, reward: 'Heart Badge' }
    ];

    return (
      <div className="flex-1 overflow-y-auto">
        <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6">
          <h2 className="text-xl font-bold text-amber-900 mb-2">Missions</h2>
          <p className="text-amber-700">Complete challenges to grow in faith</p>
        </div>
        
        <div className="p-6">
          {/* Faith Missions Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-blue-800" />
              </div>
              <h3 className="text-lg font-bold text-amber-900">Faith Missions</h3>
            </div>
            <p className="text-amber-600 text-sm mb-4">Spiritual disciplines and faith practices</p>
            
            <div className="space-y-4">
              {faithMissions.map((mission, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-400 border border-amber-100">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-amber-900">{mission.title}</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{mission.reward}</span>
                  </div>
                  <p className="text-amber-600 text-sm mb-3">{mission.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="w-full bg-blue-100 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(mission.progress / mission.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm">{mission.progress}/{mission.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Missions Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-green-800" />
              </div>
              <h3 className="text-lg font-bold text-amber-900">Other Missions</h3>
            </div>
            <p className="text-amber-600 text-sm mb-4">Community service and outreach activities</p>
            
            <div className="space-y-4">
              {otherMissions.map((mission, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-400 border border-amber-100">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-amber-900">{mission.title}</h4>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{mission.reward}</span>
                  </div>
                  <p className="text-amber-600 text-sm mb-3">{mission.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="w-full bg-green-100 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all"
                          style={{ width: `${(mission.progress / mission.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-green-600 text-sm">{mission.progress}/{mission.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderChurchScreen = () => {
    if (showMapView) {
      return (
        <div className="flex-1 overflow-y-auto">
          <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-amber-900 mb-2">Churches Near You</h2>
                <p className="text-amber-700">Find local churches in your area</p>
              </div>
              <button 
                onClick={() => setShowMapView(false)}
                className="bg-white p-2 rounded-full shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-amber-800 transform rotate-180" />
              </button>
            </div>
          </div>
          
          {/* Map View */}
          <div className="p-6">
            {/* Map Container */}
            <div className="bg-green-50 rounded-xl h-64 mb-6 relative overflow-hidden border border-green-200">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <Map className="w-12 h-12 text-green-600 mx-auto mb-2" />
                  <p className="text-green-700 font-medium">Interactive Map View</p>
                  <p className="text-green-600 text-sm">Showing 8 churches nearby</p>
                </div>
              </div>
              
              {/* Church Markers */}
              <div className="absolute top-8 left-12 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              <div className="absolute top-16 right-16 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute bottom-20 left-8 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute bottom-12 right-12 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            
            {/* Nearby Churches List */}
            <div className="space-y-3">
              {[
                { name: 'Grace Community Church', address: '123 Faith Street', distance: '0.5 miles', service: 'Sunday 10:00 AM', members: 450 },
                { name: 'New Hope Baptist', address: '456 Hope Avenue', distance: '1.2 miles', service: 'Sunday 9:30 AM', members: 320 },
                { name: 'Trinity Methodist', address: '789 Trinity Road', distance: '2.1 miles', service: 'Sunday 11:00 AM', members: 280 },
                { name: 'Faith Bible Church', address: '321 Gospel Lane', distance: '2.8 miles', service: 'Sunday 9:00 AM', members: 180 }
              ].map((church, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-bold text-amber-900">{church.name}</h4>
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">{church.members} members</span>
                      </div>
                      <p className="text-amber-600 text-sm mb-1">{church.address}</p>
                      <p className="text-amber-500 text-xs mb-2">{church.distance} • {church.service}</p>
                      <div className="flex space-x-2">
                        <button className="bg-amber-800 text-white px-3 py-1 rounded-full text-xs">Visit Website</button>
                        <button className="border border-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs">Get Directions</button>
                      </div>
                    </div>
                    <div className="ml-4">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex-1 overflow-y-auto">
        <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-amber-900 mb-2">Virtual Church</h2>
              <p className="text-amber-700">Join online communities and worship together</p>
            </div>
            <button 
              onClick={() => setShowMapView(true)}
              className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all"
              title="Find churches nearby"
            >
              <MapPin className="w-6 h-6 text-amber-800" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {/* My Church Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-amber-900 mb-4">My Church Community</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-amber-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center">
                    <Church className="w-6 h-6 text-amber-100" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900">Grace Fellowship Online</h4>
                    <p className="text-amber-600 text-sm">2,847 members</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
              </div>
              <p className="text-amber-700 text-sm mb-4">
                A vibrant community of believers growing together in faith and fellowship
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-amber-800 text-white px-4 py-2 rounded-xl text-sm font-medium">
                  Join Live Service
                </button>
                <button className="border border-amber-200 text-amber-800 px-4 py-2 rounded-xl text-sm font-medium">
                  Church Chat
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Services */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-amber-900 mb-4">Upcoming Services</h3>
            <div className="space-y-3">
              {[
                { title: 'Sunday Worship', time: 'Today 10:00 AM', pastor: 'Pastor John', attendees: 156, live: true },
                { title: 'Wednesday Bible Study', time: 'Wed 7:00 PM', pastor: 'Pastor Sarah', attendees: 89, live: false },
                { title: 'Friday Youth Service', time: 'Fri 6:30 PM', pastor: 'Pastor Mike', attendees: 45, live: false }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-amber-900">{service.title}</h4>
                      {service.live && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">LIVE</span>}
                    </div>
                    <span className="text-amber-500 text-xs">{service.attendees} attending</span>
                  </div>
                  <p className="text-amber-600 text-sm mb-1">{service.time} • {service.pastor}</p>
                  <button className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                    service.live 
                      ? 'bg-red-500 text-white' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {service.live ? 'Join Now' : 'Set Reminder'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Discover Churches */}
          <div>
            <h3 className="text-lg font-bold text-amber-900 mb-4">Discover Communities</h3>
            <div className="space-y-3">
              {[
                { name: 'Hope City Virtual', members: '5,234', focus: 'Contemporary Worship', denomination: 'Non-denominational' },
                { name: 'Faith Bridge Online', members: '3,891', focus: 'Expository Teaching', denomination: 'Baptist' },
                { name: 'New Life Digital Church', members: '2,156', focus: 'Youth & Families', denomination: 'Methodist' },
                { name: 'Cornerstone Connect', members: '1,847', focus: 'Prayer & Healing', denomination: 'Pentecostal' }
              ].map((church, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-bold text-amber-900">{church.name}</h4>
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">{church.members} members</span>
                      </div>
                      <p className="text-amber-600 text-sm mb-1">{church.focus} • {church.denomination}</p>
                      <div className="flex space-x-2 mt-2">
                        <button className="bg-amber-800 text-white px-3 py-1 rounded-full text-xs">Join Community</button>
                        <button className="border border-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs">Visit</button>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                        <Church className="w-4 h-4 text-amber-800" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCommunityScreen = () => (
    <div className="flex-1 overflow-y-auto">
      <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6">
        <h2 className="text-xl font-bold text-amber-900 mb-2">Community</h2>
        <p className="text-amber-700">Connect with fellow believers</p>
      </div>
      
      <div className="p-6">
        {/* Guild Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-900 mb-4">Your Guild: Word Guild</h3>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Book className="w-6 h-6 text-blue-800" />
              </div>
              <div>
                <h4 className="font-bold text-amber-900">Word Guild</h4>
                <p className="text-amber-600 text-sm">47 active members</p>
              </div>
            </div>
            <p className="text-amber-700 text-sm mb-4">This week's challenge: Read through the book of James together</p>
            <button className="w-full bg-blue-800 text-white py-3 rounded-xl font-medium">View Guild Activity</button>
          </div>
        </div>

        {/* Guild Leaderboard */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-amber-100" />
            </div>
            <h3 className="text-lg font-bold text-amber-900">Guild Leaderboard</h3>
          </div>
          <p className="text-amber-600 text-sm mb-4">Top performers in Word Guild this week</p>
          
          <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
            {[
              { rank: 1, name: 'Sarah M.', xp: 450, avatar: '👩‍🦰', streak: 7, isCurrentUser: false },
              { rank: 2, name: 'You', xp: 420, avatar: '👤', streak: 5, isCurrentUser: true },
              { rank: 3, name: 'David K.', xp: 380, avatar: '👨‍🦱', streak: 6, isCurrentUser: false },
              { rank: 4, name: 'Rachel P.', xp: 350, avatar: '👩‍🦳', streak: 4, isCurrentUser: false },
              { rank: 5, name: 'Michael J.', xp: 320, avatar: '👨‍🦲', streak: 3, isCurrentUser: false }
            ].map((member, index) => (
              <div key={index} className={`p-4 flex items-center justify-between ${
                member.isCurrentUser ? 'bg-amber-50 border-l-4 border-amber-400' : ''
              } ${index !== 4 ? 'border-b border-amber-100' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    member.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                    member.rank === 2 ? 'bg-gray-100 text-gray-800' :
                    member.rank === 3 ? 'bg-orange-100 text-orange-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {member.rank}
                  </div>
                  <div className="text-2xl">{member.avatar}</div>
                  <div>
                    <h5 className={`font-medium ${member.isCurrentUser ? 'text-amber-900 font-bold' : 'text-amber-900'}`}>
                      {member.name}
                    </h5>
                    <p className="text-amber-600 text-xs">{member.streak} day streak</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${member.isCurrentUser ? 'text-amber-900' : 'text-amber-800'}`}>
                    {member.xp} XP
                  </div>
                  {member.rank <= 3 && (
                    <div className="text-xs">
                      {member.rank === 1 ? '🥇' : member.rank === 2 ? '🥈' : '🥉'}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-3 text-center">
            <button className="text-amber-800 text-sm font-medium">View Full Leaderboard</button>
          </div>
        </div>
        
        {/* Prayer Requests */}
        <div>
          <h3 className="text-lg font-bold text-amber-900 mb-4">Prayer Requests</h3>
          <div className="space-y-3">
            {[
              { name: 'Sarah M.', request: 'Please pray for my job interview tomorrow', time: '2h ago' },
              { name: 'David K.', request: 'Prayers for my grandmother\'s health', time: '5h ago' }
            ].map((prayer, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-medium text-amber-900">{prayer.name}</h5>
                  <span className="text-amber-500 text-xs">{prayer.time}</span>
                </div>
                <p className="text-amber-700 text-sm mb-3">{prayer.request}</p>
                <button className="text-amber-800 text-sm font-medium">🙏 Pray for this</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileScreen = () => (
    <div className="flex-1 overflow-y-auto">
      <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-amber-100" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-amber-900">John Doe</h2>
            <p className="text-amber-700">Disciple • Day 23</p>
            <p className="text-amber-600 text-sm">Word Path Traveler</p>
          </div>
        </div>
        
        {/* Faith XP Balance */}
        <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-amber-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-amber-900">Faith XP Balance</h3>
                <p className="text-amber-600 text-sm">Experience Points</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-amber-900">1,847</div>
              <div className="text-amber-600 text-xs">+50 today</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <div className="text-2xl font-bold text-amber-900">23</div>
            <div className="text-amber-600 text-xs">Days Active</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <div className="text-2xl font-bold text-amber-900">18</div>
            <div className="text-amber-600 text-xs">Devotions</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <div className="text-2xl font-bold text-amber-900">5</div>
            <div className="text-amber-600 text-xs">Badges</div>
          </div>
        </div>
        
        {/* Badges */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-900 mb-4">Earned Badges</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: 'First Step', icon: '🎯' },
              { name: 'Week Warrior', icon: '⚡' },
              { name: 'Scripture Seeker', icon: '📖' },
              { name: 'Prayer Partner', icon: '🙏' },
              { name: 'Community Builder', icon: '🤝' }
            ].map((badge, index) => (
              <div key={index} className="bg-white rounded-xl p-3 text-center shadow-sm border border-amber-100">
                <div className="text-2xl mb-1">{badge.icon}</div>
                <div className="text-amber-800 text-xs font-medium">{badge.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prayer Request Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-900 mb-4">Prayer Support</h3>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-amber-900">Make a Prayer Request</h4>
                <p className="text-amber-600 text-sm">Share your need with the community</p>
              </div>
            </div>
            <p className="text-amber-700 text-sm mb-4">
              Submit a prayer request to receive support from fellow believers in your guild and community.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-600" />
                <span className="text-amber-800 font-medium text-sm">Cost: 500 Faith XP</span>
              </div>
              <div className="text-amber-600 text-xs">
                {1847 >= 500 ? '✓ Available' : '✗ Insufficient XP'}
              </div>
            </div>
            <button 
              className={`w-full py-3 rounded-xl font-medium transition-colors ${
                1847 >= 500 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={1847 < 500}
            >
              {1847 >= 500 ? 'Submit Prayer Request' : 'Need More Faith XP'}
            </button>
          </div>
        </div>
        
        {/* Settings */}
        <div className="space-y-2">
          {['Notifications', 'Privacy Settings', 'Support', 'About'].map((item) => (
            <button key={item} className="w-full bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-amber-100">
              <span className="text-amber-900 font-medium">{item}</span>
              <ChevronRight className="w-5 h-5 text-amber-600" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrentScreen = () => {
    switch(selectedTab) {
      case 'home': return renderHomeScreen();
      case 'bible': return renderBibleScreen();
      case 'devotions': return renderDevotionsScreen();
      case 'missions': return renderMissionsScreen();
      case 'church': return renderChurchScreen();
      case 'community': return renderCommunityScreen();
      case 'profile': return renderProfileScreen();
      default: return renderHomeScreen();
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-amber-50 min-h-screen flex flex-col">
      {renderCurrentScreen()}
      
      {/* Bottom Navigation */}
      <div className="bg-white border-t border-amber-200 px-2 py-2">
        <div className="flex justify-around">
          {[
            { id: 'home', icon: Home, label: 'Home' },
            { id: 'bible', icon: Book, label: 'Bible' },
            { id: 'devotions', icon: Heart, label: 'Devotions' },
            { id: 'missions', icon: Target, label: 'Missions' },
            { id: 'church', icon: Church, label: 'Church' },
            { id: 'community', icon: Users, label: 'Community' },
            { id: 'profile', icon: User, label: 'Profile' }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex flex-col items-center py-2 px-1 min-w-0 ${
                  selectedTab === tab.id ? 'text-amber-800' : 'text-amber-400'
                }`}
              >
                <IconComponent className="w-5 h-5 mb-1" />
                <span className="text-xs truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BibleMintApp;