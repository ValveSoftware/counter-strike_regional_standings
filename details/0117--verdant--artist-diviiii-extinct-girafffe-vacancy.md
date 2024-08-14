### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Extinct, Girafffe, Vacancy<br />
Global Rank: [117](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
<br />
Final Rank Value:  809.4<br />
<br />
Final Rank Value (809.4) = Starting Rank Value (916.1) + Head To Head Adjustments (-106.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.257[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 916.1
- 400 + ( ( 0.262 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 916.1


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
|           38 |       48 | 2024-08-13 | ECSTATIC          | W   | 1.000      | 0.371        | -                | 0.154 (0.057)    | 0 (0.000) |     7.69 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           37 |       85 | 2024-08-12 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -16.00 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           36 |      237 | 2024-08-07 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -10.38 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           35 |      288 | 2024-08-06 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -11.49 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           34 |      824 | 2024-07-21 | Invictum          | W   | 1.000      | 0.296        | 0.003 (0.001)    | 0.038 (0.011)    | 1 (1.000) |     9.72 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           33 |      852 | 2024-07-20 | Invictum          | W   | 1.000      | 0.296        | 0.003 (0.001)    | -                | 1 (1.000) |     9.89 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           32 |     1003 | 2024-07-17 | ex-PERA           | L   | 1.000      | -            | -                | -                | -         |    -9.24 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           31 |     1167 | 2024-07-12 | Revenant          | L   | 0.977      | -            | -                | -                | -         |   -12.60 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           30 |     1248 | 2024-07-08 | Rebels            | L   | 0.950      | -            | -                | -                | -         |   -10.07 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           29 |     1343 | 2024-06-16 | UNiTY             | L   | 0.804      | -            | -                | -                | -         |    -9.65 | arTisT, Diviiii, Ducky, Extinct, Vacancy    |
|           28 |     1354 | 2024-06-15 | Revenant          | L   | 0.800      | -            | -                | -                | -         |   -12.72 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           27 |     1394 | 2024-06-14 | Aurora Young Blud | L   | 0.793      | -            | -                | -                | -         |   -11.36 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           26 |     1433 | 2024-06-13 | Nemiga            | L   | 0.786      | -            | -                | -                | -         |    -4.37 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           25 |     1439 | 2024-06-13 | Revenant          | W   | 0.786      | 0.143        | 0.045 (0.005)    | 0.402 (0.045)    | 0 (0.000) |    11.59 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           24 |     1460 | 2024-06-12 | DMS               | W   | 0.780      | 0.143        | 0.003 (0.000)    | 0.514 (0.057)    | 0 (0.000) |    13.69 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           23 |     1484 | 2024-06-11 | 9INE              | L   | 0.773      | -            | -                | -                | -         |   -21.46 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           22 |     1678 | 2024-06-07 | B8                | L   | 0.746      | -            | -                | -                | -         |    -5.39 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           21 |     1688 | 2024-06-07 | Aurora            | L   | 0.745      | -            | -                | -                | -         |    -0.88 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           20 |     1695 | 2024-06-07 | B8                | W   | 0.744      | 0.143        | 0.174 (0.018)    | 0.903 (0.096)    | 0 (0.000) |    18.33 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           19 |     1732 | 2024-06-06 | Aurora Young Blud | L   | 0.740      | -            | -                | -                | -         |   -10.84 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           18 |     1791 | 2024-06-05 | Enterprise        | W   | 0.733      | 0.372        | 0.042 (0.011)    | 0.687 (0.187)    | 0 (0.000) |    12.43 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |     1839 | 2024-06-04 | K10               | L   | 0.727      | -            | -                | -                | -         |   -17.45 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |     1871 | 2024-06-03 | LEON              | W   | 0.720      | 0.372        | 0.006 (0.002)    | 0.114 (0.030)    | 0 (0.000) |     5.34 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           15 |     1923 | 2024-06-01 | V1dar             | W   | 0.706      | 0.372        | -                | 0.047 (0.012)    | 0 (0.000) |     2.72 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |     2011 | 2024-05-29 | DMS               | L   | 0.687      | -            | -                | -                | -         |   -10.63 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |     2217 | 2024-05-21 | Zero Tenacity     | L   | 0.631      | -            | -                | -                | -         |    -5.69 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           12 |     2253 | 2024-05-20 | Sampi             | W   | 0.624      | 0.435        | 0.024 (0.007)    | 0.981 (0.266)    | -         |     9.41 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           11 |     2316 | 2024-05-18 | Space             | L   | 0.610      | -            | -                | -                | -         |   -11.83 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |     2429 | 2024-05-15 | Sangal            | W   | 0.591      | 0.435        | 0.276 (0.071)    | 0.851 (0.219)    | -         |    14.28 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |     2484 | 2024-05-14 | B8                | L   | 0.585      | -            | -                | -                | -         |    -4.86 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |     2510 | 2024-05-13 | kONO              | L   | 0.578      | -            | -                | -                | -         |   -10.20 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     2523 | 2024-05-12 | Johnny Speeds     | L   | 0.573      | -            | -                | -                | -         |    -2.54 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            6 |     2534 | 2024-05-12 | Zero Tenacity     | L   | 0.572      | -            | -                | -                | -         |    -6.30 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            5 |     2554 | 2024-05-11 | V1dar             | W   | 0.566      | -            | -                | -                | -         |     1.79 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            4 |     2582 | 2024-05-10 | ECLOT             | L   | 0.558      | -            | -                | -                | -         |    -2.96 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            3 |     3593 | 2024-04-01 | Reason            | W   | 0.298      | 0.301        | 0.001 (0.000)    | -                | 1 (0.298) |     0.99 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            2 |     3667 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.266      | -            | -                | -                | -         |    -0.19 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            1 |     3791 | 2024-03-19 | The Neighbours    | L   | 0.213      | -            | -                | -                | -         |    -5.44 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,418.13)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $2,259.00      | $2,259.00       |
| 2024-06-10 |      0.767 | $750.00        | $575.17         |
| 2024-05-13 |      0.577 | $1,000.00      | $577.34         |
| 2024-04-01 |      0.298 | $3,153.00      | $938.96         |
| 2024-03-19 |      0.213 | $317.00        | $67.66          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
