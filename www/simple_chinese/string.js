﻿
var str_index1="注意事项：";
var str_index2="请注意，在那里登陆方法; IE浏览器，请选择ACTIVEX模式; Safari浏览器，火狐，谷歌Chrome，请选择服务器推送模式手机，请选择第三种模式。";


//var str_led_mode='信号指示灯控制';
var str_ir='红外线灯控制';
var str_cate_1 = '设备基本信息';
var str_cate_2 = '设备音视频配置';
var str_cate_3 = '存储配置';
var str_cate_4 = '设备网络配置';
var str_cate_5 = 'PTZ配置';
var str_cate_6 = '用户及设备管理';
var str_cate_7 = '维护';
var str_alarm_x_1 = '报警触发事件';
var str_alarm_x_2 = '报警布防时间';
var str_alarm_x_rec = '报警录像';
var str_alarm_x_anap = '报警抓拍';
var str_weihu = '维护';
var str_rec_x_1 = '录像文件模式';
var str_rec_x_2 = '定时';
var str_rec_x_3 = '定长';
var str_rec_x_4 = '录像长度';
var str_rec_x_5 = '(如果是定时，表示时间，如果定长，表示长度)';
var str_for_ie_h264 = 'livestream模式(for IE)';
var str_for_others_jpeg = 'videostream模式(for FireFox)';
var str_for_mobile_h264 = 'snapshot模式 (for smartphone)';
var str_Saturation = '饱和度';
var str_Chroma = '色度';
var str_video_x= '音视频';
//var str_video_option='<option value=1>主码流(有音频)</option><option value=2>主码流(无音频)</option><option value=3>子码流(有音频)</option><option value=4>子码流(无音频)</option>';
var str_video_option='<option value=1>音视频</option><option value=2>视频</option>';
var str_la = '语言版本';
var str_Ptz_leftUpText='左上';
var str_Ptz_leftDownText='左下';
var str_Ptz_rightUpText='右上';
var str_Ptz_rightDownText='右下';
var str_valid_ip = '请输入正确的ip地址';
var str_valid_ip1 = '请输入正确的子网掩码';
var str_valid_ip2 = '请输入正确的网关';
var str_valid_ip3 = '请输入正确的DNS1';
var str_valid_ip4 = '请输入正确的DNS2';
var str_speed_xh='巡航速度';
var str_here = "点这里"
var str_user_111 = "参观者";
var str_user_222 = "操作者";
var str_user_333 = "管理员";
var str_ptz_speed_1 = "慢速";
var str_ptz_speed_2 = "中速";
var str_ptz_speed_3 = "快速";
var str_user_x1 = "管理员账号用户名必须填写";
var str_user_x2 = "用户名不能相同";
var str_log_clr = "清除";
var str_wps = "Wi-Fi保护设置（WPS）";
var str_wps_1 = "禁用";
var str_ddns_service_list_new="<option value=0>无</option><option value=2>DynDns.org(dyndns)</option><option value=8>3322.org(dyndns)</option><option value=10>9299.org</option><option value=17>NO-IP</option>"; 
var str_wps_status = "Wi-Fi保护设置（WPS）状态";
var str_wps_msg0 = "未动作";
var str_wps_msg1 = "wps 失败";
var str_wps_msg2 = "wps 成功";
var str_wps_msg3 = "wps 重叠检测";
var str_wps_msg4 = "wps 处理中";
var str_wps_msg5 = "未知状态";
var str_wifi_mode_x = "AP参数设置";
var str_wifi_mode_x_1 = "即将进入无线点对点模式，请确认！";
var str_wifi_mode_x_2 = "无线模式";
var str_wifi_mode_msg0 = "无线点对点模式";
var str_wifi_mode_msg1 = "IPCAM模式";
var str_wifi_mode_list_x='<option value=0>wifi点对点模式</option><option value=1>IPCAM模式</option>';
var str_9299_chat_err="9299 失败: 未收到服务器正确的响应";
var str_recpath_sel="选择...";
var str_alarm_Sensibility="数值越小越灵敏";
var str_mail_sel_ser="<option value='' selected>请选择</option>";
var str_not_null="内容不能为空";
var str_port_range="端口范围 (81~65535)";
var str_ftp_upimg_time="空或者0表示不定时上传图片";
var str_mail_reviver_null="至少有一个接收者";
var str_media_main_1="主码流";
var str_media_sub_1="子码流";
var str_fac_dns="设备域名";
var str_ptz_run_1="<option value='0' selected>禁止</option>";
var str_ocx_down="插件下载";
var str_wireless_single="信号强度";
var str_pt_run_always = "无限制";
var str_rec_FileLen="录像打包文件大小(MB)";
var str_rec_TimeLen="录像打包时间长度(分钟)";
var str_rec_reservedDiskSpace="保留磁盘空间(MB)";
var str_rec_Cover="是否覆盖录像";
var str_rec_FileLen_1="最小100MB,最大1000MB";
var str_rec_TimeLen_1="最小5分钟,最大120分钟";
var str_rec_reservedDiskSpace_1="最小200MB";
var str_disk_1="格式化";
var str_disk_2="SD卡未格式化";
var str_ap_channel="通道";
var str_port_range_1="端口范围 (1~65535)";
var str_rec_sch_time="录像时长(分钟)";
var str_rec_sch_time_1="录像时长范围5~180分钟";
var str_sd_sdtotal="sd卡总容量(M)";
var str_sd_sdfree="sd卡剩余容量(M)";
var str_url_record_file="SD卡录像在线回放(适用于IE浏览器)";
var str_osd_option__a='<option value=0>禁止</option><option value=1>启用</option>';

