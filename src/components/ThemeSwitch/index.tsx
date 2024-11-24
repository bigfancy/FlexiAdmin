import { Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '@/redux/modules/theme/action';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: any) => state.theme.isDark);

  const handleThemeChange = (checked: boolean) => {
    dispatch(setTheme({ isDark: checked }));
    // 切换 body 的主题类名
    document.body.className = checked ? 'dark' : 'light';
  };

  return (
    <Switch
      checked={isDark}
      onChange={handleThemeChange}
      checkedChildren="🌜"
      unCheckedChildren="🌞"
    />
  );
};

export default ThemeSwitch; 