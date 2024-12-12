import React, { useState } from 'react';
import { 
  Waves, Lightbulb, Sprout, Compass, Heart,
  ArrowRight, ChevronDown, Sun, 
  Target, Milestone, Home, 
  Droplets, Wind, Flower
} from 'lucide-react';

const OsmoticLeadershipPlatform = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Metaphor animations and interactions
  const [lighthouseActive, setLighthouseActive] = useState(false);
  const [gardenActive, setGardenActive] = useState(false);
  const [flowActive, setFlowActive] = useState(false);

  const sections = {
    'overview': 'The Leadership Revolution',
    'selfrich': 'self-RICH',
    'bfree': 'B-FREE',
    'practice': 'Daily Practices',
    'impact': 'Measurable Impact'
  };

  // Interactive case studies
  const caseStudies = [
    {
      title: "From Force to Flow",
      description: "How a Fortune 500 executive transformed team dynamics",
      metrics: {
        before: { engagement: 45, turnover: 28, satisfaction: 62 },
        after: { engagement: 89, turnover: 8, satisfaction: 94 }
      }
    },
    {
      title: "The Power of Presence",
      description: "Startup founder's journey to authentic leadership",
      metrics: {
        before: { growth: 12, culture: 58, innovation: 43 },
        after: { growth: 67, culture: 92, innovation: 88 }
      }
    }
  ];

  // Leadership archetypes for comparison
  const leadershipStyles = [
    {
      type: "Traditional",
      approach: "Force & Control",
      outcome: "Resistance & Burnout",
      icon: <Target className="w-6 h-6" />
    },
    {
      type: "Servant",
      approach: "Support & Enable",
      outcome: "Dependence & Depletion",
      icon: <Heart className="w-6 h-6" />
    },
    {
      type: "Osmotic",
      approach: "Presence & Flow",
      outcome: "Natural Evolution & Energy",
      icon: <Waves className="w-6 h-6" />
    }
  ];

  const MetaphorCard = ({ title, icon, description, active, onClick }) => (
    <div 
      className={`p-6 rounded-lg transition-all duration-500 cursor-pointer
        ${active ? 'bg-blue-100 shadow-lg scale-105' : 'bg-gray-50 hover:bg-blue-50'}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      {active && (
        <div className="mt-4 text-sm">
          <h4 className="font-bold mb-2">Key Elements:</h4>
          <ul className="list-disc pl-4 space-y-1">
            {title === "The Lighthouse" && [
              "Unwavering presence",
              "Natural guidance",
              "Steady illumination",
              "Far-reaching impact"
            ].map(item => <li key={item}>{item}</li>)}
            {title === "The Gardener" && [
              "Patient cultivation",
              "Optimal conditions",
              "Natural timing",
              "Organic growth"
            ].map(item => <li key={item}>{item}</li>)}
            {title === "The Flow" && [
              "Effortless movement",
              "Natural alignment",
              "Continuous adaptation",
              "Harmonious progress"
            ].map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );

  const PracticeCard = ({ title, description, elements }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-lg font-bold">{title}</h3>
          <ChevronDown className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="space-y-2">
              {elements.map((element, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  {element}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Navigation */}
      <nav className="flex justify-center mb-12 space-x-4">
        {Object.entries(sections).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-4 py-2 rounded-lg transition-colors
              ${activeSection === key 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {value}
          </button>
        ))}
      </nav>

      {/* self-RICH Content */}
      {activeSection === 'selfrich' && (
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Building Your Inner Lighthouse</h2>
            <p className="text-xl text-gray-600 mb-8">Before you can guide others, you must first illuminate your own path</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              Every leader faces a critical moment when they realize: the old ways of pushing, 
              controlling, and forcing aren't working anymore. That's not failure - it's awakening.
            </p>

            <div className="space-y-2 mb-8">
              <p className="text-gray-600">What if you could:</p>
              <p className="text-gray-600 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                Lead with unshakeable presence instead of constant pressure
              </p>
              <p className="text-gray-600 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                Create impact through being rather than endless doing
              </p>
              <p className="text-gray-600 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                Guide with natural authority that energizes rather than exhausts
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Compass className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold ml-2">The Inner Journey</h3>
              </div>
              <p className="text-gray-600 mb-4">
                self-RICH isn't another leadership technique - it's a transformation in who you are 
                as a leader. Through five essential elements, you'll build an unshakeable foundation 
                of inner wealth that naturally flows into outer impact.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Sprout className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold ml-2">Natural Authority</h3>
              </div>
              <p className="text-gray-600 mb-4">
                When you're self-RICH, leadership becomes effortless. Your presence naturally 
                inspires, your actions carry weight without force, and your impact grows 
                through who you are, not just what you do.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-600 mb-6">
              Discover the five elements of self-RICH leadership and transform your impact from the inside out.
            </p>
            <p className="text-sm text-gray-500 italic">
              "The most powerful leadership doesn't come from what you do, but from who you are."
            </p>
          </div>
        </div>
      )}

      {/* B-FREE Content */}
      {activeSection === 'bfree' && (
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">From Inner Light to Outer Impact</h2>
            <p className="text-xl text-gray-600 mb-8">Creating environments where people and potential naturally flourish</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              Once you've built your inner lighthouse through self-RICH practices, a new possibility emerges: 
              the ability to create spaces where others naturally thrive. Like a master gardener who knows 
              that true growth can't be forced, only cultivated.
            </p>

            <div className="space-y-2 mb-8">
              <p className="text-gray-600">This is where you learn to:</p>
              <p className="text-gray-600 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                Transform environments from exhausting to energizing
              </p>
              <p className="text-gray-600 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                Create conditions where innovation naturally emerges
              </p>
              <p className="text-gray-600 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                Build teams that thrive through inspiration rather than pressure
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Sprout className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold ml-2">The Art of Cultivation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                B-FREE is your framework for creating fertile ground where potential can root and flourish. 
                Like a gardener who understands that each plant needs specific conditions to thrive, 
                you'll learn to create environments perfectly suited for growth - both at home and at work.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Wind className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-bold ml-2">Natural Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                When you master B-FREE principles, transformation happens organically. Teams become self-sustaining, 
                initiatives find their own momentum, and leadership becomes an act of stewardship rather than control.
              </p>
            </div>
          </div>

          <div className="bg-green-100 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Sprout className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold ml-3">The Gardener's Wisdom</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Prepare the Soil</h4>
                <p className="text-sm text-gray-600">Create environments where growth is natural and inevitable</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Trust the Process</h4>
                <p className="text-sm text-gray-600">Allow development to unfold at its own perfect pace</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Nurture Growth</h4>
                <p className="text-sm text-gray-600">Support natural evolution without forcing or controlling</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Environments That Transform?</h3>
            <p className="text-gray-600 mb-6">
              Learn how to build spaces where potential naturally flourishes and impact multiplies effortlessly.
            </p>
            <p className="text-sm text-gray-500 italic">
              "The greatest leadership is not about growing followers, but growing other leaders."
            </p>
          </div>
        </div>
      )}

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <div className="space-y-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">The Leadership Revolution</h1>
            <p className="text-xl text-gray-600 mb-8">Where Force Ends, True Leadership Begins</p>
            
            <div className="max-w-3xl mx-auto text-left bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                You've mastered the art of making things happen. Through determination and skill, 
                you've achieved what others thought impossible. But lately, something feels off.
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  The harder you push, the more resistance you encounter
                </p>
                <p className="text-gray-600 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  The more you do, the less impact you seem to have
                </p>
                <p className="text-gray-600 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                  The further you reach, the more exhausted you become
                </p>
              </div>
              <p className="text-lg text-gray-700">
                It's not your fault. The traditional leadership paradigm is failing us all.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">A New Path Forward</h2>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Home className="w-8 h-8 text-blue-500" />
                    <h3 className="text-xl font-bold ml-3">The Power of Presence</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Imagine a lighthouse. It doesn't chase ships or shout directions. It simply stands, 
                    steady and true, emanating light that guides others safely home. Its power isn't in 
                    what it does, but in what it is.
                  </p>
                  <div className="pl-4 border-l-4 border-blue-200">
                    <p className="text-sm text-gray-500">
                      "Through presence rather than pressure, through being rather than doing, 
                      we unlock a new kind of leadership influence that transforms without exhausting."
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Sprout className="w-8 h-8 text-green-500" />
                    <h3 className="text-xl font-bold ml-3">The Art of Natural Development</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Consider a master gardener. They don't pull on plants to make them grow. Instead, 
                    they create the conditions where growth naturally occurs. Their influence flows 
                    not from force, but from understanding and nurturing the natural process of development.
                  </p>
                  <div className="pl-4 border-l-4 border-green-200">
                    <p className="text-sm text-gray-500">
                      "When we shift from forcing outcomes to cultivating potential, 
                      leadership becomes an act of stewardship rather than control."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">The Leadership Evolution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipStyles.map((style, idx) => (
                <div key={idx} className={`p-6 rounded-lg ${
                  style.type === 'Osmotic' ? 'bg-blue-100 shadow-md' : 'bg-white'
                }`}>
                  <div className="flex items-center mb-4">
                    {style.icon}
                    <h3 className="text-xl font-bold ml-2">{style.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">Approach: {style.approach}</p>
                  <p className="text-gray-600">Outcome: {style.outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-center mb-4">Discover Your Osmotic Edge</h3>
            <p className="text-gray-600 text-center mb-6">
              Unlock our comprehensive guide to transformative leadership and learn:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                <p className="text-sm">Why traditional leadership is failing</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                <p className="text-sm">The science of natural influence</p>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                <p className="text-sm">Your path to transformative presence</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Impact Section */}
      {activeSection === 'impact' && (
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center mb-8">Transformational Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold mb-2">Before</h4>
                    {Object.entries(study.metrics.before).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize">{key}</span>
                        <span>{value}%</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold mb-2">After</h4>
                    {Object.entries(study.metrics.after).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="capitalize">{key}</span>
                        <span>{value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Practice Section */}
      {activeSection === 'practice' && (
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where Insight Meets Action</h2>
            <p className="text-xl text-gray-600 mb-8">Transform your presence in 90 seconds or less</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              In today's fast-paced world, you don't have time for lengthy meditation retreats or complex practices. 
              You need tools that work as quickly as your schedule demands, yet create lasting impact.
            </p>

            <div className="mb-8">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-4">
                  <Sun className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-bold ml-2">BOLD90 Tools</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Master your emotional landscape and stay grounded in any situation with our signature 
                  90-second practices. Whether you're entering a high-stakes meeting or navigating family 
                  dynamics, these tools keep you centered and powerful.
                </p>
                <div className="pl-4 border-l-4 border-blue-200 mt-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Stop anxiety in its tracks</li>
                    <li>• Access instant presence</li>
                    <li>• Navigate emotional triggers</li>
                    <li>• Stay grounded under pressure</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Sprout className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-bold ml-2">The Space Creation Ritual</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A simple 4-step process to transform any environment into a space where potential naturally unfolds. 
                  Perfect for team meetings, family gatherings, or any situation where you want to create meaningful connection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">1. Clear</h4>
                    <p className="text-sm text-gray-600">
                      A 30-second practice to reset the energy of any space and create a fresh start
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">2. Ground</h4>
                    <p className="text-sm text-gray-600">
                      Quick techniques to establish psychological safety and open dialogue
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">3. Invite</h4>
                    <p className="text-sm text-gray-600">
                      Simple prompts that encourage authentic participation and natural emergence
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">4. Flow</h4>
                    <p className="text-sm text-gray-600">
                      Sustain engagement and natural development without forcing or controlling
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Experience BOLD90</h3>
              <p className="text-gray-600 mb-6">
                Get instant access to our complete video series of BOLD90 tools, plus a quick-reference guide 
                for implementing them in any situation.
              </p>
              <p className="text-sm text-gray-500 italic">
                "Transform your presence in less time than it takes to grab coffee"
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Master Space Creation</h3>
              <p className="text-gray-600 mb-6">
                Learn our simple 4-step process for creating environments where people and potential naturally thrive.
              </p>
              <p className="text-sm text-gray-500 italic">
                "Small shifts in environment create massive changes in outcome"
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 text-center text-gray-600 italic">
        "Through presence rather than pressure • Through flow rather than force"
      </div>
    </div>
  );
};

export default OsmoticLeadershipPlatform;