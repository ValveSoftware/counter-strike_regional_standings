### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Extinct, Girafffe, Vacancy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [111](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  849.5<br />
<br />
Final Rank Value (849.5) = Starting Rank Value (962.7) + Head To Head Adjustments (-113.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.366[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.112[<sup>2</sup>](#table1)
- LAN Wins: 0.288[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 962.7
- 400 + ( ( 0.278 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 962.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      101 | 2024-07-21 | Invictum          | W   | 1.000      | 0.296        | 0.004 (0.001)    | 0.041 (0.012)    | 1 (1.000) |     9.89 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           33 |      129 | 2024-07-20 | Invictum          | W   | 1.000      | 0.296        | 0.004 (0.001)    | 0.041 (0.012)    | 1 (1.000) |    10.07 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           32 |      280 | 2024-07-17 | PERA              | L   | 1.000      | -            | -                | -                | -         |    -8.45 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           31 |      444 | 2024-07-12 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -14.32 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           30 |      525 | 2024-07-08 | Rebels            | L   | 1.000      | -            | -                | -                | -         |    -9.05 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           29 |      620 | 2024-06-16 | UNiTY             | L   | 0.944      | -            | -                | -                | -         |   -10.52 | arTisT, Diviiii, Ducky, Extinct, Vacancy    |
|           28 |      631 | 2024-06-15 | Revenant          | L   | 0.940      | -            | -                | -                | -         |   -17.26 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           27 |      671 | 2024-06-14 | Aurora Young Blud | L   | 0.934      | -            | -                | -                | -         |   -16.99 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           26 |      710 | 2024-06-13 | Nemiga            | L   | 0.927      | -            | -                | -                | -         |    -5.56 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           25 |      716 | 2024-06-13 | Revenant          | W   | 0.926      | 0.143        | 0.033 (0.004)    | 0.282 (0.037)    | 0 (0.000) |    10.66 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           24 |      737 | 2024-06-12 | DMS               | W   | 0.920      | 0.143        | 0.004 (0.001)    | 0.461 (0.061)    | 0 (0.000) |    14.95 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           23 |      761 | 2024-06-11 | 9INE              | L   | 0.913      | -            | -                | -                | -         |   -25.63 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           22 |      955 | 2024-06-07 | B8                | L   | 0.886      | -            | -                | -                | -         |    -6.02 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           21 |      965 | 2024-06-07 | Aurora            | L   | 0.886      | -            | -                | -                | -         |    -1.38 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           20 |      972 | 2024-06-07 | B8                | W   | 0.885      | 0.143        | 0.206 (0.026)    | 0.933 (0.118)    | 0 (0.000) |    22.15 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           19 |     1009 | 2024-06-06 | Aurora Young Blud | L   | 0.880      | -            | -                | -                | -         |   -17.44 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           18 |     1068 | 2024-06-05 | Enterprise        | W   | 0.874      | 0.372        | 0.050 (0.016)    | 0.646 (0.210)    | 0 (0.000) |    14.91 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |     1116 | 2024-06-04 | K10               | L   | 0.867      | -            | -                | -                | -         |   -21.02 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |     1148 | 2024-06-03 | LEON              | W   | 0.861      | 0.372        | 0.009 (0.003)    | 0.149 (0.048)    | 0 (0.000) |     6.08 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           15 |     1200 | 2024-06-01 | V1dar             | W   | 0.847      | 0.372        | -                | 0.067 (0.021)    | 0 (0.000) |     3.20 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |     1288 | 2024-05-29 | DMS               | L   | 0.827      | -            | -                | -                | -         |   -14.41 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |     1494 | 2024-05-21 | Zero Tenacity     | L   | 0.772      | -            | -                | -                | -         |    -7.15 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           12 |     1530 | 2024-05-20 | Sampi             | W   | 0.765      | 0.435        | 0.037 (0.012)    | 0.994 (0.330)    | 0 (0.000) |    11.68 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           11 |     1593 | 2024-05-18 | Space             | L   | 0.751      | -            | -                | -                | -         |   -14.40 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |     1706 | 2024-05-15 | Sangal            | W   | 0.732      | 0.435        | 0.195 (0.062)    | 0.860 (0.273)    | -         |    15.53 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |     1761 | 2024-05-14 | B8                | L   | 0.726      | -            | -                | -                | -         |    -5.68 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |     1787 | 2024-05-13 | kONO              | L   | 0.718      | -            | -                | -                | -         |   -14.02 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     1800 | 2024-05-12 | Johnny Speeds     | L   | 0.714      | -            | -                | -                | -         |    -2.71 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            6 |     1811 | 2024-05-12 | Zero Tenacity     | L   | 0.712      | -            | -                | -                | -         |    -8.45 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            5 |     1831 | 2024-05-11 | V1dar             | W   | 0.707      | -            | -                | -                | -         |     2.04 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            4 |     1859 | 2024-05-10 | ECLOT             | L   | 0.698      | -            | -                | -                | -         |    -6.05 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            3 |     2870 | 2024-04-01 | Reason            | W   | 0.438      | 0.301        | 0.002 (0.000)    | -                | 1 (0.438) |     1.24 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            2 |     2944 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.407      | -            | -                | -                | -         |    -0.17 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            1 |     3068 | 2024-03-19 | The Neighbours    | L   | 0.354      | -            | -                | -                | -         |    -8.86 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,151.70)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $2,259.00      | $2,259.00       |
| 2024-06-10 |      0.907 | $750.00        | $680.57         |
| 2024-05-13 |      0.718 | $1,000.00      | $717.87         |
| 2024-04-01 |      0.438 | $3,153.00      | $1,382.05       |
| 2024-03-19 |      0.354 | $317.00        | $112.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
