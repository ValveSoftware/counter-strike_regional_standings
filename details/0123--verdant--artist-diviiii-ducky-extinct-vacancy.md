### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Ducky, Extinct, Vacancy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [123](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  802.4<br />
<br />
Final Rank Value (802.4) = Starting Rank Value (860.6) + Head To Head Adjustments (-58.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.128[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 860.6
- 400 + ( ( 0.227 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 860.6


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
|           30 |       32 | 2024-06-16 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |    -8.22 | arTisT, Diviiii, Ducky, Extinct, Vacancy    |
|           29 |       43 | 2024-06-15 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -26.15 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           28 |       83 | 2024-06-14 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -16.66 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           27 |      122 | 2024-06-13 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -3.55 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           26 |      128 | 2024-06-13 | Revenant          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.071 (0.010)    | 0 (0.000) |     4.03 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           25 |      149 | 2024-06-12 | DMS               | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.473 (0.068)    | 0 (0.000) |    20.02 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           24 |      173 | 2024-06-11 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -27.10 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           23 |      367 | 2024-06-07 | B8                | L   | 1.000      | -            | -                | -                | -         |    -3.96 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           22 |      377 | 2024-06-07 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -1.06 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           21 |      384 | 2024-06-07 | B8                | W   | 1.000      | 0.143        | 0.229 (0.033)    | 1.000 (0.143)    | 0 (0.000) |    27.85 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           20 |      421 | 2024-06-06 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -18.06 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           19 |      480 | 2024-06-05 | Enterprise        | W   | 1.000      | 0.372        | 0.046 (0.017)    | 0.575 (0.214)    | 0 (0.000) |    21.20 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           18 |      528 | 2024-06-04 | EXO               | L   | 1.000      | -            | -                | -                | -         |   -17.21 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |      560 | 2024-06-03 | LEON              | W   | 1.000      | 0.372        | 0.008 (0.003)    | 0.165 (0.061)    | 0 (0.000) |     9.59 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |      614 | 2024-06-01 | V1dar             | W   | 1.000      | 0.372        | 0.000 (0.000)    | 0.087 (0.032)    | 0 (0.000) |     5.91 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           15 |      702 | 2024-05-29 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -12.16 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |      908 | 2024-05-21 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -5.70 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |      944 | 2024-05-20 | Sampi             | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.837 (0.364)    | 0 (0.000) |    20.70 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           12 |     1007 | 2024-05-18 | Space             | L   | 0.993      | -            | -                | -                | -         |   -14.13 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           11 |     1120 | 2024-05-15 | Sangal            | W   | 0.974      | 0.435        | 0.216 (0.092)    | 0.884 (0.374)    | 0 (0.000) |    24.49 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |     1175 | 2024-05-14 | B8                | L   | 0.968      | -            | -                | -                | -         |    -3.37 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |     1201 | 2024-05-13 | kONO              | L   | 0.961      | -            | -                | -                | -         |   -13.27 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |     1214 | 2024-05-12 | Johnny Speeds     | L   | 0.956      | -            | -                | -                | -         |    -2.85 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     1225 | 2024-05-12 | Zero Tenacity     | L   | 0.955      | -            | -                | -                | -         |    -7.17 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            6 |     1245 | 2024-05-11 | V1dar             | W   | 0.949      | 0.143        | 0.000 (0.000)    | 0.087 (0.012)    | 0 (0.000) |     4.97 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            5 |     1273 | 2024-05-10 | ECLOT             | L   | 0.941      | -            | -                | -                | -         |    -4.23 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            4 |     2284 | 2024-04-01 | Reason            | W   | 0.681      | 0.301        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.681) |     3.37 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            3 |     2359 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.649      | -            | -                | -                | -         |    -0.11 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            2 |     2483 | 2024-03-19 | EXO               | L   | 0.596      | -            | -                | -                | -         |   -10.42 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            1 |     3986 | 2024-01-16 | LL Madagaskar     | L   | 0.176      | -            | -                | -                | -         |    -4.92 | Ducky, Extinct, Girafffe, tvs, Vacancy      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,046.14)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $750.00        | $750.00         |
| 2024-05-13 |      0.960 | $1,000.00      | $960.38         |
| 2024-04-01 |      0.681 | $3,153.00      | $2,146.68       |
| 2024-03-19 |      0.596 | $317.00        | $189.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
