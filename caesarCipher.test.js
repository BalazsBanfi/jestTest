import caesarCipher from './caesarCipher';


test('"A", 2 should become "C"', () => {
    expect(caesarCipher("A", 2)).toBe("C");
});


test('"A", 20 should become "U"', () => {
    expect(caesarCipher("A", 20)).toBe("U");
});

test('"Z", 2 should become "B"', () => {
    expect(caesarCipher("Z", 2)).toBe("B");
});

test('"Y", 20 should become "K"', () => {
    expect(caesarCipher("Y", 20)).toBe("S");
});

test('"a", 2 should become "c"', () => {
    expect(caesarCipher("a", 2)).toBe("c");
});


test('"a", 20 should become "u"', () => {
    expect(caesarCipher("a", 20)).toBe("u");
});

test('"z", 2 should become "b"', () => {
    expect(caesarCipher("z", 2)).toBe("b");
});

test('"y", 20 should become "k"', () => {
    expect(caesarCipher("y", 20)).toBe("s");
});

test('"Okay dokyy!", 23 should become "Lhxv alhvv!"', () => {
    expect(caesarCipher("Okay dokyy!", 23)).toBe("Lhxv alhvv!");
});

test('"The Odin Page is the best for studiyng web development!!!", 11 should become "Esp Zoty Alrp td esp mpde qzc defotjyr hpm opgpwzaxpye!!!"', () => {
    expect(caesarCipher("The Odin Page is the best for studiyng web development!!!", 11)).toBe("Esp Zoty Alrp td esp mpde qzc defotjyr hpm opgpwzaxpye!!!");
});