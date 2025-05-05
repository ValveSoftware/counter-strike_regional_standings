### Roster Details<br />
Team Name: NRG<br />
Roster: br0, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [37](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [9]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  1029.9<br />
<br />
Final Rank Value (1029.9) = Starting Rank Value (963.9) + Head To Head Adjustments (66.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.405[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.139[<sup>2</sup>](#table1)
- LAN Wins: 0.408[<sup>2</sup>](#table1)

The average of these factors is 0.311<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 963.9
- 400 + ( ( 0.311 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 963.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |        0 | 2025-05-04 | Nouns             | W   | 1.000      | 0.303        | 0.011 (0.003)    | 0.728 (0.220)    | 0 (0.000) |     7.22 | br0, HexT, Jeorge, nitr0, oSee    |
|           35 |        1 | 2025-05-04 | BLUEJAYS          | W   | 1.000      | 0.303        | 0.016 (0.005)    | 0.886 (0.268)    | 0 (0.000) |    11.17 | br0, HexT, Jeorge, nitr0, oSee    |
|           34 |       13 | 2025-05-03 | Marsborne         | W   | 1.000      | 0.303        | 0.019 (0.006)    | 0.568 (0.172)    | -         |     9.80 | br0, HexT, Jeorge, nitr0, oSee    |
|           33 |       19 | 2025-05-03 | 1WIN NA           | W   | 1.000      | -            | -                | -                | -         |     1.05 | br0, HexT, Jeorge, nitr0, oSee    |
|           32 |       75 | 2025-04-27 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -18.14 | br0, HexT, Jeorge, nitr0, oSee    |
|           31 |       96 | 2025-04-27 | LFO 4             | W   | 1.000      | 0.333        | -                | 0.342 (0.114)    | 1 (1.000) |     2.76 | br0, HexT, Jeorge, nitr0, oSee    |
|           30 |      102 | 2025-04-26 | FlyQuest RED      | W   | 1.000      | 0.333        | -                | 0.277 (0.092)    | 1 (1.000) |     3.26 | br0, HexT, Jeorge, nitr0, oSee    |
|           29 |      233 | 2025-04-17 | BLUEJAYS          | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.886 (0.127)    | -         |    13.34 | br0, HexT, Jeorge, nitr0, oSee    |
|           28 |      235 | 2025-04-17 | Getting Info      | W   | 1.000      | -            | -                | -                | -         |    11.37 | br0, HexT, Jeorge, nitr0, oSee    |
|           27 |      268 | 2025-04-16 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |   -11.58 | br0, HexT, Jeorge, nitr0, oSee    |
|           26 |      293 | 2025-04-15 | Nouns             | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.728 (0.104)    | -         |     6.86 | br0, HexT, Jeorge, nitr0, oSee    |
|           25 |      603 | 2025-03-31 | BLUEJAYS          | L   | 0.970      | -            | -                | -                | -         |   -15.65 | br0, HexT, Jeorge, nitr0, oSee    |
|           24 |      615 | 2025-03-30 | Nouns             | W   | 0.963      | 0.143        | -                | 0.728 (0.100)    | -         |     6.53 | br0, HexT, Jeorge, nitr0, oSee    |
|           23 |      650 | 2025-03-29 | Nouns             | W   | 0.956      | 0.143        | -                | 0.728 (0.099)    | -         |     6.60 | br0, HexT, Jeorge, nitr0, oSee    |
|           22 |      716 | 2025-03-28 | Tsunami           | W   | 0.950      | -            | -                | -                | -         |     3.77 | br0, HexT, Jeorge, nitr0, oSee    |
|           21 |      792 | 2025-03-27 | Party Astronauts  | W   | 0.942      | -            | -                | -                | -         |     2.72 | br0, HexT, Jeorge, nitr0, oSee    |
|           20 |     1473 | 2025-03-04 | FURIA             | L   | 0.788      | -            | -                | -                | -         |    -5.97 | br0, HexT, Jeorge, nitr0, oSee    |
|           19 |     1499 | 2025-03-03 | Aurora            | L   | 0.781      | -            | -                | -                | -         |    -0.28 | br0, HexT, Jeorge, nitr0, oSee    |
|           18 |     1524 | 2025-03-02 | Nemiga            | W   | 0.773      | 0.143        | 0.067 (0.007)    | 0.873 (0.096)    | 1 (0.773) |    10.95 | br0, HexT, Jeorge, nitr0, oSee    |
|           17 |     1548 | 2025-03-01 | GamerLegion       | L   | 0.768      | -            | -                | -                | -         |    -0.33 | br0, HexT, Jeorge, nitr0, oSee    |
|           16 |     1904 | 2025-02-14 | M80               | L   | 0.667      | -            | -                | -                | -         |   -11.88 | br0, HexT, Jeorge, nitr0, oSee    |
|           15 |     1928 | 2025-02-13 | LOBOARMY          | W   | 0.660      | 0.143        | 0.018 (0.002)    | -                | -         |     3.15 | br0, HexT, Jeorge, nitr0, oSee    |
|           14 |     1941 | 2025-02-12 | Nouns             | W   | 0.657      | -            | -                | -                | -         |     4.32 | br0, HexT, Jeorge, nitr0, oSee    |
|           13 |     1962 | 2025-02-11 | BLUEJAYS          | W   | 0.650      | -            | -                | -                | -         |    11.06 | br0, HexT, Jeorge, nitr0, oSee    |
|           12 |     1966 | 2025-02-11 | Marsborne         | W   | 0.649      | 0.143        | 0.019 (0.002)    | -                | -         |     7.48 | br0, HexT, Jeorge, nitr0, oSee    |
|           11 |     2558 | 2024-12-15 | Getting Info      | L   | 0.263      | -            | -                | -                | -         |    -5.46 | Brehze, HexT, Jeorge, nitr0, oSee |
|           10 |     2565 | 2024-12-15 | Party Astronauts  | W   | 0.261      | -            | -                | -                | -         |     0.57 | Brehze, HexT, Jeorge, nitr0, oSee |
|            9 |     2585 | 2024-12-14 | Aetheris          | W   | 0.256      | -            | -                | -                | -         |     1.03 | Brehze, HexT, Jeorge, nitr0, oSee |
|            8 |     2681 | 2024-12-08 | Sharks            | W   | 0.216      | 0.384        | 0.051 (0.004)    | -                | 1 (0.216) |     3.44 | Brehze, HexT, Jeorge, nitr0, oSee |
|            7 |     2684 | 2024-12-08 | Sharks            | W   | 0.215      | 0.384        | 0.051 (0.004)    | -                | 1 (0.215) |     3.45 | Brehze, HexT, Jeorge, nitr0, oSee |
|            6 |     2703 | 2024-12-07 | BLUEJAYS          | W   | 0.210      | -            | -                | -                | 1 (0.210) |     3.85 | Brehze, HexT, Jeorge, nitr0, oSee |
|            5 |     2711 | 2024-12-07 | Undone            | W   | 0.208      | -            | -                | -                | 1 (0.208) |     0.87 | Brehze, HexT, Jeorge, nitr0, oSee |
|            4 |     2740 | 2024-12-06 | Stand On Business | W   | 0.203      | -            | -                | -                | 1 (0.203) |     0.26 | Brehze, HexT, Jeorge, nitr0, oSee |
|            3 |     2979 | 2024-11-24 | Nouns             | L   | 0.123      | -            | -                | -                | -         |    -3.30 | Brehze, HexT, Jeorge, nitr0, oSee |
|            2 |     2983 | 2024-11-24 | Getting Info      | W   | 0.121      | -            | -                | -                | -         |     1.32 | Brehze, HexT, Jeorge, nitr0, oSee |
|            1 |     3004 | 2024-11-23 | LFO 4             | W   | 0.115      | -            | -                | -                | -         |     0.37 | Brehze, HexT, Jeorge, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,210.20)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $4,000.00      | $4,000.00       |
| 2025-04-27 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-03-05 |      0.795 | $4,500.00      | $3,577.04       |
| 2024-12-15 |      0.263 | $1,000.00      | $263.26         |
| 2024-12-08 |      0.216 | $15,000.00     | $3,246.98       |
| 2024-11-24 |      0.123 | $1,000.00      | $122.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