var str_sun='星期日';
var str_mon='星期一';
var str_tue='星期二';
var str_wed='星期三';
var str_thu='星期四';
var str_fri='星期五';
var str_sat='星期六';
var str_day='天';
var str_schedule='日程安排';
var str_rebootinfo='设备正在重启，不要切断电源，请稍候 ...';
var str_refreshcameraparams='刷新摄像机参数';
var str_refreshvideo='刷新影像';
var str_alarmstatus='报警状态';
var str_motion_alarm='移动侦测报警';
var str_input_alarm='外部输入报警';
var str_livevideo='实时影像';
var str_devicemanagement='设备管理';
var str_ie_protected_mode_info='由於 IE 保护模式已开启，录像功能无法使用。可将本站添加到可信任站点中来避免此情况的发生(IE 工具菜单 > Internet 选项 > 安全 > 可信任站点)';
var str_buffer='音频缓冲';
var str_osd_option='<option>禁止</option><option>黑色</option><option>黄色</option><option>红色</option><option>白色</option><option>蓝色</option>';
var str_reversal='图像翻转';
var str_mirror='图像镜像';
var str_anonymous='匿名';
var str_mode_activex='ActiveX 模式(适用于 IE 浏览器)';
var str_mode_serverpush='Server Push 模式(适用于 FireFox、Google 浏览器)';
var str_ipcam_title='连接网络摄像机'; 
var str_ipcam_user='用户';
var str_ipcam_pwd='密码';
var str_ipcam_til='保存密码(R)';
var str_ipcam_ok='确认';
var str_ipcam_no='取消';
var str_user='用户';
var str_pwd='密码';
var str_signin='登 录';
var str_attention='注:';
var str_attention1='用户密码区分大小写';
var str_attention2='建议使用 1024 * 768 屏幕分辨率';
var str_devicestatus='设备状态';
var str_4visitor='参观者操作';
var str_4operator='操作者操作';
var str_4administrator='管理者操作';
var str_configdevice='设备参数设置';
var str_talk='对话';
var str_audio='音频';
var str_video='视频';
var str_play='播放';
var str_stop='停止';
var str_snapshot='拍照';
var str_alias='名称';
var str_switch='开关';
var str_switchon='开关闭合';
var str_switchoff='开关打开';
var str_open='打开';
var str_close='闭合';
var str_resolution='分辨率';
var str_mode='模式';
var str_brightness='亮度';
var str_contrast='对比度';
var str_outdoor='室外';
var str_default = '恢复视频缺省值';
var str_unselected='未选中';
var str_device='设备';
var str_err_connect='不能连接到指定设备';
var str_err_socket='网络出错';
var str_err_timeout='网络超时';
var str_err_version='错误的软件版本';
var str_err_cancel='用户取消';
var str_err_closed='设备主动断开连接';
var str_err_file='文件操作失败';
var str_err_param='非法的参数';
var str_err_thread='线程操作失败';
var str_err_status='非法的状态';
var str_err_id='错误的设备标识';
var str_fail_user='未知的用户';
var str_fail_maxconns='已达到最大连接数';
var str_fail_version='错误的软件版本';
var str_fail_id='错误的设备标识';
var str_fail_pwd='用户密码不正确';
var str_fail_pri='用户权限不足';
var str_fail_unsupport='设备不支持此功能';
var str_err_unknown='未知错误';
var str_failtoconnect='连接设备失败';
var str_failtorecord='录像操作失败';
var str_failtoplayvideo='播放视频操作失败';
var str_failtoplayaudio='播放音频操作失败';
var str_failtostarttalk='对话操作失败';
var str_save='保存';
var str_dev_info='设备信息';
var str_alias_config='设备名称设置';
var str_goback='返回';
var str_datetime_config='设备时钟设置';
var str_users_config='设备用户设置';
var str_multidevice_config='多路设备设置';
var str_network_config='基本网络设置';
var str_dns_config='域名服务设置';
var str_dns_enable='域名启动';
var str_wireless_config='无线局域网设置';
var str_adsl_config='ADSL 设置';
var str_upnp_config='UPnP 设置';
var str_ddns_config='动态域名设置';
var str_mail_config='邮件服务设置';
var str_ftp_config='Ftp 服务设置';
var str_alarm_config='报警服务设置';
var str_upgrade_firmware='设备固件升级';
var str_restore_factory='恢复出厂设置';
var str_reboot = '重启设备';
var str_dev_id='设备序列号';
var str_sw_ver='设备系统固件版本';
var str_aw_ver='设备应用固件版本';
var str_set='设置';
var str_upgrade='升级';
var str_failtoset='参数设置操作失败';
var str_oktoset='参数设置操作成功';
var str_oktoset_reboot='参数设置操作成功，设备即将重启';
var str_failtoreboot='重启操作失败';
var str_oktoreboot='重启操作成功';
var str_failtorestore='恢复出厂参数操作失败';
var str_oktorestore='恢复出厂参数操作成功，设备即将重启';
var str_upgrade_swware='升级设备系统固件';
var str_upgrade_awware='升级设备应用固件';
var str_failtoupgrade='升级操作失败';
var str_oktoupgrade = '升级操作成功，设备即将重启';
var str_upgrading_progress='升级进度';
var str_group='组';
var str_pri_list='<option value=1>参观者</option><option  value=2>操作者</option><option value=255>管理者</option>';
var str_visitor='参观者';
var str_operator='操作者';
var str_administrator='管理者';
var str_refresh='刷新';
var str_device_clock_time='设备时钟时间';
var str_failtofetch='获取参数操作失败';
var str_device_tz='设备时区设定';
var str_ntp_choice='使用 NTP 服务器自动校时';
var str_ntp_server='Ntp 服务器';
var str_syncwithpc='使用 PC 时间校准设备时钟';
var str_dhcp_choice='从 DHCP 服务器获取 IP 地址';
var str_dns='域名';
var str_dns_port='域名端口';
var str_dns_times='心跳包间隔';
var str_ip='IP 地址';
var str_mask='子网掩码';
var str_gateway = '网关设置';
var str_dns='DNS 服务器';
var str_dns1='DNS 服务器1';
var str_dns2='DNS 服务器2';
var str_cmdport='命令端口';
var str_dataport='媒体端口';
var str_port='Http 端口';
var str_cmd_port='控制端口';
var str_data_port='媒体端口';
var str_rtsp_port='Rtsp端口';
var str_adsl_choice='使用 ADSL 拨号上网';
var str_rtsp_config='rtsp 设置';
var str_rtsp_choice='rtsp 认证'
var str_rtsp_user='rtsp 用户';
var str_rtsp_pwd='rtsp 密码';
var str_adsl_user='ADSL 用户';
var str_adsl_pwd='ADSL 密码';
var str_mail_inet_ip='邮件通知 Internet IP 地址';
var str_upnp_choice='使用 UPnP 自动映射端口';
var str_upnp_status='UPnP 状态';
var str_upnp_msg0='未动作';
var str_upnp_msg1='UPnP 成功';
var str_upnp_msg2='UPnP 失败: 设备系统错误';
var str_upnp_msg3='UPnP 失败: 网络通信错误';
var str_upnp_msg4='UPnP 失败: 与 UPnP 设备对话错误';
var str_upnp_msg5='UPnP 失败: UPnP 设备拒绝，可能端口冲突';
var str_sender='发送者';
var str_receiver='接收者';
var str_mailssl='SSL';
var str_smtp_svr='SMTP 服务器';
var str_smtp_auth='需要校验';
var str_smtp_user='SMTP 用户';
var str_smtp_pwd='SMTP 密码';
var str_ftp_svr='FTP 服务器';
var str_ftp_port='FTP 端口';
var str_ftp_user='FTP 用户';
var str_ftp_pwd='FTP 密码';
var str_ftp_dir='FTP 上传目录';
var str_ftp_mode='FTP 模式';
var str_ftp_upload_enable='即刻上传图片';
var str_ftp_upload_interval='上传图片时间间隔(秒)';
var str_motion_enable='移动侦测布防';
var str_motion_sensitivity='移动侦测灵敏度';
var str_high='高';
var str_medium='中';
var str_low='低';
var str_extern_enable='报警输入布防';
var str_alarm_mail_enable='报警后邮件通知';
var str_alarm_ftp_enable='报警后上传图片';
var str_alarm_linkage_enable='报警后 IO 联动';
var str_alarm_http_enable='报警后 Http 通知';
var str_alarm_http_url='Http 网址';
var str_ddns_service='DDNS 服务';
var str_ddns_user='DDNS 用户';
var str_ddns_pwd='DDNS 密码';
var str_ddns_host='DDNS 域名';
var str_proxy_svr='DDNS 或代理服务器';
var str_proxy_port='DDNS 或代理服务端口';
var str_ddns_mode='DDNS 模式';
var str_dns_status='DNS 状态';
var str_ddns_status='DDNS 状态';
var str_restart_dyndns='忽略所有错误并发送更新请求';
var str_restart_dyndns_comment='只有当您的域名被取消阻止后才应执行此操作';
var str_dyndns_proxy_comment='如本设置位於中国大陆或香港地区，应设置代理服务器';
var str_ddns_noaction='未动作';
var str_ddns_waiting='连接服务器 ...';
var str_ddns_cannotconnect='连接服务器失败';
var str_easynx_ok='EasyNX 成功';
var str_easynx_noauth='EasyNX 失败: 没有权限';
var str_easynx_noid='EasyNX 失败: 账号不存在';
var str_easynx_over='EasyNX 失败: 账号已过期';
var str_easynx_iddisable='EasyNX 失败: 账号已禁用';
var str_easynx_errparam='EasyNX 失败: 参数错误';
var str_easynx_unknownerr='EasyNX 失败: 未知错误';
var str_3322_ok='3322 成功';
var str_3322_sys_err='3322 失败: 系统错误';
var str_3322_badauth = '3322 失败: 用户或密码错误';
var str_3322_donator='3322 失败: 非信用用户';
var str_3322_notfqdn='3322 失败: 域名格式不正确';
var str_3322_nohost='3322 失败: 域名不存在';
var str_3322_yours = '3322 失败: 域名不属于你';
var str_3322_numhost='3322 失败: 太多或太少的域名请求';
var str_3322_abuse='3322 失败: 域名因滥用被阻止';
var str_3322_server_err='3322 失败: 服务器错误';
var str_3322_chat_err='3322 失败: 未收到服务器正确的响应';
var str_dyndns_ok='DynDns 成功';
var str_dyndns_sys_err='DynDns 失败: 系统错误';
var str_dyndns_badauth='DynDns 失败: 用户或密码错误';
var str_dyndns_donator='DynDns 失败: 非信用用户';
var str_dyndns_notfqdn='DynDns 失败: 域名格式不正确';
var str_dyndns_nohost='DynDns 失败: 域名不存在';
var str_dyndns_yours = 'DynDns 失败: 域名不属于你';
var str_dyndns_numhost='DynDns 失败: 太多或太少的域名请求';
var str_dyndns_abuse='DynDns 失败: 域名因滥用被阻止';
var str_dyndns_server_err='DynDns 失败: 服务器错误';
var str_dyndns_chat_err = 'DynDns 失败: 未收到服务器正确的响应';
var str_oray_chat_err = '花生壳失败: 未收到服务器正确的响应';
var str_oray_bad_auth='花生壳失败: 用户或密码错误';
var str_oray_bad_host='花生壳失败: 错误的域名';
var str_oray_standard_ok='花生壳(标准服务)成功';
var str_oray_professional_ok='花生壳(专业服务)成功';
var str_ddns_ok='DDNS 成功';
var str_ddns_failed='DDNS 失败';
var str_yu_ddns_ok='Vidamax 成功';
var str_yu_ddns_failed='Vidamax 失败';
var str_9299_ok='9299成功';
var str_9299_er='用户己过期';
var str_9299_da='用户未激活';
var str_9299_sne='用户信息错误';
var str_9299_ne='一级域名错误';
var str_smart_ok='注册成功';
var str_smart_noauth='无法注册';
var str_devicelist_inlan='当前局域网中的设备列表';
var str_subnet_nomatch='子网不匹配';
var str_1st_device='第一路设备';
var str_2nd_device='第二路设备';
var str_3rd_device='第三路设备';
var str_4th_device='第四路设备';
var str_5th_device='第五路设备';
var str_6th_device='第六路设备';
var str_7th_device='第七路设备';
var str_8th_device='第八路设备';
var str_9th_device='第九路设备';
var str_none='无';
var str_this_device='本机';
var str_host = '主机地址';
var str_add='添加';
var str_remove='删除';
var str_multidevice_attention='注: 如果需要从 internet 访问，请确保输入的主机端口是能从 internet 访问到的';
var str_wifi_choice='使用无线局域网';
var str_wifi_power='WIFI电源';
var str_wifi_encryption='安全模式';
var str_wifi_wep_key_index = '选择密钥';
var str_wifi_wep_key1 = '密钥 1';
var str_wifi_wep_key2 = '密钥 2';
var str_wifi_wep_key3 = '密钥 3';
var str_wifi_wep_key4 = '密钥 4';
var str_wifi_channel = '信道';
var str_wifi_authtype='验证模式';
var str_auth_open='开放系统';
var str_auth_share = '共享密钥';
var str_wifi_keytype = '密钥格式';
var str_hex='16 进制数字';
var str_ascii='ASCII 字符';
var str_sure_reboot='您确定要重启设备吗';
var str_sure_restore='您确定要恢复出厂设置吗';
var str_center='居中';

