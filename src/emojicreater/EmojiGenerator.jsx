import React, { useState } from 'react'

const EmojiGenerator = () => {
    const [inputText, setInputText] = useState('')
    const [copied, setCopied] = useState(false)

    // Emoji nomlari va ularning mos keladigan emoji belgilari
    const emojiMap = {
        // Smiles
        'smile': '😊', 'happy': '😊', 'joy': '😊',
        'laugh': '😂', 'lol': '😂', 'haha': '😂',
        'love': '😍', 'heart eyes': '😍', 'inlove': '😍',
        'cool': '😎', 'sunglasses': '😎',
        'wink': '😉', 'winking': '😉',
        'blush': '😊', 'shy': '😊',
        'surprised': '😮', 'wow': '😮', 'omg': '😮',
        'cry': '😭', 'sad': '😭', 'crying': '😭',
        'angry': '😠', 'mad': '😠', 'rage': '😠',
        'sleepy': '😴', 'sleeping': '😴', 'tired': '😴',
        'sick': '🤒', 'ill': '🤒',
        'sweat': '😅', 'nervous': '😅',
        'thinking': '🤔', 'think': '🤔',
        'confused': '😕', 'confuse': '😕',
        'disappointed': '😞', 'upset': '😞',
        'fear': '😨', 'scared': '😨',
        'scream': '😱', 'shock': '😱',
        'mask': '😷', 'sick2': '😷',
        'kiss': '😘', 'kissing': '😘',
        'yum': '😋', 'tasty': '😋', 'delicious': '😋',
        'nerd': '🤓', 'geek': '🤓',
        'party': '🥳', 'celebration': '🥳',
        'clown': '🤡', 'joker': '🤡',
        'alien': '👽', 'ufo': '👽',
        'robot': '🤖', 'bot': '🤖',

        // Hands
        'thumbs up': '👍', 'like': '👍', 'good': '👍', 'ok': '👍',
        'thumbs down': '👎', 'dislike': '👎', 'bad': '👎',
        'clap': '👏', 'applause': '👏',
        'pray': '🙏', 'please': '🙏', 'thanks': '🙏',
        'fist': '✊', 'power': '✊',
        'punch': '👊', 'fight': '👊',
        'victory': '✌️', 'peace': '✌️', 'v': '✌️',
        'ok hand': '👌', 'perfect': '👌',
        'call me': '🤙', 'phone': '🤙',
        'rock': '🤘', 'metal': '🤘',
        'love you': '🤟', 'iloveyou': '🤟',
        'handshake': '🤝', 'deal': '🤝',
        'writing': '✍️', 'write': '✍️',

        // Hearts
        'heart': '❤️', 'love2': '❤️', 'red heart': '❤️',
        'blue heart': '💙', 'green heart': '💚',
        'yellow heart': '💛', 'purple heart': '💜',
        'broken heart': '💔', 'heartbreak': '💔',
        'heartbeat': '💓', 'pulsing heart': '💓',
        'sparkling heart': '💖', 'shiny heart': '💖',
        'growing heart': '💗', 'excited heart': '💗',
        'heart eyes': '😍', 'inlove2': '😍',

        // Celebrations
        'party popper': '🎉', 'celebrate': '🎉', 'birthday': '🎉',
        'confetti': '🎊', 'tada': '🎊',
        'balloon': '🎈', 'party2': '🎈',
        'gift': '🎁', 'present': '🎁',
        'cake': '🎂', 'birthday cake': '🎂',
        'fireworks': '🎆', 'firework': '🎆',
        'sparkler': '🎇', 'sparkle': '🎇',
        'champagne': '🍾', 'bottle': '🍾',
        'trophy': '🏆', 'winner': '🏆',
        'medal': '🥇', 'gold': '🥇',
        'star': '⭐', 'rating': '⭐',
        'glitter': '✨', 'sparkle2': '✨',
        'fire': '🔥', 'hot': '🔥', 'lit': '🔥',
        '100': '💯', 'perfect score': '💯',
        'money': '💰', 'cash': '💰',
        'dollar': '💵', 'money2': '💵',

        // Animals
        'dog': '🐶', 'puppy': '🐶',
        'cat': '🐱', 'kitty': '🐱',
        'monkey': '🐵', 'ape': '🐵',
        'lion': '🦁', 'king': '🦁',
        'tiger': '🐯', 'tiger2': '🐯',
        'horse': '🐴', 'pony': '🐴',
        'unicorn': '🦄', 'magic': '🦄',
        'elephant': '🐘', 'big': '🐘',
        'panda': '🐼', 'bear': '🐼',
        'koala': '🐨', 'australia': '🐨',
        'rabbit': '🐰', 'bunny': '🐰',
        'fox': '🦊', 'sly': '🦊',
        'bird': '🐦', 'tweet': '🐦',
        'owl': '🦉', 'wise': '🦉',
        'duck': '🦆', 'quack': '🦆',
        'penguin': '🐧', 'cold': '🐧',
        'turtle': '🐢', 'slow': '🐢',
        'snake': '🐍', 'hiss': '🐍',
        'lizard': '🦎', 'reptile': '🦎',
        'crocodile': '🐊', 'croc': '🐊',
        'whale': '🐳', 'big fish': '🐳',
        'dolphin': '🐬', 'flipper': '🐬',
        'fish': '🐟', 'swim': '🐟',
        'octopus': '🐙', 'tentacle': '🐙',
        'crab': '🦀', 'pinch': '🦀',
        'shrimp': '🦐', 'seafood': '🦐',
        'butterfly': '🦋', 'beautiful': '🦋',
        'bee': '🐝', 'honey': '🐝',
        'ladybug': '🐞', 'bug': '🐞',
        'ant': '🐜', 'small': '🐜',
        'spider': '🕷️', 'scary': '🕷️',
        'scorpion': '🦂', 'danger': '🦂',

        // Food
        'pizza': '🍕', 'italian': '🍕',
        'hamburger': '🍔', 'burger': '🍔',
        'fries': '🍟', 'french fries': '🍟',
        'hotdog': '🌭', 'frankfurter': '🌭',
        'taco': '🌮', 'mexican': '🌮',
        'burrito': '🌯', 'wrap': '🌯',
        'ramen': '🍜', 'noodle': '🍜',
        'sushi': '🍣', 'japanese': '🍣',
        'bento': '🍱', 'box': '🍱',
        'rice': '🍚', 'grain': '🍚',
        'curry': '🍛', 'spicy': '🍛',
        'stew': '🍲', 'pot': '🍲',
        'egg': '🍳', 'breakfast': '🍳',
        'bread': '🍞', 'toast': '🍞',
        'cheese': '🧀', 'dairy': '🧀',
        'bacon': '🥓', 'meat': '🥓',
        'apple': '🍎', 'fruit': '🍎',
        'green apple': '🍏', 'fruit2': '🍏',
        'pear': '🍐', 'fruit3': '🍐',
        'tangerine': '🍊', 'orange': '🍊',
        'lemon': '🍋', 'sour': '🍋',
        'banana': '🍌', 'fruit4': '🍌',
        'watermelon': '🍉', 'summer': '🍉',
        'grapes': '🍇', 'wine': '🍇',
        'strawberry': '🍓', 'berry': '🍓',
        'melon': '🍈', 'fruit5': '🍈',
        'cherries': '🍒', 'fruit6': '🍒',
        'peach': '🍑', 'fruit7': '🍑',
        'pineapple': '🍍', 'tropical': '🍍',
        'coconut': '🥥', 'tropical2': '🥥',
        'kiwi': '🥝', 'fruit8': '🥝',
        'tomato': '🍅', 'vegetable': '🍅',
        'avocado': '🥑', 'healthy': '🥑',
        'eggplant': '🍆', 'aubergine': '🍆',
        'potato': '🥔', 'vegetable2': '🥔',
        'carrot': '🥕', 'vegetable3': '🥕',
        'corn': '🌽', 'maize': '🌽',
        'hot pepper': '🌶️', 'spicy2': '🌶️',
        'cucumber': '🥒', 'vegetable4': '🥒',
        'leafy green': '🥬', 'vegetable5': '🥬',
        'broccoli': '🥦', 'vegetable6': '🥦',
        'garlic': '🧄', 'seasoning': '🧄',
        'onion': '🧅', 'vegetable7': '🧅',
        'mushroom': '🍄', 'fungi': '🍄',
        'peanuts': '🥜', 'nuts': '🥜',
        'chestnut': '🌰', 'nut': '🌰',
        'bread2': '🍞', 'loaf': '🍞',
        'croissant': '🥐', 'french': '🥐',
        'baguette': '🥖', 'bread3': '🥖',
        'pretzel': '🥨', 'snack': '🥨',
        'bagel': '🥯', 'bread4': '🥯',
        'pancakes': '🥞', 'breakfast2': '🥞',
        'waffle': '🧇', 'breakfast3': '🧇',
        'cheese2': '🧀', 'swiss': '🧀',
        'meat': '🍖', 'bone': '🍖',
        'poultry leg': '🍗', 'drumstick': '🍗',
        'cut of meat': '🥩', 'steak': '🥩',
        'bacon2': '🥓', 'pork': '🥓',
        'hamburger2': '🍔', 'beef': '🍔',
        'sandwich': '🥪', 'lunch': '🥪',
        'taco2': '🌮', 'shell': '🌮',
        'burrito2': '🌯', 'mexican2': '🌯',
        'tamale': '🫔', 'mexican3': '🫔',
        'fondue': '🫕', 'cheese3': '🫕',
        'egg2': '🥚', 'chicken': '🥚',
        'cooking': '🍳', 'pan': '🍳',
        'shallow pan': '🥘', 'paella': '🥘',
        'pot': '🍲', 'stew2': '🍲',
        'bowl': '🥣', 'porridge': '🥣',
        'green salad': '🥗', 'healthy2': '🥗',
        'popcorn': '🍿', 'movie': '🍿',
        'butter': '🧈', 'dairy2': '🧈',
        'salt': '🧂', 'seasoning2': '🧂',
        'canned food': '🥫', 'tin': '🥫',
        'bento2': '🍱', 'japanese2': '🍱',
        'rice cracker': '🍘', 'snack2': '🍘',
        'rice ball': '🍙', 'onigiri': '🍙',
        'rice cake': '🍚', 'mochi': '🍚',
        'curry2': '🍛', 'indian': '🍛',
        'ramen2': '🍜', 'steam': '🍜',
        'oden': '🍢', 'skewer': '🍢',
        'sushi2': '🍣', 'fish2': '🍣',
        'fried shrimp': '🍤', 'tempura': '🍤',
        'fish cake': '🍥', 'swirl': '🍥',
        'moon cake': '🥮', 'chinese': '🥮',
        'dango': '🍡', 'sweet': '🍡',
        'dumpling': '🥟', 'gyoza': '🥟',
        'fortune cookie': '🥠', 'lucky': '🥠',
        'takeout box': '🥡', 'container': '🥡',
        'crab2': '🦀', 'seafood2': '🦀',
        'lobster': '🦞', 'seafood3': '🦞',
        'shrimp2': '🦐', 'prawn': '🦐',
        'squid': '🦑', 'calamari': '🦑',
        'oyster': '🦪', 'pearl': '🦪',
        'ice cream': '🍦', 'dessert': '🍦',
        'shaved ice': '🍧', 'snow cone': '🍧',
        'ice cream2': '🍨', 'sweet2': '🍨',
        'doughnut': '🍩', 'donut': '🍩',
        'cookie': '🍪', 'sweet3': '🍪',
        'birthday cake': '🎂', 'celebration2': '🎂',
        'shortcake': '🍰', 'slice': '🍰',
        'cupcake': '🧁', 'muffin': '🧁',
        'pie': '🥧', 'dessert2': '🥧',
        'chocolate': '🍫', 'sweet4': '🍫',
        'candy': '🍬', 'sweet5': '🍬',
        'lollipop': '🍭', 'sweet6': '🍭',
        'custard': '🍮', 'pudding': '🍮',
        'honey pot': '🍯', 'sweet7': '🍯',
        'baby bottle': '🍼', 'milk': '🍼',
        'glass of milk': '🥛', 'dairy3': '🥛',
        'coffee': '☕', 'hot drink': '☕',
        'tea': '🍵', 'green tea': '🍵',
        'sake': '🍶', 'japanese alcohol': '🍶',
        'champagne glass': '🥂', 'toast': '🥂',
        'wine glass': '🍷', 'alcohol': '🍷',
        'cocktail': '🍸', 'drink': '🍸',
        'tropical drink': '🍹', 'vacation': '🍹',
        'beer': '🍺', 'alcohol2': '🍺',
        'beers': '🍻', 'cheers': '🍻',
        'clinking glasses': '🥂', 'celebrate2': '🥂',
        'tumbler glass': '🥃', 'whiskey': '🥃',
        'cup': '🥤', 'straw': '🥤',
        'bubble tea': '🧋', 'boba': '🧋',
        'beverage box': '🧃', 'juice': '🧃',
        'mate': '🧉', 'drink2': '🧉',
        'ice cube': '🧊', 'cold2': '🧊',
        'chopsticks': '🥢', 'utensil': '🥢',
        'fork and knife': '🍴', 'cutlery': '🍴',
        'spoon': '🥄', 'utensil2': '🥄',
        'kitchen knife': '🔪', 'weapon': '🔪',
        'amphora': '🏺', 'vase': '🏺',

        // Objects
        'rocket': '🚀', 'space': '🚀',
        'star2': '⭐', 'shooting star': '⭐',
        'sun': '☀️', 'sunny': '☀️',
        'cloud': '☁️', 'weather': '☁️',
        'umbrella': '☂️', 'rain': '☂️',
        'snowman': '⛄', 'winter': '⛄',
        'ball': '⚽', 'soccer': '⚽',
        'basketball': '🏀', 'hoop': '🏀',
        'football': '🏈', 'american': '🏈',
        'baseball': '⚾', 'sport': '⚾',
        'tennis': '🎾', 'racket': '🎾',
        'volleyball': '🏐', 'sport2': '🏐',
        'ping pong': '🏓', 'table tennis': '🏓',
        'badminton': '🏸', 'shuttlecock': '🏸',
        'hockey': '🏒', 'puck': '🏒',
        'field hockey': '🏑', 'stick': '🏑',
        'lacrosse': '🥍', 'stick2': '🥍',
        'cricket': '🏏', 'bat': '🏏',
        'golf': '⛳', 'flag': '⛳',
        'bowling': '🎳', 'pin': '🎳',
        'pool': '🎱', 'billiards': '🎱',
        'video game': '🎮', 'controller': '🎮',
        'dart': '🎯', 'bullseye': '🎯',
        'game die': '🎲', 'dice': '🎲',
        'chess pawn': '♟️', 'chess': '♟️',
        'jigsaw': '🧩', 'puzzle': '🧩',
        'teddy bear': '🧸', 'toy': '🧸',
        'pinata': '🪅', 'party3': '🪅',
        'nesting dolls': '🪆', 'russian': '🪆',
        'magic wand': '🪄', 'wizard': '🪄',
        'yo-yo': '🪀', 'toy2': '🪀',
        'kite': '🪁', 'fly': '🪁',
        'parachute': '🪂', 'jump': '🪂',
        'boomerang': '🪃', 'return': '🪃',
        'bubble': '🫧', 'soap': '🫧',
        'thread': '🧵', 'needle': '🧵',
        'yarn': '🧶', 'knit': '🧶',
        'safety pin': '🧷', 'secure': '🧷',
        'ballet shoes': '🩰', 'dance': '🩰',
        'one-piece swimsuit': '🩱', 'swim': '🩱',
        'briefs': '🩲', 'underwear': '🩲',
        'shorts': '🩳', 'pants': '🩳',
        'thong sandal': '🩴', 'flip flop': '🩴',
        'drop of blood': '🩸', 'bleed': '🩸',
        'adhesive bandage': '🩹', 'bandaid': '🩹',
        'stethoscope': '🩺', 'doctor': '🩺',
        'x-ray': '🩻', 'scan': '🩻',
        'crutch': '🩼', 'support': '🩼',
        'dna': '🧬', 'genetic': '🧬',
        'microbe': '🦠', 'virus': '🦠',
        'lotion bottle': '🧴', 'moisturizer': '🧴',
        'safety goggles': '🥽', 'protect': '🥽',
        'elevator': '🛗', 'lift': '🛗',
        'chair': '🪑', 'sit': '🪑',
        'razor': '🪒', 'shave': '🪒',
        'axe': '🪓', 'chop': '🪓',
        'diya lamp': '🪔', 'oil': '🪔',
        'banjo': '🪕', 'music': '🪕',
        'long drum': '🪘', 'percussion': '🪘',
        'coin': '🪙', 'money3': '🪙',
        'carpentry saw': '🪚', 'tool': '🪚',
        'screwdriver': '🪛', 'tool2': '🪛',
        'ladder': '🪜', 'climb': '🪜',
        'hook': '🪝', 'catch': '🪝',
        'mirror': '🪞', 'reflect': '🪞',
        'window': '🪟', 'glass': '🪟',
        'plunger': '🪠', 'clean': '🪠',
        'sewing needle': '🪡', 'stitch': '🪡',
        'knot': '🪢', 'tie': '🪢',
        'bucket': '🪣', 'pail': '🪣',
        'mouse trap': '🪤', 'catch2': '🪤',
        'toothbrush': '🪥', 'clean2': '🪥',
        'headstone': '🪦', 'grave': '🪦',
        'placard': '🪧', 'sign': '🪧',
        'rock2': '🪨', 'stone': '🪨',
        'mirror ball': '🪩', 'disco': '🪩',
        'identification card': '🪪', 'id': '🪪',
        'low battery': '🪫', 'power': '🪫',
        'hamsa': '🪬', 'hand2': '🪬',
        'fly': '🪰', 'insect': '🪰',
        'worm': '🪱', 'bait': '🪱',
        'beetle': '🪲', 'bug2': '🪲',
        'cockroach': '🪳', 'pest': '🪳',
        'potted plant': '🪴', 'pot': '🪴',
        'wood': '🪵', 'log': '🪵',
        'feather': '🪶', 'light': '🪶',
        'lotus': '🪷', 'flower': '🪷',
        'coral': '🪸', 'reef': '🪸',
        'empty nest': '🪹', 'bird2': '🪹',
        'nest with eggs': '🪺', 'hatch': '🪺',
        'hyacinth': '🪻', 'flower2': '🪻',
        'jellyfish': '🪼', 'sea': '🪼',
        'wing': '🪽', 'fly2': '🪽',
        'goose': '🪿', 'bird3': '🪿',
        'phoenix': '🐦‍🔥', 'mythical': '🐦‍🔥',
        'moose': '🫎', 'deer': '🫎',
        'donkey': '🫏', 'ass': '🫏',
        'jellyfish2': '🪼', 'sting': '🪼',
        'ginger root': '🫚', 'spice': '🫚',
        'pea pod': '🫘', 'vegetable8': '🫘',
        'trumpet': '🎺', 'music2': '🎺',
        'violin': '🎻', 'music3': '🎻',
        'guitar': '🎸', 'music4': '🎸',
        'saxophone': '🎷', 'music5': '🎷',
        'accordion': '🪗', 'music6': '🪗',
        'long drum2': '🪘', 'music7': '🪘',
        'maracas': '🪇', 'shake': '🪇',
        'flute': '🪈', 'music8': '🪈',
        'military helmet': '🪖', 'army': '🪖',
        'accordion2': '🪗', 'squeeze': '🪗',
        'accordion3': '🪗', 'instrument': '🪗',
        'accordion4': '🪗', 'band': '🪗',
        'accordion5': '🪗', 'orchestra': '🪗',
    }

    const handleInputChange = (e) => {
        const text = e.target.value
        setInputText(text)
    }

    const getEmojiFromText = () => {
        const text = inputText.trim().toLowerCase()

        // Agar to'g'ridan-to'g'ri emoji kiritilsa, uni qaytaramiz
        if (inputText.match(/[\p{Emoji}]/u)) {
            return inputText
        }

        // Emoji nomlarini qidirish
        if (text in emojiMap) {
            return emojiMap[text]
        }

        // Qisman mosliklarni qidirish
        for (const [key, emoji] of Object.entries(emojiMap)) {
            if (key.includes(text) || text.includes(key)) {
                return emoji
            }
        }

        // Agar topilmasa, bo'sh qaytaramiz
        return ''
    }

    const copyToClipboard = () => {
        const emoji = getEmojiFromText()
        if (!emoji) return

        navigator.clipboard.writeText(emoji)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            })
            .catch(err => {
                console.error('Copy failed:', err)
            })
    }

    const handleEmojiClick = () => {
        copyToClipboard()
    }

    const emojiResult = getEmojiFromText()

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex items-center justify-center p-4 text-black">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                        ✨ Emoji Generator
                    </h1>
                    <p className="text-gray-600">Emoji nomini yozing va emoji oling!</p>
                </div>

                {/* Input Section */}
                <div className="mb-6">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Emoji nomini yozing... (masalan: cry, smile, heart)"
                            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                            autoFocus
                        />
                        <button
                            onClick={copyToClipboard}
                            disabled={!emojiResult}
                            className={`px-4 py-3 rounded-lg font-medium transition-all ${emojiResult
                                ? copied
                                    ? 'bg-green-500 hover:bg-green-600 text-white'
                                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                                : 'bg-gray-300 cursor-not-allowed text-gray-500'
                                }`}
                        >
                            {copied ? '✅ Nusxalandi!' : '📋 Nusxalash'}
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        Masalan: <span className="font-medium">cry</span>, <span className="font-medium">smile</span>, <span className="font-medium">heart</span>, <span className="font-medium">rocket</span>, <span className="font-medium">pizza</span>
                    </p>
                </div>

                {/* Preview Section */}
                <div
                    className={`mb-6 rounded-xl p-8 text-center cursor-pointer transition-all ${emojiResult
                        ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 hover:border-purple-500 hover:scale-105'
                        : 'bg-gray-100 border-2 border-dashed border-gray-300'
                        }`}
                    onClick={handleEmojiClick}
                >
                    {emojiResult ? (
                        <div className="text-8xl animate-bounce">
                            {emojiResult}
                        </div>
                    ) : (
                        <div className="space-y-2">
                            <div className="text-6xl opacity-30">🎯</div>
                            <p className="text-gray-500 font-medium">Bu yerga emoji chiqadi</p>
                            <p className="text-sm text-gray-400">Yukoridagi inputga emoji nomini yozing</p>
                        </div>
                    )}
                </div>

                {/* Popular Emojis */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-700">⚡ Tez-tez ishlatiladigan emoji nomlari:</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {['smile', 'cry', 'laugh', 'heart', 'fire', 'rocket', 'pizza', 'star', 'party', 'love', 'thumbs up', 'clap'].map((name, index) => (
                            <button
                                key={index}
                                onClick={() => setInputText(name)}
                                className="py-2 px-3 text-sm rounded-lg bg-gray-100 hover:bg-purple-100 hover:scale-105 transition-all duration-200 font-medium text-gray-700"
                                title={`"${name}" ni tanlash`}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">ℹ️ Qanday ishlatish:</h3>
                    <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Inputga emoji nomini yozing (masalan: <span className="font-medium">cry</span>, <span className="font-medium">smile</span>, <span className="font-medium">pizza</span>)</li>
                        <li>• Mos keladigan emoji avtomatik chiqadi</li>
                        <li>• Emoji ustiga bosing yoki "Nusxalash" tugmasini bosing</li>
                        <li>• Nusxalangan emojini istalgan joyga qo'yishingiz mumkin</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EmojiGenerator