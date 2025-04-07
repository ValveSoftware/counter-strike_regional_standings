### Roster Details<br />
Team Name: Flamengo<br />
Roster: CutzMeretz, danoco, max, Misfit, vsm<br />
Global Rank: [125](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [27]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  697.2<br />
<br />
Final Rank Value (697.2) = Starting Rank Value (570.6) + Head To Head Adjustments (126.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 570.6
- 400 + ( ( 0.093 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 570.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      104 | 2025-03-30 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -5.36 | CutzMeretz, danoco, max, Misfit, vsm |
|           14 |      109 | 2025-03-30 | Swingers    | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.668 (0.095)    | 0 (0.000) |    18.86 | CutzMeretz, danoco, max, Misfit, vsm |
|           13 |      151 | 2025-03-29 | Imperial    | L   | 1.000      | -            | -                | -                | -         |    -5.16 | CutzMeretz, danoco, max, Misfit, vsm |
|           12 |      275 | 2025-03-27 | Swingers    | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.668 (0.095)    | 0 (0.000) |    19.16 | CutzMeretz, danoco, max, Misfit, vsm |
|           11 |      518 | 2025-03-11 | Legacy      | L   | 1.000      | -            | -                | -                | -         |    -6.80 | CutzMeretz, danoco, max, Misfit, vsm |
|           10 |      547 | 2025-03-10 | Sharks      | W   | 1.000      | 0.143        | 0.042 (0.006)    | 0.870 (0.124)    | 0 (0.000) |    23.47 | CutzMeretz, danoco, max, Misfit, vsm |
|            9 |      583 | 2025-03-09 | Sharks      | W   | 1.000      | 0.143        | 0.042 (0.006)    | 0.870 (0.124)    | 0 (0.000) |    25.52 | CutzMeretz, danoco, max, Misfit, vsm |
|            8 |      634 | 2025-03-08 | ODDIK       | L   | 1.000      | -            | -                | -                | -         |    -8.71 | CutzMeretz, danoco, max, Misfit, vsm |
|            7 |      662 | 2025-03-08 | Prasso      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.356 (0.051)    | 0 (0.000) |    14.92 | CutzMeretz, danoco, max, Misfit, vsm |
|            6 |      746 | 2025-03-07 | ODDIK       | W   | 0.993      | 0.143        | 0.021 (0.003)    | 0.867 (0.123)    | 0 (0.000) |    23.33 | CutzMeretz, danoco, max, Misfit, vsm |
|            5 |      859 | 2025-03-03 | Dusty Roots | W   | 0.969      | 0.371        | 0.007 (0.003)    | 0.700 (0.251)    | 0 (0.000) |    20.57 | CutzMeretz, danoco, farias, max, vsm |
|            4 |      901 | 2025-03-01 | Yawara      | W   | 0.956      | 0.371        | 0.001 (0.000)    | 0.330 (0.117)    | 0 (0.000) |    19.06 | CutzMeretz, danoco, farias, max, vsm |
|            3 |      950 | 2025-02-27 | 2070        | W   | 0.941      | 0.371        | 0.000 (0.000)    | 0.051 (0.018)    | 0 (0.000) |     8.75 | CutzMeretz, danoco, farias, max, vsm |
|            2 |     1472 | 2025-02-06 | Elevate     | L   | 0.801      | -            | -                | -                | -         |   -13.42 | CutzMeretz, farias, max, Misfit, vsm |
|            1 |     1504 | 2025-02-05 | 9z          | L   | 0.794      | -            | -                | -                | -         |    -7.57 | CutzMeretz, farias, max, Misfit, vsm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
