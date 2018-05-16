import React, { Component } from "react";
import Select from "material-ui/Select";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText
} from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
class SelectRegionField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onRegionChange(event.target.value);
  }

  renderRegion() {
    const area = this.props.area;
    const HKISLAND = "香港島";
    const KOWLOON = "九龍";
    const NT = "新界";
    switch (this.props.area) {
      case HKISLAND:
        return (
          <FormControl>
            <InputLabel htmlFor="region"> 地區</InputLabel>
            <Select
              native
              value={this.props.region}
              onChange={this.handleChange}
              name="region"
            >
              <option value="堅尼地城">堅尼地城</option>
              <option value="西環">西環</option>
              <option value="西營盤">西營盤</option>
              <option value="半山">半山</option>
              <option value="中上環／金鐘">中上環／金鐘</option>
              <option value="山頂">山頂</option>
              <option value="灣仔">灣仔</option>
              <option value="銅鑼灣">銅鑼灣</option>
              <option value="跑馬地">跑馬地</option>
              <option value="大坑">大坑</option>
              <option value="渣甸山">渣甸山</option>
              <option value="北角">北角</option>
              <option value="天后">天后</option>
              <option value="炮台山">炮台山</option>
              <option value="鰂魚涌">鰂魚涌</option>
              <option value="太古坊">太古坊</option>
              <option value="筲箕灣">筲箕灣</option>
              <option value="西灣河">西灣河</option>
              <option value="柴灣">柴灣</option>
              <option value="杏花邨">杏花邨</option>
              <option value="薄扶林">薄扶林</option>
              <option value="香港仔">香港仔</option>
            </Select>
          </FormControl>
        );
      case KOWLOON:
        return (
          <FormControl>
            <InputLabel htmlFor="region"> 地區:</InputLabel>
            <Select
              native
              value={this.props.region}
              onChange={this.handleChange}
              name="region"
            >
              <option value="尖沙咀">尖沙咀</option>
              <option value="旺角">旺角</option>
              <option value="油麻地">油麻地</option>
              <option value="佐敦">佐敦</option>
              <option value="大角咀">大角咀</option>
              <option value="深水埗">深水埗</option>
              <option value="美孚">美孚</option>
              <option value="長沙灣">長沙灣</option>
              <option value="九龍城">九龍城</option>
              <option value="何文田">何文田</option>
              <option value="土瓜灣">土瓜灣</option>
              <option value="紅磡">紅磡</option>
              <option value="九龍塘">九龍塘</option>
              <option value="黃大仙">黃大仙</option>
              <option value="新蒲崗">新蒲崗</option>
              <option value="鑽石山">鑽石山</option>
              <option value="樂富">樂富</option>
              <option value="慈雲山">慈雲山</option>
              <option value="九龍灣">九龍灣</option>
              <option value="觀塘">觀塘</option>
              <option value="藍田">藍田</option>
              <option value="油塘">油塘</option>
              <option value="秀茂坪">秀茂坪</option>
              <option value="牛頭角">牛頭角</option>
              <option value="彩虹">彩虹</option>
            </Select>
          </FormControl>
        );
      case NT:
        return (
          <FormControl>
            <InputLabel htmlFor="region"> 地區:</InputLabel>
            <Select
              native
              value={this.props.region}
              onChange={this.handleChange}
              name="region"
            >
              <option value="葵青">葵青</option>
              <option value="荃灣">荃灣</option>
              <option value="屯門">屯門</option>
              <option value="元朗">元朗</option>
              <option value="北區">北區</option>
              <option value="大埔">大埔</option>
              <option value="沙田">沙田</option>
              <option value="西貢">西貢</option>
              <option value="離島">離島</option>
            </Select>
          </FormControl>
        );
      default:
        return (
          <FormControl>
            <InputLabel htmlFor="region"> 地區:</InputLabel>
            <Select
              native
              value={this.props.region}
              onChange={this.handleChange}
              name="region"
            >
              <option value="請選擇地區">請選擇地區</option>
            </Select>
          </FormControl>
        );
    }
  }

  render() {
    const options = this.renderRegion();

    return options;
  }
}

export default SelectRegionField;
