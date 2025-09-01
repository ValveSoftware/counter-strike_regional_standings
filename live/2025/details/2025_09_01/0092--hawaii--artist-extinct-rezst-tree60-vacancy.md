### Roster Details<br />
Team Name: HAWAII<br />
Roster: arTisT, Extinct, Rezst, Tree60, Vacancy<br />
Global Rank: [92](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [64]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  830.0<br />
<br />
Final Rank Value (830.0) = Starting Rank Value (817.5) + Head To Head Adjustments (12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.312[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.5
- 400 + ( ( 0.218 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 817.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      114 | 2025-08-26 | 8Sins             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.096 (0.014)    | 0 (0.000) |     8.17 | arTisT, Extinct, nestee, Rezst, Vacancy    |
|           19 |      871 | 2025-07-19 | Alliance          | L   | 0.908      | -            | -                | -                | -         |    -6.34 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|           18 |      880 | 2025-07-19 | 8Sins             | W   | 0.907      | 0.301        | 0.000 (0.000)    | 0.096 (0.026)    | 1 (0.907) |     7.73 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|           17 |      887 | 2025-07-19 | The Last Resort   | W   | 0.906      | 0.301        | 0.000 (0.000)    | 0.122 (0.033)    | 1 (0.906) |    11.78 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|           16 |      898 | 2025-07-19 | Recognised Talent | W   | 0.905      | 0.301        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.905) |     2.63 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|           15 |      918 | 2025-07-18 | Alliance          | L   | 0.901      | -            | -                | -                | -         |    -5.40 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|           14 |      940 | 2025-07-17 | EYEBALLERS        | L   | 0.894      | -            | -                | -                | -         |    -8.11 | arTisT, Extinct, MAGILA, shyyne, Vacancy   |
|           13 |      975 | 2025-07-16 | TPuDCATb TPu      | L   | 0.886      | -            | -                | -                | -         |   -13.89 | Extinct, Girafffe, Rezst, Tree60, Vacancy  |
|           12 |     1119 | 2025-07-10 | ESC               | L   | 0.845      | -            | -                | -                | -         |   -11.88 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|           11 |     1212 | 2025-07-01 | AMKAL             | W   | 0.787      | 0.435        | 0.004 (0.002)    | 0.275 (0.094)    | 0 (0.000) |     7.85 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|           10 |     1244 | 2025-06-26 | Alliance          | W   | 0.751      | 0.435        | 0.043 (0.014)    | 0.732 (0.239)    | 0 (0.000) |    18.99 | arTisT, Extinct, Girafffe, Tree60, Vacancy |
|            9 |     1763 | 2025-05-22 | modeame           | W   | 0.519      | 0.384        | 0.008 (0.002)    | 0.247 (0.049)    | 0 (0.000) |     5.55 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|            8 |     1811 | 2025-05-20 | inputprayers      | W   | 0.507      | 0.384        | 0.000 (0.000)    | 0.027 (0.005)    | 0 (0.000) |     2.60 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|            7 |     1863 | 2025-05-18 | Eternal Fire      | L   | 0.492      | -            | -                | -                | -         |    -8.18 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|            6 |     1920 | 2025-05-15 | TNL               | L   | 0.473      | -            | -                | -                | -         |    -2.00 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|            5 |     1951 | 2025-05-14 | AMKAL             | W   | 0.465      | 0.384        | 0.005 (0.001)    | 0.363 (0.065)    | 0 (0.000) |     6.29 | arTisT, Extinct, Rezst, Tree60, Vacancy    |
|            4 |     3530 | 2025-03-19 | Zero Tenacity     | L   | 0.093      | -            | -                | -                | -         |    -1.20 | arTisT, Extinct, Girafffe, Rezst, shyyne   |
|            3 |     3644 | 2025-03-15 | GUN5              | L   | 0.066      | -            | -                | -                | -         |    -0.72 | arTisT, Extinct, Girafffe, Tree60, Vacancy |
|            2 |     3714 | 2025-03-11 | Monte             | L   | 0.040      | -            | -                | -                | -         |    -0.86 | arTisT, Extinct, Girafffe, Tree60, Vacancy |
|            1 |     3876 | 2025-03-08 | LEON              | L   | 0.020      | -            | -                | -                | -         |    -0.55 | arTisT, Extinct, Girafffe, Tree60, Vacancy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($279.31)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      0.913 | $306.00        | $279.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
