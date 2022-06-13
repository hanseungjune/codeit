with open('vocabulary.txt', 'a') as f:
    while True:
        english_word = input('영어 단어를 입력하세요: ')
        if english_word == 'q':
            break

        korean_word = input('한국어 뜻을 입력하세요: ')
        if korean_word == 'q':
            break

        f.write("{0}: {1}\n".format(english_word, korean_word))