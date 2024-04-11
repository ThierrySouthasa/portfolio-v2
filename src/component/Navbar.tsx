import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Experience from './Experience';
import Project from './Project';
import Technology from './Technology';
import { colors } from '../assets/theme';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} >
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        sx={{
                            '& .MuiTabs-flexContainer': {
                                paddingLeft: 3
                            },
                            '& .MuiTab-root': {
                                color: colors.blueNavy
                            },
                            '& .Mui-selected': {
                                color: colors.gold
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: colors.gold
                            },
                        }}
                    >
                        <Tab label="Experiences" value="1" />
                        <Tab label="Projets" value="2" />
                        <Tab label="Technologies" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Experience /></TabPanel>
                <TabPanel value="2"><Project /></TabPanel>
                <TabPanel value="3"><Technology /></TabPanel>
            </TabContext>
        </Box>
    );
}