var str_vertical_patrol='上下巡视';
var str_horizon_patrol='左右巡视';
var str_stop_vertical_patrol='停止上下巡视';
var str_stop_horizon_patrol='停止左右巡视';
var str_start='开始';
var str_test='测试';
var str_succeed='成功';
var str_failed='失败';
var str_ftp_error_connect='无法连接到服务器';
var str_ftp_error_network = '网络错误，请稍后再试';
var str_ftp_error_server='服务器错误';
var str_ftp_error_user = '错误的用户名或密码';
var str_ftp_error_pwd = '错误的用户名或密码';
var str_ftp_error_dir='无法访问指定目录，请确认目录存在及用户拥有访问目录的权限';
var str_ftp_error_pasv='PASV 模式下出错，可能服务器不支持 PASV 模式';
var str_ftp_error_port = 'PORT 模式下出错，可能设备位于 NAT 后端导致服务器无法连接设备，请尝试 PASV 模式';
var str_ftp_error_stor='无法上传文件，请确认用户拥有上传文件的权限';
var str_smtp_error_connect='无法连接到服务器';
var str_smtp_error_network = '网络错误，请稍后再试';
var str_smtp_error_server='服务器错误';
var str_smtp_error_user = '错误的用户名或密码';
var str_smtp_error_pwd = '错误的用户名或密码';
var str_smtp_error_sender='服务器拒绝发件人，服务器可能需要对用户进行认证，请选择该选项再试';
var str_smtp_error_receiver	= '服务器拒绝收信人，可能是服务器的反垃圾邮件策略导致的';
var str_smtp_error_message = '服务器拒绝信件内容，可能是服务器的反垃圾邮件策略导致的';
var str_smtp_error_auth	 = '服务器不支持设备所采用的认证方式';
var str_test_info='请先设置参数,然后再测试';
var str_lowest='最低';
var str_wifi_mode_list='<option>访问点</option><option>点到点</option>';
var str_smtp_port='SMTP 端口';
var str_ddns_service_list='<option value=0>无</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>';
var str_ddns_service_list11='<option value=0>无</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>><option value=11>ipcam</option>';
var str_ddns_service_list12='<option value=0>无</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>><option value=12>ipcam</option>';
var str_ddns_service_list13='<option value=0>无</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>><option value=13>ipcam</option>';
var str_ddns_service_list14='<option value=0>无</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=10>9299.org</option>><option value=14>ipcam</option>';
var str_yu_ddns_service_list = '<option value=0>无</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option><option value=5>江西电信</option><option value=6>VidaMax</option><option value=7>EasyNX.cn</option>';
var str_psd_ddns_service_list='<option value=0>无</option><option value=7>IPCam</option><option value=2>DynDns.org(dyndns)</option><option value=3>DynDns.org(statdns)</option><option value=4>DynDns.org(custom)</option><option value=8>3322.org(dyndns)</option><option value=9>3322.org(statdns)</option>';
var str_tz_list='<option value=39600>(GMT -11:00) 中途岛, 萨摩亚群岛</option><option value=36000>(GMT -10:00) 夏威夷</option><option value=32400>(GMT -09:00) 阿拉斯加</option><option value=28800 selected="selected">(GMT -08:00) 太平洋时间(美国和加拿大)</option><option value=25200>(GMT -07:00) 山地时间(美国和加拿大)</option><option value=21600>(GMT -06:00) 中部时间(美国和加拿大), 墨西哥城</option><option value=18000>(GMT -05:00) 东部时间(美国和加拿大), 利马, 波哥大</option><option value=14400>(GMT -04:00) 大西洋时间(加拿大), 圣地亚哥, 拉巴斯<option value=12600>(GMT -03:30) 纽芬兰</option><option value=10800>(GMT -03:00) 巴西利亚, 布宜诺斯艾丽斯, 乔治敦</option><option value=7200>(GMT -02:00) 中大西洋</option><option value=3600>(GMT -01:00) 佛得角群岛</option><option value=0>(GMT) 格林威治平时; 伦敦, 里斯本, 卡萨布兰卡</option><option value=-3600>(GMT +01:00) 布鲁赛尔, 巴黎, 柏林, 罗马, 马德里, 斯多哥尔摩, 贝尔格莱德, 布拉格</option><option value=-7200>(GMT +02:00) 雅典, 耶路撒冷, 开罗, 赫尔辛基<option value=-10800>(GMT +03:00) 内罗毕, 利雅得, 莫斯科</option><option value=-12600>(GMT +03:30) 德黑兰</option><option value=-14400>(GMT +04:00) 巴库, 第比利斯, 阿布扎比, 马斯科特</option><option value=-16200>(GMT +04:30) 科布尔</option><option value=-18000>(GMT +05:00) 伊斯兰堡, 卡拉奇, 塔森干</option><option value=-19800>(GMT +05:30) 加尔各答, 孟买, 马德拉斯, 新德里</option><option value=-21600>(GMT +06:00) 阿拉木图, 新西伯利亚, 阿斯塔南, 达尔</option><option value=-25200>(GMT +07:00) 曼谷, 河内, 雅加达</option><option value=-28800>(GMT +08:00) 北京, 新加坡, 台北</option><option value=-32400>(GMT +09:00) 首尔, 雅库茨克, 东京</option><option value=-34200>(GMT +09:30) 达尔文</option><option value=-36000>(GMT +10:00) 关岛, , 墨尔本, 悉尼, 莫尔兹比港, 符拉迪沃斯托克</option><option value=-39600>(GMT +11:00) 马加丹, 所罗门群岛, 新喀里多尼亚</option><option value=-43200>(GMT +12:00) 奥克兰, 惠灵顿, 斐济</option>';
var str_decoder_config='解码器设置';
var str_baud='波特率';
var str_fail_forbidden='当前此功能被禁止';
var str_log='报警日志';
var str_wifi_list='无线网络列表';
var str_scan='搜索';
var str_wifi_scan_info='正在搜索中 ...';
var str_backup_restore='备份和恢复参数';
var str_backup='备份';
var str_restore='恢复';
var str_wifi_networktype='网络类型';
var str_triger_level='触发电平';
var str_output_level='输出电平';
var str_zoom_plus='变倍+';
var str_zoom_minus='变倍-';
var str_ptz_config='PTZ 设置';
var str_autocenter='启动时自动对中';
var str_pt_preset='启动时对准预置位';
var str_pt_speed='PTZ';
var str_pt_run='巡航圈数';
var str_up_speed='向上巡航速度';
var str_down_speed='向下巡航速度';
var str_left_speed='向左巡航速度';
var str_right_speed='向右巡航速度';
var str_p2p_status='P2P 状态';
var str_p2p_msg0='未动作';
var str_p2p_msg1='无法连接到服务器';
var str_p2p_msg2='正在连接服务器 ...';
var str_p2p_msg3='与服务器连接超时断开';
var str_p2p_msg4='与服务器连接成功，本地监听端口: ';
var str_specify_filename='指定文件名（不包含 .jpg）';
var str_specify_numberoffiles='指定文件保存数量上限';
var str_mode_Mobile='No Plug-In 模式(适用于智能手机浏览器--JPEG)';
var str_Ptz_UpText='上';
var str_Ptz_DownText='下';
var str_Ptz_LeftText='左';
var str_Ptz_RightText='右';
var str_Ptz_StopText='居中';
var str_Ptz_FastText='快';
var str_Ptz_SlowText='慢';
var str_PresetTitle='预置位';
var str_CallPreset='调用';
var str_SetPreset='设置';
var str_forbidden_config='禁止查看音视频设置';
var str_BrowseBtn = '浏览 ...';
var str_media_config='媒体配置';
var str_media_size='媒体尺寸';
var str_media_framerate='帧率';
var str_media_keyframe='关键帧';
var str_media_quant='质量';
var str_media_ratemode='码率模式';
var str_media_bitrate='码率';
var str_inter_addr='内部IP地址';
var str_sd_status='sd总容量';
var str_sd_status1='sd剩余容量';
var str_sd_status2='sd状态';
var str_extern_addr='外部地址';
var str_MaxRate='帧率';
var str_PresetGroup='巡航组';
var str_PresetGroup_Excute='执行';
var str_PresetGroup_Cancel='取消';
var str_PresetGroup_Tip='巡航组脚本:\n\n如:\n\np1w5p2w10: 表示调用预置位1停留5秒钟,然后调用预置位2停留10秒钟,重复执行.\n\n注:停留时间单位为秒,且必须大于5秒才有效.';
var str_motion_preset='报警时预置位联动';
var str_pz_atocenter='启动时自动对中(不对中必须禁用预置位)';
var str_pz_dispreset='禁止预置位';
var str_outdoor_mode='室外模式';
var str_led_mode='指示灯';
var str_close='关闭';
var str_mode_1='模式1';
var str_mode_2='模式2';
var str_paramset='设置';
var str_ocx_til='您还没有安装OCX控件，请先下载OCX控件并安装';
var str_rtsp_stream='RTSP流(适用于H264流媒体播放器)';
var str_select_all='全选';


var str_reversal='图像倒立';  
var str_mirror='图像镜像';
var str_switchon='打开信号指示灯';
var str_switchoff='关闭信号指示灯';
var str_record='录像';
var str_snapshot='拍照';
var str_talk='对讲';
var str_audio='耳机';
var str_setup='管理后台';


var str_record_sch='SD卡录像计划';
var str_record_info='录像信息';
var str_record_filename='录像文件名';
var str_record_download='下载';
var str_record_del='删除';
var str_record_path='本地录像拍照路径';
var str_record_info_fielist='录像文件列表';
var str_record_path_path='本地录像文件列表';
var str_record_schdule='录像计划';
var str_record_sd_status='sd卡状态';
var str_sd_exist='SD卡己经插入';
var str_sd_no='sd卡没有插入';
var str_record_cover='录像覆盖';
var str_record_alarm_gpio='GPIO报警录像';
var str_record_alarm_motion='移动录像';
var str_record_alarm_time='定时录像';
var str_record_stop='录像没有启动';
var str_not_record='SD卡没有插入';
var str_recording='SD卡正在录像之中';
var str_record_osd='录像中增加时间戳';