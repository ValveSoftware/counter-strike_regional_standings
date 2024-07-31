### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Extinct, Girafffe, Vacancy<br />
Global Rank: [108](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
<br />
Final Rank Value:  848.5<br />
<br />
Final Rank Value (848.5) = Starting Rank Value (952.8) + Head To Head Adjustments (-104.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.275[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 952.8
- 400 + ( ( 0.268 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 952.8


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
|           34 |      343 | 2024-07-21 | Invictum          | W   | 1.000      | 0.296        | 0.003 (0.001)    | 0.038 (0.011)    | 1 (1.000) |     9.91 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           33 |      371 | 2024-07-20 | Invictum          | W   | 1.000      | 0.296        | 0.003 (0.001)    | 0.038 (0.011)    | 1 (1.000) |    10.10 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           32 |      522 | 2024-07-17 | PERA              | L   | 1.000      | -            | -                | -                | -         |    -8.86 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           31 |      686 | 2024-07-12 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -14.56 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           30 |      767 | 2024-07-08 | Rebels            | L   | 1.000      | -            | -                | -                | -         |    -9.50 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           29 |      862 | 2024-06-16 | UNiTY             | L   | 0.897      | -            | -                | -                | -         |   -10.73 | arTisT, Diviiii, Ducky, Extinct, Vacancy    |
|           28 |      873 | 2024-06-15 | Revenant          | L   | 0.893      | -            | -                | -                | -         |   -16.69 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           27 |      913 | 2024-06-14 | Aurora Young Blud | L   | 0.886      | -            | -                | -                | -         |   -15.40 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           26 |      952 | 2024-06-13 | Nemiga            | L   | 0.880      | -            | -                | -                | -         |    -5.56 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           25 |      958 | 2024-06-13 | Revenant          | W   | 0.879      | 0.143        | 0.027 (0.003)    | 0.262 (0.033)    | 0 (0.000) |     9.95 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           24 |      979 | 2024-06-12 | DMS               | W   | 0.873      | 0.143        | 0.003 (0.000)    | 0.447 (0.056)    | 0 (0.000) |    15.23 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           23 |     1003 | 2024-06-11 | 9INE              | L   | 0.866      | -            | -                | -                | -         |   -24.30 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           22 |     1197 | 2024-06-07 | B8                | L   | 0.839      | -            | -                | -                | -         |    -5.61 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           21 |     1207 | 2024-06-07 | Aurora            | L   | 0.838      | -            | -                | -                | -         |    -0.84 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           20 |     1214 | 2024-06-07 | B8                | W   | 0.838      | 0.143        | 0.168 (0.020)    | 0.879 (0.105)    | 0 (0.000) |    21.09 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           19 |     1251 | 2024-06-06 | Aurora Young Blud | L   | 0.833      | -            | -                | -                | -         |   -15.57 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           18 |     1310 | 2024-06-05 | Enterprise        | W   | 0.826      | 0.372        | 0.040 (0.012)    | 0.622 (0.191)    | 0 (0.000) |    13.84 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |     1358 | 2024-06-04 | K10               | L   | 0.820      | -            | -                | -                | -         |   -19.84 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |     1390 | 2024-06-03 | LEON              | W   | 0.813      | 0.372        | 0.007 (0.002)    | 0.131 (0.040)    | 0 (0.000) |     5.79 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           15 |     1442 | 2024-06-01 | V1dar             | W   | 0.800      | 0.372        | -                | 0.058 (0.017)    | 0 (0.000) |     2.98 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |     1530 | 2024-05-29 | DMS               | L   | 0.780      | -            | -                | -                | -         |   -12.31 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |     1736 | 2024-05-21 | Zero Tenacity     | L   | 0.724      | -            | -                | -                | -         |    -6.38 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           12 |     1772 | 2024-05-20 | Sampi             | W   | 0.718      | 0.435        | 0.028 (0.009)    | 1.000 (0.312)    | 0 (0.000) |    10.83 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           11 |     1835 | 2024-05-18 | Space             | L   | 0.703      | -            | -                | -                | -         |   -13.67 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |     1948 | 2024-05-15 | Sangal            | W   | 0.685      | 0.435        | 0.221 (0.066)    | 0.824 (0.245)    | -         |    15.47 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |     2003 | 2024-05-14 | B8                | L   | 0.679      | -            | -                | -                | -         |    -5.25 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |     2029 | 2024-05-13 | kONO              | L   | 0.671      | -            | -                | -                | -         |   -13.31 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     2042 | 2024-05-12 | Johnny Speeds     | L   | 0.666      | -            | -                | -                | -         |    -2.71 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            6 |     2053 | 2024-05-12 | Zero Tenacity     | L   | 0.665      | -            | -                | -                | -         |    -7.47 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            5 |     2073 | 2024-05-11 | V1dar             | W   | 0.660      | -            | -                | -                | -         |     1.94 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            4 |     2101 | 2024-05-10 | ECLOT             | L   | 0.651      | -            | -                | -                | -         |    -6.03 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            3 |     3112 | 2024-04-01 | Reason            | W   | 0.391      | 0.301        | 0.002 (0.000)    | -                | 1 (0.391) |     1.15 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            2 |     3186 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.359      | -            | -                | -                | -         |    -0.22 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            1 |     3310 | 2024-03-19 | The Neighbours    | L   | 0.307      | -            | -                | -                | -         |    -7.74 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,904.86)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $2,259.00      | $2,259.00       |
| 2024-06-10 |      0.860 | $750.00        | $645.11         |
| 2024-05-13 |      0.671 | $1,000.00      | $670.58         |
| 2024-04-01 |      0.391 | $3,153.00      | $1,232.95       |
| 2024-03-19 |      0.307 | $317.00        | $97.22          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
