### Roster Details<br />
Team Name: Flamengo<br />
Roster: CutzMeretz, danoco, max, Misfit, vsm<br />
Global Rank: [133](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [27]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  667.4<br />
<br />
Final Rank Value (667.4) = Starting Rank Value (549.8) + Head To Head Adjustments (117.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 549.8
- 400 + ( ( 0.083 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 549.8


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
|           15 |      623 | 2025-03-30 | Imperial    | L   | 0.962      | -            | -                | -                | -         |    -2.94 | CutzMeretz, danoco, max, Misfit, vsm |
|           14 |      628 | 2025-03-30 | Swingers    | W   | 0.961      | 0.143        | 0.005 (0.001)    | 0.535 (0.073)    | 0 (0.000) |    18.03 | CutzMeretz, danoco, max, Misfit, vsm |
|           13 |      670 | 2025-03-29 | Imperial    | L   | 0.955      | -            | -                | -                | -         |    -2.74 | CutzMeretz, danoco, max, Misfit, vsm |
|           12 |      798 | 2025-03-27 | Swingers    | W   | 0.942      | 0.143        | 0.005 (0.001)    | 0.535 (0.072)    | 0 (0.000) |    18.05 | CutzMeretz, danoco, max, Misfit, vsm |
|           11 |     1139 | 2025-03-11 | Legacy      | L   | 0.835      | -            | -                | -                | -         |    -3.83 | CutzMeretz, danoco, max, Misfit, vsm |
|           10 |     1168 | 2025-03-10 | Sharks      | W   | 0.828      | 0.143        | 0.051 (0.006)    | 0.811 (0.096)    | 0 (0.000) |    21.84 | CutzMeretz, danoco, max, Misfit, vsm |
|            9 |     1204 | 2025-03-09 | Sharks      | W   | 0.822      | 0.143        | 0.051 (0.006)    | 0.811 (0.095)    | 0 (0.000) |    22.80 | CutzMeretz, danoco, max, Misfit, vsm |
|            8 |     1255 | 2025-03-08 | ODDIK       | L   | 0.817      | -            | -                | -                | -         |    -7.49 | CutzMeretz, danoco, farias, max, vsm |
|            7 |     1283 | 2025-03-08 | Prasso      | W   | 0.814      | 0.143        | 0.000 (0.000)    | 0.310 (0.036)    | 0 (0.000) |    11.19 | CutzMeretz, danoco, max, Misfit, vsm |
|            6 |     1368 | 2025-03-07 | ODDIK       | W   | 0.807      | 0.143        | 0.008 (0.001)    | 0.742 (0.086)    | 0 (0.000) |    18.55 | CutzMeretz, danoco, max, Misfit, vsm |
|            5 |     1493 | 2025-03-03 | Dusty Roots | W   | 0.783      | 0.371        | 0.003 (0.001)    | 0.528 (0.153)    | 0 (0.000) |    15.45 | CutzMeretz, danoco, farias, max, vsm |
|            4 |     1535 | 2025-03-01 | Yawara      | W   | 0.769      | 0.371        | 0.000 (0.000)    | 0.209 (0.060)    | 0 (0.000) |    14.37 | CutzMeretz, danoco, farias, max, vsm |
|            3 |     1589 | 2025-02-27 | 2070        | W   | 0.755      | 0.371        | 0.000 (0.000)    | 0.039 (0.011)    | 0 (0.000) |     7.42 | CutzMeretz, danoco, farias, max, vsm |
|            2 |     2158 | 2025-02-06 | Elevate     | L   | 0.614      | -            | -                | -                | -         |    -9.95 | CutzMeretz, farias, max, Misfit, vsm |
|            1 |     2190 | 2025-02-05 | 9z          | L   | 0.607      | -            | -                | -                | -         |    -3.17 | CutzMeretz, farias, max, Misfit, vsm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
