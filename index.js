import React from 'react'
import {observer} from "mobx-react"
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon, Badge, Button, Popover,Dropdown } from 'antd'
import uuid from 'uuid/v1'
import './index.less'
    import Logo from '../../assets/imgs/logo_app_dich.png' ;
import { Line } from 'react-chartjs-2'
import { DatePicker, Radio } from 'antd';
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const menu=(    <Menu>
    ick
</Menu>
)
const menu1=(    <Menu>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Tạo bài dịch mới</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Bài dịch chưa đăng</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Bài cần duyệt</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Bài cần dịch</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Bài đang dịch</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Bài đã duyệt</a>

    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Bài đã xóa</a>
    </Menu.Item>
</Menu>
)
const menu2=(    <Menu>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">MOD</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Dich giả</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Dịch giả chưa duyệt</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Phần mềm</a>
    </Menu.Item>
    <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Cài đặt</a>
    </Menu.Item>
</Menu>
)


@observer



 class TranslateTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            columnDefs: [
                {headerName: 'TIÊU ĐỀ', field: 'title'},
                {headerName: 'MỨC ĐỘ HOÀN THÀNH', field: 'degreeCompletion'},
                {headerName: 'LOẠI BÀI', field: 'typeOfTranslation'},
                {headerName: 'NGÀY KT', field: 'endTime'}

            ],
            rowData: [
                {title: 'Scientists discover brain cells responsible for direction and memory', degreeCompletion: 'Celica', typeOfTranslation: "Thường",endTime:'20/11/2018'},
                {title: 'Progress Towards a Cure for HIV', degreeCompletion: 'Mondeo', typeOfTranslation: "Thường",endTime:'2-11-2018'},
                {title: 'Rare stem cell may be the root of all metastatic cancers', degreeCompletion: 'Boxter', typeOfTranslation: "Thường",endTime:'20/09/2018'},
                {title: 'Breast cancer treatment more effective when determined by tumor cell count', degreeCompletion: 'Boxter', typeOfTranslation: "Chuyên ngành",endTime:'20/01/2018'},
                {title: 'Chuyên ngành 2', degreeCompletion: 'Boxter', typeOfTranslation: "Chuyên ngành",endTime:'22/11/2018'},
                {title: 'Chuyên ngành 1', degreeCompletion: 'Boxter', typeOfTranslation: "Chuyên ngành",endTime:'01/09/2018'},
                {title: 'Admin tạo TT', degreeCompletion: 'Boxter', typeOfTranslation: "Dịch vu",endTime:'02/08/2018'},
                {title: 'Get up and running faster', degreeCompletion: 'Boxter', typeOfTranslation: "Dịch vụ",endTime:'20/1/2018'},
            ],
            columnDefs1: [
                {headerName: '', field: '', cellClass: ['grid-action-cell'], width: 31, minWidth: 31, maxWidth: 31, suppressMenu: true},
                {headerName: 'TIÊU ĐỀ', field: 'title', cellClass: 'ag-custom-cell' },
                {headerName: 'LOẠI BÀI', field: 'typeOfTranslation', cellClass: 'ag-custom-cell', cellStyle: {textAlign: 'center'}},
                {headerName: 'NGÀY HOÀN THÀNH', field: 'completedAt', cellClass: 'ag-custom-cell'},
                {headerName: 'PHÍ DỊCH VỤ', field: 'wage', cellClass: 'ag-last-cell', cellStyle: {textAlign: 'right'}}

            ],
            rowData1: [
                {title: 'Testosterone is not the only hormone needed for penis development', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                {title: 'Exercise may decrease cerebral blood flow and improve brain function in older adults', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                {title: 'Rare stem cell may be the root of all metastatic cancers', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:'20/09/2018'},
                {title: 'Breast cancer treatment more effective when determined by tumor cell count', typeOfTranslation: 'Boxter', completedAt: "20/1/2018",wage:35000},
                {title: 'Microbes on the tongue could be used to diagnose pancreatic cancer', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                {title: 'Mental health problems common after concussion', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:'01/09/2018'},
                {title: 'Sleep, mood, and stress affect older adults', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:'02/08/2018'},
                {title: 'Study Offers Hint of Hope for Staving Off Dementia in Some People', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                {title: 'Study Offers Hint of Hope for Staving Off Dementia in Some People', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000}
            ]
        }
    }
    onGridReady(params){
        this.girdApi = params.api;
        this.columnApi = params.columnApi;
        this.girdApi.sizeColumnsToFit();
    }
    createColumnDefs(){
        return [
            {headerName: "Make", field: "Make"},
            {headerName: "Model", field: "Model"},
            {headerName: "Price", field: "Price"}
        ];
    }
    
    createRowData(){
        return [
            {Make:"Toyota", model: "Celica", Price:35000},
            {Make:"Ford", model: "Mondeo", Price:32000},
            {Make:"Porche", model: "Boxter", Price:75000}
        ];
    }
    
    render () {
        let containerStyle = {
            height:570,
            width: 780
        };
          return (
              <div>
                <div className='header'>
                    <img className='logo' alt='INNOS TranslateApp' src={Logo} />
                    <div className='header-menu'>
                    <div class="flex-container">
                    <Dropdown className='menu' overlay={menu}>
                        <a className="ant-dropdown-link active" href="#">
                            TỔNG HỢP <Icon type="down" />
                        </a>
                    </Dropdown>
                    <Dropdown className='menu' overlay={menu1}>
                        <a className="ant-dropdown-link" href="#">
                            BÀI DỊCH<Icon type="down" />
                        </a>
                    </Dropdown>
                    <Dropdown className='menu' overlay={menu2}>
                        <a className="ant-dropdown-link" href="#">
                            QUẢN LÝ <Icon type="down" />
                        </a>
                    </Dropdown>

                   
                    </div>
                        <div className='iconTop'>
                            <div className='item'>
                            <Badge style={{ backgroundColor: '#67D12A' }} count={23}>
                                <Icon style={{ fontSize: '20px' }} type='message' />
                            </Badge>
                            </div>
                            <div className='item'>
                            <Icon style={{ fontSize: '20px' }} type='bell' />
                            </div>
                            <div className='item'>
                            <Icon style={{ fontSize: '20px' }} type='user' /> admin
                            </div>
                            <div style={{ margin: 0 }}>
                            <Popover placement='bottomRight' trigger='click' content={(
                                <ul style={{ listStyle: 'none', margin: 0, padding: '5px 0px' }}>
                                <li>Cá nhân</li>
                                <li>Đăng xuất</li>
                                </ul>
                            )}>
                                <Button icon='setting' />
                            </Popover>
                            </div>
                        </div>
                    </div>
                    <div className='topMenu'>
                        <Menu
                            mode='horizontal'
                            theme='light'
                            style={{ lineHeight: '60px' }}
                            >
                        
                        </Menu>
                    </div>
                    
                </div>
                <div className='container'>
                        <h3 className='title-state'>
                            <span>Tổng hợp</span> 
                            <button class="btn btn-green">Tạo bài dịch</button>
                        </h3>

                        <div className='mod-content1'>
                            <div className='dash-section account-info'>
                                <div className='title-content'>
                                    <h6 className='title'>THÔNG TIN TỔNG HỢP</h6>
                                </div>
                                <section>
                                <div className='account-section'>
                                    <div className='month-picker-box'>
                                        <MonthPicker className='calendar' placeholder="Tháng 2" />
                                    </div>
                                    <div className='acount-box'>
                                        <div className='icon-box'>
                                            <Icon type="left-circle" />
                                        </div>
                                        <div className='icon-box1'>
                                            <p className='icon-number'>
                                                780,219
                                                <span>Đ</span>
                                            </p>
                                            <p className='icon-label'>Tổng tiền đọc giả nhận trong tháng 2</p>
                                        </div>
                                        <div className='icon-box2'>
                                            <Icon type="right-circle" />
                                        </div>
                                        <hr ></hr>
                                        <div className='icon-info'>
                                            <div class="icon-info-box">
                                                <div>
                                                    <p>0</p>
                                                    <span>Tổng dịch giả</span>
                                                </div>
                                                <div>
                                                    <p>4</p>
                                                    <span>Tổng bài đang dịch</span>
                                                </div>
                                                <div>
                                                    <p>7</p>
                                                    <span>Tổng bài đã dịch</span>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='account-section'>
                                <Line
                                    data={{
                                    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
                                    datasets: [{
                                        label: 'Tổng tiền dịch giả nhận',
                                        borderColor: '#08C3C8',
                                        backgroundColor: '#BEEEF0',
                                        data:  [0,3,4,2,1,0,0,0,2,0,0,0],
                                        cubicInterpolationMode: 'monotone'
                                    }]
                                    }}
                                    options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    legend: {
                                        display: false
                                    },
                                    title: {
                                        display: false
                                    },
                                    tooltips: {
                                        mode: 'index'
                                    },
                                    hover: {
                                        mode: 'index'
                                    },
                                    scales: {
                                        yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            fontColor: '#698691'
                                        },
                                        stacked: true,
                                        scaleLabel: {
                                            display: false
                                        }
                                        }],
                                        xAxes: [{
                                        ticks: {
                                            fontColor: '#698691'
                                        },
                                        scaleLabel: {
                                            display: false
                                        }
                                        }]
                                    }
                                    }}
                                />
                                </div>
                                
                                </section>
                            </div>
                            <div className='dash-section notification'>
                                <div className='title-content1'>
                                    <h6 className='title'>THÔNG BÁO</h6>
                                </div> 
                                <div className='notification-box'>
                                    
                                </div>        
                            </div>
                            <div className='dash-section post-translating' style={containerStyle}>
                                <div className='label'>
                                    <p>BÀI ĐANG DỊCH</p>
                                </div>
                                <div className="ag-theme-balham"
                                    style={{ height: '370px', width: '760px' }}>
                                        <AgGridReact
                                            columnDefs={[
                                                {headerName: 'TIÊU ĐỀ', field: 'title', cellClass: 'ag-custom-cell'},
                                                {headerName: 'MỨC ĐỘ HOÀN THÀNH', field: 'degreeCompletion', cellClass: 'ag-custom-cell',width:150},
                                                {headerName: 'LOẠI BÀI', field: 'typeOfTranslation', cellClass: 'ag-custom-cell', cellStyle: {textAlign: 'center'}},
                                                {headerName: 'NGÀY KT', field: 'endTime', cellClass: 'ag-last-cell'}
                                
                                            ]}
                                            rowData={[
                                                {title: 'Scientists discover brain cells responsible for direction and memory', degreeCompletion: 'Celica', typeOfTranslation: "Thường",endTime:'20/11/2018'},
                                                {title: 'Progress Towards a Cure for HIV', degreeCompletion: 'Mondeo', typeOfTranslation: "Thường",endTime:'02/11/2018'},
                                                {title: 'Rare stem cell may be the root of all metastatic cancers', degreeCompletion: 'Boxter', typeOfTranslation: "Thường",endTime:'20/09/2018'},
                                                {title: 'Breast cancer treatment more effective when determined by tumor cell count', degreeCompletion: 'Boxter', typeOfTranslation: "Chuyên ngành",endTime:'20/01/2018'},
                                                {title: 'Chuyên ngành 2', degreeCompletion: 'Boxter', typeOfTranslation: "Chuyên ngành",endTime:'22/11/2018'},
                                                {title: 'Chuyên ngành 1', degreeCompletion: 'Boxter', typeOfTranslation: "Chuyên ngành",endTime:'01/09/2018'},
                                                {title: 'Admin tạo TT', degreeCompletion: 'Boxter', typeOfTranslation: "Dịch vu",endTime:'02/08/2018'},
                                                {title: 'Get up and running faster', degreeCompletion: 'Boxter', typeOfTranslation: "Dịch vụ",endTime:'20/1/2018'},
                                            ]}>
                                        </AgGridReact>
                                </div>
       
                            
                            </div>
                            <div className='dash-section post-update'>
                            <div className='label'>
                                    <p>BÀI CẦN DUYỆT</p>
                                </div>
                                <div className="ag-theme-balham"
                                    style={{ height: '370px', width: '480px' }}>
                                        <AgGridReact
                                            columnDefs={[
                                                //{headerName: '', field: '', cellClass: ['grid-action-cell'], width: 31, minWidth: 31, maxWidth: 31, suppressMenu: true},
                                                {headerName: 'TIÊU ĐỀ', field: 'title', cellClass: 'ag-custom-cell',width: 150 },
                                                {headerName: 'LOẠI BÀI', field: 'typeOfTranslation', cellClass: 'ag-custom-cell', cellStyle: {textAlign: 'center'},width: 100,left:150},
                                                {headerName: 'NGÀY HOÀN THÀNH', field: 'completedAt', cellClass: 'ag-custom-cell',width: 100,left:250},
                                                {headerName: 'PHÍ DỊCH VỤ', field: 'wage', cellClass: 'ag-last-cell', cellStyle: {textAlign: 'center'},width: 120,left:370}
                                
                                            ]}
                                            rowData={[
                                                {title: 'Testosterone is not the only hormone needed for penis development', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                                                {title: 'Exercise may decrease cerebral blood flow and improve brain function in older adults', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                                                {title: 'Rare stem cell may be the root of all metastatic cancers', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                                                {title: 'Breast cancer treatment more effective when determined by tumor cell count', typeOfTranslation: 'Boxter', completedAt: "20/1/2018",wage:35000},
                                                {title: 'Microbes on the tongue could be used to diagnose pancreatic cancer', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                                                {title: 'Mental health problems common after concussion', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                                                {title: 'Sleep, mood, and stress affect older adults', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                                                {title: 'Study Offers Hint of Hope for Staving Off Dementia in Some People', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000},
                                                {title: 'Study Offers Hint of Hope for Staving Off Dementia in Some People', typeOfTranslation: 'Thường', completedAt: "20/1/2018",wage:35000}
                                            ]}>
                                        </AgGridReact>
                                </div>
                            </div>

                        </div>
                        <div className='mod-content2'>
                            <div className='dash-section history'>
                                <div className='title-content1'>
                                    <h6 className='title'>LỊCH SỬ</h6>
                                    <div className='show-tick'>
                                        <MonthPicker placeholder="Tháng 2" />
                                        <br />
                                    </div>

                                </div>
                                <p className='history-label'>Tháng 4</p> 
                                <div className='history-label1'> Chưa có nhật ký</div>
                                <div className=''>
                                    
                                </div>        
                            </div>
                        </div>

                    </div>
            </div>
            
          )
    }
}

export default TranslateTest
