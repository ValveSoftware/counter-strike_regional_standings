### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Extinct, Girafffe, Vacancy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [80]( ../standings_europe.md)<br />
Final Rank Value:  821.8<br />
<br />
Final Rank Value (821.8) = Starting Rank Value (867.1) + Head To Head Adjustments (-45.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.346[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.1
- 400 + ( ( 0.221 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 867.1


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
|           31 |       73 | 2024-07-08 | Rebels            | L   | 1.000      | -            | -                | -                | -         |    -6.46 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           30 |      168 | 2024-06-16 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |    -8.25 | arTisT, Diviiii, Ducky, Extinct, Vacancy    |
|           29 |      179 | 2024-06-15 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -16.60 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           28 |      219 | 2024-06-14 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -17.45 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           27 |      258 | 2024-06-13 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -3.72 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           26 |      264 | 2024-06-13 | Revenant          | W   | 1.000      | 0.143        | 0.035 (0.005)    | 0.285 (0.041)    | 0 (0.000) |    13.52 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           25 |      285 | 2024-06-12 | DMS               | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.471 (0.067)    | 0 (0.000) |    19.56 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           24 |      309 | 2024-06-11 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -27.02 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           23 |      503 | 2024-06-07 | B8                | L   | 0.973      | -            | -                | -                | -         |    -4.16 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           22 |      513 | 2024-06-07 | Aurora            | L   | 0.972      | -            | -                | -                | -         |    -0.89 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           21 |      520 | 2024-06-07 | B8                | W   | 0.972      | 0.143        | 0.242 (0.034)    | 1.000 (0.139)    | 0 (0.000) |    26.77 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           20 |      557 | 2024-06-06 | Aurora Young Blud | L   | 0.967      | -            | -                | -                | -         |   -17.95 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           19 |      616 | 2024-06-05 | Enterprise        | W   | 0.961      | 0.372        | 0.053 (0.019)    | 0.654 (0.234)    | 0 (0.000) |    19.98 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           18 |      664 | 2024-06-04 | EXO               | L   | 0.954      | -            | -                | -                | -         |   -17.23 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |      696 | 2024-06-03 | LEON              | W   | 0.948      | 0.372        | 0.010 (0.003)    | 0.167 (0.059)    | 0 (0.000) |     9.27 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |      748 | 2024-06-01 | V1dar             | W   | 0.934      | 0.372        | 0.000 (0.000)    | 0.078 (0.027)    | 0 (0.000) |     5.07 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           15 |      836 | 2024-05-29 | DMS               | L   | 0.914      | -            | -                | -                | -         |   -11.69 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |     1042 | 2024-05-21 | Zero Tenacity     | L   | 0.858      | -            | -                | -                | -         |    -5.31 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |     1078 | 2024-05-20 | Slovakia          | W   | 0.852      | 0.435        | 0.045 (0.017)    | 0.891 (0.330)    | 0 (0.000) |    17.13 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           12 |     1141 | 2024-05-18 | Space             | L   | 0.838      | -            | -                | -                | -         |   -12.38 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           11 |     1254 | 2024-05-15 | Sangal            | W   | 0.819      | 0.435        | 0.231 (0.082)    | 0.853 (0.303)    | 0 (0.000) |    20.75 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |     1309 | 2024-05-14 | B8                | L   | 0.813      | -            | -                | -                | -         |    -3.18 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |     1335 | 2024-05-13 | kONO              | L   | 0.805      | -            | -                | -                | -         |   -11.45 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |     1348 | 2024-05-12 | Johnny Speeds     | L   | 0.800      | -            | -                | -                | -         |    -1.50 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     1359 | 2024-05-12 | Zero Tenacity     | L   | 0.799      | -            | -                | -                | -         |    -6.19 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            6 |     1379 | 2024-05-11 | V1dar             | W   | 0.794      | 0.143        | 0.000 (0.000)    | 0.078 (0.009)    | 0 (0.000) |     3.81 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            5 |     1407 | 2024-05-10 | Czech Republic    | L   | 0.785      | -            | -                | -                | -         |    -3.42 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            4 |     2418 | 2024-04-01 | Reason            | W   | 0.525      | 0.301        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (0.525) |     2.49 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            3 |     2492 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.493      | -            | -                | -                | -         |    -0.07 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            2 |     2616 | 2024-03-19 | EXO               | L   | 0.441      | -            | -                | -                | -         |    -8.14 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            1 |     4119 | 2024-01-16 | LL Madagaskar     | L   | 0.021      | -            | -                | -                | -         |    -0.58 | Ducky, Extinct, Girafffe, tvs, Vacancy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,345.98)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.994 | $750.00        | $745.70         |
| 2024-05-13 |      0.805 | $1,000.00      | $804.71         |
| 2024-04-01 |      0.525 | $3,153.00      | $1,655.84       |
| 2024-03-19 |      0.441 | $317.00        | $139.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
