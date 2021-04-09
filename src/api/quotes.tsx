import { Quote } from '../types';

const quotes: Quote[] = [
  {
    Author: 'Dalai Lama',
    Sentence: 'The purpose of our lives is to be happy',
  },
  {
    Sentence: 'The only people who never fail are those who never try.',
    Author: 'Ilka Chase',
  },
  {
    Sentence: 'Failure is just another way to learn how to do something right.',
    Author: 'Marian Wright Edelman',
  },
  {
    Sentence: 'I failed my way to success.',
    Author: 'Thomas Edison',
  },
  {
    Sentence: 'Every failure brings with it the seed of an equivalent success.',
    Author: 'Napoleon Hill',
  },
  {
    Sentence: 'Only those who dare to fail greatly can ever achieve greatly.',
    Author: 'John F. Kennedy',
  },
  {
    Sentence:
      'It is hard to fail, but it is worse never to have tried to succeed.',
    Author: 'Theodore Roosevelt',
  },
  {
    Sentence: 'Imagination is more important than knowledge.',
    Author: 'Albert Einstein',
  },
  {
    Sentence:
      'Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly.',
    Author: 'Langston Hughes',
  },
  {
    Sentence:
      'The future belongs to those who believe in the beauty of their dreams.',
    Author: 'Eleanor Roosevelt',
  },
  {
    Sentence:
      'Go confidently in the direction of your dreams. Live the life you have imagined.',
    Author: 'Henry David Thoreau',
  },
  {
    Sentence:
      'You cannot depend on your eyes when your imagination is out of focus.',
    Author: 'Mark Twain',
  },
  {
    Sentence: 'Commitment leads to action. Action brings your dream closer.',
    Author: 'Marcia Wieder',
  },
  {
    Sentence:
      'Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.',
    Author: 'Benjamin Franklin',
  },
  {
    Sentence:
      'Take time to deliberate; but when the time for action arrives, stop thinking and go in.',
    Author: 'Andrew Jackson',
  },
  {
    Sentence: 'The mind that is anxious about future events is miserable.',
    Author: 'Seneca',
  },
  {
    Sentence:
      'The art of leadership is saying no, not yes. It is very easy to say yes.',
    Author: 'Tony Blair',
  },
  {
    Sentence: 'A leader is a dealer in hope.',
    Author: 'Napoleon Bonaparte',
  },
  {
    Sentence:
      'A general is just as good or just as bad as the troops under his command make him.',
    Author: 'General Douglas MacArthur',
  },
  {
    Sentence:
      'To do great things is difficult; but to command great things is more difficult.',
    Author: 'Friedrich Nietzsche',
  },
  {
    Sentence: 'Every artist was first an amateur.',
    Author: 'Ralph Waldo Emerson',
  },
  {
    Sentence:
      'I was always looking outside myself for strength and confidence, but it comes from within. It is there all of the time.',
    Author: 'Anna Freud',
  },
  {
    Sentence: 'We can do anything we want to do if we stick to it long enough.',
    Author: 'Helen Keller',
  },
  {
    Sentence:
      'Our business in life is not to get ahead of others, but to get ahead of ourselves.',
    Author: 'E. Joseph Cossman',
  },
  {
    Sentence: 'Insist on yourself. Never imitate.',
    Author: 'Ralph Waldo Emerson',
  },
  {
    Sentence: 'Who looks outside, dreams. Who looks inside, awakes.',
    Author: 'Carl Jung',
  },
  {
    Sentence:
      'It is not easy to find happiness in ourselves, and it is not possible to find it elsewhere.',
    Author: 'Agnes Repplier',
  },
  {
    Sentence: 'The only journey is the one within.',
    Author: 'Rainer Maria Rilke',
  },
  {
    Sentence: 'Follow your honest convictions, and stay strong.',
    Author: 'William Thackeray',
  },
  {
    Sentence:
      'The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly.',
    Author: 'Marcus Aurelius',
  },
  {
    Sentence:
      'Action may not always bring happiness; but there is no happiness without action.',
    Author: 'Benjamin Disraeli',
  },
  {
    Sentence: 'Happiness is not a goal, but a by-product.',
    Author: 'Eleanor Roosevelt',
  },
  {
    Sentence:
      'Happiness is not a state to arrive at, but a manner of traveling.',
    Author: 'Margaret Lee Runbeck',
  },
  {
    Sentence: 'Purpose is what gives life a meaning.',
    Author: 'C. H. Parkhurst',
  },
  {
    Sentence: 'In all things that you do, consider the end.',
    Author: 'Solon',
  },
  {
    Sentence:
      'Life can be pulled by goals just as surely as it can be pushed by drives.',
    Author: 'Viktor Frankl',
  },
  {
    Sentence: 'Success is the child of audacity.',
    Author: 'Benjamin Disraeli',
  },
  {
    Sentence: 'The surest way not to fail is to determine to succeed.',
    Author: 'Richard Brinsley Sheridan',
  },
  {
    Sentence:
      'Careful thinking and hard work will solve nearly all your problems. Try and see for yourself.',
    Author: 'Ullery',
  },
  {
    Sentence: 'Years teach us more than books.',
    Author: 'Berthold Auerbach',
  },
  {
    Sentence: 'The art of being wise is knowing what to overlook.',
    Author: 'William James',
  },
  {
    Sentence: 'A wise man learns by the mistakes of others, a fool by his own.',
    Author: 'Latin proverb',
  },
  {
    Sentence: 'No man was ever wise by chance.',
    Author: 'Seneca',
  },
  {
    Sentence:
      'In everything the ends well defined are the secret of durable success.',
    Author: 'Victor Cousins',
  },
  {
    Sentence: 'Arriving at one goal is the starting point to another.',
    Author: 'John Dewey',
  },
  {
    Sentence: 'A goal is a dream with a deadline.',
    Author: 'Napoleon Hill',
  },
  {
    Sentence: 'Goals are the fuel in the furnace of achievement.',
    Author: 'Brian Tracy',
  },
  {
    Sentence:
      'We are what we repeatedly do. Excellence, therefore, is not an act but a habit.',
    Author: 'Aristotle',
  },
  {
    Sentence:
      "Take risks and you'll get the payoffs. Learn from your mistakes until you succeed. It's that simple.",
    Author: 'Bobby Flay',
  },
  {
    Sentence: 'The best way out is always through.',
    Author: 'Robert Frost',
  },
  {
    Sentence: "You miss 100% of the shots you don't take.",
    Author: 'Wayne Gretzky',
  },
  {
    Sentence:
      'Nothing will ever be attempted if all possible objections must first be overcome.',
    Author: 'Samuel Johnson',
  },
  {
    Sentence:
      'The critical ingredient is getting off your butt and doing something. It’s as simple as that.',
    Author: 'Nolan Bushnell, entrepreneur.',
  },
  {
    Sentence: 'I have not failed. I’ve just found 10000 ways that won’t work.',
    Author: 'Thomas Edison, inventor.',
  },
  {
    Sentence:
      'Entrepreneurship is neither a science nor an art. It is a practice.',
    Author: 'Peter Drucker, management consultant, educator, and author.',
  },
  {
    Sentence:
      'In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.',
    Author: 'David Ogilvy, co-founder of Ogilvy & Mather.',
  },
  {
    Sentence: 'Success is how high you bounce after you hit bottom.',
    Author: 'General George Patton.',
  },
  {
    Sentence:
      'If you’re not embarrassed by the first version of your product, you’ve launched too late.',
    Author: 'Reid Hoffman, co-founder of LinkedIn.',
  },
  {
    Sentence:
      'Positive thinking will let you do everything better than negative thinking will.',
    Author: 'Zig Ziglar, author, salesman, and motivational speaker.',
  },
  {
    Sentence: 'I’m not afraid of dying, I’m afraid of not trying.',
    Author: 'Jay Z, musician.',
  },
  {
    Sentence:
      'The longer you’re not taking action the more money you’re losing',
    Author: 'Carrie Wilkerson',
  },
  {
    Sentence: 'If you live for weekends or vacations, your shit is broken',
    Author: 'Gary Vaynerchuk',
  },
  {
    Sentence:
      'Most great people have attained their greatest success just one step beyond their greatest failure',
    Author: 'Napoleon Hill',
  },
  {
    Sentence:
      'Opportunity is missed by most people because it is dressed in overalls and looks like work',
    Author: 'Thomas Edison',
  },
  {
    Sentence:
      'Have the end in mind and every day make sure your working towards it',
    Author: 'Ryan Allis',
  },
  {
    Sentence: 'He who begins many things finishes but few',
    Author: 'German Proverb',
  },
  {
    Sentence:
      'The best use of life is to spend it for something that outlasts it',
    Author: 'William James',
  },
  {
    Sentence: 'If you think education is expensive, try ignorance',
    Author: 'Derek Bok',
  },
  {
    Sentence:
      'Entrepreneurship is living a few years of your life like most people wont so you can spend the rest of your life like most people can’t',
    Author: 'A student in Warren G. Tracy’s class',
  },
  {
    Sentence:
      'Lend your friend $20, if he doesn’t pay you back then he’s not your friend. Money well spent',
    Author: 'Ted Nicolas',
  },
  {
    Sentence: 'Be nice to geek’s, you’ll probably end up working for one',
    Author: 'Bill Gates',
  },
  {
    Sentence:
      'To never forget that the most important thing in life is the quality of life we lead',
    Author: 'Quoted by Tony Hsieh on Retireat21',
  },
  {
    Sentence: "It's better to own the racecourse then the race horse",
    Author: 'Unknown',
  },
  {
    Sentence: 'When you go to buy, don’t show your silver',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'It’s easier to ask forgiveness than it is to get permission',
    Author: 'Grace Hopper',
  },
  {
    Sentence: 'To win without risk is to triumph without glory',
    Author: 'Corneille',
  },
  {
    Sentence:
      'Example is not the main thing in influencing other people; it’s the only thing',
    Author: 'Abraham Lincoln',
  },
  {
    Sentence:
      'Associate yourself with people of good quality, for it is better to be alone than in bad company',
    Author: 'Booker T. Washington',
  },
  {
    Sentence: 'There is only one success',
    Author: 'to be able to spend your life in your own way',
  },
  {
    Sentence:
      'You don’t buy a nice car and get rich you get rich and buy a nice car',
    Author: 'Unknown',
  },
  {
    Sentence: 'Fall seven times, stand up eight',
    Author: 'Japanese Proverb',
  },
  {
    Sentence:
      'One day your life will flash before your eyes. Make sure it is worth watching',
    Author: 'Mooie',
  },
  {
    Sentence: 'What is not started will never get finished',
    Author: 'Johann Wolfgang von Goethe',
  },
  {
    Sentence:
      'Do not wait to strike until the iron is hot; but make it hot by striking',
    Author: 'William B. Sprague',
  },
  {
    Sentence: 'When you cease to dream you cease to live',
    Author: 'Malcolm Forbes',
  },
  {
    Sentence:
      'The only place where success comes before work is in the dictionary.',
    Author: 'Vidal Sassoon',
  },
  {
    Sentence:
      'Every single person I know who is successful at what they do is successful because they love doing it.',
    Author: 'Joe Penna',
  },
  {
    Sentence:
      'Being realistic is the most commonly traveled road to mediocrity.',
    Author: 'Will Smith',
  },
  {
    Sentence:
      'Whenever an individual or a business decides that success has been attained, progress stops.',
    Author: 'Thomas J. Watson',
  },
  {
    Sentence:
      'To be successful, you have to have your heart in your business, and your business in your heart.',
    Author: 'Thomas J. Watson',
  },
  {
    Sentence:
      'If hard work is the key to success, most people would rather pick the lock.',
    Author: 'Claude McDonald',
  },
  {
    Sentence: 'The road to success is always under construction.',
    Author: 'Arnold Palmer',
  },
  {
    Sentence: 'Whether you think you can or you can’t, you’re right.',
    Author: 'Henry Ford',
  },
  {
    Sentence: 'Failure defeats losers, failure inspires winners.',
    Author: 'Robert T. Kiyosaki',
  },
  {
    Sentence: 'The biggest failure you can have in life is not trying at all.',
    Author: 'Emil Motycka',
  },
  {
    Sentence:
      'I honestly think it is better to be a failure at something you love than to be a success at something you hate.',
    Author: 'George Burns',
  },
  {
    Sentence:
      'Leaders don’t force people to follow, they invite them on a journey.',
    Author: 'Charles S. Lauer',
  },
  {
    Sentence: 'Leadership is doing what is right when no one is watching.',
    Author: 'George Van Valkenburg',
  },
  {
    Sentence:
      'Leadership is the art of getting someone else to do something you want done because he wants to do it.',
    Author: 'Dwight D. Eisenhower',
  },
  {
    Sentence:
      'The difference between a boss and a leader: a boss says, ‘Go!’ -a leader says, ‘Let’s go!’.',
    Author: 'E. M. Kelly',
  },
  {
    Sentence:
      'I am more afraid of an army of one hundred sheep led by a lion than an army of one hundred lions led by a sheep.',
    Author: 'Charles Maurice',
  },
  {
    Sentence:
      'The whole problem with the world is that fools and fanatics are always so certain of themselves, but wiser people so full of doubts.',
    Author: 'Bertrand Russell',
  },
  {
    Sentence:
      'A ship in harbor is safe. But that’s now what ships are built for.',
    Author: 'William Shedd',
  },
  {
    Sentence: 'I’m not a businessman. I’m a business, man.',
    Author: 'Jay-Z',
  },
  {
    Sentence:
      'The vision must be followed by the venture. It is not enough to stare up the steps – we must step up the stairs.',
    Author: 'Vance Hayner',
  },
  {
    Sentence:
      'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
    Author: 'Mark Twain',
  },
  {
    Sentence:
      'I didn’t go to college, but if I did, I would’ve taken all my tests at a restaurant, ’cause ‘The customer is always right.’',
    Author: 'Mitch Hedberg',
  },
  {
    Sentence:
      'Formal education will make you a living. Self education will make you a fortune.',
    Author: 'Jim Rohn',
  },
  {
    Sentence:
      'If you’re not learning while you’re earning, you’re cheating yourself out of the better portion of your compensation.',
    Author: 'Napoleon Hill',
  },
  {
    Sentence: 'A business that makes nothing but money is a poor business.',
    Author: 'Henry Ford',
  },
  {
    Sentence:
      'After a certain point, money is meaningless. It ceases to be the goal. The game is what counts.',
    Author: 'Aristotle',
  },
  {
    Sentence:
      'I don’t pay good wages because I have a lot of money; I have a lot of money because I pay good wages.',
    Author: 'Robert Bosch',
  },
  {
    Sentence:
      'Money and success don’t change people; they merely amplify what is already there.',
    Author: 'Will Smith',
  },
  {
    Sentence: 'The secret of getting ahead is getting started.',
    Author: 'Agatha Christie',
  },
  {
    Sentence: 'Hire character. Train skill.',
    Author: 'Peter Schultz',
  },
  {
    Sentence:
      'In preparing for battle I have always found that plans are useless, but planning is indispensable.',
    Author: 'Dwight D. Eisenhower',
  },
  {
    Sentence:
      'You’ve got to stop doing all the things that people have tried, tested, and found out don’t work.',
    Author: 'Michael Dunlop',
  },
  {
    Sentence:
      'If you’re not making mistakes, then you’re not making decisions.',
    Author: 'Catherine Cook',
  },
  {
    Sentence:
      'Your most unhappy customers are your greatest source of learning.',
    Author: 'Bill Gates',
  },
  {
    Sentence:
      'One can get anything if he is willing to help enough others get what they want.',
    Author: 'Zig Ziglar',
  },
  {
    Sentence:
      'An entrepreneur tends to bite off a little more than he can chew hoping he’ll quickly learn how to chew it.',
    Author: 'Roy Ash',
  },
  {
    Sentence: 'The true entrepreneur is a doer, not a dreamer.',
    Author: 'Nolan Bushnell',
  },
  {
    Sentence:
      'Whenever you are asked if you can do a job, tell ’em, ‘Certainly, I can!’ Then get busy and find out how to do it.',
    Author: 'Theodore Roosevelt',
  },
  {
    Sentence: 'Everything started as nothing.',
    Author: 'Ben Weissenstein',
  },
  {
    Sentence:
      'If you start with nothing and end up with nothing, there’s nothing lost.',
    Author: 'Michael Dunlop',
  },
  {
    Sentence:
      'Start today, not tomorrow. If anything, you should have started yesterday.',
    Author: 'Emil Motycka',
  },
  {
    Sentence: 'Make it happen now, not tomorrow. Tomorrow is a loser’s excuse.',
    Author: 'Andrew Fashion',
  },
  {
    Sentence:
      'Every day I get up and look through the Forbes list of the richest people in America. If I’m not there, I go to work.',
    Author: 'Robert Orben',
  },
  {
    Sentence: 'Yesterday’s home runs don’t win today’s games.',
    Author: 'Babe Ruth',
  },
  {
    Sentence: 'You must either modify your dreams or magnify your skills.',
    Author: 'Jim Rohn',
  },
  {
    Sentence:
      'Not a single person whose name is worth remembering lived a life of ease.',
    Author: 'Ryan P. Allis',
  },
  {
    Sentence:
      'The best time to plant a tree is twenty years ago. The second best time is now.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence:
      'Vision without action is a daydream. Action without vision is a nightmare.',
    Author: 'Japanese Proverb',
  },
  {
    Sentence:
      'Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'A bad workman blames his tools.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'Defeat isn’t bitter if you don’t swallow it.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence:
      'The diamond cannot be polished without friction, nor the man perfected without trials.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence:
      'A jade stone is useless before it is processed; a man is good-for-nothing until he is educated.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'A journey of a thousand miles begins with a single step.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'The loftiest towers rise from the ground.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence:
      'Building a castle is difficult. Defending and maintaining it is harder still.',
    Author: 'Asian Proverb',
  },
  {
    Sentence:
      'A person who says it cannot be done should not interrupt the man doing it.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'All cats love fish but fear to wet their paws.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence:
      'Don’t stand by the water and long for fish; go home and weave a net.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence:
      'Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength.',
    Author: 'Hasidic Proverb',
  },
  {
    Sentence: 'Failing to plan is planning to fail.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'If you pay peanuts, you get monkeys.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'Make happy those who are near, and those who are far will come.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'Teachers open the door. You enter by yourself.',
    Author: 'Chinese Proverb',
  },
  {
    Sentence: 'Find a job you love and you’ll never work a day in your life.',
    Author: 'Confucius',
  },
  {
    Sentence:
      'The entrepreneur builds an enterprise; the technician builds a job.',
    Author: 'Michael Gerber',
  },
  {
    Sentence:
      'The challenge is not just to build a company that can endure; but to build one that is worthy of enduring.',
    Author: 'Jim Collins',
  },
  {
    Sentence:
      'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
    Author: 'Bill Gates',
  },
  {
    Sentence: 'Don’t treat your customers like a bunch of purses and wallets.',
    Author: 'Chris Brogan',
  },
  {
    Sentence:
      'We make a living by what we get. But we make a life by what we give.',
    Author: 'Winston Churchhill',
  },
  {
    Sentence: 'Victory comes only after many struggles and countless defeats.',
    Author: 'Og Mandino',
  },
  {
    Sentence:
      'Remembering you are going to die is the best way I know to avoid the trap of thinking you have something to lose.',
    Author: 'Steve Jobs',
  },
  {
    Sentence:
      'It’s not about how to get started; its about how to get noticed.',
    Author: 'Steve Case',
  },
  {
    Sentence: 'A ship in harbor is safe, but that’s not what ships are for.',
    Author: 'John Shedd',
  },
  {
    Sentence:
      'If I find 10000 ways something won’t work, I haven’t failed. I am not discouraged, because every wrong attempt discarded is a step forward.',
    Author: 'Thomas Edison',
  },
  {
    Sentence:
      'Business opportunities are like buses, there’s always another one coming.',
    Author: 'Richard Branson',
  },
  {
    Sentence:
      'If we don’t allow ourselves to make mistakes, we will never invest in things that are radical.',
    Author: 'Jeff Clavier',
  },
  {
    Sentence: 'Nothing will work unless you do.',
    Author: 'Maya Angelou',
  },
  {
    Sentence:
      'Try not to be a man of success, but rather try to become a man of value.',
    Author: 'Albert Einstein',
  },
  {
    Sentence:
      'You won’t get anything unless you have the vision to imagine it.',
    Author: 'John Lennon',
  },
  {
    Sentence:
      'A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.',
    Author: 'John C. Maxwell',
  },
  {
    Sentence:
      'In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.',
    Author: 'David Ogilvy',
  },
  {
    Sentence:
      'Success is doing what you want, where you want, when you want, with whom you want as much as you want.',
    Author: 'Tony Robbins',
  },
  {
    Sentence:
      'You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.',
    Author: 'Zig Ziglar',
  },
  {
    Sentence:
      'If everything seems under control, you’re just not going fast enough.',
    Author: 'Mario Andretti',
  },
  {
    Sentence: 'Do or do not. There is no try.',
    Author: 'Yoda',
  },
  {
    Sentence:
      'Show me a person who never made a mistake, and I will show you a person who never did anything.',
    Author: 'William Rosenberg, founder of Dunkin’ Donuts',
  },
  {
    Sentence: 'Ideas are commodity. Execution of them is not.',
    Author: 'Michael Dell, CEO of Dell',
  },
  {
    Sentence:
      'A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.',
    Author: 'Winston Churchill, British Prime Minister',
  },
  {
    Sentence:
      'The man who does not work for the love of work but only for money is likely to neither make money nor find much fun in life.',
    Author: 'Charles M. Schwab, American steel magnate',
  },
  {
    Sentence:
      'Be undeniably good. No marketing effort or social media buzzword can be a substitute for that.',
    Author: 'Anthony Volodkin, founder of Hype Machine',
  },
  {
    Sentence: 'Ideas are easy. Implementation is hard.',
    Author: 'Guy Kawasaki, founder of AllTop',
  },
  {
    Sentence:
      'You can say anything to anyone, but how you say it will determine how they will react.',
    Author: 'John Rampton, entrepreneur and investor',
  },
  {
    Sentence: 'Always deliver more than expected.',
    Author: 'Larry Page, co-founder of Google',
  },
  {
    Sentence:
      'Assume you have 90 seconds with a new user before they decide to use your app or delete it.',
    Author: 'Tamara Steffens, Acompli',
  },
  {
    Sentence:
      'Even if you don’t have the perfect idea to begin with, you can likely adapt.',
    Author: 'Victoria Ransom, co-founder of Wildfire Interactive',
  },
  {
    Sentence:
      'Make your team feel respected, empowered and genuinely excited about the company’s mission.',
    Author: 'Tim Westergen, founder of Pandora',
  },
  {
    Sentence:
      'In between goals is a thing called life, that has to be lived and enjoyed.',
    Author: 'Sid Caesar, Entertainer',
  },
  {
    Sentence: 'Wonder what your customer really wants? Ask. Don’t tell.',
    Author: 'Lisa Stone, co-founder of BlogHer',
  },
  {
    Sentence: 'When times are bad is when the real entrepreneurs emerge.',
    Author: 'Robert Kiyosaki, author of Rich Dad Poor Dad',
  },
  {
    Sentence: 'Get big quietly, so you don’t tip off potential competitors.',
    Author: 'Chris Dixon, co-founder of Hunch',
  },
  {
    Sentence: 'Don’t worry about failure; you only have to be right once.',
    Author: 'Drew Houston, founder of Dropbox',
  },
  {
    Sentence:
      'Don’t be cocky. Don’t be flashy. There’s always someone better than you.',
    Author: 'Tony Hsieh, Zappos.com CEO',
  },
  {
    Sentence:
      'Openly share and talk to people about your idea. Use their lack of interest or doubt to fuel your motivation to make it happen.',
    Author: 'Todd Garland, founder of BuySellAds',
  },
  {
    Sentence:
      'How you climb a mountain is more important than reaching the top.',
    Author: 'Yvon Chouinard, founder of Patagonia',
  },
  {
    Sentence:
      'Associate yourself with people of good quality, for it is better to be alone than in bad company.',
    Author: 'Booker T. Washington, Educator and author',
  },
  {
    Sentence:
      'It’s fine to celebrate success but it is more important to heed the lessons of failure.',
    Author: 'Bill Gates, co-founder of Microsoft',
  },
  {
    Sentence:
      'It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.',
    Author: 'Warren Buffett, Investor',
  },
  {
    Sentence:
      'There is only one success- to be able to spend your life in your own way.',
    Author: 'Christopher Morley, journalist',
  },
  {
    Sentence:
      'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
    Author: 'Henry Ford, founder of Ford Motor Company',
  },
  {
    Sentence:
      'Rarely have I seen a situation where doing less than the other guy is a good strategy.',
    Author: 'Jimmy Spithill, Australian yachtsman',
  },
  {
    Sentence:
      'It’s almost always harder to raise capital than you thought it would be, and it always takes longer. So plan for that.',
    Author: 'Richard Harroch, Venture Capitalist',
  },
  {
    Sentence:
      'I don’t have big ideas. I sometimes have small ideas, which seem to work out.',
    Author: 'Matt Mullenweg, founder of Automattic',
  },
  {
    Sentence: 'Fail often so you can succeed sooner.',
    Author: 'Tom Kelley, Ideo partner',
  },
  {
    Sentence: 'The way to get started is to quit talking and begin doing.',
    Author: 'Walt Disney, co-founder of the Walt Disney Company',
  },
  {
    Sentence:
      'The entrepreneur always searches for change, responds to it, and exploits it as an opportunity',
    Author: 'Peter F. Drucker, educator and author',
  },
  {
    Sentence:
      'You don’t learn to walk by following rules. You learn by doing and falling over.',
    Author: 'Richard Branson, founder of Virgin Group',
  },
  {
    Sentence:
      'The fastest way to change yourself is to hang out with people who are already the way you want to be.',
    Author: 'Reid Hoffman, co-founder of Linkedin',
  },
  {
    Sentence:
      'Risk more than others think is safe. Dream more than others think is practical.',
    Author: 'Howard Schultz, CEO of Starbucks',
  },
  {
    Sentence: 'If you cannot do great things, do small things in a great way.',
    Author: 'Napoleon Hill, author',
  },
  {
    Sentence: 'Success is not what you have, but who you are.',
    Author: 'Bo Bennet, author and entreprenuer',
  },
  {
    Sentence:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    Author: 'Franklin D. Roosevelt',
  },
  {
    Sentence:
      'The successful warrior is the average man, with laser-like focus.',
    Author: 'Bruce Lee, actor and martial arts instructor',
  },
  {
    Sentence:
      'There’s no shortage of remarkable ideas, what’s missing is the will to execute them.',
    Author: 'Seth Godin, author and speaker',
  },
  {
    Sentence:
      'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.',
    Author: 'David Brinkley, newscaster',
  },
  {
    Sentence:
      'Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will spend its whole life believing it is stupid.',
    Author: 'Albert Einstein, Theoretical Physicist',
  },
  {
    Sentence: 'It is never too late to be what you might have been.',
    Author: 'George Eliot, journalist and novelist',
  },
  {
    Sentence:
      'I am not a product of my circumstances. I am a product of my decisions.',
    Author: 'Stephen Covey, author and businessman',
  },
  {
    Sentence:
      'Build your own dreams, or someone else will hire you to build theirs.',
    Author: 'Farrah Gray, investor and motivational speaker',
  },
  {
    Sentence:
      'You may be disappointed if you fail, but you are doomed if you don’t try.',
    Author: 'Beverly Sills, operatic soprano',
  },
  {
    Sentence:
      'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.',
    Author: 'Johann Wolfgang Von Goethe',
  },
];

function GetRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export default GetRandomQuote;
