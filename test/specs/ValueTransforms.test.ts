import ValueTransforms from '../../src/ValueTransforms'

describe(ValueTransforms, () => {
  it('decodes colors', () => {
    expect(ValueTransforms.decodeColor(-65536)).toBe('rgba(255,0,0,1)');
    expect(ValueTransforms.decodeColor(-16711936)).toBe('rgba(0,255,0,1)');
    expect(ValueTransforms.decodeColor(-1)).toBe('rgba(255,255,255,1)');
  })

  it('encodes colors', () => {
    expect(ValueTransforms.encodeColor('rgba(255,0,0,1)')).toBe(-65536);
    expect(ValueTransforms.encodeColor('rgba(0,255,0,1)')).toBe(-16711936);
    expect(ValueTransforms.encodeColor('rgba(255,255,255,1)')).toBe(-1);
  })

  it('encodes hex colors', () => {
    expect(ValueTransforms.encodeColor('#ff0000')).toBe(-65536);
    expect(ValueTransforms.encodeColor('#00ff00')).toBe(-16711936);
    expect(ValueTransforms.encodeColor('#ffffff')).toBe(-1);
  })
})
